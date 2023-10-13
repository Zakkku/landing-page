import "./styles.css";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServicesSection";

export default function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServiceSection />
      <FooterSection />
    </div>
    
  );
}
