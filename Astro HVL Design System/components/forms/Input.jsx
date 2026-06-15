import React from 'react';

const CSS = `
.ahvl-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-sans); }
.ahvl-field__label{ font-size:13px; font-weight:600; color:var(--text-strong); display:flex; gap:5px; align-items:center; }
.ahvl-field__req{ color:var(--brand); }
.ahvl-field__wrap{ display:flex; align-items:center; gap:8px;
  background:var(--surface-card); border:1px solid var(--border-field); border-radius:var(--radius-md);
  padding:0 12px; transition:border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out); }
.ahvl-field__wrap:focus-within{ border-color:var(--brand); box-shadow:0 0 0 3px var(--focus-ring); }
.ahvl-field--error .ahvl-field__wrap{ border-color:var(--danger); }
.ahvl-field--error .ahvl-field__wrap:focus-within{ box-shadow:0 0 0 3px color-mix(in oklab, var(--danger) 30%, transparent); }
.ahvl-field__input{ flex:1; border:0; outline:0; background:transparent; font:inherit; font-size:14px;
  color:var(--text-strong); padding:10px 0; min-width:0; }
.ahvl-field__input::placeholder{ color:var(--text-muted); }
.ahvl-field__affix{ color:var(--text-muted); display:inline-flex; align-items:center; font-size:14px; }
.ahvl-field__hint{ font-size:12px; color:var(--text-muted); }
.ahvl-field--error .ahvl-field__hint{ color:var(--danger); }
.ahvl-field__wrap[aria-disabled="true"]{ opacity:.55; background:var(--surface-sunken); pointer-events:none; }
`;

function ensureStyle(){
  if (typeof document === 'undefined' || document.getElementById('ahvl-field-style')) return;
  const s = document.createElement('style'); s.id='ahvl-field-style'; s.textContent=CSS;
  document.head.appendChild(s);
}

export function Input({
  label, hint, error, required = false, prefix, suffix,
  id, disabled = false, className = '', ...rest
}) {
  ensureStyle();
  const fid = id || (label ? 'f-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  const cls = ['ahvl-field', error ? 'ahvl-field--error' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      {label && (
        <label className="ahvl-field__label" htmlFor={fid}>
          {label}{required && <span className="ahvl-field__req">*</span>}
        </label>
      )}
      <div className="ahvl-field__wrap" aria-disabled={disabled || undefined}>
        {prefix && <span className="ahvl-field__affix">{prefix}</span>}
        <input id={fid} className="ahvl-field__input" disabled={disabled}
               aria-invalid={!!error} {...rest} />
        {suffix && <span className="ahvl-field__affix">{suffix}</span>}
      </div>
      {(error || hint) && <span className="ahvl-field__hint">{error || hint}</span>}
    </div>
  );
}
