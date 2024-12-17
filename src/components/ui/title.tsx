import React from "react";
import { playfair } from "@/app/layout";

interface mainTitleProps {
  title?: string;
  description?: string;
}

function Title({ title, description }: mainTitleProps) {
  return (
    <>
      <div className="">
        <h2
          className={`${playfair.className} text-3xl font-bold tracking-tighter sm:text-5xl`}
        >
          {title}
        </h2>
        <p className=" text-gray-500 md:text-md mt-2">{description}</p>
      </div>
    </>
  );
}

export default Title;
