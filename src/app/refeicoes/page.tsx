import React from "react";
import Hero from "../components/Hero";

function page() {
  return (
    <>
      <Hero
        title="Refeição"
        description="Nossa refeição"
        showPrimaryButton={false}
        showSecondaryButton={false}
      />
    </>
  );
}

export default page;
