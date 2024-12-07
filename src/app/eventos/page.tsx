import React from "react";
import ImageText from "../components/ImageText";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import CTABanner from "../components/CTABanner";

function page() {
  return (
    <>
      <Banner
        title="Comemore com sabor e praticidade!"
        description="Cardápios personalizados para festas e eventos corporativos, tornando cada ocasião ainda mais especial."
        showPrimaryButton={false}
        showSecondaryButton={false}
        backgroundImage="/images/hero2.png"
      />
      <ImageText
        title="NutriLight"
        description="Alimentos saudáveis"
        mainImageSrc="/images/teste.jpg"
        paragraphs={[
          "Organizar eventos é sempre um desafio: lidar com fornecedores, garantir que todos estejam bem servidos e ainda cuidar da apresentação e do sabor pode ser estressante. Afinal, quem quer se preocupar com a comida quando deveria estar celebrando?",
          "Com nosso serviço especializado, você não precisa se preocupar. Preparamos cardápios personalizados para atender aos mais diversos tipos de eventos, garantindo qualidade, sabor e uma experiência única para seus convidados. Seja uma celebração íntima ou um evento corporativo, cuidamos de tudo com excelência.",
          "Servimos eventos em datas comemorativas e momentos especiais como:",
          "LISTA DE DATAS",
          "Com nossa experiência, seu evento será um sucesso e você poderá aproveitar o momento sem preocupações!",
        ]}
      />
      <Feature
        title="Por que escolher nossos serviços para eventos?"
        description="Garantimos uma experiência completa, com alimentos de qualidade e uma apresentação impecável para marcar suas celebrações."
        features={[
          "Cardápios personalizados para cada tipo de evento",
          "Ingredientes selecionados e de alta qualidade",
          "Entrega pontual e embalagens práticas",
          "Atendimento profissional e flexível às suas necessidades",
          "Comida saborosa que encanta seus convidados",
        ]}
        imageSrc="/images/placeholder300.png"
        imageAlt="Marmitas fit e saudáveis organizadas em uma mesa."
      />
      <CTABanner
        title="Vamos planejar o cardápio do seu evento?"
        description="Deixe suas comemorações ainda mais marcantes com nossos serviços de alimentação para eventos. Clique no botão abaixo e fale conosco no WhatsApp para criar o cardápio perfeito!"
        buttonLink="https://wa.me/5551999999999"
        buttonLabel="Fale no Whatsapp"
      />
    </>
  );
}

export default page;
