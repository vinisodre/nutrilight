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
        title="Refeições Coletivas"
        description="Refeições balanceadas e saborodas para bem alimentar seus funcionários"
        showPrimaryButton={false}
        showSecondaryButton={false}
        backgroundImage="/images/hero2.png"
      />
      <TextGalery
        title="Refeições Coletivas"
        description="Texto complementar"
        images={[
          { src: "/images/marmita1.jpg", alt: "Image 1" },
          { src: "/images/marmita2.jpg", alt: "Image 2" },
          { src: "/images/marmita3.jpg", alt: "Image 3" },
          { src: "/images/marmita4.jpg", alt: "Image 4" },
        ]}
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas nec mauris sit amet fermentum. Etiam dictum sollicitudin enim, ac egestas lectus ultrices maximus. Aliquam et sem orci. Phasellus luctus blandit volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ut est bibendum, aliquam nunc et, suscipit nibh. Etiam sed commodo est. Cras ligula nunc, interdum quis arcu et, porta convallis est. Donec tortor justo, imperdiet in auctor vel, tempus eu nisl. Proin quis consectetur ipsum. Vestibulum nec leo libero. Nulla ornare efficitur ipsum a placerat. Aenean gravida lacinia diam vitae dictum. Cras neque ligula, accumsan a nibh sed, aliquam dapibus felis. Donec nec sapien vitae erat convallis porta quis a erat.",
          "Integer aliquet eu dolor quis pretium. Maecenas sem mauris, pretium vitae interdum ac, faucibus ut neque. Donec congue nisi quis quam consectetur viverra ac scelerisque metus. Curabitur pellentesque viverra malesuada. Pellentesque efficitur ac massa a feugiat. Nullam vehicula, neque eget ornare fermentum, leo est sagittis metus, vitae sodales sapien risus in arcu. Maecenas in purus ut nulla pretium porttitor id vel mi. Pellentesque nisi elit, dictum vitae sollicitudin vel, lacinia vitae ex. Fusce ornare nisl vitae mauris rutrum venenatis non eu mauris. Curabitur aliquam at quam vel laoreet.",
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
        title="Por que escolher nosso negócio?"
        description="Oferecemos soluções inovadoras e um serviço excepcional para atender às suas necessidades."
        features={[
          "Atendimento 24/7 personalizado",
          "Suporte técnico especializado e ágil",
          "Garantia de satisfação do cliente",
          "Entrega rápida e rastreável",
          "Produtos de alta qualidade e durabilidade",
        ]}
        imageSrc="/images/placeholder300.png"
        imageAlt="Ilustração do nosso negócio"
      />
      <CTABanner
        title="Entre em contato hoje"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas nec mauris sit amet fermentum."
        buttonLabel="Fale no WhatsApp"
        buttonLink="https://wa.me/5551999999999"
      />
    </>
  );
}

export default page;
