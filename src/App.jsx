import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageIntro from "./components/PageIntro";
import PageTransition from "./components/PageTransition";
import useSmoothScroll from "./hook/usesmoothscroll";
import TargetCursor from "./components/TargetCursor";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import Demo from "./pages/Demo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Auth pages are fully standalone — no navbar, footer, or custom cursor
const AUTH_PATHS = ["/login", "/signup"];

/** Multi-page TechSolunizers site with route-level transitions */
export default function App() {
  useSmoothScroll();
  const location  = useLocation();
  const isAuthPage = AUTH_PATHS.includes(location.pathname);

  return (
    <div className={`min-h-screen bg-cream${isAuthPage ? "" : " cursor-none-desktop"}`}>
      {!isAuthPage && <PageIntro />}
      {!isAuthPage && <TargetCursor />}
      {!isAuthPage && <Navbar />}

      {isAuthPage ? (
        <Routes location={location}>
          <Route path="/login"  element={<Login />}  />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      ) : (
        <PageTransition locationKey={location.pathname}>
          <main>
            <Routes location={location}>
              <Route path="/"          element={<Home />}      />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/services"  element={<Services />}  />
              <Route path="/about"     element={<About />}     />
              <Route path="/contact"   element={<Contact />}   />
              <Route path="/demo"      element={<Demo />}      />
            </Routes>
          </main>
          <Footer />
        </PageTransition>
      )}
    </div>
  );
}