/* @ds-bundle: {"format":3,"namespace":"AstroHVLDesignSystem_1d7919","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Avatar","sourcePath":"components/surfaces/Avatar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"67e5aeae547d","components/data/Badge.jsx":"37ddf28b1faf","components/data/Stat.jsx":"c728f3a9535f","components/data/Tag.jsx":"45ebf316dfd9","components/forms/Input.jsx":"21320c3b232a","components/surfaces/Avatar.jsx":"07c2f5b68c15","components/surfaces/Card.jsx":"fc41d9ef459f","ui_kits/website/Header.jsx":"0ab8b374e7e2","ui_kits/website/Hero.jsx":"d2464a2e7c0f","ui_kits/website/JoinFooter.jsx":"dfa6726540ca","ui_kits/website/Mission.jsx":"f830090091e0","ui_kits/website/Projects.jsx":"2bbf670bf94b","ui_kits/website/Sponsors.jsx":"50a0c786f207","ui_kits/website/Team.jsx":"2616203bda01","ui_kits/website/i18n.jsx":"ed2a5cc42042","ui_kits/website/icons.jsx":"15e40b329d86"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AstroHVLDesignSystem_1d7919 = window.AstroHVLDesignSystem_1d7919 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ensureStyle() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ahvl-btn-style')) return;
  const s = document.createElement('style');
  s.id = 'ahvl-btn-style';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
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
  const cls = ['ahvl-btn', `ahvl-btn--${variant}`, size !== 'md' ? `ahvl-btn--${size}` : '', fullWidth ? 'ahvl-btn--block' : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement("span", {
    className: "ahvl-btn__spin",
    "aria-hidden": "true"
  }), !loading && icon, children, !loading && iconRight);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled || loading
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ensureStyle() {
  if (typeof document === 'undefined' || document.getElementById('ahvl-badge-style')) return;
  const s = document.createElement('style');
  s.id = 'ahvl-badge-style';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  variant = 'neutral',
  solid = false,
  dot = false,
  children,
  className = '',
  ...rest
}) {
  ensureStyle();
  const cls = ['ahvl-badge', `ahvl-badge--${variant}`, solid ? 'ahvl-badge--solid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "ahvl-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ensureStyle() {
  if (typeof document === 'undefined' || document.getElementById('ahvl-stat-style')) return;
  const s = document.createElement('style');
  s.id = 'ahvl-stat-style';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Stat({
  value,
  unit,
  label,
  accent = false,
  size = 'md',
  className = '',
  ...rest
}) {
  ensureStyle();
  const cls = ['ahvl-stat', size !== 'md' ? `ahvl-stat--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: 'ahvl-stat__val' + (accent ? ' ahvl-stat__val--accent' : '')
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    className: "ahvl-stat__unit"
  }, unit)), label && /*#__PURE__*/React.createElement("div", {
    className: "ahvl-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ensureStyle() {
  if (typeof document === 'undefined' || document.getElementById('ahvl-tag-style')) return;
  const s = document.createElement('style');
  s.id = 'ahvl-tag-style';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  children,
  brand = false,
  onRemove,
  className = '',
  ...rest
}) {
  ensureStyle();
  const cls = ['ahvl-tag', brand ? 'ahvl-tag--brand' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    className: "ahvl-tag__rm",
    onClick: onRemove,
    "aria-label": "Remove",
    type: "button"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l8 8M10 2l-8 8"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ensureStyle() {
  if (typeof document === 'undefined' || document.getElementById('ahvl-field-style')) return;
  const s = document.createElement('style');
  s.id = 'ahvl-field-style';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  required = false,
  prefix,
  suffix,
  id,
  disabled = false,
  className = '',
  ...rest
}) {
  ensureStyle();
  const fid = id || (label ? 'f-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  const cls = ['ahvl-field', error ? 'ahvl-field--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ahvl-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ahvl-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "ahvl-field__wrap",
    "aria-disabled": disabled || undefined
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "ahvl-field__affix"
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: "ahvl-field__input",
    disabled: disabled,
    "aria-invalid": !!error
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "ahvl-field__affix"
  }, suffix)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "ahvl-field__hint"
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ahvl-avatar{ display:inline-flex; align-items:center; justify-content:center; flex:none;
  border-radius:50%; overflow:hidden; background:var(--navy-800); color:#fff;
  font-family:var(--font-mono); font-weight:600; letter-spacing:.02em; text-transform:uppercase;
  user-select:none; }
