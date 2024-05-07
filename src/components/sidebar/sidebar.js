import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { Button, Grid, Hidden, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Theme } from '@/theme/theme';

const SideBarItem = [
    {
        name: "Dashboard",
        icon: DashboardOutlinedIcon,
        activeIcon: DashboardIcon,
        href: "/home/dashboard",
    },
    {
        name: "Attendance",
        icon: FactCheckOutlinedIcon,
        activeIcon: FactCheckIcon,
        href: "/home/attendance",
    },
    {
        name: "Calendar",
        icon: CalendarMonthOutlinedIcon,
        activeIcon: CalendarMonthIcon,
        href: "/home/calendar",
    },
    {
        name: "Settings",
        icon: SettingsOutlinedIcon,
        activeIcon: SettingsApplicationsIcon,
        href: "/home/settings",
    },
];

export const SideBar = ({ open, handleOpenSideBar }) => {
    const pathname = usePathname()
    return (
        <Paper color={"background"} sx={{ height: "100vh" }} elevation={0} variant="outlined" justifyContent="center" >
            <Grid container sx={{ padding: "20px 0" }} >
                <Grid item container justifyContent={"center"} alignItems="center">
                    <IconButton size='large' onClick={handleOpenSideBar} >
                        {open == "70px" ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowRightIcon sx={{ transform: "rotate(180deg)" }} />}
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container direction="column" gap={2} px={1} >
                {SideBarItem.map((item) => (
                    <Grid item container justifyContent={"center"} alignItems="center" style={pathname == item.href ? { backgroundColor: Theme.palette.primary.bg, borderRadius: "3px" } : {}} >
                        <Link href={item.href} style={{ display: "flex", alignItems: "center", textDecoration: 'none', color: 'black' }} >
                            <IconButton >
                                {pathname == item.href ? (
                                    <item.activeIcon color="primary" />
                                ) : (
                                    <item.icon />
                                )
                                }
                            </IconButton>
                            {open == "200px" ? (<Typography variant='h5' width={"120px"} color={pathname == item.href ? "primary" : ""} >{item.name}</Typography>) : (<></>)}

                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}
