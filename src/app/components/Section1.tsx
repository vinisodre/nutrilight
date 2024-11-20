import Image from "next/image";
import React from "react";

interface Section1Props {
  title: string;
  description: string;
  features: { icon: string; text: string }[];
  mainImageSrc: string;
  mainImageAlt?: string;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

function Section1({
  title,
  description,
  features,
  mainImageSrc,
  mainImageAlt = "Main Feature Illustration",
  showPrimaryButton = false,
  showSecondaryButton = false,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
}: Section1Props) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {title}
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {description}
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Image
                    src={feature.icon}
                    width={50}
                    height={50}
                    alt={`Feature ${index + 1}`}
                  />
                  <span className="ml-4 text-lg">{feature.text}</span>
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
          <div className="flex justify-end">
            <Image
              src={mainImageSrc}
              width={400}
              height={700}
              alt={mainImageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
