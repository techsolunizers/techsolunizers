import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";
import AsciiThreeBackground from "../components/AsciiThreeBackground";

/** Login page — save.design style, Three.js ASCII background, square card, no custom cursor */
export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email,        setEmail]        = useState("");
  const [password,     setPassword]     = useState("");
  const [loading,      setLoading]      = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1800);
  };

  const handleGoogleLogin = () => {
    setGoogleLoading(true);
    setTimeout(() => {
      window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=mock-client-id.apps.googleusercontent.com&redirect_uri=" + encodeURIComponent(window.location.origin) + "&response_type=token&scope=email+profile";
    }, 800);
  };

  return (
    <div className="login-bg" style={{ cursor: "default" }}>

      {/* Three.js ASCII background */}
      <AsciiThreeBackground />

      {/* Centered SQUARE card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="login-card"
      >
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img src={logoImg} alt="TechSolunizers Logo" className="w-11 h-11 object-contain hover:opacity-80 transition-opacity" />
          </Link>
        </div>
        <h1 className="login-title">Log in to TechSolunizers</h1>
        <p className="login-subtitle">
          Don't have an account?{" "}
          <Link to="/signup" className="login-link">Sign up</Link>
        </p>

        {/* Google login */}
        <button
          id="login-google-btn"
          type="button"
          className="login-google-btn"
          onClick={handleGoogleLogin}
          disabled={loading || googleLoading}
        >
          {googleLoading ? (
            <span className="login-spinner" style={{ borderTopColor: "#fff", width: "16px", height: "16px" }} />
          ) : (
            <GoogleIcon />
          )}
          <span>{googleLoading ? "Connecting..." : "Log in with Google"}</span>
        </button>

        {/* Divider */}
        <div className="login-divider"><span>OR</span></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label htmlFor="login-email" className="login-label">EMAIL</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="login-input"
              autoComplete="email"
            />
          </div>

          <div className="login-field">
            <div className="login-label-row">
              <label htmlFor="login-password" className="login-label">PASSWORD</label>
              <button type="button" className="login-forgot">Forgot?</button>
            </div>
            <div className="login-input-wrap">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="login-input login-input-password"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="login-eye-btn"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          <motion.button
            id="login-submit"
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.97 }}
            className="login-submit-btn"
          >
            {loading
              ? <span className="login-spinner" aria-label="Logging in…" />
              : "Log in"
            }
          </motion.button>
        </form>

        <div className="login-footer">
          <a href="#" className="login-footer-link">Terms of Service</a>
          <a href="#" className="login-footer-link">Privacy Policy</a>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── SVG icons ─── */
function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path d="M43.6 20.5H42V20H24v8h11.3C33.7 32.6 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.5 6.8 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z" fill="#FFC107"/>
      <path d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.5 6.8 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" fill="#FF3D00"/>
      <path d="M24 44c5.2 0 9.9-1.9 13.5-5.1l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.2 0-9.7-3.4-11.3-8H6.2C9.6 36.6 16.3 44 24 44z" fill="#4CAF50"/>
      <path d="M43.6 20.5H42V20H24v8h11.3c-0.7 2.1-2.1 3.9-3.8 5.2l6.2 5.2C37.4 38.8 44 34 44 24c0-1.2-.1-2.4-.4-3.5z" fill="#1976D2"/>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  );
}
