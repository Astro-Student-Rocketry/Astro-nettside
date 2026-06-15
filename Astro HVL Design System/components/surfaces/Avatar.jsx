import React from 'react';

const CSS = `
.ahvl-avatar{ display:inline-flex; align-items:center; justify-content:center; flex:none;
  border-radius:50%; overflow:hidden; background:var(--navy-800); color:#fff;
  font-family:var(--font-mono); font-weight:600; letter-spacing:.02em; text-transform:uppercase;
  user-select:none; }
.ahvl-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
.ahvl-avatar--ring{ box-shadow:0 0 0 2px var(--bg-page), 0 0 0 4px var(--brand); }
`;

function ensureStyle(){
  if (typeof document === 'undefined' || document.getElementById('ahvl-avatar-style')) return;
  const s = document.createElement('style'); s.id='ahvl-avatar-style'; s.textContent=CSS;
  document.head.appendChild(s);
}

const SIZES = { sm: 32, md: 44, lg: 64, xl: 88 };

function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  if (!parts[0]) return '?';
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

export function Avatar({ name = '', src, size = 'md', ring = false, className = '', ...rest }) {
  ensureStyle();
  const px = typeof size === 'number' ? size : (SIZES[size] || SIZES.md);
  const cls = ['ahvl-avatar', ring ? 'ahvl-avatar--ring' : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} style={{ width: px, height: px, fontSize: Math.round(px * 0.38) }}
          title={name || undefined} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}
