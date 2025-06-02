import React from "react";
import Banner from "../components/Banner";
import ImageText from "../components/ImageText";
import DotPattern from "@/components/ui/dot-pattern";
import Services from "../components/Services";
import CTABanner from "../components/CTABanner";
import Gallery from "../components/Galery";

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
        mainImageSrc="/images/nutrilightrefeitorio.png"
        paragraphs={[
          "A Nutri Light é uma empresa especializada em marmitas fitness e alimentação coletiva, comprometida em oferecer refeições saudáveis, saborosas e de alta qualidade. Nossa cozinha industrial foi fundada por uma nutricionista apaixonada por nutrição de produção, formada desde 2015, com experiência em nutrição clínica, mas que encontrou sua verdadeira vocação na criação de cardápios equilibrados e nutritivos.",

          "Aqui, cada refeição é cuidadosamente preparada por nossa equipe, sob a supervisão direta da nossa fundadora, garantindo sabor caseiro e um toque especial de carinho. Trabalhamos apenas com ingredientes selecionados para proporcionar o equilíbrio perfeito entre saúde e prazer à mesa.",

          "Além das nossas deliciosas refeições, também oferecemos planos alimentares personalizados, ajudando você a alcançar seus objetivos com uma alimentação planejada e nutritiva.",

          "Nutri Light – Cuidando da sua alimentação com qualidade, carinho e dedicação!",
        ]}
      />

      <Gallery
        className="bg-white  shadow-sm"
        title="Com quem já trabalhamos"
        images={[
          {
            src: "/images/serviço-agabo-construtora.png",
            alt: "logo construtora ágabo",
          },
          {
            src: "/images/serviço-rioforte.png",
            alt: "logo rio forte",
          },
        ]}
        imgClassName="shadow-none"
      />

      <Services
        sectionTitle="Nosso trabalho"
        services={[
          {
            title: "Ambiente preparado",
            description:
              "A nossa cozinha está preparada e atende todos os requisitos de higiene e qualidade.",
            image: { src: "/images/novoambiente.jpg", alt: "Image 1" },
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
        buttonLink="https://api.whatsapp.com/send/?phone=5521987017520&text&type=phone_number&app_absent=0"
      />
    </div>
  );
}

export default page;
