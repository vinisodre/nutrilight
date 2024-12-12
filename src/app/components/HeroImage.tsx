import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import Image from "next/image";
import React from "react";

interface HeroProps {
  title: string;
  description: string;
  backgroundImage?: string; // Nova propriedade opcional
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

function HeroImage({
  title,
  description,
  backgroundImage,
  showPrimaryButton = true,
  showSecondaryButton = true,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
}: HeroProps) {
  const styles = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="w-full min-h-96 py-12 md:py-24 relative" style={styles}>
      {/* DotPattern no fundo */}
      <DotPattern className="absolute inset-0 -z-10" />

      {/* Conteúdo principal */}
      <div className="relative container px-4 md:px-6 mx-auto max-w-7xl pb-8">
        <div className="flex flex-wrap md:flex-nowrap md:justify-center md:items-center gap-16">
          {/* Texto e botões */}
          <div className="md:basis-3/5 z-10 order-1">
            <div className="">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">
                {title}
              </h2>
              <p className="text-gray-500 md:text-md dark:text-gray-400 mt-2">
                {description}
              </p>
            </div>
            <div className="flex gap-4 w-full justify-center md:space-x-4 items-center">
              {showPrimaryButton && (
                <Button size="lg">{primaryButtonText}</Button>
              )}
              {showSecondaryButton && (
                <Button variant="outline" size="lg" className="md:mt-0">
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>

          {/* Imagem */}
          <div className="z-10 order-2">
            <Image
              src="/images/nutrilighthero.jpg"
              alt="Hero Image"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
