import React from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import CTABanner from "../components/CTABanner";
import Image from "next/image";
import Services from "../components/Services";
import { playfair } from "../layout";

function page() {
  return (
    <>
      <Banner
        title="Comemore com sabor e praticidade!"
        description="Cardápios personalizados para festas e eventos corporativos, tornando cada ocasião ainda mais especial."
        showPrimaryButton={false}
        showSecondaryButton={false}
        backgroundImage="/images/bannerevento.png"
        bannerTextColor="text-white"
      />
      <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            {/* Texto */}
            <div className="flex flex-col justify-center mx-0 order-2 lg:order-1">
              <div className="">
                <h2
                  className={`${playfair.className} text-3xl font-bold tracking-tighter sm:text-5xl`}
                >
                  Foque no seu evento
                </h2>
                <p className="text-gray-500 md:text-md dark:text-gray-400"></p>

                <p className="text-gray-500 md:text-md dark:text-gray-400 pt-8">
                  Organizar eventos é sempre um desafio: além de lidar com as
                  apresentações do envento e garantir que tudo ocorra bem, é
                  preciso cuidar para que as pessoas sejam bem servidas. Afinal,
                  quem quer se preocupar com a comida quando deveria estar
                  focando em outros aspectos do evento?
                </p>
                <p className="text-gray-500 md:text-md dark:text-gray-400 pt-8">
                  Com nosso serviço especializado, você não precisa se
                  preocupar. Preparamos cardápios personalizados para atender
                  aos mais diversos tipos de eventos, garantindo qualidade,
                  sabor e uma experiência única para seus convidados. Seja uma
                  celebração íntima, palestras, eventos religiosos ou um evento
                  corporativo: cuidamos de tudo com excelência.
                </p>
                {/* <p className="text-gray-500 md:text-md dark:text-gray-400 pt-8">
                  Servimos eventos em datas comemorativas e momentos especiais.
                </p> */}
                {/* <ul className="text-gray-500 md:text-md dark:text-gray-400 pt-4 ml-2">
                  <li className="mb-2 font-semibold">Festas de fim de ano</li>
                  <li className="mb-2 font-semibold">Natal e Ano Novo</li>
                  <li className="mb-2 font-semibold">Páscoa</li>
                  <li className="mb-2 font-semibold">
                    Coffee breaks corporativos
                  </li>
                  <li className="mb-2 font-semibold">Reunioes de negócios</li>
                  <li className="mb-2 font-semibold">Aniversários</li>
                  <li className="mb-2 font-semibold">Casamentos</li>
                </ul> */}
                <p className="text-gray-500 md:text-md dark:text-gray-400 pt-8">
                  Com nossa experiência, seu evento será um sucesso e você
                  poderá aproveitar o momento sem preocupações!
                </p>
              </div>
            </div>

            {/* Imagem */}
            <div className="segundo flex justify-center order-1 lg:order-2">
              <Image
                src="/images/corporativo.png"
                width={400}
                height={700}
                alt="Eventos"
                className="rounded-tl-[90px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[90px]"
              />
            </div>
          </div>
        </div>
      </section>

      <Services
        sectionTitle="Nossos Serviços"
        sectionDescription="Nossos marmitas oferecem cardápios balanceados e variados, tanto para cliente individuais quanto para refeições coletivas"
        services={[
          {
            title: "Confraternizaçõe de empresas",
            description: "confraternizações de fim de ano de empresas",
            image: {
              src: "/images/nutrilightconfraternizacao.png",
              alt: "Image 1",
            },
            buttonText: "Saiba mais",
          },

          {
            title: "Eventos corporativos",
            description:
              "Eventos corparativos e empresariais focados na satisfação do cliente",
            image: { src: "/images/nutrilightcorp.png", alt: "Image 3" },
            buttonText: "Saiba mais",
          },
          {
            title: "Coffee Breaks",
            description:
              "Mesas de café para recepcionar e divertir os convidados do seu evento",
            image: { src: "/images/nutrilightcoffee.png", alt: "Image 1" },
            buttonText: "Saiba mais",
          },
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
        imageSrc="/images/coffeebreak.png"
        imageAlt="Marmitas fit e saudáveis organizadas em uma mesa."
      />
      <CTABanner
        title="Vamos planejar o cardápio do seu evento?"
        description="Deixe suas comemorações ainda mais marcantes com nossos serviços de alimentação para eventos."
        buttonLink="https://api.whatsapp.com/send/?phone=5521987017520&text&type=phone_number&app_absent=0"
        buttonLabel="Fale no Whatsapp"
      />
    </>
  );
}

export default page;
