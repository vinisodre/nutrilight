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
        title="Quem Somos"
        description="A refeição perfeita para o seu negócio"
        showPrimaryButton={false}
        showSecondaryButton={false}
        backgroundImage="/images/hero2.png"
      />
      <ImageText
        title="NutriLight"
        description="Alimentos saudáveis"
        mainImageSrc="/images/teste.jpg"
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas nec mauris sit amet fermentum. Etiam dictum sollicitudin enim, ac egestas lectus ultrices maximus. Aliquam et sem orci. Phasellus luctus blandit volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ut est bibendum, aliquam nunc et, suscipit nibh. Etiam sed commodo est. Cras ligula nunc, interdum quis arcu et, porta convallis est. Donec tortor justo, imperdiet in auctor vel, tempus eu nisl. Proin quis consectetur ipsum. Vestibulum nec leo libero. Nulla ornare efficitur ipsum a placerat. Aenean gravida lacinia diam vitae dictum. Cras neque ligula, accumsan a nibh sed, aliquam dapibus felis. Donec nec sapien vitae erat convallis porta quis a erat.",
          "Integer aliquet eu dolor quis pretium. Maecenas sem mauris, pretium vitae interdum ac, faucibus ut neque. Donec congue nisi quis quam consectetur viverra ac scelerisque metus. Curabitur pellentesque viverra malesuada. Pellentesque efficitur ac massa a feugiat. Nullam vehicula, neque eget ornare fermentum, leo est sagittis metus, vitae sodales sapien risus in arcu. Maecenas in purus ut nulla pretium porttitor id vel mi. Pellentesque nisi elit, dictum vitae sollicitudin vel, lacinia vitae ex. Fusce ornare nisl vitae mauris rutrum venenatis non eu mauris. Curabitur aliquam at quam vel laoreet.",
        ]}
      />

      <Services
        sectionTitle="Nosso trabalho"
        services={[
          {
            title: "Marmitas Fit",
            description:
              "Nossas marmitas oferecem cardápios balanceados e variados, tanto para cliente individuais quanto para refeições coletivas",
            image: { src: "/images/nutrilightmarmitas.png", alt: "Image 1" },
            buttonText: "Saiba mais",
          },
          {
            title: "Refeições Coletivas",
            description:
              "Nossas refeições coletivas oferecem cardápios balanceados e variados, tanto para clientes individuais quanto para refeições coletivas",
            image: {
              src: "/images/nutrilightrefeicoescoletivas.png",
              alt: "Image 2",
            },
            buttonText: "Saiba mais",
          },
          {
            title: "Marmitas",
            description:
              "Nossas marmitas oferecem cardápios balanceados e variados, tanto para cliente individuais quanto para refeições coletivas",
            image: { src: "/images/nutrilightmarmitas.png", alt: "Image 1" },
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
