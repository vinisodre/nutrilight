import Image from "next/image";
import React from "react";

interface GalleryProps {
  title: string;
  images: { src: string; alt: string }[];
}

function Gallery({ title, images }: GalleryProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {images.map((image, index) => (
            <Image
              key={index}
              alt={image.alt}
              className="aspect-square object-cover rounded-lg"
              src={image.src}
              width={300}
              height={300}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