.ahvl-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
.ahvl-avatar--ring{ box-shadow:0 0 0 2px var(--bg-page), 0 0 0 4px var(--brand); }
`;
function ensureStyle() {
  if (typeof document === 'undefined' || document.getElementById('ahvl-avatar-style')) return;
  const s = document.createElement('style');
  s.id = 'ahvl-avatar-style';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const SIZES = {
  sm: 32,
  md: 44,
  lg: 64,
  xl: 88
};
function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  if (!parts[0]) return '?';
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}
function Avatar({
  name = '',
  src,
  size = 'md',
  ring = false,
  className = '',
  ...rest
}) {
  ensureStyle();
  const px = typeof size === 'number' ? size : SIZES[size] || SIZES.md;
  const cls = ['ahvl-avatar', ring ? 'ahvl-avatar--ring' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      width: px,
      height: px,
      fontSize: Math.round(px * 0.38)
    },
    title: name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ensureStyle() {
  if (typeof document === 'undefined' || document.getElementById('ahvl-card-style')) return;
  const s = document.createElement('style');
  s.id = 'ahvl-card-style';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  children,
  padded = true,
  interactive = false,
  flush = false,
  as = 'div',
  className = '',
  ...rest
}) {
  ensureStyle();
  const Tag = as;
  const cls = ['ahvl-card', padded ? 'ahvl-card--pad' : '', interactive ? 'ahvl-card--interactive' : '', flush ? 'ahvl-card--flush' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Site header — sticky, navy, translucent. White wordmark + nav + Join CTA. */
(function () {
  const {
    Button
  } = window.AstroHVLDesignSystem_1d7919;
  const Icon = window.Icon;
  const CSS = `
  .hd{ position:sticky; top:0; z-index:50; }
  .hd__bar{ height:var(--header-h); display:flex; align-items:center; gap:24px;
    background:color-mix(in oklab, var(--navy-900) 88%, transparent);
    backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
    border-bottom:1px solid color-mix(in oklab,#fff 9%,transparent); }
  .hd__inner{ width:100%; max-width:var(--container-wide); margin:auto; padding-inline:var(--gutter);
    display:flex; align-items:center; gap:16px; }
  .hd__logo{ height:30px; display:block; }
  .hd__nav{ display:flex; align-items:center; gap:4px; margin-left:8px; }
  .hd__link{ appearance:none; border:0; background:transparent; cursor:pointer;
    font-family:var(--font-sans); font-size:14px; font-weight:500; color:#9fb2c8;
    padding:8px 14px; border-radius:var(--radius-sm); transition:color var(--dur-fast), background var(--dur-fast); }
  .hd__link:hover{ color:#fff; background:color-mix(in oklab,#fff 7%,transparent); }
  .hd__link--active{ color:#fff; }
  .hd__link--active::after{ content:""; display:block; height:2px; margin-top:6px; border-radius:2px;
    background:var(--brand); }
  .hd__spacer{ flex:1; }
  .hd__status{ display:flex; align-items:center; gap:8px; flex:none; font-family:var(--font-mono); font-size:11px;
    letter-spacing:.12em; text-transform:uppercase; color:#7e93aa; white-space:nowrap; }
  .hd__dot{ width:7px; height:7px; border-radius:50%; background:var(--success); box-shadow:0 0 0 0 var(--success);
    animation:hd-pulse 2.4s var(--ease-out) infinite; }
  @keyframes hd-pulse{ 0%{box-shadow:0 0 0 0 color-mix(in oklab,var(--success) 60%,transparent);} 70%{box-shadow:0 0 0 7px transparent;} 100%{box-shadow:0 0 0 0 transparent;} }
  .hd__lang{ display:inline-flex; flex:none; border:1px solid color-mix(in oklab,#fff 16%,transparent); border-radius:var(--radius-sm); overflow:hidden; }
  .hd__lang button{ appearance:none; border:0; background:transparent; cursor:pointer; font-family:var(--font-mono);
    font-size:11px; font-weight:600; letter-spacing:.08em; color:#9fb2c8; padding:6px 9px; transition:background var(--dur-fast),color var(--dur-fast); }
  .hd__lang button:hover{ color:#fff; }
  .hd__lang button[aria-pressed="true"]{ background:var(--brand); color:#fff; }
  @media(max-width:1040px){ .hd__status{ display:none; } }
  @media(max-width:860px){ .hd__nav{ display:none; } }
  `;
  function Header({
    current,
    onNav,
    t,
    lang,
    onLang
  }) {
    const LINKS = [['home', t.header.nav.home], ['projects', t.header.nav.projects], ['team', t.header.nav.team], ['sponsors', t.header.nav.sponsors]];
    return /*#__PURE__*/React.createElement("header", {
      className: "hd",
      "data-theme": "dark"
    }, /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: CSS
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hd__bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hd__inner"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav('home');
      }
    }, /*#__PURE__*/React.createElement("img", {
      className: "hd__logo",
      src: "../../assets/logo-astro-white.png",
      alt: "Astro HVL"
    })), /*#__PURE__*/React.createElement("nav", {
      className: "hd__nav"
    }, LINKS.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      className: 'hd__link' + (current === id ? ' hd__link--active' : ''),
      onClick: () => onNav(id)
    }, label))), /*#__PURE__*/React.createElement("div", {
      className: "hd__spacer"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hd__status"
    }, /*#__PURE__*/React.createElement("span", {
      className: "hd__dot"
    }), t.header.status), /*#__PURE__*/React.createElement("div", {
      className: "hd__lang",
      role: "group",
      "aria-label": "Language"
    }, /*#__PURE__*/React.createElement("button", {
      "aria-pressed": lang === 'no',
      onClick: () => onLang('no')
    }, "NO"), /*#__PURE__*/React.createElement("button", {
      "aria-pressed": lang === 'en',
      onClick: () => onLang('en')
    }, "EN")), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "Rocket",
        size: 15
      }),
      onClick: () => onNav('join')
    }, t.header.join))));
  }
  window.Header = Header;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero — dark blueprint backdrop, display headline, telemetry stat band. */
(function () {
  const {
    Button,
    Stat
  } = window.AstroHVLDesignSystem_1d7919;
  const Icon = window.Icon;
  const CSS = `
  .hero{ position:relative; overflow:hidden; background:var(--navy-900); }
  .hero__grid{ position:absolute; inset:0;
    background-image:
      linear-gradient(color-mix(in oklab,var(--cyan-400) 9%,transparent) 1px, transparent 1px),
      linear-gradient(90deg, color-mix(in oklab,var(--cyan-400) 9%,transparent) 1px, transparent 1px);
    background-size:54px 54px; mask-image:radial-gradient(120% 90% at 70% 10%, #000 30%, transparent 78%); }
  .hero__glow{ position:absolute; top:-220px; right:-160px; width:720px; height:720px; border-radius:50%;
    background:radial-gradient(circle, color-mix(in oklab,var(--blue-500) 36%,transparent), transparent 62%); pointer-events:none; }
  .hero__inner{ position:relative; max-width:var(--container-wide); margin:auto; padding:clamp(64px,9vw,120px) var(--gutter) 0;
    display:grid; grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr); gap:40px; align-items:center; }
  .hero__copy{ max-width:620px; }
  .hero h1{ color:#fff; font-size:clamp(44px,6vw,84px); line-height:.98; letter-spacing:-.025em; margin:18px 0 0; }
  .hero h1 em{ font-style:normal; color:var(--blue-400); }
  .hero__sub{ color:#bcccde; font-size:clamp(16px,1.5vw,19px); line-height:1.55; margin:22px 0 30px; max-width:50ch; }
  .hero__cta{ display:flex; gap:12px; flex-wrap:wrap; }
  .hero__art{ position:relative; display:flex; align-items:center; justify-content:center; min-height:320px; }
  .hero__rocket{ width:115%; max-width:680px; filter:drop-shadow(0 24px 60px rgba(0,0,0,.5)); transform:rotate(-4deg); }
  .hero__band{ position:relative; max-width:var(--container-wide); margin:clamp(48px,7vw,96px) auto 0; padding:26px var(--gutter);
    display:flex; gap:clamp(28px,5vw,72px); flex-wrap:wrap; border-top:1px solid color-mix(in oklab,#fff 10%,transparent); }
  @media(max-width:880px){ .hero__inner{ grid-template-columns:1fr; } .hero__art{ display:none; } }
  `;
  function Hero({
    onNav,
    t
  }) {
    const h = t.hero;
    return /*#__PURE__*/React.createElement("section", {
      className: "hero",
      "data-theme": "dark"
    }, /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: CSS
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hero__grid"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hero__glow"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hero__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero__copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        color: 'var(--cyan-400)'
      }
    }, h.eyebrow), /*#__PURE__*/React.createElement("h1", null, h.titleTop, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, h.titleEm)), /*#__PURE__*/React.createElement("p", {
      className: "hero__sub"
    }, h.sub), /*#__PURE__*/React.createElement("div", {
      className: "hero__cta"
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "ArrowRight",
        size: 17
      }),
      onClick: () => onNav('join')
    }, h.ctaJoin), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "Rocket",
        size: 16
      }),
      onClick: () => onNav('projects')
    }, h.ctaRockets))), /*#__PURE__*/React.createElement("div", {
      className: "hero__art"
    }, /*#__PURE__*/React.createElement("img", {
      className: "hero__rocket",
      src: "../../assets/logo-astro-white.png",
      alt: "Astro HVL rocket"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "hero__band"
    }, h.stats.map((s, i) => /*#__PURE__*/React.createElement(Stat, {
      key: i,
      value: s.value,
      unit: s.unit,
      label: s.label,
      accent: s.accent
    }))));
  }
  window.Hero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/JoinFooter.jsx
try { (() => {
/* Join CTA + Footer. */
(function () {
  const {
    Button,
    Input
  } = window.AstroHVLDesignSystem_1d7919;
  const Icon = window.Icon;
  const CSS = `
  .jn{ background:var(--bg-page); padding:clamp(56px,7vw,96px) 0; }
  .jn__inner{ max-width:var(--container); margin:auto; padding-inline:var(--gutter); }
  .jn__card{ position:relative; overflow:hidden; border-radius:var(--radius-xl); background:var(--blue-600);
    padding:clamp(36px,5vw,64px); display:grid; grid-template-columns:1.1fr .9fr; gap:40px; align-items:center; }
  .jn__bp{ position:absolute; inset:0; opacity:.4;
    background-image:linear-gradient(rgba(255,255,255,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.14) 1px,transparent 1px);
    background-size:40px 40px; mask-image:radial-gradient(120% 100% at 100% 0%, #000, transparent 75%); }
  .jn__copy{ position:relative; }
  .jn__copy h2{ color:#fff; font-size:clamp(28px,3.6vw,44px); margin:12px 0 12px; }
  .jn__copy p{ color:rgba(255,255,255,.86); font-size:16px; line-height:1.6; margin:0; max-width:42ch; }
  .jn__form{ position:relative; background:#fff; border-radius:var(--radius-lg); padding:26px; box-shadow:var(--shadow-lg); }
  .jn__form h3{ font-size:20px; margin:0 0 4px; }
  .jn__form .sub{ color:var(--text-muted); font-size:13px; margin:0 0 18px; }
  .jn__fields{ display:flex; flex-direction:column; gap:14px; margin-bottom:18px; }
  .jn__fine{ font-size:12px; color:var(--text-muted); margin:12px 0 0; text-align:center; }
  @media(max-width:820px){ .jn__card{ grid-template-columns:1fr; } }

  .ft{ background:var(--navy-950); color:#9fb2c8; padding:56px 0 30px; }
  .ft__inner{ max-width:var(--container-wide); margin:auto; padding-inline:var(--gutter); }
  .ft__top{ display:grid; grid-template-columns:1.4fr 1fr 1fr 1fr; gap:32px; padding-bottom:36px;
    border-bottom:1px solid color-mix(in oklab,#fff 9%,transparent); }
  .ft__logo{ height:30px; margin-bottom:16px; }
  .ft__blurb{ font-size:14px; line-height:1.6; max-width:32ch; margin:0 0 18px; }
  .ft__soc{ display:flex; gap:10px; }
  .ft__soc a{ width:38px; height:38px; border-radius:var(--radius-sm); display:flex; align-items:center; justify-content:center;
    background:color-mix(in oklab,#fff 7%,transparent); transition:background var(--dur-fast),transform var(--dur-fast); }
  .ft__soc a:hover{ background:var(--brand); transform:translateY(-2px); }
  .ft__soc img{ width:17px; height:17px; display:block; filter:brightness(0) invert(0.82); transition:filter var(--dur-fast); }
  .ft__soc a:hover img{ filter:brightness(0) invert(1); }
  .ft__col h5{ font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:#7e93aa; margin:0 0 14px; }
  .ft__col a{ display:block; color:#bcccde; font-size:14px; padding:5px 0; text-decoration:none; }
  .ft__col a:hover{ color:#fff; }
  .ft__bottom{ display:flex; justify-content:space-between; align-items:center; gap:16px; padding-top:22px; flex-wrap:wrap; }
  .ft__bottom span{ font-family:var(--font-mono); font-size:11px; letter-spacing:.06em; color:#6f859c; }
  @media(max-width:820px){ .ft__top{ grid-template-columns:1fr 1fr; } }
  `;
  function Join({
    onSubmit,
    t
  }) {
    const j = t.join;
    const [done, setDone] = React.useState(false);
    return /*#__PURE__*/React.createElement("section", {
      className: "jn"
    }, /*#__PURE__*/React.createElement("div", {
      className: "jn__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "jn__card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "jn__bp"
    }), /*#__PURE__*/React.createElement("div", {
      className: "jn__copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        color: 'rgba(255,255,255,.85)'
      }
    }, j.eyebrow), /*#__PURE__*/React.createElement("h2", null, j.title), /*#__PURE__*/React.createElement("p", null, j.lead)), /*#__PURE__*/React.createElement("div", {
      className: "jn__form"
    }, done ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '24px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--success)',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "CircleCheck",
      size: 40
    })), /*#__PURE__*/React.createElement("h3", null, j.okTitle), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, j.okSub)) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setDone(true);
        onSubmit && onSubmit();
      }
    }, /*#__PURE__*/React.createElement("h3", null, j.formTitle), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, j.formSub), /*#__PURE__*/React.createElement("div", {
      className: "jn__fields"
    }, /*#__PURE__*/React.createElement(Input, {
      label: j.fName,
      placeholder: "Ada Lovelace",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: j.fEmail,
      type: "email",
      prefix: "@",
      placeholder: "you@hvl.no",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: j.fProgramme,
      placeholder: j.fProgrammePh
    })), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      fullWidth: true,
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "ArrowRight",
        size: 16
      })
    }, j.submit), /*#__PURE__*/React.createElement("p", {
      className: "jn__fine"
    }, j.fine))))));
  }
  function Footer({
    onNav,
    t
  }) {
    const f = t.footer;
    const nav = t.header.nav;
    return /*#__PURE__*/React.createElement("footer", {
      className: "ft",
      "data-theme": "dark"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ft__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ft__top"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      className: "ft__logo",
      src: "../../assets/logo-astro-white.png",
      alt: "Astro HVL"
    }), /*#__PURE__*/React.createElement("p", {
      className: "ft__blurb"
    }, f.blurb), /*#__PURE__*/React.createElement("div", {
      className: "ft__soc"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      "aria-label": "Instagram"
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg",
      alt: "Instagram"
    })), /*#__PURE__*/React.createElement("a", {
      href: "#",
      "aria-label": "LinkedIn"
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg",
      alt: "LinkedIn"
    })), /*#__PURE__*/React.createElement("a", {
      href: "#",
      "aria-label": "GitHub"
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg",
      alt: "GitHub"
    })), /*#__PURE__*/React.createElement("a", {
      href: "#",
      "aria-label": "Email"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Mail",
      size: 18,
      style: {
        color: '#cdd9e6'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      className: "ft__col"
    }, /*#__PURE__*/React.createElement("h5", null, f.explore), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav('projects');
      }
    }, nav.projects), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav('team');
      }
    }, nav.team), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav('sponsors');
      }
    }, nav.sponsors)), /*#__PURE__*/React.createElement("div", {
      className: "ft__col"
    }, /*#__PURE__*/React.createElement("h5", null, f.involved), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav('join');
      }
    }, f.join), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav('join');
      }
    }, f.sponsor), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, f.buildDays)), /*#__PURE__*/React.createElement("div", {
      className: "ft__col"
    }, /*#__PURE__*/React.createElement("h5", null, f.contact), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "astro@hvl.no"), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Inndalsveien 28"), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "5063 Bergen"))), /*#__PURE__*/React.createElement("div", {
      className: "ft__bottom"
    }, /*#__PURE__*/React.createElement("span", null, f.rights), /*#__PURE__*/React.createElement("span", null, f.made))));
  }
  function JoinFooterStyle() {
    return /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: CSS
      }
    });
  }
  window.Join = Join;
  window.Footer = Footer;
  window.JoinFooterStyle = JoinFooterStyle;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/JoinFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Mission.jsx
try { (() => {
/* Mission — light section: intro + the four subsystems as feature cards. */
(function () {
  const {
    Card
  } = window.AstroHVLDesignSystem_1d7919;
  const Icon = window.Icon;
  const CSS = `
  .mz{ background:var(--bg-page); padding:clamp(64px,8vw,112px) 0; }
  .mz__inner{ max-width:var(--container); margin:auto; padding-inline:var(--gutter); }
  .mz__head{ display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:32px; align-items:end; margin-bottom:48px; }
  .mz__head h2{ font-size:clamp(30px,4vw,46px); margin:14px 0 0; }
  .mz__lead{ color:var(--text-muted); font-size:17px; line-height:1.6; }
  .mz__grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
  .sub__ic{ width:46px; height:46px; border-radius:var(--radius-md); display:flex; align-items:center; justify-content:center;
    background:var(--surface-inset); color:var(--brand); margin-bottom:16px; }
  .sub h3{ font-size:19px; margin:0 0 8px; }
  .sub p{ color:var(--text-muted); font-size:14px; line-height:1.55; margin:0; }
  .sub__no{ font-family:var(--font-mono); font-size:11px; color:var(--slate-400); letter-spacing:.1em; }
  @media(max-width:880px){ .mz__head{ grid-template-columns:1fr; } .mz__grid{ grid-template-columns:1fr 1fr; } }
  @media(max-width:520px){ .mz__grid{ grid-template-columns:1fr; } }
  `;
  function Mission({
    t
  }) {
    const m = t.mission;
    return /*#__PURE__*/React.createElement("section", {
      className: "mz"
    }, /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: CSS
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "mz__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mz__head"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, m.eyebrow), /*#__PURE__*/React.createElement("h2", null, m.title)), /*#__PURE__*/React.createElement("p", {
      className: "mz__lead"
    }, m.lead)), /*#__PURE__*/React.createElement("div", {
      className: "mz__grid"
    }, m.subs.map(([title, icon, desc], i) => /*#__PURE__*/React.createElement(Card, {
      key: title,
      interactive: true,
      className: "sub"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sub__ic"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      className: "sub__no"
    }, "0", i + 1), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, desc))))));
  }
  window.Mission = Mission;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Mission.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Projects.jsx
try { (() => {
/* Projects — light section: a featured flight + a grid of project cards. */
(function () {
  const {
    Card,
    Badge,
    Button
  } = window.AstroHVLDesignSystem_1d7919;
  const Icon = window.Icon;
  const CSS = `
  .pj{ background:var(--surface-sunken); padding:clamp(64px,8vw,112px) 0; }
  .pj__inner{ max-width:var(--container); margin:auto; padding-inline:var(--gutter); }
  .pj__top{ display:flex; justify-content:space-between; align-items:flex-end; gap:24px; margin-bottom:40px; }
  .pj__top h2{ font-size:clamp(30px,4vw,46px); margin:14px 0 0; }
  .pj__feat{ display:grid; grid-template-columns:1.15fr 1fr; gap:0; border-radius:var(--radius-xl); overflow:hidden;
    box-shadow:var(--shadow-md); margin-bottom:20px; background:var(--navy-900); }
  .pj__featart{ position:relative; background:var(--navy-850); display:flex; align-items:center; justify-content:center; min-height:300px; overflow:hidden; }
  .pj__featart .pj__bp{ position:absolute; inset:0; background-image:
      linear-gradient(color-mix(in oklab,var(--cyan-400) 10%,transparent) 1px,transparent 1px),
      linear-gradient(90deg,color-mix(in oklab,var(--cyan-400) 10%,transparent) 1px,transparent 1px);
    background-size:34px 34px; }
  .pj__featart img{ position:relative; width:64%; transform:rotate(-6deg); filter:drop-shadow(0 20px 40px rgba(0,0,0,.5)); }
  .pj__featbody{ padding:clamp(28px,4vw,48px); color:#fff; display:flex; flex-direction:column; justify-content:center; }
  .pj__featbody h3{ color:#fff; font-size:clamp(26px,3vw,38px); margin:14px 0 12px; }
  .pj__featbody p{ color:#bcccde; font-size:15px; line-height:1.6; margin:0 0 22px; max-width:46ch; }
  .pj__specs{ display:flex; gap:22px 30px; flex-wrap:wrap; margin-bottom:26px; font-family:var(--font-mono); }
  .pj__spec{ display:flex; flex-direction:column; gap:3px; }
  .pj__spec b{ font-size:20px; color:#fff; font-weight:600; white-space:nowrap; }
  .pj__spec span{ font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:#7e93aa; white-space:nowrap; }
  .pj__grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
  .pjc__head{ display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; }
  .pjc__yr{ font-family:var(--font-mono); font-size:12px; color:var(--slate-400); }
  .pjc h4{ font-size:18px; margin:0 0 6px; }
  .pjc p{ color:var(--text-muted); font-size:13px; line-height:1.5; margin:0; }
  @media(max-width:880px){ .pj__feat{ grid-template-columns:1fr; } .pj__grid{ grid-template-columns:1fr; } }
  `;
  function Projects({
    onNav,
    t
  }) {
    const pj = t.projects;
    return /*#__PURE__*/React.createElement("section", {
      className: "pj"
    }, /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: CSS
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "pj__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pj__top"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, pj.eyebrow), /*#__PURE__*/React.createElement("h2", null, pj.title)), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "ArrowRight",
        size: 16
      }),
      onClick: () => onNav('projects')
    }, pj.all)), /*#__PURE__*/React.createElement("div", {
      className: "pj__feat",
      "data-theme": "dark"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pj__featart"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pj__bp"
    }), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-astro-white.png",
      alt: pj.featTitle
    })), /*#__PURE__*/React.createElement("div", {
      className: "pj__featbody"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        color: 'var(--cyan-400)'
      }
    }, pj.featEyebrow), /*#__PURE__*/React.createElement(Badge, {
      variant: "warning",
      dot: true
    }, pj.featStatus)), /*#__PURE__*/React.createElement("h3", null, pj.featTitle), /*#__PURE__*/React.createElement("p", null, pj.featDesc), /*#__PURE__*/React.createElement("div", {
      className: "pj__specs"
    }, pj.specs.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      className: "pj__spec"
    }, /*#__PURE__*/React.createElement("b", null, v), /*#__PURE__*/React.createElement("span", null, l)))), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "ArrowRight",
        size: 15
      }),
      onClick: () => onNav('projects')
    }, pj.follow))), /*#__PURE__*/React.createElement("div", {
      className: "pj__grid"
    }, pj.list.map(([title, yr, desc, variant, status]) => /*#__PURE__*/React.createElement(Card, {
      key: title,
      interactive: true,
      className: "pjc"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pjc__head"
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: variant,
      dot: true
    }, status), /*#__PURE__*/React.createElement("span", {
      className: "pjc__yr"
    }, yr)), /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("p", null, desc))))));
  }
  window.Projects = Projects;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sponsors.jsx
try { (() => {
/* Sponsors — navy band: partner logos + tiers + sponsorship CTA. */
(function () {
  const {
    Button,
    Card
  } = window.AstroHVLDesignSystem_1d7919;
  const Icon = window.Icon;
  const CSS = `
  .sp{ background:var(--navy-950); padding:clamp(64px,8vw,104px) 0; position:relative; overflow:hidden; }
  .sp__grid{ position:absolute; inset:0; opacity:.5;
    background-image:linear-gradient(color-mix(in oklab,var(--blue-500) 8%,transparent) 1px,transparent 1px),
      linear-gradient(90deg,color-mix(in oklab,var(--blue-500) 8%,transparent) 1px,transparent 1px);
    background-size:48px 48px; mask-image:radial-gradient(100% 100% at 50% 0%, #000, transparent 80%); }
  .sp__inner{ position:relative; max-width:var(--container); margin:auto; padding-inline:var(--gutter); }
  .sp__head{ text-align:center; max-width:620px; margin:0 auto 44px; }
  .sp__head h2{ color:#fff; font-size:clamp(28px,4vw,42px); margin:14px 0 12px; }
  .sp__head p{ color:#a9bccf; font-size:16px; line-height:1.6; }
  .sp__logos{ display:flex; align-items:center; justify-content:center; gap:clamp(32px,6vw,72px); flex-wrap:wrap;
    padding:34px 0; border-top:1px solid color-mix(in oklab,#fff 10%,transparent);
    border-bottom:1px solid color-mix(in oklab,#fff 10%,transparent); margin-bottom:44px; }
  .sp__logo{ height:34px; opacity:.92; filter:brightness(0) invert(1); }
  .sp__name{ font-family:var(--font-display); font-weight:600; font-size:22px; color:rgba(255,255,255,.55); letter-spacing:.02em; }
  .sp__tiers{ display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-bottom:40px; }
  .tier{ background:var(--navy-850); border-color:color-mix(in oklab,#fff 10%,transparent); }
  .tier__name{ display:flex; align-items:center; gap:9px; font-family:var(--font-mono); font-size:12px;
    letter-spacing:.12em; text-transform:uppercase; color:var(--cyan-400); margin-bottom:14px; }
  .tier h4{ color:#fff; font-size:24px; margin:0 0 4px; }
  .tier__sub{ color:#8ca0b6; font-size:13px; margin:0 0 16px; }
  .tier ul{ list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:9px; }
  .tier li{ display:flex; gap:9px; align-items:flex-start; color:#cdd9e6; font-size:13px; line-height:1.4; }
  .tier li svg{ color:var(--success); flex:none; margin-top:1px; }
  .sp__cta{ text-align:center; }
  @media(max-width:880px){ .sp__tiers{ grid-template-columns:1fr; } }
  `;
  function Sponsors({
    onNav,
    t
  }) {
    const sp = t.sponsors;
    return /*#__PURE__*/React.createElement("section", {
      className: "sp",
      "data-theme": "dark"
    }, /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: CSS
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "sp__grid"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sp__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sp__head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        color: 'var(--cyan-400)',
        justifyContent: 'center'
      }
    }, sp.eyebrow), /*#__PURE__*/React.createElement("h2", null, sp.title), /*#__PURE__*/React.createElement("p", null, sp.lead)), /*#__PURE__*/React.createElement("div", {
      className: "sp__logos"
    }, /*#__PURE__*/React.createElement("img", {
      className: "sp__logo",
      src: "../../assets/sponsor-nammo.png",
      alt: "Nammo"
    }), /*#__PURE__*/React.createElement("span", {
      className: "sp__name"
    }, "HVL"), /*#__PURE__*/React.createElement("span", {
      className: "sp__name"
    }, "Bergen Tech"), /*#__PURE__*/React.createElement("span", {
      className: "sp__name"
    }, "Nordic Aero")), /*#__PURE__*/React.createElement("div", {
      className: "sp__tiers"
    }, sp.tiers.map(([tier, name, price, perks]) => /*#__PURE__*/React.createElement(Card, {
      key: name,
      className: "tier"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tier__name"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Rocket",
      size: 14
    }), tier, " ", sp.tierWord), /*#__PURE__*/React.createElement("h4", null, name), /*#__PURE__*/React.createElement("p", {
      className: "tier__sub"
    }, price, " ", sp.perYear), /*#__PURE__*/React.createElement("ul", null, perks.map(p => /*#__PURE__*/React.createElement("li", {
      key: p
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Check",
      size: 15
    }), p)))))), /*#__PURE__*/React.createElement("div", {
      className: "sp__cta"
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "Mail",
        size: 16
      }),
      onClick: () => onNav('join')
    }, sp.cta))));
  }
  window.Sponsors = Sponsors;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sponsors.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Team.jsx
try { (() => {
/* Team — light section: lead crew with avatars + subsystem roles. */
(function () {
  const {
    Card,
    Avatar,
    Tag
  } = window.AstroHVLDesignSystem_1d7919;
  const CSS = `
  .tm{ background:var(--bg-page); padding:clamp(64px,8vw,112px) 0; }
  .tm__inner{ max-width:var(--container); margin:auto; padding-inline:var(--gutter); }
  .tm__head{ text-align:center; max-width:620px; margin:0 auto 48px; }
  .tm__head h2{ font-size:clamp(30px,4vw,46px); margin:14px 0 12px; }
  .tm__head p{ color:var(--text-muted); font-size:16px; line-height:1.6; }
  .tm__center{ display:flex; justify-content:center; }
  .tm__grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
  .mem{ display:flex; flex-direction:column; align-items:center; text-align:center; gap:4px; padding:26px 18px; }
  .mem h4{ font-size:16px; margin:14px 0 2px; }
  .mem__role{ font-family:var(--font-mono); font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--brand); margin-bottom:10px; }
  .mem__year{ font-size:12px; color:var(--text-muted); }
  @media(max-width:880px){ .tm__grid{ grid-template-columns:1fr 1fr; } }
  `;
  function Team({
    t
  }) {
    const tm = t.team;
    return /*#__PURE__*/React.createElement("section", {
      className: "tm"
    }, /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: CSS
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "tm__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tm__head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow tm__center"
    }, tm.eyebrow), /*#__PURE__*/React.createElement("h2", null, tm.title), /*#__PURE__*/React.createElement("p", null, tm.lead)), /*#__PURE__*/React.createElement("div", {
      className: "tm__grid"
    }, tm.crew.map(([name, role, year]) => /*#__PURE__*/React.createElement(Card, {
      key: name,
      interactive: true,
      className: "mem"
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: name,
      size: 72,
      ring: true
    }), /*#__PURE__*/React.createElement("h4", null, name), /*#__PURE__*/React.createElement("div", {
      className: "mem__role"
    }, role), /*#__PURE__*/React.createElement("div", {
      className: "mem__year"
    }, year))))));
  }
  window.Team = Team;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Team.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/i18n.jsx
try { (() => {
/* Astro HVL — bilingual copy (Norwegian bokmål + English).
   window.AHVL_I18N[lang] returns the full string tree for that language.
   Default language is 'no'. Structural data (icon names, badge variants)
   travels with the copy so the section components stay presentation-only. */
(function () {
  window.AHVL_I18N = {
    no: {
      langName: 'NO',
      header: {
        nav: {
          home: 'Hjem',
          projects: 'Prosjekter',
          team: 'Team',
          sponsors: 'Sponsorer'
        },
        status: 'Rekrutterer · opptak 2026',
        join: 'Bli med på laget'
      },
      hero: {
        eyebrow: 'Bergen · etabl. 2025 · hybrid framdrift',
        titleTop: 'Bergens høyeste',
        titleEm: 'punkt.',
        sub: 'Astro HVL er et studentlag som designer, bygger og flyr hybridraketter ved Høgskulen på Vestlandet. Konstruert av studenter, fyrt opp i Bergen.',
        ctaJoin: 'Bli med på laget',
        ctaRockets: 'Våre raketter',
        stats: [{
          value: '3.2',
          unit: 'km',
          label: 'Apogeemål',
          accent: true
        }, {
          value: '982',
          unit: 'N',
          label: 'Maks skyvekraft'
        }, {
          value: 'N₂O',
          label: 'Oksidator'
        }, {
          value: '38',
          label: 'Mannskap'
        }, {
          value: '2025',
          label: 'Etablert'
        }]
      },
      mission: {
        eyebrow: 'Oppdraget',
        title: 'Hvert gram, hver joule, konstruert av studenter.',
        lead: 'Vi kjører hele prosessen internt — design, maskinering, statisk prøvefyring og flyging. Fire delsystemer, ett oppskytingsvindu, ingen snarveier.',
        subs: [['Framdrift', 'Flame', 'Studentdesignet hybridmotor med lystgass og fast brenselladning.'], ['Avionikk', 'CircuitBoard', 'Egenutviklet flydatamaskin som logger telemetri, orientering og apogeedeteksjon.'], ['Bergning', 'Parachute', 'Totrinns bergning — drogue ved apogeum, hovedskjerm for myk landing.'], ['Strukturer', 'Box', 'Karbon- og aluminiumsskrog maskinert og laminert internt.']]
      },
      projects: {
        eyebrow: 'Flygelogg',
        title: 'Det vi bygger',
        all: 'Alle prosjekter',
        featEyebrow: 'Flaggskip · 2026',
        featStatus: 'Under bygging',
        featTitle: 'Apogee I',
        featDesc: 'Vår første flygende rakett: en hybriddrevet ett-trinns rakett designet for å nå det høyeste punktet over Bergen og berges med totrinns fallskjerm.',
        specs: [['3.2 km', 'Apogeum'], ['Mach 0.8', 'Maks v'], ['2.4 m', 'Lengde']],
        follow: 'Følg byggingen',
        list: [['Hybrid Demonstrator', '2025', 'Benkartikkel som beviser hybridmotor og fyllelinje.', 'success', 'Statisk prøvefyrt'], ['Apogee I', '2026', 'Første flygende rakett — sikter mot 3,2 km over Bergen.', 'warning', 'Under bygging'], ['Bakkestasjon', '2026', 'Bærbar telemetri- og fyllekontrollhenger for oppskyting.', 'brand', 'Aktiv']]
      },
      team: {
        eyebrow: 'Mannskapet',
        title: '38 studenter. Ett oppskytingsvindu.',
        lead: 'Et tverrfaglig lag av ingeniører, programmerere og makere fra hele HVL — alle frivillige, alle lærer ved å fly.',
        crew: [['Astrid Haugen', 'Lagleder', 'Master maskin · 2. år'], ['Mathias Solberg', 'Framdrift', 'Bachelor maskin · 3. år'], ['Ingrid Vik', 'Avionikk', 'Bachelor elektro · 2. år'], ['Oskar Lund', 'Bergning', 'Bachelor maskin · 1. år'], ['Sofie Berg', 'Strukturer', 'Bachelor maskin · 3. år'], ['Henrik Aas', 'Programvare', 'Bachelor data · 2. år'], ['Maria Nilsen', 'Drift og sikkerhet', 'Bachelor maskin · 2. år'], ['Jonas Moen', 'Utadrettet arbeid', 'Bachelor økonomi · 1. år']]
      },
      sponsors: {
        eyebrow: 'Støttet av',
        title: 'Partnere som hjelper oss å fly',
        lead: 'Industri- og akademiske partnere driver hver prøvefyring og flyging. Støtten deres gir studenter ekte maskinvare i hendene.',
        tierWord: 'nivå',
        perYear: '/ år',
        tiers: [['Mannskap', 'Booster', 'kr 5 000+', ['Logo på raketten', 'Navn på nettsiden', 'Oppdateringer på oppskytingsdagen']], ['Oppdrag', 'Sustainer', 'kr 15 000+', ['Alt i Booster', 'Logo på lagklær', 'Besøk i lab og på byggedag', 'Kvartalsvis fremdriftsrapport']], ['Flyging', 'Apogee', 'kr 40 000+', ['Alt i Sustainer', 'Førsteklasses logoplassering', 'Navngitt delsystem-sponsor', 'VIP-invitasjon til oppskyting']]],
        cta: 'Bli sponsor'
      },
      join: {
        eyebrow: 'Opptak 2026 · åpent',
        title: 'Bygg en rakett. Ingen erfaring nødvendig.',
        lead: 'Vi rekrutterer hver høst på tvers av alle studieprogram ved HVL — ingeniører, kodere, maskinarbeidere, skribenter. Vil du fly maskinvare, vil vi ha deg på mannskapet.',
        formTitle: 'Bli med på mannskapet',
        formSub: 'Legg igjen detaljene dine — vi inviterer deg til neste byggedag.',
        fName: 'Fullt navn',
        fEmail: 'HVL-e-post',
        fProgramme: 'Studieprogram',
        fProgrammePh: 'f.eks. maskiningeniør',
        submit: 'Søk om å bli med',
        fine: 'Ingen forpliktelser — kom på en byggedag først.',
        okTitle: 'Du er på listen 🚀',
        okSub: 'Vi tar kontakt før neste byggedag. Velkommen om bord.'
      },
      footer: {
        blurb: 'Studentlag for hybridraketter ved Høgskulen på Vestlandet. Bergen, Norge.',
        explore: 'Utforsk',
        involved: 'Bli med',
        contact: 'Kontakt',
        join: 'Bli med på laget',
        sponsor: 'Bli sponsor',
        buildDays: 'Byggedager',
        rights: '© 2026 Astro HVL · Bergens høyeste punkt',
        made: 'Laget i Bergen 🇳🇴'
      }
    },
    en: {
      langName: 'EN',
      header: {
        nav: {
          home: 'Home',
          projects: 'Projects',
          team: 'Team',
          sponsors: 'Sponsors'
        },
        status: 'Recruiting · 2026 intake',
        join: 'Join the team'
      },
      hero: {
        eyebrow: 'Bergen · est. 2025 · hybrid propulsion',
        titleTop: 'Bergens høyeste',
        titleEm: 'punkt.',
        sub: 'Astro HVL is a student team designing, building, and flying hybrid rockets out of Western Norway University of Applied Sciences. Engineered by students, fired in Bergen.',
        ctaJoin: 'Join the team',
        ctaRockets: 'Our rockets',
        stats: [{
          value: '3.2',
          unit: 'km',
          label: 'Target apogee',
          accent: true
        }, {
          value: '982',
          unit: 'N',
          label: 'Peak thrust'
        }, {
          value: 'N₂O',
          label: 'Oxidizer'
        }, {
          value: '38',
          label: 'Crew'
        }, {
          value: '2025',
          label: 'Founded'
        }]
      },
      mission: {
        eyebrow: 'The mission',
        title: 'Every gram, every joule, engineered by students.',
        lead: 'We run the full cycle in-house — design, machining, static fire, and flight. Four subsystems, one launch window, zero shortcuts.',
        subs: [['Propulsion', 'Flame', 'Student-designed hybrid motor running nitrous oxide and a solid fuel grain.'], ['Avionics', 'CircuitBoard', 'Custom flight computer logging telemetry, attitude, and apogee detection.'], ['Recovery', 'Parachute', 'Dual-deploy recovery — drogue at apogee, main for a soft touchdown.'], ['Structures', 'Box', 'Carbon and aluminium airframe machined and laid up in-house.']]
      },
      projects: {
        eyebrow: 'Flight log',
        title: "What we're building",
        all: 'All projects',
        featEyebrow: 'Flagship · 2026',
        featStatus: 'In build',
        featTitle: 'Apogee I',
        featDesc: 'Our first flight vehicle: a hybrid-powered single-stage rocket designed to clear the highest point above Bergen and recover under dual-deploy parachutes.',
        specs: [['3.2 km', 'Apogee'], ['Mach 0.8', 'Max v'], ['2.4 m', 'Length']],
        follow: 'Follow the build',
        list: [['Hybrid Demonstrator', '2025', 'Bench-test article proving the hybrid motor and fill line.', 'success', 'Static fired'], ['Apogee I', '2026', 'First flight vehicle — targeting 3.2 km over Bergen.', 'warning', 'In build'], ['Ground Station', '2026', 'Portable telemetry + fill control trailer for launch ops.', 'brand', 'Active']]
      },
      team: {
        eyebrow: 'The crew',
        title: '38 students. One launch window.',
        lead: 'A cross-disciplinary team of engineers, programmers, and makers from across HVL — all volunteers, all learning by flying.',
        crew: [['Astrid Haugen', 'Team Lead', 'MSc Mechanical · Y2'], ['Mathias Solberg', 'Propulsion', 'BSc Mechanical · Y3'], ['Ingrid Vik', 'Avionics', 'BSc Electronics · Y2'], ['Oskar Lund', 'Recovery', 'BSc Mechanical · Y1'], ['Sofie Berg', 'Structures', 'BSc Mechanical · Y3'], ['Henrik Aas', 'Software', 'BSc Computer Eng · Y2'], ['Maria Nilsen', 'Ops & Safety', 'BSc Mechanical · Y2'], ['Jonas Moen', 'Outreach', 'BSc Economics · Y1']]
      },
      sponsors: {
        eyebrow: 'Backed by',
        title: 'Partners who help us fly',
        lead: "Industry and academic partners fuel every static fire and flight. Their support puts real hardware in students' hands.",
        tierWord: 'tier',
        perYear: '/ year',
        tiers: [['Crew', 'Booster', 'kr 5 000+', ['Logo on the airframe', 'Name on the website', 'Launch-day updates']], ['Mission', 'Sustainer', 'kr 15 000+', ['Everything in Booster', 'Logo on team apparel', 'Lab & build-day visit', 'Quarterly progress report']], ['Flight', 'Apogee', 'kr 40 000+', ['Everything in Sustainer', 'Prime logo placement', 'Named subsystem sponsor', 'VIP launch invitation']]],
        cta: 'Become a sponsor'
      },
      join: {
        eyebrow: '2026 intake · open',
        title: 'Build a rocket. No experience required.',
        lead: 'We recruit every autumn across all programmes at HVL — engineers, coders, machinists, writers. If you want to fly hardware, we want you on the crew.',
        formTitle: 'Join the crew',
        formSub: "Drop your details — we'll invite you to the next build day.",
        fName: 'Full name',
        fEmail: 'HVL email',
        fProgramme: 'Study programme',
        fProgrammePh: 'e.g. Mechanical Engineering',
        submit: 'Apply to join',
        fine: 'No commitment — come see a build day first.',
        okTitle: "You're on the list 🚀",
        okSub: "We'll reach out before the next build day. Welcome aboard."
      },
      footer: {
        blurb: 'Student hybrid rocketry team at Western Norway University of Applied Sciences. Bergen, Norway.',
        explore: 'Explore',
        involved: 'Get involved',
        contact: 'Contact',
        join: 'Join the team',
        sponsor: 'Sponsor us',
        buildDays: 'Build days',
        rights: '© 2026 Astro HVL · Bergens høyeste punkt',
        made: 'Made in Bergen 🇳🇴'
      }
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/i18n.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
/* Astro HVL — icon wrapper over Lucide (loaded via CDN as window.lucide).
   Lucide = MIT-licensed stroke icons, 24×24 / 2px / round — matches the
   technical, precise brand voice. Use <Icon name="Rocket" /> with any
   Lucide PascalCase name. */
(function () {
  const h = React.createElement;
  function Icon({
    name,
    size = 20,
    stroke = 2,
    className = '',
    style,
    ...rest
  }) {
    const L = window.lucide || {};
    const node = L.icons && L.icons[name] || L[name] || [];
    const kids = node.map((c, i) => h(c[0], {
      key: i,
      ...c[1]
    }));
    return h('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: stroke,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className,
      style,
      'aria-hidden': true,
      ...rest
    }, kids);
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

})();
