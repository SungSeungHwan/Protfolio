import React from 'react'

const Intro = () => {
    return (
        <section style={{ maxWidth: '640px' }}>
            <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                marginBottom: 'var(--space-md)',
                color: 'var(--text-primary)'
            }}>
                I design clarity out of complexity.
            </h1>

            <div style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--text-secondary)'
            }}>
                <p>
                    Hello, I’m [Your Name]. I’m a product designer focused on systems, strategy, and rigorous problem-solving.
                </p>
                <p>
                    I believe design is not just about decoration, but about making intentional trade-offs to serve real human needs.
                    My work creates structure in chaotic environments and simplifies the tools we use every day.
                </p>
                <p style={{ marginTop: 'var(--space-md)' }}>
                    Currently building better interfaces for [Current Role/Target].
                </p>
            </div>
        </section>
    )
}

export default Intro
