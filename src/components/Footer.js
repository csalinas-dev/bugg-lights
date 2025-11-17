"use client";

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        paddingTop: '48px',
        paddingBottom: '48px',
        backgroundColor: '#090806',
        color: '#C6C3BA',
        opacity: 0.8,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
        columns={{ xs: 1, md: 3 }}
      >
        <Grid item xs={1}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'var(--font-bree-serif)',
              fontSize: '1.125rem',
              marginBottom: '0.5rem',
            }}
          >
            The Bugg Lights
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'var(--font-nunito)',
            }}
          >
            Albuquerque, New Mexico
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'var(--font-nunito)',
              marginBottom: '0.5rem',
            }}
          >
            Plan Your Visit
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'var(--font-nunito)',
              marginBottom: '0.5rem',
            }}
          >
            Donate Food Items
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'var(--font-nunito)',
              marginBottom: '0.5rem',
            }}
          >
            Sponsor Program
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'var(--font-nunito)',
              marginBottom: '0.5rem',
            }}
          >
            Rules & Courtesies
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'var(--font-nunito)',
            }}
          >
            Gallery
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#C6C3BA', fontSize: '1.5rem' }} />
            <FontAwesomeIcon icon={faTiktok} style={{ color: '#C6C3BA', fontSize: '1.5rem' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;