import Image from "next/image";
import React from "react";

function Section1() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 ">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Feature Highlight
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our product offers cutting-edge features designed to streamline
                your workflow and enhance your productivity.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center">
                <Image
                  src="/images/placeholder50.png"
                  width={50}
                  height={50}
                  alt="Feature Illustration"
                />
                <span className="ml-4 text-lg">Feature 1</span>
              </li>
              <li className="flex items-center">
                <Image
                  src="/images/placeholder50.png"
                  width={50}
                  height={50}
                  alt="Feature Illustration"
                />
                <span className="ml-4 text-lg">Feature 2</span>
              </li>
              <li className="flex items-center">
                <Image
                  src="/images/placeholder50.png"
                  width={50}
                  height={50}
                  alt="Feature Illustration"
                />
                <span className="ml-4 text-lg">Feature 3</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-end">
            <Image
              src="/images/placeholdervertcal.png"
              width={400}
              height={700}
              alt="Feature Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
