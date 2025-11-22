"use client";

import { Container, styled } from "@mui/material";

import Splash from "./_components/Splash";
import FoodDonationCallout from "./_components/FoodDonationCallout";
import PlanYourVisit from "./_components/PlanYourVisit";
import Sponsorship from "./_components/Sponsorship";
import MiniGallery from "./_components/MiniGallery";
import RulesCourtesies from "./_components/RulesCourtesies";

const Main = styled('main')`
  background: linear-gradient(to bottom, #090806 0%, #0A0F1C 100%);
  padding: 0 1rem;
  position: relative;

  &::before {
    background-image: url('/stars.png'), url('/stars.png');
    background-position: 0 0, 200px 300px;
    background-repeat: repeat, repeat;
    background-size: 500px 500px, 750px 750px;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.9;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

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
