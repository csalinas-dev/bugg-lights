"use client";

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Glass } from '@/components/Glass';

const PlanYourVisit = () => {
  const cards = [
    {
      title: 'Display Hours',
      text: 'The display begins Friday, November 28th at 6pm. Following nights will be on from 5:00 pm to 10:00 pm, through New Year’s Day.',
      note: 'Walk the sidewalk, driveway, and patio; take photos; and enjoy the display at your own pace. Make sure to tag us @bugglights!',
    },
    {
      title: 'Meet Santa',
      text: 'Most Friday and Saturday nights, Santa Claus will be available for the children to greet. Parents are welcome to take their own photos.',
      note: 'Santa’s schedule may change due to weather.',
    },
    {
      title: 'Free Hot Chocolate',
      text: 'On Friday and Saturday evenings, volunteers serve free hot chocolate, made possible by generous community sponsors.',
      note: 'Find the cocoa station by the penguin exhibit located in the patio.',
    },
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
        Plan Your Visit
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: '1200px',
          width: '100%',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
        }}
        columns={{ xs: 1, md: 3 }}
      >
        {cards.map((card, index) => (
          <Grid size={{ xs: 1, md: 1 }} key={index}>
            <Glass
              sx={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '300px',
              }}
            >
              <Typography variant="h5">{card.title}</Typography>
              <Typography variant="body1">{card.text}</Typography>
              <Typography variant="caption">{card.note}</Typography>
            </Glass>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlanYourVisit;