/**
 * AsciiThreeBackground — exact replica of save.design/login background
 *
 * Extracted parameters (from save.design JS bundles 8828 & 9343):
 *   characters : " .:-+*=%@#"
 *   invert     : true
 *   resolution : 0.12
 *   fgColor    : #71717b  (Tailwind zinc-500)
 *   bgColor    : #09090b  (Tailwind zinc-950)
 *   font       : "courier new", monospace
 *   fontSize   : 2 / resolution = 16.667px
 *   lineHeight : 2 / resolution = 16.667px
 *   letterSpacing: -1px
 *   camera     : position [0,0,5], fov 50
 *   folder     : scale 1.3, rotation [0.2, 0, 0]
 *   animate    : rotation.y += 0.5*delta, y = 0.1*sin(0.5*clock.elapsedTime)
 *   lights     : ambient 0.5, dir[5,5,5] 1.0, dir[-5,-5,-5] 0.3
 *   geometry   : back [2.4,1.6,0.1], tab [0.8,0.4,0.1] at [-0.6,0.9],
 *                front [2.4,1.4,0.08] rot[-0.3,0,0] at [0,-0.1,0.3]
 *                sheet1 [2.2,1.2,0.02], sheet2 [2.1,1.1,0.02]
 */

import {
  useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────────────────────
   AsciiRenderer  (exact port of save.design's AsciiEffectRenderer class)
   Renders an offscreen WebGL scene onto a small buffer canvas, reads pixels,
   maps each pixel's luminance to an ASCII character, and writes everything
   into a single <td> inside a <table> appended to the container.
───────────────────────────────────────────────────────────────────────── */
class AsciiRenderer {
  constructor(renderer, charSet = " .:-+*=%@#", { resolution = 0.15, invert = false, color = false } = {}) {
    // Character ramp (save.design uses invert:true → light surfaces → lighter chars)
    const chars = Array.from(charSet);

    // Font metrics — exact values from save.design source
    const fontSize = 2 / resolution;   // 16.667px at resolution 0.12
    const lineHeight = 2 / resolution;
    const letterSpacing = -1;              // always -1 at scale 1

    // Hidden canvas for pixel sampling
    const bufCanvas = document.createElement("canvas");
    const bufCtx = bufCanvas.getContext("2d", { willReadFrequently: true });

    // Visible DOM node
    const container = document.createElement("div");
    container.style.cssText = [
      "position:absolute",
      "top:0",
      "left:0",
      "width:100%",
      "height:100%",
      "pointer-events:none",
      "overflow:hidden",
    ].join(";");

    const table = document.createElement("table");
    table.style.cssText = [
      "white-space:pre",
      "margin:0",
      "padding:0",
      `letter-spacing:${letterSpacing}px`,
      `font-family:"courier new",monospace`,
      `font-size:${fontSize}px`,
      `line-height:${lineHeight}px`,
      "text-align:left",
      "text-decoration:none",
      "border-collapse:collapse",
    ].join(";");

    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.style.cssText = "display:block;overflow:hidden";
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    container.appendChild(table);

    let cols = 0, rows = 0, W = 0, H = 0;

    this.domElement = container;

    this.setSize = (w, h) => {
      W = w; H = h;
      renderer.setSize(w, h);
      cols = Math.floor(w * resolution);
      rows = Math.floor(h * resolution);
      bufCanvas.width = cols;
      bufCanvas.height = rows;
      td.style.width = `${w}px`;
      td.style.height = `${h}px`;
    };

    this.render = (scene, camera) => {
      renderer.render(scene, camera);

      // Copy WebGL output → tiny buffer canvas
      bufCtx.clearRect(0, 0, cols, rows);
      bufCtx.drawImage(renderer.domElement, 0, 0, cols, rows);

      const { data } = bufCtx.getImageData(0, 0, cols, rows);
      let html = "";

      for (let y = 0; y < rows; y += 2) {          // 2-row stride (text chars are tall)
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];

          // If transparent or pure black background, render space
          if (a === 0 || (r === 0 && g === 0 && b === 0)) {
            html += "&nbsp;";
            continue;
          }

          // Standard luma
          let luma = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

          // invert: true  → light 3D surfaces → chars at high end of ramp
          if (!invert) luma = 1 - luma;

          const idx = Math.max(0, Math.min(chars.length - 1, Math.floor(luma * chars.length)));
          const ch = chars[idx];
          html += (!ch || ch === " ") ? "&nbsp;" : ch;
        }
        html += "<br/>";
      }

      td.innerHTML = html;
    };
  }
}

