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
        backgroundImage="/images/hero2.png"
        title="A refeição perfeita para o seu negócio"
        description="Nós alimentamos a seus funcionários com carinho e sabor"
        showPrimaryButton={false}
        showSecondaryButton={false}
      />

      {/* Content Section 1 */}
      <Section1
        backgroundColor=""
        title="Nosso diferencial"
        description="Nós alimentamos a seus funcionários com carinho e sabor"
        paragraph="Nosso grande diferencial é contar com uma nutricionista responsável pela elaboração dos cardápios e pelo acompanhamento da produção. Além disso, oferecemos treinamento para os funcionários e explicamos o manual de boas práticas, conforme a legislação vigente (RDC 216)."
        features={[
          { icon: "/images/placeholder300.png", text: "Marmitas Fit" },
          { icon: "/images/placeholder300.png", text: "Refeições para obras" },
          {
            icon: "/images/placeholder300.png",
            text: "Eventos e Coffee Breaks",
          },
        ]}
        mainImageSrc="/images/marmitas.jpg"
        mainImageAlt="Main Feature Illustration"
        showPrimaryButton={false}
        showSecondaryButton={false}
      />

      {/* Content Section 2 */}
      <Section2
        imageSrc="/images/teste.jpg"
        title="Quem somos"
        description="O segredo do nosso sabor e qualidade estão nas mãos de quem faz a refeição.
        Há una nutricionista preparando cada refeição do seu negócio."
        showPrimaryButton={false}
        showSecondaryButton={true}
        secondaryButtonText="Conheça quem somos"
        linkSecondaryButton="/quem-somos"
      />

      {/* Image Gallery */}
      <Galery
        title="Um pouco do nosso trabalho"
        description="Nossas marmitas oferecem cardápios balanceados e variados, tanto para cliente individuais quanto para refeições coletivas"
        images={[
          { src: "/images/marmita1.jpg", alt: "Image 1" },
          { src: "/images/marmita2.jpg", alt: "Image 2" },
          { src: "/images/marmita3.jpg", alt: "Image 3" },
          { src: "/images/marmita4.jpg", alt: "Image 4" },
          { src: "/images/marmita5.jpg", alt: "Image 5" },
          { src: "/images/marmita6.jpg", alt: "Image 6" },
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
