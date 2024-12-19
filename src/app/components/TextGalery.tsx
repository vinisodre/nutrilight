import { playfair } from "../layout";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface ImageTextProps {
  title: string;
  description?: string;
  paragraphs?: string[];
  backgroundColor?: string;
  services: { src: string; alt: string }[];
}

function ImageText({
  title,
  description,
  paragraphs = [],
  backgroundColor = "transparent",
  services,
}: ImageTextProps) {
  return (
    <section className="w-full py-12 md:py-24" style={{ backgroundColor }}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          {/* Texto */}
          <div className="flex flex-col justify-center mx-0">
            <div>
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

          {/* Galeria de Imagens */}
          <div className="flex flex-col h-full justify-center">
            <div className="grid sm:grid-cols-2 sm:gap-1">
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col mt-3 sm:mt-0">
                  <div className="relative w-full min-h-60 min-h-60 pt-[70%]">
                    <Image
                      src={service.src}
                      alt={service.alt}
                      fill
                      className="rounded-lg object-cover shadow-gray-400 shadow-2xl"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageText;
