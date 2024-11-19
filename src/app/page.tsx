import Contact from "./components/Contact";
import Galery from "./components/Galery";
import Section2 from "./components/Section2";
import Section1 from "./components/Section1";
import Hero from "./components/Hero";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Content Section 1 */}
      <Section1 />

      {/* Content Section 2 */}
      <Section2 />

      {/* Image Gallery */}
      <Galery />

      {/* Contato */}
      <Contact />
    </>
  );
}
