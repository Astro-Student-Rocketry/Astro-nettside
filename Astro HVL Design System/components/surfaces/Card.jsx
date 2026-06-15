import React from 'react';

const CSS = `
.ahvl-card{ background:var(--surface-card); border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg); box-shadow:var(--shadow-sm); overflow:hidden;
  display:flex; flex-direction:column; }
.ahvl-card--pad{ padding:var(--space-5); }
.ahvl-card--interactive{ cursor:pointer; transition:transform var(--dur-base) var(--ease-out),
  box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out); }
.ahvl-card--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg);
  border-color:color-mix(in oklab, var(--brand) 40%, var(--border-subtle)); }
.ahvl-card--interactive:active{ transform:translateY(-1px); }
.ahvl-card--flush{ box-shadow:none; }
`;

function ensureStyle(){
  if (typeof document === 'undefined' || document.getElementById('ahvl-card-style')) return;
  const s = document.createElement('style'); s.id='ahvl-card-style'; s.textContent=CSS;
  document.head.appendChild(s);
}

export function Card({ children, padded = true, interactive = false, flush = false, as = 'div', className = '', ...rest }) {
  ensureStyle();
  const Tag = as;
  const cls = [
    'ahvl-card',
    padded ? 'ahvl-card--pad' : '',
    interactive ? 'ahvl-card--interactive' : '',
    flush ? 'ahvl-card--flush' : '',
    className,
  ].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
