import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface Section2Props {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

function Section2({
  title,
  description,
  imageSrc,
  imageAlt = "Feature Illustration",
  showPrimaryButton = true,
  showSecondaryButton = true,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
}: Section2Props) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <Image
            src={imageSrc}
            width={400}
            height={400}
            alt={imageAlt}
            className="mx-auto"
          />
          <div className="flex flex-col justify-center mx-auto">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {title}
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {description}
              </p>
            </div>
            <div className="flex gap-4 w-full justify-center md:space-x-4 items-center my-8">
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
      </div>
    </section>
  );
}

export default Section2;
