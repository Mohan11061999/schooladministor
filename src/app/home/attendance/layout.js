import { Grid } from '@mui/material'
import React from 'react'

export default function AttendanceLayout({ children }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gridTemplateAreas: '"main list"', height: "100%" }} >
            <div style={{ gridArea: "main" }}>
                {children}
            </div>
            <div style={{ gridArea: "list", backgroundColor: "red" }}>
                //List
            </div>
        </div>
    )
}
