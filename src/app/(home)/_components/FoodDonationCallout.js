"use client";

import Image from 'next/image';
import React from 'react';
import { Box, Grid, Stack, styled, Typography } from '@mui/material';
import { Glass } from '@/components/Glass';

const Wrapper = styled(Box)`
  padding-top: calc(75px + 12rem);
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 8rem;
    right: 0;
    left: 0;
    height: 75px;
    background: url(/light-strand.png) repeat-x;
    background-size: auto 75px; 
  }
`;

const FoodDonationCallout = () => {
  return (
    <Wrapper id="food-drive">
      <Grid container spacing={2}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid size={{ xs: 12, md: 4, lg: 6 }} component={Stack} direction="row" alignItems="center" justifyContent={{ xs: "center", md: "flex-end" }}>
          <Box sx={{ width: "100%", maxWidth: { xs: "500px", lg: "initial" } }}>
            <Image
              src="/santa-penguin-donate.png"
              alt="Cartoon of Santa and a penguin donating food"
              width={600} height={900}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8, lg: 6 }}>
          <Glass>
            <Typography variant="h1" sx={{ textAlign: { xs: "center", md: "left" }, lineHeight: "1em" }} mb={1}>GIVE & GLOW</Typography>
            <Typography variant="h2" sx={{ textAlign: { xs: "center", md: "left" } }} mb={3} color="secondary">with The Bugg Lights</Typography>
            <Typography variant="body1" mb={1}>
              The Bugg Lights have always been about community — families gathering, kids laughing, and neighbors sharing a little light with one another. Many visitors choose to bring canned goods or pantry staples, knowing they&apos;ll go straight to Storehouse Albuquerque and support local families who could use an extra hand this season.
            </Typography>
            <Typography variant="body1">
              If you feel inspired to give, simply drop your items into the donation bin as you enjoy the display. Every contribution, no matter the size, becomes part of the tradition and helps spread the warmth far beyond our yard.
            </Typography>
          </Glass>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default FoodDonationCallout;