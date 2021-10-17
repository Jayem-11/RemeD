import React from "react";

import Hero from "../components/Sections/Hero";
import LandingLayout from "../components/Layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="The Greatest Wealth is Health"
        subtitle="Here at RemeD our main focus is on providing quality healcare services to our patients!"
        image="https://media.istockphoto.com/photos/medical-technology-background-picture-id1255646957?b=1&k=20&m=1255646957&s=170667a&w=0&h=0DXiK-OvNRevgEABMJyuu4_ED1aFmHVsFiQc1b-NdLg="
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}
