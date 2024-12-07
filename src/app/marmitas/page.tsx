import React from "react";
import Banner from "../components/Banner";
import TextGalery from "../components/TextGalery";
import Gallery3 from "../components/Galery3";
import CTABanner from "../components/CTABanner";
import Feature from "../components/Feature";

function page() {
  return (
    <>
      <Banner
        title="Saúde e sabor na medida certa para o seu dia a dia!"
        description="Marmitas fit e saudáveis, preparadas com carinho por uma nutricionista para quem busca equilíbrio e resultados."
        showPrimaryButton={false}
        showSecondaryButton={false}
        backgroundImage="/images/hero2.png"
      />
      <TextGalery
        title="Marmitas Fit"
        description="Texto complementar"
        images={[
          { src: "/images/marmita1.jpg", alt: "Image 1" },
          { src: "/images/marmita2.jpg", alt: "Image 2" },
          { src: "/images/marmita3.jpg", alt: "Image 3" },
          { src: "/images/marmita4.jpg", alt: "Image 4" },
        ]}
        paragraphs={[
          "Manter uma alimentação saudável pode ser desafiador. Entre a correria do dia a dia, as tentações de opções rápidas e pouco nutritivas e a falta de tempo para cozinhar, é fácil perder o foco. E, com isso, comprometemos tanto a saúde quanto os resultados na academia ou no trabalho.",
          "Com nossas marmitas, você tem a praticidade que precisa, sem abrir mão de uma alimentação balanceada e deliciosa. Nossos cardápios são desenvolvidos por uma nutricionista experiente, incluindo opções fitness, low carb e personalizáveis para atender às suas preferências e objetivos.",
          "Imagine ter refeições saudáveis e saborosas sempre à mão, sem esforço. Nossa solução ajuda você a economizar tempo, manter o foco nos seus objetivos e cuidar da sua saúde – tudo isso com praticidade e um custo que cabe no seu bolso!",
        ]}
      />
      <Gallery3
        title="Qualidade ao produzir e entregar"
        images={[
          { src: "/images/marmita1.jpg", alt: "Image 1" },
          { src: "/images/marmita2.jpg", alt: "Image 2" },
          { src: "/images/marmita3.jpg", alt: "Image 3" },
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
        imageSrc="/images/placeholder300.png"
        imageAlt="Marmitas fit e saudáveis organizadas em uma mesa."
      />
      <CTABanner
        title="Pronto para transformar sua alimentação?"
        description="Escolha saúde e praticidade no seu dia a dia. Clique no botão abaixo e fale direto conosco no WhatsApp para conhecer nossas opções de marmitas e fazer seu pedido!"
        buttonLabel="Fale no WhatsApp"
        buttonLink="https://wa.me/5551999999999"
      />
    </>
  );
}

export default page;
