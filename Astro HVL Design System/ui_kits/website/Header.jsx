/* Site header — sticky, navy, translucent. White wordmark + nav + Join CTA. */
(function () {
  const { Button } = window.AstroHVLDesignSystem_1d7919;
  const Icon = window.Icon;

  const CSS = `
  .hd{ position:sticky; top:0; z-index:50; }
  .hd__bar{ height:var(--header-h); display:flex; align-items:center; gap:24px;
    background:color-mix(in oklab, var(--navy-900) 78%, transparent);
    backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
    border-bottom:1px solid color-mix(in oklab,#fff 8%,transparent); }
  .hd__inner{ width:100%; max-width:var(--container-wide); margin:auto; padding-inline:var(--gutter);
    display:flex; align-items:center; gap:16px; }
  .hd__logo{ height:30px; display:block; }
  .hd__nav{ display:flex; align-items:center; gap:4px; margin-left:8px; }
  .hd__link{ appearance:none; border:0; background:transparent; cursor:pointer;
    font-family:var(--font-sans); font-size:12.5px; font-weight:600; letter-spacing:.09em; text-transform:uppercase; color:#9fb2c8;
    padding:8px 13px; border-radius:var(--radius-sm); transition:color var(--dur-fast), background var(--dur-fast); }
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

  function Header({ current, onNav, t, lang, onLang }) {
    const LINKS = [['home', t.header.nav.home], ['projects', t.header.nav.projects], ['team', t.header.nav.team], ['sponsors', t.header.nav.sponsors]];
    return (
      <header className="hd" data-theme="dark">
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="hd__bar">
          <div className="hd__inner">
            <a href="#" onClick={(e)=>{e.preventDefault();onNav('home');}}>
              <img className="hd__logo" src="../../assets/logo-astro-white.png" alt="Astro HVL" />
            </a>
            <nav className="hd__nav">
              {LINKS.map(([id,label]) => (
                <button key={id}
                  className={'hd__link' + (current===id ? ' hd__link--active':'')}
                  onClick={()=>onNav(id)}>{label}</button>
              ))}
            </nav>
            <div className="hd__spacer" />
            <div className="hd__status"><span className="hd__dot" />{t.header.status}</div>
            <div className="hd__lang" role="group" aria-label="Language">
              <button aria-pressed={lang==='no'} onClick={()=>onLang('no')}>NO</button>
              <button aria-pressed={lang==='en'} onClick={()=>onLang('en')}>EN</button>
            </div>
            <Button size="sm" icon={<Icon name="Rocket" size={15} />} onClick={()=>onNav('join')}>{t.header.join}</Button>
          </div>
        </div>
      </header>
    );
  }
  window.Header = Header;
})();
