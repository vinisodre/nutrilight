import React from "react";
import Hero from "../components/Hero";

function page() {
  return (
    <>
      <Hero
        title="Quem Somos"
        description="A refeição perfeita para o seu negócio"
        showPrimaryButton={false}
        showSecondaryButton={false}
      />
    </>
  );
}

export default page;
