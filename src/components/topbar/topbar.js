import { Avatar, Grid, Typography } from '@mui/material'
import Image from 'next/image';

export const TopBar = () => {
    return (
        <Grid container justifyContent={"space-between"} alignItems={"center"} padding={"20px 30px"} borderBottom={"1px solid #e0e0e0"}  >
            <Grid item  >
                <Grid container alignItems={"center"} gap={2}  >
                    <Image src={"/logo.png"} width={32} height={32} />
                    <Typography variant='h4' color={"GrayText"} >ABCD School</Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container gap={2} justifyContent={"space-between"} alignItems={"center"} >
                    <Grid item>
                        <Grid container direction="column"   >
                            <Grid item><Typography variant='h5' >Mohan</Typography></Grid>
                            <Grid item><Typography variant='caption' >Staff</Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid item><Avatar /></Grid>
                </Grid>

            </Grid>
        </Grid>

    )
}
