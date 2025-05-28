import Title from "@/components/ui/title";
import Image from "next/image";
import React from "react";

interface GalleryProps {
  className?: string;
  imgClassName?: string;
  title: string;
  description?: string;
  images: { src: string; alt: string }[];
}

function Gallery({
  className,
  title,
  description,
  images,
  imgClassName,
}: GalleryProps) {
  return (
    <section
      className={`${className} w-full py-12 md:py-16 lg:py-24 bg-gray-100 dark:bg-gray-800`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <Title title={title} description={description} />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {images.map((image, index) => (
            <Image
              key={index}
              alt={image.alt}
              className={`aspect-square object-cover rounded-lg shadow-sm ${imgClassName}`}
              src={image.src}
              width={400}
              height={400}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
