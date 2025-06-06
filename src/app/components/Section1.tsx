import Image from "next/image";
import React from "react";
import Title from "@/components/ui/title";
import { Check } from "lucide-react";

interface Section1Props {
  title: string;
  description: string;
  paragraph?: string;
  features?: { icon: string; text: string }[];
  mainImageSrc: string;
  mainImageAlt?: string;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundColor?: string;
}

function Section1({
  title,
  description,
  paragraph,
  features = [],
  mainImageSrc,
  mainImageAlt = "Main Feature Illustration",
  showPrimaryButton = false,
  showSecondaryButton = false,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  backgroundColor = "transparent",
}: Section1Props) {
  return (
    <section
      className="w-full py-12 md:py-24 dark:bg-gray-800"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center mx-0">
            <div className="">
              <Title title={title} description={description} />
              <p className=" text-gray-500 md:text-md dark:text-gray-400 mt-8">
                {paragraph}
              </p>
            </div>
            <ul className="grid gap-2 py-4 mt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <span className="ml-4 md:text-md">{feature.text}</span>
                </li>
              ))}
            </ul>
            {(showPrimaryButton || showSecondaryButton) && (
              <div className="flex gap-4 w-full justify-center md:space-x-4 items-center my-8">
                {showPrimaryButton && (
                  <button className="btn-primary">{primaryButtonText}</button>
                )}
                {showSecondaryButton && (
                  <button className="btn-secondary">
                    {secondaryButtonText}
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <Image
              src={mainImageSrc}
              width={400}
              height={700}
              alt={mainImageAlt}
              className="rounded-tl-[90px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[90px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
