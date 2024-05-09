'use client';
import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import StudHorizontalCard from './studHorizontalCard'
import { Theme } from '@/theme/theme'

const StudList = () => {
    return (
        <Container style={{
            height: `calc(100vh - 200px)`,
            backgroundColor: Theme.palette.background.default,
            overflow: "auto",
        }} >
            <Grid container gap={2} py={2} direction={"column"} style={{
                // height: `calc(100vh - 90px)`,


            }} >
                <Grid item >
                    <StudHorizontalCard />
                </Grid>
                <Grid item >
                    <StudHorizontalCard />
                </Grid>
                <Grid item >
                    <StudHorizontalCard />
                </Grid>
                <Grid item >
                    <StudHorizontalCard />
                </Grid>
                <Grid item >
                    <StudHorizontalCard />
                </Grid>
                <Grid item >
                    <StudHorizontalCard />
                </Grid>
                <Grid item >
                    <StudHorizontalCard />
                </Grid>
                <Grid item >
                    <StudHorizontalCard />
                </Grid>
                <Grid item >
                    <StudHorizontalCard />
                </Grid>
                <Grid item >
                    <StudHorizontalCard />
                </Grid>
            </Grid>
        </Container>
    )
}

export default StudList