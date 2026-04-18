'use client'

import './globals.css'

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 1.5rem',
          textAlign: 'center',
          background: '#fafafa',
          color: '#0a0a0a',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <title>Something went wrong</title>
        <p
          style={{
            fontSize: 13,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#a3a3a3',
            marginBottom: 24,
          }}
        >
          Error
        </p>
        <h1
          style={{
            fontFamily: 'ui-serif, Georgia, "Times New Roman", serif',
            fontSize: 56,
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            maxWidth: '16ch',
            margin: 0,
          }}
        >
          Something went wrong.
        </h1>
        <p
          style={{
            marginTop: 24,
            maxWidth: 448,
            fontWeight: 300,
            lineHeight: 1.6,
            color: '#525252',
          }}
        >
          An unexpected error occurred. Please reload the page.
        </p>
        <div style={{ marginTop: 40 }}>
          <button
            onClick={() => unstable_retry()}
            style={{
              border: 0,
              cursor: 'pointer',
              padding: '10px 20px',
              borderRadius: 9999,
              background: '#0a0a0a',
              color: '#ffffff',
              fontSize: 14,
              fontFamily: 'inherit',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
