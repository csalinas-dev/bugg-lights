"use client";

import React from 'react';
import { Box } from '@mui/material';
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
        src="/background-expanded.jpg"
        alt="Background"
        width={6000}
        height={5000}
        style={{
          width: '100%',
          objectFit: "cover",
          height: 'auto',
          minHeight: '60vh',
        }}
        priority
      />
      <Box
        sx={{
          alignItems: 'top',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%',
        }}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={300}
          height={300}
          style={{
            objectFit: 'contain',
          }}
        />
      </Box>
    </Box>
  );
};

export default Splash;