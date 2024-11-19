import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Section2() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <Image
            src="/images/placeholder.png"
            width={600}
            height={400}
            alt="Feature Illustration"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Powerful and Easy to Use
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our intuitive interface makes it simple to harness the full
                power of our product, allowing you to focus on what matters
                most.
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
      </div>
    </section>
  );
}

export default Section2;
