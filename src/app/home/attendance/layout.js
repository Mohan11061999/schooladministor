'use client';
import { Grid, Hidden, Typography } from '@mui/material'
import React from 'react'
import StudList from './studList'
import { Theme } from '@/theme/theme'

export default function AttendanceLayout({ children }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gridTemplateAreas: '"main list"', height: `calc(100vh - 100px)` }} >
            <div style={{ gridArea: "main" }}>
                {children}
            </div>
            <div style={{ gridArea: "list" }}>
                <Hidden mdDown >
                    <Grid py={"24px"} bgcolor={Theme.palette.background.default} >
                        <Typography variant='h5' px={4}>Students List</Typography>
                    </Grid>
                    <StudList />
                </Hidden>
            </div>
        </div>
    )
}
