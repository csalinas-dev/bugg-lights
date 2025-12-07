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
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          The Bugg Lights shine every night from Thanksgiving to New Year’s. Opening night begins at 6pm, and all following nights run from 5pm to 10pm. Take your time as you walk through, enjoy the lights, snap photos, and soak in the holiday atmosphere while being mindful of the neighborhood.
        </Typography>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          {[
            {
              icon: '🐧🚗',
              title: 'Parking & Cones',
              desc: 'Park along nearby residential streets. Please don\'t block driveways. Avoid parking in front of The Bugg House (marked with traffic cones) and do not park in front of our neighbor\'s home directly west of us at 7727 Don Dr NE (south side of the street).',
            },
            {
              icon: '🤫',
              title: 'Be a Good Neighbor',
              desc: 'Keep volume reasonable and help us maintain a peaceful environment for the families who live here.',
            },
            {
              icon: '🚶',
              title: 'Sidewalks Only',
              desc: 'Stick to sidewalks and walking paths so everyone can explore the display safely.',
            },
            {
              icon: '👨‍👩‍👧‍👦',
              title: 'Watch the Little Ones',
              desc: 'Keep children close near lights and moving displays so they stay safe while exploring.',
            },
            {
              icon: '🚫💰',
              title: 'No Money Accepted',
              desc: 'We don\'t accept tips or monetary donations at the house.',
            },
            {
              icon: '🥫',
              title: 'Optional Food Drive Items',
              desc: 'If you\'d like to give, we encourage non-perishable food donations to support local families this season.',
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  backdropFilter: 'blur(5px)',
                  backgroundColor: '#1a264480',
                  borderRadius: '1.5rem',
                  border: '2px solid #435991',
                  boxShadow: '0 0 8px rgba(67, 89, 145, 0.3)',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body1" sx={{ mr: 1, fontSize: '1.5rem' }}>
                    {item.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2">
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
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