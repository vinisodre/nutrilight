import React from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import CTABanner from "../components/CTABanner";
import Image from "next/image";

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
      <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            {/* Texto */}
            <div className="flex flex-col justify-center mx-0 order-2 lg:order-1">
              <div className="">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Praticidade para você
                </h2>
                <p className="text-gray-500 md:text-md dark:text-gray-400">
                  Foque no seu evento, deixe-nos cuidar da comida
                </p>

                <p className="text-gray-500 md:text-md dark:text-gray-400 pt-8">
                  Organizar eventos é sempre um desafio: lidar com fornecedores,
                  garantir que todos estejam bem servidos e ainda cuidar da
                  apresentação e do sabor pode ser estressante. Afinal, quem
                  quer se preocupar com a comida quando deveria estar
                  celebrando?
                </p>
                <p className="text-gray-500 md:text-md dark:text-gray-400 pt-8">
                  Com nosso serviço especializado, você não precisa se
                  preocupar. Preparamos cardápios personalizados para atender
                  aos mais diversos tipos de eventos, garantindo qualidade,
                  sabor e uma experiência única para seus convidados. Seja uma
                  celebração íntima ou um evento corporativo, cuidamos de tudo
                  com excelência.
                </p>
                <p className="text-gray-500 md:text-md dark:text-gray-400 pt-8">
                  Servimos eventos em datas comemorativas e momentos especiais
                  como:
                </p>
                <ul className="text-gray-500 md:text-md dark:text-gray-400 pt-4 ml-2">
                  <li className="mb-2 font-semibold">Festas de fim de ano</li>
                  <li className="mb-2 font-semibold">Natal e Ano Novo</li>
                  <li className="mb-2 font-semibold">Páscoa</li>
                  <li className="mb-2 font-semibold">
                    Coffee breaks corporativos
                  </li>
                  <li className="mb-2 font-semibold">Reunioes de negócios</li>
                  <li className="mb-2 font-semibold">Aniversários</li>
                  <li className="mb-2 font-semibold">Casamentos</li>
                </ul>
                <p className="text-gray-500 md:text-md dark:text-gray-400 pt-8">
                  Com nossa experiência, seu evento será um sucesso e vocé
                  poderá aproveitar o momento sem preocupações!
                </p>
              </div>
            </div>

            {/* Imagem */}
            <div className="segundo flex justify-center order-1 lg:order-2">
              <Image
                src="/images/teste.jpg"
                width={400}
                height={700}
                alt="Eventos"
              />
            </div>
          </div>
        </div>
      </section>
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
