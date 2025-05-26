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
        description="Alimentação de verdade, saborosa e saudável para seu colaborador. "
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
              "Nossas marmitas são produzidas por uma nutricionista que elabora cardápios variados e personalizados.",
            image: { src: "/images/nutrilightmarmitas.png", alt: "Image 1" },
            buttonText: "Saiba mais",
          },
          {
            title: "Refeições Coletivas",
            description:
              "Nossa cardápios são elaborados e acompanhando pela  nutricionista, visando a qualidade, satisfação e bem estar dos nossos colaboradores.",
            image: { src: "/images/nutrilightrefeitorio.png", alt: "Image 2" },
            buttonText: "Saiba mais",
          },
          {
            title: "Eventos e Coffee Breaks",
            description:
              "Trabalhamos com encomendas de confraternização,  ceia natalina  e eventos familiares.",
            image: { src: "/images/nutrilightceia .png", alt: "Image 3" },
            buttonText: "Saiba mais",
          },
        ]}
      />

      {/* Content Section 2 */}
      <div className="relative">
        <DotPattern className="absolute inset-0 -z-10" />
        <Section2
          imageSrc="/images/marmitas.jpg"
          title="Quem somos"
          description="Uma família que prepara  com suas mãos de fada uma alimentação com mt amor e dedicação. E que visa sua satisfação sempre como nossa prioridade."
          showPrimaryButton={false}
          showSecondaryButton={true}
          secondaryButtonText="Conheça nossa história"
          linkSecondaryButton="/quem-somos"
        />
      </div>

      <Section1
        backgroundColor=""
        title="Nosso diferencial"
        description="É manter as características sensoriais do alimento como sabor, aroma, cor, textura e aparência da refeição. 
"
        paragraph="Contamos com uma nutricionista responsável pela elaboração dos cardápios e pelo acompanhamento da produção. Além disso, Oferecemos treinamento através do manual de boas prática."
        // features={[
        //   { icon: "/images/placeholder300.png", text: "Marmitas Fit" },
        //   { icon: "/images/placeholder300.png", text: "Refeições para obras" },
        //   {
        //     icon: "/images/placeholder300.png",
        //     text: "Eventos e Coffee Breaks",
        //   },
        // ]}
        mainImageSrc="/images/preparo.png"
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
          {
            type: "email",
            url: "mailto:nutrilight.alimentossaudáveis@gmail.com",
          },
          {
            type: "whatsapp",
            url: "https://api.whatsapp.com/send/?phone=5521987017520&text&type=phone_number&app_absent=0",
            buttonText: "Fale no WhatsApp",
          },
        ]}
      />
    </>
  );
}
