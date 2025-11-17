import React from 'react';
import { Box } from '@mui/material';

const Splash = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(/background-expanded.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src="/logo.jpg"
        alt="Logo"
        sx={{
          maxWidth: '200px',
          maxHeight: '200px',
        }}
      />
    </Box>
  );
};

export default Splash;