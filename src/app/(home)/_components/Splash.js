"use client";

import React from 'react';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';

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
      <Stack direction="row" alignItems="center" justifyContent="center"
        sx={{
          aspectRatio: 6 / 2,
          display: 'flex',
          left: 0,
          maxWidth: '100vw',
          minHeight: '24vh',
          position: 'absolute',
          right: 0,
          top: 0,
          width: '100%',
        }}
      >
        <Image
          alt="The Bugg Lights Logo with a glowing effect"
          height={500}
          src="/logo-glowing.png"
          style={{
            objectFit: 'contain',
            height: '100%',
            aspectRatio: 1 / 1,
            width: 'auto',
            maxWidth: '500px',
          }}
          width={500}
        />
      </Stack>
    </Box>
  );
};

export default Splash;