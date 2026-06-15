import React from 'react';

const CSS = `
.ahvl-tag{ display:inline-flex; align-items:center; gap:7px;
  font-family:var(--font-sans); font-size:13px; font-weight:500; color:var(--text-body);
  background:var(--surface-card); border:1px solid var(--border-subtle);
  padding:5px 11px; border-radius:var(--radius-pill); line-height:1; }
.ahvl-tag--brand{ background:var(--blue-050); border-color:var(--blue-200); color:var(--blue-700); }
.ahvl-tag__rm{ display:inline-flex; align-items:center; justify-content:center; width:15px; height:15px;
  border:0; background:transparent; color:inherit; opacity:.55; cursor:pointer; border-radius:50%; padding:0; }
.ahvl-tag__rm:hover{ opacity:1; background:color-mix(in oklab, currentColor 16%, transparent); }
`;

function ensureStyle(){
  if (typeof document === 'undefined' || document.getElementById('ahvl-tag-style')) return;
  const s = document.createElement('style'); s.id='ahvl-tag-style'; s.textContent=CSS;
  document.head.appendChild(s);
}

export function Tag({ children, brand = false, onRemove, className = '', ...rest }) {
  ensureStyle();
  const cls = ['ahvl-tag', brand ? 'ahvl-tag--brand' : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {children}
      {onRemove && (
        <button className="ahvl-tag__rm" onClick={onRemove} aria-label="Remove" type="button">
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 2l8 8M10 2l-8 8"/></svg>
        </button>
      )}
    </span>
  );
}
