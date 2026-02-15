import React from 'react'

const Resume = () => {
    return (
        <section>
            <h1 style={{ fontSize: '2rem', marginBottom: 'var(--space-lg)' }}>Resume</h1>

            <div style={{
                borderLeft: '1px solid var(--border-subtle)',
                paddingLeft: 'var(--space-md)',
                marginBottom: 'var(--space-lg)'
            }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
                    Senior Product Designer
                </p>
                <p style={{ marginBottom: 'var(--space-sm)' }}>
                    Focused on interaction design, design systems, and complex workflows.
                    Over 5 years of experience shipping products that scale.
                </p>
                <ul style={{
                    listStyle: 'none',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    gap: 'var(--space-md)',
                    fontSize: '0.9rem'
                }}>
                    <li>Systems Thinking</li>
                    <li>Prototyping</li>
                    <li>User Research</li>
                    <li>React/Front-end</li>
                </ul>
            </div>

            <a
                href="/resume.pdf"
                download
                style={{
                    display: 'inline-block',
                    border: '1px solid var(--border-subtle)',
                    padding: '1rem 2rem',
                    borderRadius: '4px',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    letterSpacing: '0.02em'
                }}
            >
                Download Resume (PDF)
            </a>
        </section>
    )
}

export default Resume
