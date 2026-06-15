import React from 'react';

const CSS = `
.ahvl-stat{ display:flex; flex-direction:column; gap:6px; }
.ahvl-stat__val{ font-family:var(--font-mono); font-variant-numeric:tabular-nums;
  font-weight:600; font-size:34px; line-height:1; color:var(--text-strong); letter-spacing:-.01em; }
.ahvl-stat__val--accent{ color:var(--brand); }
.ahvl-stat__unit{ font-size:.5em; font-weight:500; color:var(--text-muted); margin-left:3px; }
.ahvl-stat__label{ font-family:var(--font-mono); font-size:11px; font-weight:500;
  letter-spacing:.14em; text-transform:uppercase; color:var(--text-muted); }
.ahvl-stat--lg .ahvl-stat__val{ font-size:52px; }
.ahvl-stat--sm .ahvl-stat__val{ font-size:24px; }
`;

function ensureStyle(){
  if (typeof document === 'undefined' || document.getElementById('ahvl-stat-style')) return;
  const s = document.createElement('style'); s.id='ahvl-stat-style'; s.textContent=CSS;
  document.head.appendChild(s);
}

export function Stat({ value, unit, label, accent = false, size = 'md', className = '', ...rest }) {
  ensureStyle();
  const cls = ['ahvl-stat', size !== 'md' ? `ahvl-stat--${size}` : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <div className={'ahvl-stat__val' + (accent ? ' ahvl-stat__val--accent' : '')}>
        {value}{unit && <span className="ahvl-stat__unit">{unit}</span>}
      </div>
      {label && <div className="ahvl-stat__label">{label}</div>}
    </div>
  );
}
