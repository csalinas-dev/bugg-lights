"use client";

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { Glass } from '@/components/Glass';

const PlanYourVisit = () => {

  const guidelines = [
    {
      image: '/toons/penguin-no-parking.png',
      title: 'Parking',
      alt: 'Illustration of a penguin gesturing "no" in front of a car to indicate parking restrictions',
      desc: 'Park along nearby residential streets. Please don\'t block driveways. Avoid parking in front of The Bugg House (marked with traffic cones) and do not park in front of our neighbor\'s home that is also decorated (7727 Don Dr NE).',
    },
    {
      image: '/toons/penguins-shushing.png',
      title: 'Be a Good Neighbor',
      alt: 'Illustration of penguins with fingers to their beaks in a shushing gesture',
      desc: 'Keep volume reasonable and help us maintain a peaceful environment for the families who live here.',
    },
    {
      image: '/toons/penguin-sidewalk-only.png',
      title: 'Sidewalks Only',
      alt: 'Illustration of a penguin pointing to a sidewalk path',
      desc: 'Stick to sidewalks and walking paths so everyone can explore the display safely.',
    },
    {
      image: '/toons/penguin-watching-kids.png',
      title: 'Watch the Little Ones',
      alt: 'Illustration of a parent penguin watching over smaller penguins',
      desc: 'Keep children close and avoid touching the displays. Some pieces are old, delicate, and a little pokey. Staying hands off keeps everyone safe.',
    },
    {
      image: '/toons/santa-no-money.png',
      title: 'No Money Accepted',
      alt: 'Illustration of Santa Claus holding up his hand to decline monetary donations',
      desc: 'We don\'t accept tips or monetary donations at the house.',
    },
    {
      image: '/toons/penguin-food-donation.png',
      title: 'Optional Food Drive Items',
      alt: 'Illustration of a penguin holding canned food items for donation',
      desc: 'If you\'d like to give, we encourage non-perishable food donations to support local families this season.',
    },
  ];

  const posters = [
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
        gap: 4
      }}
    >

      <Glass sx={{ p: { xs: '1.5rem', md: "3rem", xl: "3rem 6rem" }, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Plan Your Visit
        </Typography>
        <Typography variant="body1" gutterBottom>
          The Bugg Lights shine every night from Thanksgiving to New Year&apos;s. Opening night begins at 6pm, and all following nights run from 5pm to 10pm. Take your time as you walk through, enjoy the lights, snap photos, and soak in the holiday atmosphere while being mindful of the neighborhood.
        </Typography>
        <Typography variant="body1">Please tag us on social media @bugglights</Typography>
      </Glass>
      <Grid container spacing={2}>
        {guidelines.map((item, index) => (
          <Grid item size={{ xs: 12, md: 4 }} key={index}>
            <Glass
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
                height: '100%',
                p: { xs: "1.25rem 1.5rem", md: "1.5rem 1.25rem" },
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={200}
                height={200}
                style={{
                  aspectRatio: 1 / 1,
                  filter: "drop-shadow(1px 2px 6px #df8c3840)",
                  objectFit: 'contain',
                }}
              />
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2">
                  {item.desc}
                </Typography>
              </Box>
            </Glass>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={4}>
        {posters.map((image, index) => (
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