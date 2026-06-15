/* Hero — SpaceX-style full-bleed static-fire photo, content anchored low,
   uppercase headline, thin telemetry bar pinned to the bottom edge. */
(function () {
  const { Button } = window.AstroHVLDesignSystem_1d7919;
  const Icon = window.Icon;

  const CSS = `
  .hero{ position:relative; min-height:94vh; display:flex; flex-direction:column; justify-content:flex-end;
    background:#05070d; overflow:hidden; }
  .hero__bg{ position:absolute; inset:0; background-image:url(../../assets/static-fire.png);
    background-size:cover; background-position:62% 42%; transform:scale(1.04);
    animation:hero-drift 22s var(--ease-inout) infinite alternate; }
  @keyframes hero-drift{ from{ transform:scale(1.04) translateX(0); } to{ transform:scale(1.10) translateX(-1.5%); } }
  @media (prefers-reduced-motion: reduce){ .hero__bg{ animation:none; } }
  .hero__scrim{ position:absolute; inset:0;
    background:
      linear-gradient(180deg, rgba(5,7,13,.58) 0%, rgba(5,7,13,0) 26%, rgba(5,7,13,.15) 52%, rgba(5,7,13,.78) 82%, rgba(5,7,13,.96) 100%),
      linear-gradient(90deg, rgba(5,7,13,.82) 0%, rgba(5,7,13,.25) 46%, rgba(5,7,13,0) 72%); }
  .hero__inner{ position:relative; z-index:2; max-width:var(--container-wide); width:100%; margin:0 auto;
    padding:0 var(--gutter) clamp(36px,5vw,72px); }
  .hero__eyebrow{ font-family:var(--font-mono); font-size:var(--text-xs); letter-spacing:.22em; text-transform:uppercase;
    color:#fff; display:inline-flex; align-items:center; gap:10px; opacity:.92; }
  .hero__eyebrow::before{ content:""; width:30px; height:1px; background:var(--cyan-400); }
  .hero h1{ color:#fff; font-family:var(--font-display); font-weight:600; text-transform:uppercase;
    font-size:clamp(46px,8.5vw,116px); line-height:.92; letter-spacing:-.018em; margin:18px 0 0; max-width:14ch;
    text-shadow:0 4px 40px rgba(0,0,0,.45); }
  .hero h1 em{ font-style:normal; color:var(--blue-400); }
  .hero__sub{ color:#d6e0ec; font-size:clamp(16px,1.5vw,20px); line-height:1.5; max-width:54ch; margin:22px 0 30px;
    text-shadow:0 2px 18px rgba(0,0,0,.5); }
  .hero__cta{ display:flex; gap:14px; flex-wrap:wrap; }
  .hero__cta .ahvl-btn{ text-transform:uppercase; letter-spacing:.08em; font-size:13px; }
  .hero__cta .ahvl-btn--secondary{ color:#fff; border-color:rgba(255,255,255,.4); }
  .hero__cta .ahvl-btn--secondary:hover{ border-color:#fff; background:rgba(255,255,255,.08); color:#fff; }

  /* thin telemetry strip pinned to the very bottom edge */
  .hero__band{ position:relative; z-index:2; border-top:1px solid rgba(255,255,255,.16);
    background:linear-gradient(180deg, rgba(5,7,13,.25), rgba(5,7,13,.6)); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); }
  .hero__bandin{ max-width:var(--container-wide); margin:auto; padding:16px var(--gutter);
    display:flex; gap:clamp(20px,4vw,56px); flex-wrap:wrap; align-items:center; }
  .hstat{ display:flex; align-items:baseline; gap:9px; font-family:var(--font-mono); }
  .hstat b{ font-size:17px; font-weight:600; color:#fff; font-variant-numeric:tabular-nums; }
  .hstat b u{ text-decoration:none; font-size:11px; color:#9fb2c8; margin-left:2px; }
  .hstat span{ font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:#8295ab; }
  .hstat--accent b{ color:var(--cyan-400); }
  .hstat__sep{ width:1px; height:22px; background:rgba(255,255,255,.12); }
  @media(max-width:680px){ .hstat__sep{ display:none; } .hero__bandin{ gap:16px 24px; } }
  `;

  function Hero({ onNav, t }) {
    const h = t.hero;
    return (
      <section className="hero" data-theme="dark">
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="hero__bg" />
        <div className="hero__scrim" />
        <div className="hero__inner">
          <span className="hero__eyebrow">{h.eyebrow}</span>
          <h1>{h.titleTop} <em>{h.titleEm}</em></h1>
          <p className="hero__sub">{h.sub}</p>
          <div className="hero__cta">
            <Button size="lg" iconRight={<Icon name="ArrowRight" size={17} />} onClick={()=>onNav('join')}>{h.ctaJoin}</Button>
            <Button size="lg" variant="secondary" onClick={()=>onNav('projects')}>{h.ctaRockets}</Button>
          </div>
        </div>
        <div className="hero__band">
          <div className="hero__bandin">
            {h.stats.map((s,i)=>(
              <React.Fragment key={i}>
                {i>0 && <span className="hstat__sep" />}
                <div className={'hstat' + (s.accent ? ' hstat--accent' : '')}>
                  <b>{s.value}{s.unit && <u>{s.unit}</u>}</b>
                  <span>{s.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    );
  }
  window.Hero = Hero;
})();
