import { Theme } from '@/theme/theme'
import { Button, Card, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const StudCard = ({ name, rollNo, age, Gender, email, BloodGroup, address }) => {
    return (
        <Card  >
            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} gap={2} px={2} py={2} >
                <Grid item >
                    <Image src={"/imageSkeleton.png"} width={260} height={300} />
                </Grid>
                <Grid item >
                    <Typography variant='h4' >{name}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant='caption' >Student</Typography>{" - "}
                    <Typography variant='caption' >{age} M</Typography>{" - "}
                    <Typography variant='caption' >{rollNo}</Typography>{" - "}
                    <Typography variant='caption' >B+ve</Typography>
                </Grid>
                <Grid item container justifyContent={"center"} gap={2} >
                    <Button variant='outlined'   >Absent</Button>
                    <Button variant='contained'>Present</Button>
                </Grid>
                <Grid item >
                </Grid>
                <Grid item >
                </Grid>
            </Grid>
        </Card>
    )
}

export default StudCard