/* ─────────────────────────────────────────────────────────────────────────
   AsciiEffect — R3F component that mounts the AsciiRenderer
───────────────────────────────────────────────────────────────────────── */
function AsciiEffect({
  characters = " .:-+*=%@#",
  resolution = 0.12,
  invert = true,
  fgColor = "#717070ff",
  bgColor = "#000000",
}) {
  const { gl, scene, camera, size } = useThree();

  const effect = useMemo(
    () => new AsciiRenderer(gl, characters, { resolution, invert }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [characters, resolution, invert],
  );

  useLayoutEffect(() => {
    effect.domElement.style.color = fgColor;
    effect.domElement.style.backgroundColor = bgColor;
  }, [effect, fgColor, bgColor]);

  useEffect(() => {
    // Hide the real WebGL canvas — only the ASCII table is visible
    gl.domElement.style.opacity = "0";
    const parent = gl.domElement.parentNode;
    parent.appendChild(effect.domElement);
    return () => {
      gl.domElement.style.opacity = "1";
      if (effect.domElement.parentNode) {
        effect.domElement.parentNode.removeChild(effect.domElement);
      }
    };
  }, [effect, gl]);

  useEffect(() => {
    effect.setSize(size.width, size.height);
  }, [effect, size]);

  // Render after the default Three.js frame
  useFrame(() => effect.render(scene, camera), 1);

  return null;
}

/* ─────────────────────────────────────────────────────────────────────────
   Folder — 3D folder geometry (exact from save.design JS bundle 8828)
   Back panel + tab + angled front panel + 2 inner sheets
───────────────────────────────────────────────────────────────────────── */
function Folder() {
  const group = useRef(null);

  useFrame(({ clock }, delta) => {
    if (!group.current) return;
    group.current.rotation.y += 0.5 * delta;
    group.current.position.y = 0.1 * Math.sin(0.5 * clock.elapsedTime);
  });

  const white = <meshStandardMaterial color="#ffffff" />;
  const light = <meshStandardMaterial color="#cccccc" />;
  const lighter = <meshStandardMaterial color="#dddddd" />;

  return (
    // scale 1.3, initial tilt forward so tab is visible
    <group ref={group} scale={1.3} rotation={[0.2, 0, 0]}>
      {/* Back panel */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[2.4, 1.6, 0.1]} />
        {white}
      </mesh>

      {/* Tab — top-left corner */}
      <mesh position={[-0.6, 0.9, -0.05]}>
        <boxGeometry args={[0.8, 0.4, 0.1]} />
        {white}
      </mesh>

      {/* Front panel — angled toward camera */}
      <mesh position={[0, -0.1, 0.3]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[2.4, 1.4, 0.08]} />
        {white}
      </mesh>

      {/* Inner paper sheet 1 */}
      <mesh position={[0, 0.1, 0.1]}>
        <boxGeometry args={[2.2, 1.2, 0.02]} />
        {light}
      </mesh>

      {/* Inner paper sheet 2 (slightly offset) */}
      <mesh position={[0.05, 0.15, 0.12]}>
        <boxGeometry args={[2.1, 1.1, 0.02]} />
        {lighter}
      </mesh>
    </group>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   AsciiThreeBackground — exported wrapper (matches save.design AsciiFolder)
───────────────────────────────────────────────────────────────────────── */
export default function AsciiThreeBackground() {
  const [ready, setReady] = useState(false);

  const onCreated = useCallback(() => {
    requestAnimationFrame(() => setReady(true));
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        opacity: ready ? 1 : 0,
        transition: "opacity 0.6s ease",
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={onCreated}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Lighting — exact from save.design */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.0} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />

        {/* 3D Folder */}
        <Folder />

        {/* ASCII effect overlay — exact parameters from save.design */}
        <AsciiEffect
          characters=" .:-+*=%@#"
          resolution={0.12}
          invert={true}
          fgColor="#71717b"
          bgColor="#000000"
        />
      </Canvas>
    </div>
  );
}
