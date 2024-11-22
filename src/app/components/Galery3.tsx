import Image from "next/image";
import React from "react";

interface GalleryProps {
  title: string;
  description?: string;
  images: { src: string; alt: string }[];
}

function Gallery3({ title, description, images }: GalleryProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 ">
          {title}
        </h2>
        <p className=" text-gray-500 text-center md:text-xl lg:text-base xl:text-xl dark:text-gray-400 mb-24">
          {description}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {images.map((image, index) => (
            <Image
              key={index}
              alt={image.alt}
              className="object-cover"
              src={image.src}
              width={300}
              height={500}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery3;
