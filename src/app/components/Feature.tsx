import { Check } from "lucide-react";
import Image from "next/image";

interface BusinessFeaturesProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function Feature({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
}: BusinessFeaturesProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center mx-0">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {title}
              </h2>
              <p className="text-gray-500 md:text-md dark:text-gray-400">
                {description}
              </p>
            </div>
            <div className="mt-10">
              <div className="">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-lg text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto ">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden mx-auto">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
