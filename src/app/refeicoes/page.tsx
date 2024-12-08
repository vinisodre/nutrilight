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
        title="Alimente sua equipe, eleve sua produtividade!"
        description="Refeições coletivas saudáveis e saborosas para empresas que valorizam o bem-estar e o desempenho de seus funcionários."
        showPrimaryButton={false}
        showSecondaryButton={false}
        backgroundImage="/images/hero2.png"
      />
      <TextGalery
        title="Refeições Coletivas"
        description=""
        images={[
          { src: "/images/marmita1.jpg", alt: "Image 1" },
          { src: "/images/marmita2.jpg", alt: "Image 2" },
          { src: "/images/marmita3.jpg", alt: "Image 3" },
          { src: "/images/marmita4.jpg", alt: "Image 4" },
        ]}
        paragraphs={[
          "Gerir uma empresa exige foco no que realmente importa: resultados. Mas como alcançar o máximo desempenho quando os funcionários não têm acesso a refeições adequadas? A rotina corrida, a falta de opções equilibradas e os custos elevados podem comprometer tanto a saúde da equipe quanto a produtividade do negócio.",
          "Aqui entra a diferença que faz nossa solução de refeições coletivas. Desenvolvemos cardápios balanceados por uma nutricionista experiente, adaptados às necessidades da sua equipe e entregues com qualidade impecável. Tudo isso sem complicações, com flexibilidade e custo-benefício que cabem no orçamento da sua empresa.",
          "Além de promover o bem-estar dos funcionários, nossas refeições ajudam a reduzir o absenteísmo e elevar a motivação no ambiente de trabalho. Um time bem alimentado é mais engajado, eficiente e feliz – o reflexo direto no sucesso da sua empresa é garantido!",
          "Nossas marmitas fitness oferecem cardápios balanceados e variados, mas também trabalhamos com opções personalizadas conforme a preferência do cliente. Para as refeições coletivas em canteiros de obra, oferecemos cardápios pré-montados, mas estamos sempre prontos para atender às necessidades e escolhas específicas dos clientes.",
          "As refeições incluem pães variados, sucos, bolos, frutas, café, leites, achocolatado, frios, salgados, opções de forno, pão de queijo, requeijão, geleia, iogurte e granola. Também podemos ajustar o cardápio conforme a demanda. Para confraternizações, disponibilizamos cardápios pré-montados, mas aceitamos encomendas personalizadas de acordo com o pedido e a data comemorativa.",
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
        title="Por que escolher nossos serviços?"
        description="Oferecemos refeições coletivas de qualidade com soluções personalizadas para atender às suas necessidades."
        features={[
          "Cardápios balanceados e adaptáveis às demandas de cada cliente",
          "Atendimento ágil e dedicado para garantir a sua satisfação",
          "Rigoroso controle de qualidade e higiene em todas as etapas",
          "Entrega pontual e organizada, mesmo em grandes volumes",
          "Variedade de opções para eventos, obras e empresas de diferentes perfis",
        ]}
        imageSrc="/images/placeholder300.png"
        imageAlt="Ilustração do nosso negócio"
      />
      <CTABanner
        title="Sua equipe merece o melhor: vamos conversar?"
        description="Entre em contato agora mesmo para conhecer nossas opções de refeições coletivas personalizadas. Clique no botão abaixo e fale direto com a gente no WhatsApp!"
        buttonLabel="Fale no WhatsApp"
        buttonLink="https://wa.me/5551999999999"
      />
    </>
  );
}

export default page;
