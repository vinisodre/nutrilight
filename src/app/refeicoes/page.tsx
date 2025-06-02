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
        title="Alimente sua equipe, eleve sua produtividade!"
        description="Refeições coletivas saudáveis e saborosas para empresas que valorizam o bem-estar e o desempenho de seus funcionários."
        showPrimaryButton={false}
        showSecondaryButton={false}
        backgroundImage="/images/bannerrefeicoes.png"
        bannerTextColor="text-white"
      />
      <TextGalery
        title="Refeições Coletivas"
        description=""
        services={[
          { src: "/images/mt1.png", alt: "Image 1" },
          { src: "/images/mt2.png", alt: "Image 2" },
          { src: "/images/mt3.png", alt: "Image 3" },
          { src: "/images/mt4.png", alt: "Image 4" },
        ]}
        paragraphs={[
          "Gerir uma empresa exige foco no que realmente importa: resultados. Mas como alcançar o máximo desempenho quando os funcionários não têm acesso a refeições adequadas? A rotina corrida, a falta de opções equilibradas e os custos elevados podem comprometer tanto a saúde da equipe quanto a produtividade do negócio.",
          "Para resolver isso, oferecemos nossa solução de refeições coletivas. Desenvolvemos cardápios balanceados por uma nutricionista experiente, adaptados às necessidades da sua equipe e entregues com qualidade. Tudo isso sem complicações, com flexibilidade e custo-benefício que cabem no orçamento da sua empresa.",
          "Para as refeições coletivas em canteiros de obra, oferecemos cardápios pré-montados, mas estamos sempre prontos para atender às necessidades e escolhas específicas dos clientes.",
          "As refeições incluem pães variados, sucos, bolos, frutas, café, leites, achocolatado, frios, salgados, opções de forno, pão de queijo, requeijão, geleia, iogurte e granola.",
        ]}
      />

      <Services
        sectionTitle="Qualidade ao produzir e entregar"
        sectionDescription="Oferecemos refeições coletivas de qualidade com soluções personalizadas para atender suas necessidades"
        services={[
          {
            title: "A quantidade certa",
            description: "Marmitas feitas de acordo com a sua necessidade.",
            image: { src: "/images/quantidade.jpg", alt: "Image 1" },
          },
          {
            title: "Cuidado ao preparar",
            description: "Refeições especiais feitas para dias especiais.",
            image: { src: "/images/marmita5.jpg", alt: "Image 1" },
          },
          {
            title: "Entrega pontual",
            description: "Organização e pontualidade na entrega das refeições",
            image: { src: "/images/costelabatata.jpg", alt: "Image 1" },
          },
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
        imageSrc="/images/coletiva.jpg"
        imageAlt="Ilustração do nosso negócio"
      />
      <CTABanner
        title="Sua equipe merece o melhor"
        description="Entre em contato agora mesmo para conhecer nossas opções de refeições coletivas personalizadas."
        buttonLabel="Fale no WhatsApp"
        buttonLink="https://api.whatsapp.com/send/?phone=5521987017520&text&type=phone_number&app_absent=0"
      />
    </>
  );
}

export default page;
