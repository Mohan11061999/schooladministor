import { Hidden } from '@mui/material'
import React from 'react'
import StudList from './studList'

export default function AttendanceLayout({ children }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gridTemplateAreas: '"main list"', height: `calc(100vh - 85.9px)` }} >
            <div style={{ gridArea: "main" }}>
                {children}
            </div>
            <div style={{ gridArea: "list" }}>
                <Hidden mdDown >
                    <StudList />
                </Hidden>
            </div>
        </div>
    )
}
