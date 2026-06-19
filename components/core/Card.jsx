import React from 'react';

/**
 * DevAXL Card — lifted surface with hairline ring + soft elevation.
 */
export function Card({
  children,
  interactive = false,
  highlight = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const base = {
    background: 'var(--surface-card)',
    border: '1px solid',
    borderColor: highlight ? 'rgba(255,182,0,0.30)' : (hover && interactive ? 'var(--border-hover)' : 'var(--border-default)'),
    borderRadius: 'var(--radius-lg)',
    padding,
    boxShadow: highlight
      ? 'var(--glow-accent)'
      : (hover && interactive ? 'var(--shadow-lg), var(--inner-top)' : 'var(--shadow-sm), var(--inner-top)'),
    transform: hover && interactive ? 'translateY(-2px)' : 'translateY(0)',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    cursor: interactive ? 'pointer' : 'default',
  };

  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{ ...base, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
