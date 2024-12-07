import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
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

function Hero({
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
    <section
      className="w-full min-h-96 py-12 md:py-24 lg:py-32 xl:py-48"
      style={styles}
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="space-y-2">
            <Title title={title} description={description} />
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

export default Hero;
