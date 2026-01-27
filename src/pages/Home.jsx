import Navbar from "../components/Navbar";
import SecondNavbar from "../components/SecondNavbar";
import HeroSlider from "../components/HeroSlider";
import CompanySection from "../components/CompanySection";
import Services from "../components/Services";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0f172a] text-[#f8fafc] min-h-screen overflow-x-hidden">
      <Navbar />
      <SecondNavbar />
          <HeroSlider />
      <div className="max-w-7xl mx-auto px-4">
        
        <CompanySection />
        <Services />
        <Projects />
        <About />
      </div>

      <Footer />
    </div>
  );
}