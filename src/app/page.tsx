import Contact from "./components/Contact";

import Section2 from "./components/Section2";
import Section1 from "./components/Section1";
import HeroImage from "./components/HeroImage";
import Services from "./components/Services";
import TwoColumnsText from "./components/TwoColumnsText";
import DotPattern from "@/components/ui/dot-pattern";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroImage
        title="A refeição perfeita para o seu negócio"
        description="Nós alimentamos a seus funcionários com carinho e sabor"
        showPrimaryButton={false}
        showSecondaryButton={false}
      />

      <TwoColumnsText
        title="Os desafios de uma alimentação equilibrada no dia a dia"
        description="No ritmo acelerado em que vivemos, manter uma alimentação saudável e balanceada pode parecer uma missão impossível. Entre os problemas mais comuns estão:"
      />

      <Services
        sectionTitle="Nossos Serviços"
        sectionDescription="Nossos marmitas oferecem cardápios balanceados e variados, tanto para cliente individuais quanto para refeições coletivas"
        services={[
          {
            title: "Marmitas",
            description:
              "Nossas marmitas oferecem cardápios balanceados e variados, tanto para cliente individuais quanto para refeições coletivas",
            image: { src: "/images/nutrilightmarmitas.png", alt: "Image 1" },
            buttonText: "Saiba mais",
          },
          {
            title: "Refeições Coletivas",
            description:
              "Nossas marmitas oferecem cardápios balanceados e variados, tanto para cliente individuais quanto para refeições coletivas",
            image: { src: "/images/nutrilightrefeitorio.png", alt: "Image 2" },
            buttonText: "Saiba mais",
          },
          {
            title: "Eventos e Coffee Breaks",
            description:
              "Nossas marmitas oferecem cardápios balanceados e variados, tanto para cliente individuais quanto para refeições coletivas",
            image: { src: "/images/nutrilightceia .png", alt: "Image 3" },
            buttonText: "Saiba mais",
          },
        ]}
      />

      {/* Content Section 2 */}
      <div className="relative">
        <DotPattern className="absolute inset-0 -z-10" />
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
      </div>

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

      {/* Contato */}
      <Contact
        title="Fale com a gente"
        description="Tire suas dúvidas ou solicite um orçamento hoje mesmo através do Whatsapp. Estamos prontos para ajudar! Siga a gente também nas redes sociais."
        links={[
          { type: "instagram", url: "https://instagram.com/nutri_light0406" },
          { type: "email", url: "mailto:contato@exemplo.com" },
          {
            type: "whatsapp",
            url: "https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F5521987017520&e=AT3jh2sTLc1oGBLMChfcb7QH6kPR9o73eImncEUe_XiwQLhwZ3i-yhzKJu68OTuJqNACXhPbGT-zESGC-b2y3MrWf2SM_v-Z",
            buttonText: "Fale no WhatsApp",
          },
        ]}
      />
    </>
  );
}
