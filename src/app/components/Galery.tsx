import Image from "next/image";
import React from "react";

function Galery() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          <Image
            alt="Gallery Image 1"
            className="aspect-square object-cover rounded-lg"
            src="/images/placeholder300.png"
            width={300}
            height={300}
          />
          <Image
            alt="Gallery Image 1"
            className="aspect-square object-cover rounded-lg"
            src="/images/placeholder300.png"
            width={300}
            height={300}
          />
          <Image
            alt="Gallery Image 1"
            className="aspect-square object-cover rounded-lg"
            src="/images/placeholder300.png"
            width={300}
            height={300}
          />
          <Image
            alt="Gallery Image 1"
            className="aspect-square object-cover rounded-lg"
            src="/images/placeholder300.png"
            width={300}
            height={300}
          />
          <Image
            alt="Gallery Image 1"
            className="aspect-square object-cover rounded-lg"
            src="/images/placeholder300.png"
            width={300}
            height={300}
          />
          <Image
            alt="Gallery Image 1"
            className="aspect-square object-cover rounded-lg"
            src="/images/placeholder300.png"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

export default Galery;
