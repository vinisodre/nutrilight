import React from "react";
import Banner from "../components/Banner";
import ImageText from "../components/ImageText";
import DotPattern from "@/components/ui/dot-pattern";
import Services from "../components/Services";
import CTABanner from "../components/CTABanner";

function page() {
  return (
    <div className="relative">
      <DotPattern className="absolute inset-0 -z-10" />
      <Banner
        title="Conheça nossa historia e nossa missão"
        description="Nosso compromisso é oferecer alimentos saudáveis e saborosos para o todos."
        showPrimaryButton={false}
        showSecondaryButton={false}
        backgroundImage="/images/bannerquemsomos.png"
        bannerTextColor="text-white"
      />
      <ImageText
        title="NutriLight"
        description="Alimentos saudáveis"
        mainImageSrc="/images/teste.jpg"
        paragraphs={[
          "A Nutri Light 🍎 é uma empresa especializada em marmitas fitness e alimentação coletiva, comprometida em oferecer refeições saudáveis, saborosas e de alta qualidade. Nossa cozinha industrial foi fundada por uma nutricionista apaixonada por nutrição de produção, formada desde 2015, com experiência em nutrição clínica, mas que encontrou sua verdadeira vocação na criação de cardápios equilibrados e nutritivos.",

          "Aqui, cada refeição é cuidadosamente preparada por nossa equipe, sob a supervisão direta da nossa fundadora, garantindo sabor caseiro e um toque especial de carinho. Trabalhamos apenas com ingredientes selecionados para proporcionar o equilíbrio perfeito entre saúde e prazer à mesa.",

          "Além das nossas deliciosas refeições, também oferecemos planos alimentares personalizados, ajudando você a alcançar seus objetivos com uma alimentação planejada e nutritiva.",

          "💚 Nutri Light – Cuidando da sua alimentação com qualidade, carinho e dedicação!",
        ]}
      />

      <Services
        sectionTitle="Nosso trabalho"
        services={[
          {
            title: "Ambiente preparado",
            description:
              "A nossa cozinha está preparada e atende todos os requisitos de higiene e qualidade.",
            image: { src: "/images/cozinha.png", alt: "Image 1" },
            buttonText: "Saiba mais",
          },
          {
            title: "Feito com carinho",
            description:
              "Nossas refeições coletivas oferecem cardápios balanceados e variados, tanto para clientes individuais quanto para refeições coletivas",
            image: {
              src: "/images/preparo.png",
              alt: "Image 2",
            },
            buttonText: "Saiba mais",
          },
          {
            title: "Qualidade padronizada",
            description:
              "Nossas marmitas oferecem cardápios balanceados e variados, tanto para cliente individuais quanto para refeições coletivas",
            image: { src: "/images/rc1.png", alt: "Image 1" },
            buttonText: "Saiba mais",
          },
        ]}
      />
      <CTABanner
        title="Dúvidas? Fale conosco!"
        description="Nossa equipe está pronta para ajudar!"
        buttonLabel="Fale no WhatsApp"
        buttonLink="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F5521987017520&e=AT3jh2sTLc1oGBLMChfcb7QH6kPR9o73eImncEUe_XiwQLhwZ3i-yhzKJu68OTuJqNACXhPbGT-zESGC-b2y3MrWf2SM_v-Z"
      />
    </div>
  );
}

export default page;
