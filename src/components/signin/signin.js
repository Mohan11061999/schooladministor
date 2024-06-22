'use client';
import { serveract } from '@/lib/actions';
import { Button, FormControl, Grid, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { useFormStatus } from "react-dom";
import { useFormState } from 'react-dom';

const SignIn = () => {
    const { pending } = useFormStatus();
    const initialState = {
        error: "",
    };
    const [state, formAction] = useFormState(serveract, initialState);

    return (
        <form action={formAction}>
            <Grid container justifyContent={"center"} alignItems={'center'} paddingBottom={"20vh"} height={"100vh"} >
                <Paper sx={{ minWidth: 350, padding: 4 }} variant='outlined' >
                    <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
                        <Grid item>
                            <Typography variant="h3">Sign In</Typography>
                        </Grid>
                        <Grid item container >
                            <Typography variant="caption" gutterBottom >Select a role</Typography>
                            <FormControl size="small" fullWidth>
                                <Select name='role'>
                                    <MenuItem value="Admin" >Admin</MenuItem>
                                    <MenuItem value="student" >Student</MenuItem>
                                    <MenuItem value="Teacher" >Teacher</MenuItem>
                                    <MenuItem value="Parent" >Parent</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item container >
                            <Typography variant="caption" gutterBottom >Email</Typography>
                            <TextField size="small" fullWidth name='email' />
                        </Grid>
                        <Grid item container >
                            <Typography variant="caption" gutterBottom >Password</Typography>
                            <TextField size="small" fullWidth type="password" name='password' />
                        </Grid>
                        {state?.error ? (<Grid item container>
                            <Typography variant="caption" color="red" gutterBottom >{state.error}</Typography>
                        </Grid>) : (<></>)}
                        <Grid item container marginTop={2} >
                            <Button variant="contained" type='submit' fullWidth disabled={pending} >Sign In</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid >
        </form>

    )
}

export default SignIn;