"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Box, Button, Container, Stack, styled } from '@mui/material';

const NavLink = styled(Link)`
  color: white;

  &:hover {
    color: #FFD700;
  }
`;

const Splash = () => {
  return (
    <Box
      sx={{
        height: 'auto',
        position: 'relative',
        width: '100%',
      }}
    >
      <Image
        alt="The Bugg Lights Christmas Light Display in Albuquerque, New Mexico."
        height={5000}
        priority
        src="/background-expanded.jpg"
        style={{
          height: 'auto',
          minHeight: '60vh',
          objectFit: "cover",
          width: '100%',
        }}
        width={6000}
      />
      <Box
        sx={{
          background: { xs: "linear-gradient(to bottom, #00000000 0%, #090806 100%)", lg: "transparent" },
          bottom: { xs: 0, lg: "initial" },
          left: 0,
          padding: "2rem",
          position: 'absolute',
          right: 0,
          top: { xs: "initial", lg: 0 },
          zIndex: 2,
        }}>
        <Container maxWidth="xl" component={Stack} direction="row" spacing={2} flexWrap="wrap" alignItems="center" justifyContent="center">
          <Stack direction="row" flexWrap="wrap" justifyContent={{ xs: "center", sm: "flex-start" }} spacing={{ xs: 2, sm: 4 }} sx={{ flex: { xs: 'initial', sm: '1 1 0px' } }} >
            <NavLink href="/plan">Plan Your Visit</NavLink>
            <NavLink href="/sponsor">Sponsorship</NavLink>
            <NavLink href="/in-the-news">In the News</NavLink>
          </Stack>
          <Box>
            <Button component={Link} href="/food-drive" variant="contained" sx={{ display: 'flex', alignItems: "center", justifyContent: "center", padding: "0.625rem 1rem" }}>
              <Box component="span" sx={{ lineHeight: '1em' }}>Help Feed Local Families</Box>
            </Button>
          </Box>
        </Container>
      </Box>
      <Stack direction="row" alignItems="center" justifyContent="center"
        sx={{
          aspectRatio: 6 / 2,
          display: 'flex',
          height: 'auto',
          left: '50%',
          maxWidth: '100vw',
          minHeight: '24vh',
          position: 'absolute',
          right: 0,
          top: 0,
          transform: 'translateX(-50%)',
          width: '100%',
          zIndex: 1,
        }}
      >
        <Image
          alt="The Bugg Lights Logo with a glowing effect"
          height={500}
          src="/logo-glowing.png"
          style={{
            aspectRatio: 1 / 1,
            height: '100%',
            maxWidth: '500px',
            objectFit: 'contain',
            width: 'auto',
          }}
          width={500}
        />
      </Stack>

    </Box>
  );
};

export default Splash;