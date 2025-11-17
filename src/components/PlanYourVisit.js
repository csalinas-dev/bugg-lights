"use client";

import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const PlanYourVisit = () => {
  const cards = [
    {
      title: 'Display Hours',
      text: 'The lights turn on nightly from 5:00 pm to 10:00 pm, beginning Thanksgiving and running through New Year’s Day.',
      note: 'Walk the sidewalk, take photos, and enjoy the display at your own pace.',
    },
    {
      title: 'Meet Santa',
      text: 'Most Friday and Saturday nights, Santa Claus will be available for the children to greet. Parents are welcome to take their own photos.',
      note: 'Santa’s schedule may change due to weather.',
    },
    {
      title: 'Free Hot Chocolate',
      text: 'On Friday and Saturday evenings, volunteers serve free hot chocolate, made possible by generous community sponsors.',
      note: 'Find the cocoa station along the sidewalk near the main walkway.',
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
        }}
        columns={{ xs: 1, md: 3 }}
      >
        {cards.map((card, index) => (
          <Grid item xs={1} key={index}>
            <Card
              sx={{
                backgroundColor: '#0F0E0C',
                borderRadius: '8px',
                borderTop: '6px solid #4CAF50',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '300px',
              }}
            >
              <CardContent
                sx={{
                  padding: 0,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'var(--font-bree-serif)',
                    marginBottom: '1rem',
                    color: '#ffffff',
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'var(--font-nunito)',
                    marginBottom: '1rem',
                    color: '#C6C3BA',
                  }}
                >
                  {card.text}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'var(--font-nunito)',
                    fontSize: '0.875rem',
                    color: '#A09D95',
                  }}
                >
                  {card.note}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlanYourVisit;