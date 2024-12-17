import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Section2Props {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  primaryButtonText?: string;
  linkPrimaryButton?: string;
  linkSecondaryButton?: string;
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
  linkPrimaryButton,
  secondaryButtonText = "Learn More",
  linkSecondaryButton,
}: Section2Props) {
  return (
    <section className="w-full py-12 md:py-24">
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
              <Title title={title} description={description} />
            </div>
            <div className="flex gap-4 w-full md:space-x-4 justify-center md:justify-start items-center md:items-start my-8">
              {showPrimaryButton && (
                <Link href={linkPrimaryButton || "/"}>
                  <Button size="lg">{primaryButtonText}</Button>
                </Link>
              )}
              {showSecondaryButton && (
                <Link href={linkSecondaryButton || "/"}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="md:mt-0 bg-green-600 text-white hover:bg-black hover:text-white"
                    // style={{ background: "rgba(255, 252, 240, 1)" }}
                  >
                    {secondaryButtonText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
