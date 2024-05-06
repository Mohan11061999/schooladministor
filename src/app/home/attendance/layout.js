import { Grid } from '@mui/material'
import React from 'react'

export default function AttendanceLayout({ children }) {
    return (
        <Grid container >
            <Grid item>
                {children}
            </Grid>
            <Grid item>
                //List
            </Grid>
        </Grid>
    )
}
