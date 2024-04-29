import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const SignIn = () => {
  return (
      <Grid container justifyContent="center" alignItem="center" style={{height: "100vh"}}>
          <Paper style={{height: "50vh"}}>
              <Grid container direction="column" alignItem="center" >
                <Typography variant="h1" >Log in</Typography>
                <TextField fullWidth/>
                <TextField />
                <TextField />
                <Button>Log in</Button>   
              </Grid>
          </Paper>
      </Grid>
  )
}

export default SignIn;