import { Switch, Typography } from '@mui/material';
import React from 'react'

const ColorMode = ({ darkMode, handleThemeChange }) => {
    return (
      <>
        <Switch checked={darkMode} onChange={handleThemeChange} />
        <Typography variant="h3">{darkMode ? "🌙Dark" : "🔆Light"}</Typography>
      </>
  )
}

export default ColorMode;