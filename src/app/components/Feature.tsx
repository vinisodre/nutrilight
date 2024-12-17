import Title from "@/components/ui/title";
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
    <section className="w-full py-12 md:pb-24 lg:pb-32 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center mx-0">
            <div>
              <Title title={title} description={description} />
            </div>
            <div className="mt-10">
              <div className="">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3  text-gray-700">{feature}</p>
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
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
