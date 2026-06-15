import React from 'react';

const CSS = `
.ahvl-badge{ display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-mono); font-size:11px; font-weight:600; letter-spacing:.06em; text-transform:uppercase;
  padding:3px 9px; border-radius:var(--radius-sm); line-height:1.4; white-space:nowrap; border:1px solid transparent; }
.ahvl-badge__dot{ width:6px; height:6px; border-radius:50%; background:currentColor; }
/* soft (default) */
.ahvl-badge--neutral{ background:var(--surface-sunken); color:var(--text-muted); }
.ahvl-badge--brand{ background:var(--blue-100); color:var(--blue-700); }
.ahvl-badge--success{ background:var(--success-bg); color:#1c7a52; }
.ahvl-badge--warning{ background:var(--warning-bg); color:#9a6712; }
.ahvl-badge--danger{ background:var(--danger-bg); color:#b4373b; }
.ahvl-badge--cyan{ background:color-mix(in oklab, var(--cyan-500) 18%, var(--white)); color:var(--cyan-600); }
/* solid */
.ahvl-badge--solid.ahvl-badge--neutral{ background:var(--ink); color:#fff; }
.ahvl-badge--solid.ahvl-badge--brand{ background:var(--brand); color:#fff; }
.ahvl-badge--solid.ahvl-badge--success{ background:var(--success); color:#fff; }
.ahvl-badge--solid.ahvl-badge--warning{ background:var(--warning); color:#fff; }
.ahvl-badge--solid.ahvl-badge--danger{ background:var(--danger); color:#fff; }
.ahvl-badge--solid.ahvl-badge--cyan{ background:var(--cyan-500); color:var(--ink); }
`;

function ensureStyle(){
  if (typeof document === 'undefined' || document.getElementById('ahvl-badge-style')) return;
  const s = document.createElement('style'); s.id='ahvl-badge-style'; s.textContent=CSS;
  document.head.appendChild(s);
}

export function Badge({ variant = 'neutral', solid = false, dot = false, children, className = '', ...rest }) {
  ensureStyle();
  const cls = ['ahvl-badge', `ahvl-badge--${variant}`, solid ? 'ahvl-badge--solid' : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className="ahvl-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
