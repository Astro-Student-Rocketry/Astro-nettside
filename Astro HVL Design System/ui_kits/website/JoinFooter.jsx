/* Join CTA + Footer. */
(function () {
  const { Button, Input } = window.AstroHVLDesignSystem_1d7919;
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

  function Join({ onSubmit, t }) {
    const j = t.join;
    const [done, setDone] = React.useState(false);
    return (
      <section className="jn">
        <div className="jn__inner">
          <div className="jn__card">
            <div className="jn__bp" />
            <div className="jn__copy">
              <span className="eyebrow" style={{color:'rgba(255,255,255,.85)'}}>{j.eyebrow}</span>
              <h2>{j.title}</h2>
              <p>{j.lead}</p>
            </div>
            <div className="jn__form">
              {done ? (
                <div style={{textAlign:'center',padding:'24px 8px'}}>
                  <div style={{color:'var(--success)',marginBottom:10}}><Icon name="CircleCheck" size={40} /></div>
                  <h3>{j.okTitle}</h3>
                  <p className="sub">{j.okSub}</p>
                </div>
              ) : (
                <form onSubmit={(e)=>{e.preventDefault(); setDone(true); onSubmit && onSubmit();}}>
                  <h3>{j.formTitle}</h3>
                  <p className="sub">{j.formSub}</p>
                  <div className="jn__fields">
                    <Input label={j.fName} placeholder="Ada Lovelace" required />
                    <Input label={j.fEmail} type="email" prefix="@" placeholder="you@hvl.no" required />
                    <Input label={j.fProgramme} placeholder={j.fProgrammePh} />
                  </div>
                  <Button type="submit" fullWidth size="lg" iconRight={<Icon name="ArrowRight" size={16} />}>{j.submit}</Button>
                  <p className="jn__fine">{j.fine}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  function Footer({ onNav, t }) {
    const f = t.footer;
    const nav = t.header.nav;
    return (
      <footer className="ft" data-theme="dark">
        <div className="ft__inner">
          <div className="ft__top">
            <div>
              <img className="ft__logo" src="../../assets/logo-astro-white.png" alt="Astro HVL" />
              <p className="ft__blurb">{f.blurb}</p>
              <div className="ft__soc">
                <a href="#" aria-label="Instagram"><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg" alt="Instagram" /></a>
                <a href="#" aria-label="LinkedIn"><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" alt="LinkedIn" /></a>
                <a href="#" aria-label="GitHub"><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt="GitHub" /></a>
                <a href="#" aria-label="Email"><Icon name="Mail" size={18} style={{color:'#cdd9e6'}} /></a>
              </div>
            </div>
            <div className="ft__col">
              <h5>{f.explore}</h5>
              <a href="#" onClick={(e)=>{e.preventDefault();onNav('projects');}}>{nav.projects}</a>
              <a href="#" onClick={(e)=>{e.preventDefault();onNav('team');}}>{nav.team}</a>
              <a href="#" onClick={(e)=>{e.preventDefault();onNav('sponsors');}}>{nav.sponsors}</a>
            </div>
            <div className="ft__col">
              <h5>{f.involved}</h5>
              <a href="#" onClick={(e)=>{e.preventDefault();onNav('join');}}>{f.join}</a>
              <a href="#" onClick={(e)=>{e.preventDefault();onNav('join');}}>{f.sponsor}</a>
              <a href="#">{f.buildDays}</a>
            </div>
            <div className="ft__col">
              <h5>{f.contact}</h5>
              <a href="#">astro@hvl.no</a>
              <a href="#">Inndalsveien 28</a>
              <a href="#">5063 Bergen</a>
            </div>
          </div>
          <div className="ft__bottom">
            <span>{f.rights}</span>
            <span>{f.made}</span>
          </div>
        </div>
      </footer>
    );
  }

  function JoinFooterStyle(){ return <style dangerouslySetInnerHTML={{ __html: CSS }} />; }
  window.Join = Join;
  window.Footer = Footer;
  window.JoinFooterStyle = JoinFooterStyle;
})();
