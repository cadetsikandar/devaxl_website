import React from 'react';

const TONES = {
  neutral: { bg: 'var(--surface-3)', fg: 'var(--text-secondary)', bd: 'var(--border-default)' },
  accent:  { bg: 'var(--accent-quiet)', fg: 'var(--accent)', bd: 'rgba(255,182,0,0.30)' },
  success: { bg: 'rgba(63,185,105,0.12)', fg: 'var(--status-success)', bd: 'rgba(63,185,105,0.30)' },
  danger:  { bg: 'rgba(240,88,79,0.12)', fg: 'var(--status-danger)', bd: 'rgba(240,88,79,0.30)' },
};

/**
 * DevAXL Badge — compact status / category label.
 */
export function Badge({ children, tone = 'neutral', dot = false, style = {}, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 24,
        padding: '0 10px',
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-micro)',
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: '0.02em',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.fg }} />}
      {children}
    </span>
  );
}
