import React from 'react';

/**
 * DevAXL Input — dark field with amber focus ring.
 */
export function Input({
  label = null,
  hint = null,
  prefix = null,
  invalid = false,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)', color: 'var(--text-secondary)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        height: 42, padding: '0 14px',
        background: 'var(--surface-3)',
        border: '1px solid',
        borderColor: invalid ? 'var(--status-danger)' : (focus ? 'var(--accent)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-md)',
        boxShadow: focus && !invalid ? 'var(--ring-focus)' : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      }}>
        {prefix && <span style={{ color: 'var(--text-tertiary)', display: 'inline-flex' }}>{prefix}</span>}
        <input
          id={inputId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, height: '100%', border: 'none', outline: 'none',
            background: 'transparent', color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)',
            ...style,
          }}
          {...rest}
        />
      </div>
      {hint && (
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)',
          color: invalid ? 'var(--status-danger)' : 'var(--text-tertiary)',
        }}>{hint}</span>
      )}
    </div>
  );
}
