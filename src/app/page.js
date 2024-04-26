'use client';

import { Button, useTheme } from '@mui/material';
import React from 'react'

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <div style={{ backgroundColor: theme.palette.primary.main }} >
        page
      </div>
      <Button>Hello</Button>
    </>
  )
}

export default Home