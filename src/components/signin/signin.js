'use client';
import { Button, FormControl, Grid, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const SignIn = () => {
    const router = useRouter();
    return (
        <Grid container justifyContent={"center"} alignItems={'center'} paddingBottom={"20vh"} height={"100vh"} >
            <Paper sx={{ minWidth: 350, padding: 4 }} variant='outlined' >
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
                    <Grid item>
                        <Typography variant="h3">Sign In</Typography>
                    </Grid>
                    <Grid item container >
                        <Typography variant="caption" gutterBottom >Select a role</Typography>
                        <FormControl size="small" fullWidth>
                            <Select>
                                <MenuItem value="Admin" >Admin</MenuItem>
                                <MenuItem value="Student" >Student</MenuItem>
                                <MenuItem value="Teacher" >Teacher</MenuItem>
                                <MenuItem value="Parent" >Parent</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item container >
                        <Typography variant="caption" gutterBottom >Email</Typography>
                        <TextField size="small" fullWidth />
                    </Grid>
                    <Grid item container >
                        <Typography variant="caption" gutterBottom >Password</Typography>
                        <TextField size="small" fullWidth type="password" />
                    </Grid>
                    <Grid item container marginTop={2} >
                        <Button variant="contained" fullWidth onClick={() => { router.push('/home/dashboard') }}>Sign In</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid >
    )
}

export default SignIn;