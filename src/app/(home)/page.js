"use client";

import { Container } from "@mui/material";

import { Main } from "@/components";

import Splash from "./_components/Splash";
import FoodDonationCallout from "./_components/FoodDonationCallout";
import PlanYourVisit from "./_components/PlanYourVisit";


export default function Home() {
  return (
    <>
      <Splash />
      <Main>
        <Container maxWidth="xl">
          <FoodDonationCallout />
          <PlanYourVisit />
        </Container>
      </Main>
    </>
  );
}
