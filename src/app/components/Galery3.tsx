import Title from "@/components/ui/title";
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
        <Title title={title} description={description} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mt-8">
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
