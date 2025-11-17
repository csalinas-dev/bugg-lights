"use client";

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Sponsorship = () => {
  return (
    <Box
      sx={{
        width: '100%',
        paddingTop: '96px',
        paddingBottom: '96px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '900px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'var(--font-bree-serif)',
            fontSize: '2.5rem',
            marginBottom: '1rem',
          }}
        >
          Become a Sponsor
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'var(--font-nunito)',
            fontSize: '1.125rem',
            marginBottom: '2rem',
            color: '#C6C3BA',
          }}
        >
          The Bugg Lights display is free for everyone. We rely on the help of individuals and businesses
          to provide hot chocolate, supplies, and additional improvements to the experience.
          Your support helps us keep the tradition alive for families across Albuquerque.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FFD700', // Bright color for CTA
            color: '#000000',
            '&:hover': {
              backgroundColor: '#FFC107',
            },
          }}
        >
          Sponsor the Cocoa Stand
        </Button>
      </Box>
    </Box>
  );
};

export default Sponsorship;