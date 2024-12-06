import React from "react";

interface mainTitleProps {
  title?: string;
  description?: string;
}

function Title({ title, description }: mainTitleProps) {
  return (
    <>
      <div className="mx-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {title}
        </h2>
        <p className=" text-gray-500 md:text-md dark:text-gray-400">
          {description}
        </p>
      </div>
    </>
  );
}

export default Title;
