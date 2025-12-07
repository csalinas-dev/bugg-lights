"use client";

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { Glass } from '@/components/Glass';

const PlanYourVisit = () => {
  const images = [
    {
      src: '/posts/santa-schedule.jpg',
      alt: "Santa will be at The Bugg Lights every Friday and Saturday, December 23rd, and Christmas Eve.",
    },
    {
      src: '/posts/hot-chocolate.png',
      alt: "Enjoy free hot chocolate every Friday and Saturday at The Bugg Lights.",
    },
    {
      src: '/posts/christmas-carol-concert.jpg',
      alt: "There will be a Christmas Carol Concert on December 19th and 20th at The Bugg Lights.",
    }
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
      <Glass mb={4}>
        <Typography variant="h5" gutterBottom>Display Hours & Guidelines</Typography>
        <Typography variant="body1" gutterBottom>
          The display begins Friday, November 28th at 6pm. Following nights will be on from 5:00 pm to 10:00 pm, through New Year’s Day. Please respect our neighbors and avoid blocking driveways. Park legally and safely along nearby streets. Keep volume reasonable during your visit. Stay on designated sidewalks and walking paths. Supervise children near displays and lighting equipment.
        </Typography>
        <Typography variant="caption">
          Walk the sidewalk, driveway, and patio; take photos; and enjoy the display at your own pace. Make sure to tag us @bugglights! We do not accept monetary donations or tips. We encourage all visitors to bring food for the food drive donations.
        </Typography>
      </Glass>
      <Grid
        container
        spacing={4}
      >
        {images.map((image, index) => (
          <Grid size={{ xs: 1, md: 4 }} key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={1000}
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
        ))}
      </Grid>
    </Box >
  );
};

export default PlanYourVisit;