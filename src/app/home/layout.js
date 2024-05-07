'use client';
import { SideBar } from '@/components/sidebar/sidebar';
import { TopBar } from '@/components/topbar/topbar';
import React from 'react';
export default function Layout({ children }) {
    const [open, setOpen] = React.useState("70px");
    const handleOpenSideBar = () => {
        setOpen(open == "70px" ? "200px" : "70px");

    }
    return (
        <div style={{
            display: 'grid', gridTemplateColumns: `${open} 1fr`, gridTemplateRows: '90px 1fr', height: '100vh', gridTemplateAreas:
                '"sidebar topbar" "sidebar main"'
        }} >
            <div style={{ gridArea: 'sidebar' }}>
                <SideBar open={open} handleOpenSideBar={handleOpenSideBar} />
            </div>
            <div style={{ gridArea: 'topbar' }}>
                <TopBar />
            </div>
            <div style={{ gridArea: 'main' }}>
                {children}
            </div>
        </div>
    );
}
