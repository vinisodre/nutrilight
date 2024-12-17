import { Button } from "@/components/ui/button";
import React from "react";
import { playfair } from "@/app/layout";

interface BannerProps {
  title: string;
  description: string;
  backgroundImage?: string; // Nova propriedade opcional
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

function Banner({
  title,
  description,
  backgroundImage,
  showPrimaryButton = true,
  showSecondaryButton = true,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
}: BannerProps) {
  const styles = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="w-full py-32" style={styles}>
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1
              className={`${playfair.className} text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl/none`}
            >
              {title}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl dark:text-gray-400">
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
      </div>
    </section>
  );
}

export default Banner;
