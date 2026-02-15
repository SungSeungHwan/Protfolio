import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <>
            <Navbar />
            <main style={{
                paddingTop: 'calc(var(--nav-height) + var(--space-lg))',
                minHeight: '100vh',
                paddingBottom: 'var(--space-xl)'
            }}>
                <div className="container fade-in">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default Layout
