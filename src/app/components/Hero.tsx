import { Button } from "@/components/ui/button";
import React from "react";

function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl/none">
              Welcome to Our Amazing Product
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover how our innovative solution can transform your business
              and boost your productivity.
            </p>
          </div>
          <div className="flex gap-4 w-full justify-center md:space-x-4 items-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg" className=" md:mt-0">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
