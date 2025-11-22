"use client";

import React from 'react';
import { Typography, Grid, styled, Stack, Box, Container } from '@mui/material';
import { faInstagram, faTiktok, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { SocialOrnament } from './SocialOrnament';
import Image from 'next/image';

const Footer = styled('footer')`
  background-color: #0A0F1C;
  padding-bottom: 48px;
  padding-top: 98px;
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background: url(/light-strand.png) repeat-x;
  }
`;

const Component = () => (
  <Footer>
    <Container>
      <Grid
        container
        spacing={4}
        columns={{ xs: 1, md: 3 }}
      >
        <Grid size={1} component={Stack} alignItems="center" justifyContent="center">
          <Image src="/logo.png" width={250} height={250} alt="The Bugg Lights Logo" />
        </Grid>
        <Grid size={1} component={Stack} alignItems="center" justifyContent="center">
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h4">
              The Bugg Lights
            </Typography>
            <Typography variant="body1">
              2223 Hoffman Dr. NE
              <br />
              Albuquerque, New Mexico 87110
            </Typography>
          </Box>
        </Grid>
        <Grid size={1} component={Stack} alignItems="center" justifyContent="center">
          <Stack direction="row" sx={{ gap: '0.25rem' }} justifyContent={{ xs: "center", md: "flex-start" }}>
            <SocialOrnament href="https://www.instagram.com/bugglights/" icon={faInstagram} color="Yellow" />
            <SocialOrnament href="https://www.tiktok.com/@bugglights" icon={faTiktok} color="Red" />
            <SocialOrnament href="https://x.com/BuggLights" icon={faXTwitter} color="Green" />
            <SocialOrnament href="https://www.facebook.com/people/Bugg-Lights/61584253583434/" icon={faFacebookF} color="Blue" />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Footer>
);

export default Component;