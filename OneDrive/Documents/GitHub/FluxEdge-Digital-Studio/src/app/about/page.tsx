export default function About() {
    return (
        <main className="container" style={{ paddingTop: '20vh', minHeight: '100vh', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', textTransform: 'uppercase', lineHeight: 0.9, marginBottom: '4rem' }}>Our Story</h1>
            <div style={{ display: 'grid', gap: '2rem' }}>
                <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', lineHeight: 1.4, fontWeight: 400 }}>
                    FluxEdge Digital Studio was born from the belief that digital interaction should be physical, emotional, and alive.
                    We don't just build websites; we create kinetic digital environments that respond, breathe, and evolve with the user.
                </p>
                <p style={{ fontSize: '1.1rem', opacity: 0.6, maxWidth: '600px' }}>
                    We are a collective of designers, developers, and motion artists redefining the boundaries of the web through advanced WebGL, physics-based animation, and precision engineering.
                </p>
            </div>
        </main>
    )
}
