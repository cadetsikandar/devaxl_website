/* @ds-bundle: {"format":3,"namespace":"DevAXLDesignSystem_c36fcf","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"93fd1d569307","components/core/Button.jsx":"4067157bb574","components/core/Card.jsx":"625d62ba6d64","components/core/Input.jsx":"2173ee592dac"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DevAXLDesignSystem_c36fcf = window.DevAXLDesignSystem_c36fcf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--surface-3)',
    fg: 'var(--text-secondary)',
    bd: 'var(--border-default)'
  },
  accent: {
    bg: 'var(--accent-quiet)',
    fg: 'var(--accent)',
    bd: 'rgba(255,182,0,0.30)'
  },
  success: {
    bg: 'rgba(63,185,105,0.12)',
    fg: 'var(--status-success)',
    bd: 'rgba(63,185,105,0.30)'
  },
  danger: {
    bg: 'rgba(240,88,79,0.12)',
    fg: 'var(--status-danger)',
    bd: 'rgba(240,88,79,0.30)'
  }
};

/**
 * DevAXL Badge — compact status / category label.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: 'var(--fs-body-sm)',
    padding: '0 14px',
    height: 34,
    radius: 'var(--radius-sm)',
    gap: 7
  },
  md: {
    fontSize: 'var(--fs-body-sm)',
    padding: '0 18px',
    height: 40,
    radius: 'var(--radius-md)',
    gap: 8
  },
  lg: {
    fontSize: 'var(--fs-body)',
    padding: '0 24px',
    height: 48,
    radius: 'var(--radius-md)',
    gap: 10
  }
};

/**
 * DevAXL Button — primary (amber) and ghost/secondary variants.
 */
function Button({
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
    userSelect: 'none'
  };
  const variants = {
    primary: {
      background: hover ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--text-on-accent)',
      boxShadow: hover && !disabled ? 'var(--glow-accent)' : 'var(--shadow-xs)'
    },
    secondary: {
      background: hover ? 'var(--surface-2)' : 'transparent',
      color: 'var(--text-primary)',
      borderColor: hover ? 'var(--border-strong)' : 'var(--border-default)'
    },
    ghost: {
      background: hover ? 'var(--surface-2)' : 'transparent',
      color: 'var(--text-secondary)'
    },
    danger: {
      background: hover ? '#d94a41' : 'transparent',
      color: hover ? '#fff' : 'var(--status-danger)',
      borderColor: 'rgba(240,88,79,0.35)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DevAXL Card — lifted surface with hairline ring + soft elevation.
 */
function Card({
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
    borderColor: highlight ? 'rgba(255,182,0,0.30)' : hover && interactive ? 'var(--border-hover)' : 'var(--border-default)',
    borderRadius: 'var(--radius-lg)',
    padding,
    boxShadow: highlight ? 'var(--glow-accent)' : hover && interactive ? 'var(--shadow-lg), var(--inner-top)' : 'var(--shadow-sm), var(--inner-top)',
    transform: hover && interactive ? 'translateY(-2px)' : 'translateY(0)',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    cursor: interactive ? 'pointer' : 'default'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DevAXL Input — dark field with amber focus ring.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 42,
      padding: '0 14px',
      background: 'var(--surface-3)',
      border: '1px solid',
      borderColor: invalid ? 'var(--status-danger)' : focus ? 'var(--accent)' : 'var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: focus && !invalid ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      display: 'inline-flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      ...style
    }
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      color: invalid ? 'var(--status-danger)' : 'var(--text-tertiary)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

})();
