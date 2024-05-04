import { AppBar, Avatar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';

export const TopBar = () => {
    return (
        <Grid container justifyContent={"space-between"} alignItems={"center"} padding={"20px 10px"} border={"1px solid #e0e0e0"}  >
            <Grid item  >
                <Grid container alignItems={"center"} gap={2}  >
                    <WbSunnySharpIcon />
                    <Typography variant='h2'  >Good Morning, User</Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Avatar />
            </Grid>
        </Grid>

    )
}
