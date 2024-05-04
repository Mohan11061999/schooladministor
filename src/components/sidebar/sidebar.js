import { ArrowForwardIosOutlined } from '@mui/icons-material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import { Grid, Hidden, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link';

export const SideBar = ({ open, handleOpenSideBar }) => {
    return (
        <Paper color={"background"} sx={{ height: "100vh" }} elevation={0} variant="outlined" justifyContent="center" >
            <Grid container sx={{ padding: "20px 0" }} >
                <Grid item container justifyContent={"center"} alignItems="center">
                    <IconButton size='large' onClick={handleOpenSideBar} >
                        <KeyboardDoubleArrowRightIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}  >
                <Grid item container justifyContent={"flex-start"} alignItems="center" >
                    <Link href="/home/dashboard" style={{ display: 'flex', alignItems: "center", textDecoration: 'none', color: 'black' }}>
                        <IconButton >
                            <DashboardOutlinedIcon />
                        </IconButton>
                        {open == "200px" ? (<Typography variant='h5'>Dashboard</Typography>) : (<></>)}

                    </Link>
                </Grid>
                <Grid item container justifyContent={"flex-start"} alignItems="center" >
                    <Link href="/home/attendance" style={{ display: 'flex', alignItems: "center", textDecoration: 'none', color: 'black' }}>
                        <IconButton >
                            <ChecklistOutlinedIcon />
                        </IconButton>
                        {open == "200px" ? (<Typography variant='h5'>Attendance</Typography>) : (<></>)}

                    </Link>
                </Grid>
                <Grid item container justifyContent={"flex-start"} alignItems="center" >
                    <Link href="/home/calendar" style={{ display: 'flex', alignItems: "center", textDecoration: 'none', color: 'black' }}>
                        <IconButton >
                            <CalendarMonthOutlinedIcon />
                        </IconButton>
                        {open == "200px" ? (<Typography variant='h5'>Calendar</Typography>) : (<></>)}

                    </Link>

                </Grid>
                <Grid item container justifyContent={"flex-start"} alignItems="center" >

                    <Link href="/home/settings" style={{ display: 'flex', alignItems: "center", textDecoration: 'none', color: 'black' }}>
                        <IconButton >
                            <SettingsOutlinedIcon />
                        </IconButton>
                        {open == "200px" ? (<Typography variant='h5'>Settings</Typography>) : (<></>)}

                    </Link>

                </Grid>
            </Grid>
        </Paper>
    )
}
