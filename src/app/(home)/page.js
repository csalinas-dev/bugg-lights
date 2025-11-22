"use client";

import { styled } from "@mui/material";

import Splash from "./_components/Splash";
import FoodDonationCallout from "./_components/FoodDonationCallout";
import PlanYourVisit from "./_components/PlanYourVisit";
import Sponsorship from "./_components/Sponsorship";
import MiniGallery from "./_components/MiniGallery";
import RulesCourtesies from "./_components/RulesCourtesies";

const Main = styled('main')`
  background: linear-gradient(to bottom, #090806 0%, #0A0F1C 100%);
  padding: 0 1rem;
`;

export default function Home() {
  return (
    <>
      <Splash />
      <Main>
        <FoodDonationCallout />
        <PlanYourVisit />
        <Sponsorship />
        {/* <MiniGallery /> */}
        <RulesCourtesies />
      </Main>
    </>
  );
}
