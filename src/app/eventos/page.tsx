import React from "react";
import Hero from "../components/Hero";

function page() {
  return (
    <Hero
      title="Eventos"
      description="Nossos eventos"
      showPrimaryButton={false}
      showSecondaryButton={false}
    />
  );
}

export default page;
