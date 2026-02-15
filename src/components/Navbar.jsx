import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const linkStyle = ({ isActive }) => ({
        color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
        opacity: isActive ? 1 : 0.6,
        borderBottom: isActive ? '1px solid var(--text-primary)' : '1px solid transparent',
        paddingBottom: '2px',
        fontSize: '0.95rem',
        fontWeight: 500,
        transition: 'all 0.3s ease'
    })

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: 'var(--nav-height)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', // Centered tabs as per minimal aesthetic
            background: 'rgba(10, 10, 10, 0.7)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            zIndex: 1000
        }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <NavLink to="/" style={linkStyle}>
                    Intro
                </NavLink>
                <NavLink to="/work" style={linkStyle}>
                    Work
                </NavLink>
                <NavLink to="/resume" style={linkStyle}>
                    Resume
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
