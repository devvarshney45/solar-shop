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
    <div className="bg-[#0f172a] text-[#f8fafc]">
      <Navbar />
      <SecondNavbar />
      <HeroSlider />
      <CompanySection />
      <Services />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}