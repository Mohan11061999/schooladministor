import { MoreVert } from '@mui/icons-material'
import { Avatar, Card, CardHeader, Grid, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'

const StudHorizontalCard = () => {
    return (
        // <Paper variant='outlined'>
        //     <Grid container >
        //         <Grid item container>
        //             <Avatar variant='square' sx={{ width: 70, height: 70, marginRight: 1 }} />
        //             <Grid item container>
        //                 <Grid item> <Typography variant='h6' >Student Name</Typography></Grid>
        //                 <Grid item> <Typography variant='h6' >12M</Typography></Grid>
        //             </Grid>

        //         </Grid>
        //         <Grid item>

        //         </Grid>
        //     </Grid>
        // </Paper>
        <Card sx={{ maxWidth: 345 }} variant='outlined' >
            <CardHeader
                avatar={
                    <Avatar variant='square' >
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={<Typography variant='h6' color={"black"} >Mohan 12M</Typography>}
                subheader="17ME072 - B+ve - abcd"
            />
        </Card>
    )
}

export default StudHorizontalCard