import Contact from "./components/Contact";
import Galery from "./components/Galery";
import Section2 from "./components/Section2";
import Section1 from "./components/Section1";
import Hero from "./components/Hero";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="A refeição perfeita para o seu negócio"
        description="Nós alimentamos a seus funcionários com carinho e sabor"
        showPrimaryButton={false}
        showSecondaryButton={false}
      />

      {/* Content Section 1 */}
      <Section1
        title="Nosso diferencial"
        description="Nós alimentamos a seus funcionários com carinho e sabor"
        features={[
          { icon: "/images/placeholder300.png", text: "Feature 1" },
          { icon: "/images/placeholder300.png", text: "Feature 2" },
          { icon: "/images/placeholder300.png", text: "Feature 3" },
        ]}
        mainImageSrc="/images/placeholder300.png"
        mainImageAlt="Main Feature Illustration"
        showPrimaryButton={false}
        showSecondaryButton={false}
      />

      {/* Content Section 2 */}
      <Section2
        imageSrc="/images/placeholder300.png"
        title="Quem somos"
        description="O segredo do nosso sabor e qualidade estão nas mãos de quem faz a refeição.
        Há una nutricionista preparando cada refeição do seu negócio."
        showPrimaryButton={false}
        showSecondaryButton={true}
        secondaryButtonText="Conheça quem somos"
      />

      {/* Image Gallery */}
      <Galery
        title="Um pouco do nosso trabalho"
        images={[
          { src: "/images/placeholder300.png", alt: "Image 1" },
          { src: "/images/placeholder300.png", alt: "Image 2" },
          { src: "/images/placeholder300.png", alt: "Image 3" },
          { src: "/images/placeholder300.png", alt: "Image 4" },
          { src: "/images/placeholder300.png", alt: "Image 5" },
          { src: "/images/placeholder300.png", alt: "Image 6" },
          { src: "/images/placeholder300.png", alt: "Image 7" },
          { src: "/images/placeholder300.png", alt: "Image 8" },
          { src: "/images/placeholder300.png", alt: "Image 9" },
        ]}
      />

      {/* Contato */}
      <Contact
        title="Fale com a gente"
        description="Tire suas dúvidas ou solicite um orçamento hoje mesmo através do Whatsapp. Estamos prontos para ajudar! Siga a gente também nas redes sociais."
        links={[
          { type: "instagram", url: "https://instagram.com/seuperfil" },
          { type: "email", url: "mailto:contato@exemplo.com" },
          {
            type: "whatsapp",
            url: "https://wa.me/5599999999999",
            buttonText: "Fale no WhatsApp",
          },
        ]}
      />
    </>
  );
}
