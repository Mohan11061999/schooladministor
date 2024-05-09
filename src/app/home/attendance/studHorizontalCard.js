import { MoreVert } from '@mui/icons-material'
import { Avatar, Card, CardHeader, ToggleButton, Typography } from '@mui/material'
import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const StudHorizontalCard = () => {
    const [selected, setSelected] = React.useState(false)
    return (
        <Card sx={{ maxWidth: 345 }} variant='outlined' >
            <CardHeader
                avatar={
                    <Avatar variant='square' src='/imageSkeleton.png' sx={{ width: 40, height: 40 }} />
                }
                action={
                    < ToggleButton
                        value="check"
                        selected={selected}
                        onChange={() => {
                            setSelected(!selected);
                        }}
                        color="success"
                        size='small'
                    >
                        <CheckBoxIcon />
                    </ToggleButton >
                }
                title={< Typography variant='h6' color={"black"} > Mohan 12M</Typography >}
                subheader="17ME072 - B+ve - abcd"
            />
        </Card >
    )
}

export default StudHorizontalCard