import React from 'react';

const SIZES = {
  sm: { fontSize: 'var(--fs-body-sm)', padding: '0 14px', height: 34, radius: 'var(--radius-sm)', gap: 7 },
  md: { fontSize: 'var(--fs-body-sm)', padding: '0 18px', height: 40, radius: 'var(--radius-md)', gap: 8 },
  lg: { fontSize: 'var(--fs-body)',    padding: '0 24px', height: 48, radius: 'var(--radius-md)', gap: 10 },
};

/**
 * DevAXL Button — primary (amber) and ghost/secondary variants.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  full = false,
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '-0.01em',
    lineHeight: 1,
    borderRadius: s.radius,
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
    transform: active && !disabled ? 'scale(0.98)' : 'scale(1)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
  };

  const variants = {
    primary: {
      background: hover ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--text-on-accent)',
      boxShadow: hover && !disabled ? 'var(--glow-accent)' : 'var(--shadow-xs)',
    },
    secondary: {
      background: hover ? 'var(--surface-2)' : 'transparent',
      color: 'var(--text-primary)',
      borderColor: hover ? 'var(--border-strong)' : 'var(--border-default)',
    },
    ghost: {
      background: hover ? 'var(--surface-2)' : 'transparent',
      color: 'var(--text-secondary)',
    },
    danger: {
      background: hover ? '#d94a41' : 'transparent',
      color: hover ? '#fff' : 'var(--status-danger)',
      borderColor: 'rgba(240,88,79,0.35)',
    },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{ ...base, ...(variants[variant] || variants.primary), ...style }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
