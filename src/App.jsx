import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import Signature from "./components/Signature";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Reserve from "./components/Reserve";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="bg-[#F0E4D3] text-[#2A1810]">
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <MenuSection />
      <Signature />
      <Gallery />
      <Testimonials />
      <Location />
      <Reserve />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
