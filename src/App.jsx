import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import PageIntro from "./components/PageIntro";
import PageTransition from "./components/PageTransition";
import useSmoothScroll from "./hook/usesmoothscroll";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import Demo from "./pages/Demo";

/** Multi-page techsolunizers Solutions site with route-level transitions. */
export default function App() {
  useSmoothScroll();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-cream cursor-none-desktop">
      <PageIntro />
      <CustomCursor />
      <Navbar />
      <PageTransition locationKey={location.pathname}>
        <main>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
}