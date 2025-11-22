"use client";

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Glass } from '@/components/Glass';

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
      <Glass
        sx={{
          maxWidth: '900px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2">Become a Sponsor</Typography>
        <Typography variant="body1">
          The Bugg Lights display is free for everyone. We rely on the help of individuals and businesses
          to provide hot chocolate, candy canes, and other supplies for the visitors' experience.
          Your support helps us keep the tradition alive for families across Albuquerque.
        </Typography>
      </Glass>
    </Box>
  );
};

export default Sponsorship;