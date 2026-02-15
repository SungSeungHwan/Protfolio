import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

const WorkDetail = () => {
    const { id } = useParams()
    const project = projects.find(p => p.id === id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (!project) return <div>Project not found</div>

    const Section = ({ title, content }) => (
        <div style={{ marginBottom: 'var(--space-lg)' }}>
            <h3 style={{
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-muted)',
                marginBottom: 'var(--space-sm)'
            }}>
                {title}
            </h3>
            <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)'
            }}>
                {content}
            </p>
        </div>
    )

    return (
        <article className="fade-in">
            <div style={{ marginBottom: 'var(--space-xl)' }}>
                <Link to="/work" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 'var(--space-md)', display: 'inline-block' }}>
                    ← Back to Index
                </Link>
                <h1 style={{ fontSize: '3rem', marginTop: 'var(--space-sm)' }}>{project.title}</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{project.oneLiner}</p>

                <div style={{
                    marginTop: 'var(--space-md)',
                    display: 'flex',
                    gap: 'var(--space-md)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                }}>
                    <span>Role: {project.role}</span>
                    <span>Year: {project.year}</span>
                </div>
            </div>

            <div style={{ maxWidth: '640px' }}>
                <Section title="Background" content={project.background} />
                <Section title="The Problem" content={project.problem} />

                <div style={{
                    borderLeft: '4px solid var(--border-subtle)',
                    paddingLeft: 'var(--space-md)',
                    margin: 'var(--space-lg) 0'
                }}>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Key Insight</h3>
                    <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                        "{project.insight}"
                    </p>
                </div>

                <Section title="The Solution" content={project.solution} />
                <Section title="Outcome" content={project.outcome} />
            </div>

            <div style={{ marginTop: 'var(--space-xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--border-subtle)' }}>
                <Link to="/work" style={{ color: 'var(--text-primary)' }}>Next Project →</Link>
            </div>
        </article>
    )
}

export default WorkDetail
