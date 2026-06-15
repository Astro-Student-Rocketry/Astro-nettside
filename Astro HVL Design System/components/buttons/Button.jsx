import React from 'react';

const CSS = `
.ahvl-btn{
  --_pad-y:10px; --_pad-x:18px; --_fs:14px;
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  font-family:var(--font-sans); font-weight:600; font-size:var(--_fs);
  line-height:1; letter-spacing:.01em; white-space:nowrap;
  padding:var(--_pad-y) var(--_pad-x); border-radius:var(--radius-md);
  border:1px solid transparent; cursor:pointer; text-decoration:none;
  transition:background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out),
             color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
  -webkit-tap-highlight-color:transparent;
}
.ahvl-btn:focus-visible{ outline:3px solid var(--focus-ring); outline-offset:2px; }
.ahvl-btn:active{ transform:translateY(1px); }
.ahvl-btn[disabled],.ahvl-btn[aria-disabled="true"]{ opacity:.5; pointer-events:none; }
.ahvl-btn--sm{ --_pad-y:7px; --_pad-x:13px; --_fs:13px; }
.ahvl-btn--lg{ --_pad-y:14px; --_pad-x:24px; --_fs:16px; }
.ahvl-btn--block{ display:flex; width:100%; }

.ahvl-btn--primary{ background:var(--brand); color:var(--brand-contrast); }
.ahvl-btn--primary:hover{ background:var(--brand-hover); }
.ahvl-btn--primary:active{ background:var(--brand-active); }

.ahvl-btn--secondary{ background:transparent; color:var(--text-strong); border-color:var(--border-strong); }
.ahvl-btn--secondary:hover{ border-color:var(--brand); color:var(--brand); background:color-mix(in oklab, var(--brand) 6%, transparent); }

.ahvl-btn--ghost{ background:transparent; color:var(--text-strong); }
.ahvl-btn--ghost:hover{ background:color-mix(in oklab, var(--text-strong) 8%, transparent); }

.ahvl-btn--danger{ background:var(--danger); color:#fff; }
.ahvl-btn--danger:hover{ background:color-mix(in oklab, var(--danger) 88%, #000); }

.ahvl-btn__spin{ width:14px; height:14px; border-radius:50%;
  border:2px solid currentColor; border-right-color:transparent; animation:ahvl-spin .6s linear infinite; }
@keyframes ahvl-spin{ to{ transform:rotate(360deg); } }
`;

function ensureStyle(){
  if (typeof document === 'undefined') return;
  if (document.getElementById('ahvl-btn-style')) return;
  const s = document.createElement('style');
  s.id = 'ahvl-btn-style'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  href,
  type = 'button',
  className = '',
  ...rest
}) {
  ensureStyle();
  const cls = [
    'ahvl-btn',
    `ahvl-btn--${variant}`,
    size !== 'md' ? `ahvl-btn--${size}` : '',
    fullWidth ? 'ahvl-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  const inner = (
    <>
      {loading && <span className="ahvl-btn__spin" aria-hidden="true" />}
      {!loading && icon}
      {children}
      {!loading && iconRight}
    </>
  );

  if (href && !disabled) {
    return <a className={cls} href={href} {...rest}>{inner}</a>;
  }
  return (
    <button className={cls} type={type} disabled={disabled || loading} {...rest}>
      {inner}
    </button>
  );
}
