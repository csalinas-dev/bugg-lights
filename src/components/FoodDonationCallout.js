"use client";

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const FoodDonationCallout = () => {
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
          Support the Storehouse Food Drive
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
          We collect non-perishable food items throughout the season to support Storehouse Albuquerque.
          Visitors are encouraged to bring canned goods or pantry staples when they come enjoy the lights.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4CAF50',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#45a049',
            },
          }}
        >
          What to Bring
        </Button>
      </Box>
    </Box>
  );
};

export default FoodDonationCallout;