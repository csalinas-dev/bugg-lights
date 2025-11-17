"use client";

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';

const MiniGallery = () => {
  // Placeholder images - replace with actual image paths
  const images = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
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
        backgroundColor: '#090806',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontFamily: 'var(--font-nunito)',
          color: '#C6C3BA',
          marginBottom: '2rem',
          opacity: 0.7,
        }}
      >
        A look at previous seasons
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: '1200px',
          width: '100%',
          justifyContent: 'center',
        }}
        columns={{ xs: 1, sm: 2, md: 4 }}
      >
        {images.map((src, index) => (
          <Grid item xs={1} key={index}>
            <Box
              sx={{
                cursor: 'pointer',
                borderRadius: '8px',
                overflow: 'hidden',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
              onClick={() => {
                // Placeholder for opening gallery or lightbox
                console.log('Open gallery for image:', src);
              }}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={350}
                height={300}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MiniGallery;