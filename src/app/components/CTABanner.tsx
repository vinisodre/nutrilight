import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { playfair } from "@/app/layout";

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonLink?: string;
}

export default function CTABanner({
  title = "Ready to Get Started?",
  description = "Join thousands of satisfied customers and transform your business today.",
  buttonLabel = "Sign Up Now",
  buttonLink = "#sign-up",
}: CTABannerProps) {
  return (
    <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="">
              <h2
                className={`${playfair.className} text-3xl font-bold tracking-tighter sm:text-5xl`}
              >
                {title}
              </h2>
              <p className=" text-gray-200 md:text-md mt-2">{description}</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Button
              className="w-full md:w-auto bg-green-600 text-white hover:bg-green-900"
              size="lg"
              asChild
            >
              <Link href={buttonLink}>
                {buttonLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
