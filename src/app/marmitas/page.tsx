import React from "react";
import Banner from "../components/Banner";
import TextGalery from "../components/TextGalery";
import CTABanner from "../components/CTABanner";
import Feature from "../components/Feature";
import Services from "../components/Services";

function page() {
  return (
    <>
      <Banner
        title="Saúde e sabor na medida certa para o seu dia"
        description="Marmitas saudáveis, preparadas com carinho por uma nutricionista para quem busca saúde e resultados."
        showPrimaryButton={false}
        showSecondaryButton={false}
        backgroundImage="/images/bannermarmita.png"
        bannerTextColor="text-white"
      />
      <TextGalery
        title="Marmitas"
        description=""
        services={[
          { src: "/images/marmita21.jpg", alt: "Image 1" },
          { src: "/images/rc3.png", alt: "Image 2" },
          { src: "/images/rc4.png", alt: "Image 3" },
          { src: "/images/rc2.png", alt: "Image 4" },
        ]}
        paragraphs={[
          "Manter uma alimentação saudável pode ser desafiador. Entre a correria do dia a dia, as tentações de opções rápidas e pouco nutritivas e a falta de tempo para cozinhar, é fácil perder o foco. E, com isso, comprometemos tanto a saúde quanto os resultados na academia ou no trabalho.",
          "Com nossas marmitas, você tem a praticidade que precisa, sem abrir mão de uma alimentação balanceada e deliciosa. Nossos cardápios são desenvolvidos por uma nutricionista experiente, incluindo opções fitness, low carb e personalizáveis para atender às suas preferências e objetivos.",
          "Imagine ter refeições saudáveis e saborosas sempre à mão, sem esforço. Nossa solução ajuda você a economizar tempo, manter o foco nos seus objetivos e cuidar da sua saúde – tudo isso com praticidade e um custo que cabe no seu bolso!",
        ]}
      />
      {/* <Gallery3
        title="Qualidade ao produzir e entregar"
        images={[
          { src: "/images/marmita1.jpg", alt: "Image 1" },
          { src: "/images/marmita2.jpg", alt: "Image 2" },
          { src: "/images/marmita3.jpg", alt: "Image 3" },
        ]}
      /> */}

      <Services
        sectionTitle="Qualidade ao produzir e entregar"
        sectionDescription="Nossos marmitas oferecem cardápios balanceados e variados, tanto para cliente individuais quanto para refeições coletivas"
        services={[
          {
            title: "Marmitas Fit",
            description:
              "Marmitas com cardápios balanceados e variados, tanto para quem quer crescer ou emagrecer.",
            image: { src: "/images/marmita22b.png", alt: "Image 1" },
            buttonText: "Saiba mais",
          },
          {
            title: "Restrições alimentares",
            description:
              "Pessoas com restrição podem se alimentar bem, sem abrir mão do sabor e da qualidade.",
            image: { src: "/images/restrito.png", alt: "Image 2" },
            buttonText: "Saiba mais",
          },
          {
            title: "Falta de tempo para cozinhar",
            description:
              "Com nossas marmitas, você otimiza seu tempo e ganha praticidade sem abrir mão do sabor.",
            image: { src: "/images/tempo.png", alt: "Image 3" },
            buttonText: "Saiba mais",
          },
        ]}
      />

      <Feature
        title="Por que escolher nossas marmitas?"
        description="Garantimos refeições saudáveis, práticas e deliciosas para o seu dia a dia, desenvolvidas por uma nutricionista experiente."
        features={[
          "Cardápios balanceados para uma alimentação saudável",
          "Opções personalizáveis para atender às suas preferências",
          "Marmitas frescas e preparadas com ingredientes selecionados",
          "Entregas rápidas e embalagens práticas",
          "Ideal para quem busca saúde, sabor e praticidade",
        ]}
        imageSrc="/images/nutrilightmarmitas.png"
        imageAlt="Marmitas fit e saudáveis organizadas em uma mesa."
      />
      <CTABanner
        title="Pronto para transformar sua alimentação?"
        description="Escolha saúde e praticidade no seu dia a dia. Clique no botão e fale diretamente com a nossa nutricionista para conhecer nossas opções de marmitas fit."
        buttonLabel="Fale no WhatsApp"
        buttonLink="https://api.whatsapp.com/send/?phone=5521987017520&text&type=phone_number&app_absent=0"
      />
    </>
  );
}

export default page;
