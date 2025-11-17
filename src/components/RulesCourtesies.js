"use client";

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const RulesCourtesies = () => {
  const bullets = [
    'Please respect our neighbors and avoid blocking driveways.',
    'Park legally and safely along nearby streets.',
    'Keep volume reasonable during your visit.',
    'Stay on designated sidewalks and walking paths.',
    'Supervise children near displays and lighting equipment.',
  ];

  return (
    <Box
      sx={{
        width: '100%',
        paddingTop: '120px',
        paddingBottom: '120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'var(--font-bree-serif)',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          textAlign: 'center',
        }}
      >
        Before You Visit
      </Typography>
      <Box
        sx={{
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {bullets.map((bullet, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              fontFamily: 'var(--font-nunito)',
              fontSize: '1rem',
              color: '#C6C3BA',
              marginBottom: '1rem',
              textAlign: 'left',
            }}
          >
            • {bullet}
          </Typography>
        ))}
        {/* <Button
          variant="outlined"
          sx={{
            marginTop: '2rem',
            color: '#C6C3BA',
            borderColor: '#C6C3BA',
            '&:hover': {
              backgroundColor: '#C6C3BA',
              color: '#090806',
            },
          }}
        >
          View All Rules & Courtesies
        </Button> */}
      </Box>
    </Box>
  );
};

export default RulesCourtesies;