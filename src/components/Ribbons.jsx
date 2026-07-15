import React, { useEffect, useRef } from "react";
import { Renderer, Transform, Vec3, Color, Polyline } from "ogl";

export default function Ribbons({
  colors = ["#7C6CF6", "#3DD9B3", "#FF7A59"], // violet, mint, coral
  baseSpring = 0.04,
  baseFriction = 0.88,
  baseThickness = 12,
  offsetFactor = 0.04,
  maxAge = 400,
  pointCount = 40,
  speedMultiplier = 0.75,
  enableFade = true,
  enableShaderEffect = true,
  effectAmplitude = 1.5,
  backgroundColor = [0, 0, 0, 0]
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use Renderer with dpr capped at 1.25 for extremely high performance
    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio || 1, 1.25),
      alpha: true,
      antialias: true
    });
    const gl = renderer.gl;
    gl.clearColor(backgroundColor[0], backgroundColor[1], backgroundColor[2], backgroundColor[3]);

    gl.canvas.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;";
    container.appendChild(gl.canvas);

    const scene = new Transform();
    const lines = [];

    const vertex = `
      precision highp float;
      
      attribute vec3 position;
      attribute vec3 next;
      attribute vec3 prev;
      attribute vec2 uv;
      attribute float side;
      
      uniform vec2 uResolution;
      uniform float uDPR;
      uniform float uThickness;
      uniform float uTime;
      uniform float uEnableShaderEffect;
      uniform float uEffectAmplitude;
      
      varying vec2 vUV;
      
      vec4 getPosition() {
          vec4 current = vec4(position, 1.0);
          vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
          vec2 nextScreen = next.xy * aspect;
          vec2 prevScreen = prev.xy * aspect;
          vec2 tangent = normalize(nextScreen - prevScreen);
          vec2 normal = vec2(-tangent.y, tangent.x);
          normal /= aspect;
          normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
          float dist = length(nextScreen - prevScreen);
          normal *= smoothstep(0.0, 0.02, dist);
          float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
          float pixelWidth = current.w * pixelWidthRatio;
          normal *= pixelWidth * uThickness;
          current.xy -= normal * side;
          if(uEnableShaderEffect > 0.5) {
            current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
          }
          return current;
      }
      
      void main() {
          vUV = uv;
          gl_Position = getPosition();
      }
    `;

    const fragment = `
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uEnableFade;
      varying vec2 vUV;
      void main() {
          float fadeFactor = 1.0;
          if(uEnableFade > 0.5) {
              fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
          }
          gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
      }
    `;

    function resize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      lines.forEach(line => line.polyline.resize());
    }
    window.addEventListener("resize", resize);

    const center = (colors.length - 1) / 2;
    colors.forEach((color, index) => {
      const spring = baseSpring + (Math.random() - 0.5) * 0.01;
      const friction = baseFriction + (Math.random() - 0.5) * 0.02;
      const thickness = baseThickness + (Math.random() - 0.5) * 2;
      const mouseOffset = new Vec3(
        (index - center) * offsetFactor + (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.05,
        0
      );

      const line = {
        spring,
        friction,
        mouseVelocity: new Vec3(),
        mouseOffset
      };

      const points = [];
      for (let i = 0; i < pointCount; i++) {
        points.push(new Vec3());
      }
      line.points = points;

      line.polyline = new Polyline(gl, {
        points,
        vertex,
        fragment,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: thickness },
          uOpacity: { value: 0.85 }, // soft alpha
          uTime: { value: 0.0 },
          uEnableShaderEffect: { value: enableShaderEffect ? 1.0 : 0.0 },
          uEffectAmplitude: { value: effectAmplitude },
          uEnableFade: { value: enableFade ? 1.0 : 0.0 }
        }
      });
      line.polyline.mesh.setParent(scene);
      lines.push(line);
    });

    resize();

    const mouse = new Vec3();
    let hasMoved = false;

    function updateMouse(e) {
      hasMoved = true;
      let x, y;
      const rect = container.getBoundingClientRect();
      if (e.changedTouches && e.changedTouches.length) {
        x = e.changedTouches[0].clientX - rect.left;
        y = e.changedTouches[0].clientY - rect.top;
      } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }
      const width = container.clientWidth;
      const height = container.clientHeight;
      mouse.set((x / width) * 2 - 1, (y / height) * -2 + 1, 0);
    }

    // Capture global mouse movements across the screen
    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("touchstart", updateMouse);
    window.addEventListener("touchmove", updateMouse);

    const tmp = new Vec3();
    let frameId;
    let lastTime = performance.now();

    function update() {
      frameId = requestAnimationFrame(update);
      const currentTime = performance.now();
      const dt = currentTime - lastTime;
      lastTime = currentTime;

      // Hide or fade out when the mouse hasn't moved yet (starts at origin)
      if (!hasMoved) {
        lines.forEach(line => {
          line.polyline.mesh.program.uniforms.uOpacity.value = 0.0;
        });
        return;
      }

      lines.forEach(line => {
        line.polyline.mesh.program.uniforms.uOpacity.value = 0.85;

        tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
        line.mouseVelocity.add(tmp).multiply(line.friction);
        line.points[0].add(line.mouseVelocity);

        for (let i = line.points.length - 1; i >= 1; i--) {
          if (isFinite(maxAge) && maxAge > 0) {
            const segmentDelay = maxAge / (line.points.length - 1);
            const alpha = Math.min(0.85, (dt * speedMultiplier) / segmentDelay);
            line.points[i].lerp(line.points[i - 1], alpha);
          } else {
            line.points[i].lerp(line.points[i - 1], 0.85);
          }
        }
        if (line.polyline.mesh.program.uniforms.uTime) {
          line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001;
        }
        line.polyline.updateGeometry();
      });

      renderer.render({ scene });
    }
    update();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("touchstart", updateMouse);
      window.removeEventListener("touchmove", updateMouse);
      cancelAnimationFrame(frameId);
      if (gl.canvas && gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    colors,
    baseSpring,
    baseFriction,
    baseThickness,
    offsetFactor,
    maxAge,
    pointCount,
    speedMultiplier,
    enableFade,
    enableShaderEffect,
    effectAmplitude,
    backgroundColor
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999, // Render on top of page contents, above standard z-indices
      }}
    />
  );
}
