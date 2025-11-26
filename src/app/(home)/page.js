"use client";

import { Container } from "@mui/material";

import { Main } from "@/components";

import Splash from "./_components/Splash";
import FoodDonationCallout from "./_components/FoodDonationCallout";
import PlanYourVisit from "./_components/PlanYourVisit";
import Sponsorship from "./_components/Sponsorship";
import MiniGallery from "./_components/MiniGallery";
import RulesCourtesies from "./_components/RulesCourtesies";


export default function Home() {
  return (
    <>
      <Splash />
      <Main>
        <Container maxWidth="xl">
          <FoodDonationCallout />
          <PlanYourVisit />
          <Sponsorship />
          {/* <MiniGallery /> */}
          <RulesCourtesies />
        </Container>
      </Main>
    </>
  );
}
