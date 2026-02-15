import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const Work = () => {
    return (
        <section>
            <h1 style={{ fontSize: '2rem', marginBottom: 'var(--space-lg)' }}>Selected Work</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                {projects.map(project => (
                    <article key={project.id} style={{
                        borderTop: '1px solid var(--border-subtle)',
                        paddingTop: 'var(--space-md)'
                    }}>
                        <Link to={`/work/${project.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                            {project.image && (
                                <div style={{
                                    marginBottom: 'var(--space-sm)',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    aspectRatio: '16/9',
                                    backgroundColor: 'var(--bg-secondary)'
                                }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                            )}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-xs)' }}>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                    {project.title}
                                </h2>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{project.year}</span>
                            </div>

                            <p style={{
                                fontSize: '1.1rem',
                                color: 'var(--text-secondary)',
                                maxWidth: '600px',
                                marginBottom: '1rem' // spacing
                            }}>
                                {project.oneLiner}
                            </p>

                            <span style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-primary)',
                                textDecoration: 'underline',
                                textUnderlineOffset: '4px'
                            }}>
                                Read Case Study →
                            </span>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Work
