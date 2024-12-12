import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";

interface ServiceProps {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  buttonText?: string;
  buttonLink?: string;
}

interface ServicesSectionProps {
  sectionTitle: string;
  sectionDescription?: string;
  services: ServiceProps[];
}

function Services({
  sectionTitle,
  sectionDescription,
  services,
}: ServicesSectionProps) {
  return (
    <section
      className="w-full py-12 md:pb-24 md:pt-0 "
      style={{ background: "rgba(255, 252, 240, 1)" }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <Title title={sectionTitle} description={sectionDescription} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              {service.image && (
                <div className="relative w-full pt-[70%]">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </CardContent>
              {service.buttonText && service.buttonLink && (
                <CardFooter>
                  <Button asChild>
                    <a href={service.buttonLink}>{service.buttonText}</a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
