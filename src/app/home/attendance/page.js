import React from 'react'
import StudCard from './studCard'
import { Grid } from '@mui/material'
import StudCarosel from './studCarosel'

const Attendance = () => {
    return (
        <div style={{ height: `calc(100vh - 100px)` }}>
            <StudCarosel />
        </div>
    )

}

export default Attendance