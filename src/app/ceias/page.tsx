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
        title="Ceias que ficam na memória"
        description=""
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
                  Ceias cheias de sabor
                </h2>

                <p className="text-gray-500 md:text-md dark:text-gray-400 pt-8">
                  Seja para um Natal repleto de amor, uma Páscoa cheia de
                  esperança, um Ano Novo com desejos de prosperidade ou um
                  aniversário especial, nossa equipe está pronta para trazer
                  sabor e praticidade às suas comemorações.
                </p>

                <p className="text-gray-500 md:text-md dark:text-gray-400 pt-8">
                  Sabemos que organizar uma ceia pode ser um grande desafio:
                  pensar no cardápio, comprar ingredientes, garantir que tudo
                  esteja no ponto certo... Por isso, oferecemos soluções
                  completas para que você possa focar no que realmente importa:
                  celebrar ao lado de quem você ama.
                </p>
                <p className="text-gray-500 md:text-md dark:text-gray-400 pt-8">
                  Nossos cardápios são cuidadosamente elaborados para refletir o
                  espírito de cada ocasião. Trabalhamos com ingredientes frescos
                  e de alta qualidade, garantindo que cada prato seja uma
                  experiência única.
                </p>
                <p className="text-gray-500 md:text-md dark:text-gray-400 pt-8">
                  Transforme suas ceias em um momento mágico. Cuidamos de tudo
                  para que você possa aproveitar cada instante sem preocupações!
                </p>
              </div>
            </div>

            {/* Imagem */}
            <div className="segundo flex justify-center order-1 lg:order-2">
              <Image
                src="/images/ceia.png"
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
        sectionDescription="Desenolvemos cardápios variados e personalizados para cada ocasião"
        services={[
          {
            title: "Aniversários",
            description:
              "Cardápio variado e personalizado para celebrar aniversários",
            image: { src: "/images/nutrilightniver.png", alt: "Image 2" },
            buttonText: "Saiba mais",
          },
          {
            title: "Natal e Ano Novo",
            description:
              "Cardápio personalizado para celebrar o Natal e o Ano Novo",
            image: { src: "/images/nutrilightrefeitorio.png", alt: "Image 2" },
            buttonText: "Saiba mais",
          },
          {
            title: "Casamentos",
            description: "Eternize o momento com um cardápio super especial",
            image: { src: "/images/nutrilightcasamento.png", alt: "Image 3" },
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
        imageSrc="/images/nutrilightceia .png"
        imageAlt="Marmitas fit e saudáveis organizadas em uma mesa."
      />
      <CTABanner
        title="Vamos planejar a sua ceia?"
        description="Deixe suas comemorações ainda mais marcantes com nossos pratos."
        buttonLink="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F5521987017520&e=AT3jh2sTLc1oGBLMChfcb7QH6kPR9o73eImncEUe_XiwQLhwZ3i-yhzKJu68OTuJqNACXhPbGT-zESGC-b2y3MrWf2SM_v-Z"
        buttonLabel="Fale no Whatsapp"
      />
    </>
  );
}

export default page;
