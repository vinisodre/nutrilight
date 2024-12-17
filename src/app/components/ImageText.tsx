import Image from "next/image";
import React from "react";
import { playfair } from "../layout";

interface ImageTextProps {
  title: string;
  description?: string;
  paragraphs?: string[]; // Adicione uma propriedade para múltiplos parágrafos
  mainImageSrc: string;
  mainImageAlt?: string;
  backgroundColor?: string;
}

function ImageText({
  title,
  description,
  paragraphs = [], // Define um array vazio como valor padrão
  mainImageSrc,
  mainImageAlt = "Main Feature Illustration",
  backgroundColor = "transparent", // Padrão para o background
}: ImageTextProps) {
  return (
    <section className="w-full py-12 md:py-24" style={{ backgroundColor }}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          {/* Texto */}
          <div className="flex flex-col justify-center mx-0 order-2 lg:order-1">
            <div className="">
              <h2
                className={`${playfair.className} text-3xl font-bold tracking-tighter sm:text-5xl`}
              >
                {title}
              </h2>
              <p className="text-gray-500 md:text-md dark:text-gray-400">
                {description}
              </p>
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-500 md:text-md dark:text-gray-400 pt-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div className="segundo flex justify-center order-1 lg:order-2">
            <Image
              src={mainImageSrc}
              width={400}
              height={700}
              alt={mainImageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageText;
