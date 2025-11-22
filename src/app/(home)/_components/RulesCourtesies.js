"use client";

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Glass } from '@/components/Glass';

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
      <Glass>
        <Typography variant="h2">Before You Visit</Typography>
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
                marginBottom: '1rem',
                textAlign: 'left',
              }}
            >
              • {bullet}
            </Typography>
          ))}
        </Box>
      </Glass>
    </Box>
  );
};

export default RulesCourtesies;