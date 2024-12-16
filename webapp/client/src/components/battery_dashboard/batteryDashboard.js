import React from 'react';
import { Box, Typography } from '@mui/material';

const BatteryDashboard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h2" sx={{ color: '#333', marginBottom: '20px' }}>
        Under Construction
      </Typography>
      <Typography variant="body1" sx={{ color: '#666' }}>
        This page is currently under construction. Please check back later.
      </Typography>
    </Box>
  );
};

export default BatteryDashboard;