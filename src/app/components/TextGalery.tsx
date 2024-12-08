import Image from "next/image";
import React from "react";

interface ImageTextProps {
  title: string;
  description?: string;
  paragraphs?: string[];
  backgroundColor?: string;
  images: { src: string; alt: string }[];
}

function ImageText({
  title,
  description,
  paragraphs = [],
  backgroundColor = "transparent",
  images,
}: ImageTextProps) {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800"
      style={{ backgroundColor }}
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl flex">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          {/* Texto */}
          <div className="flex flex-col justify-center mx-0">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
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
          <div className="flex flex-colh-full justify-center">
            <div className="grid sm:grid-cols-2 gap-4 items-center justify-center">
              {images && images.length > 0 ? (
                images.map((image, index) => (
                  <div
                    key={index}
                    className="w-[300px] h-[300px] overflow-hidden relative rounded"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={350}
                      height={350}
                      className="object-cover"
                    />
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center">No images available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageText;
