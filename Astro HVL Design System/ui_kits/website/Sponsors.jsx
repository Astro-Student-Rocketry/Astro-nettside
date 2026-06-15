/* Sponsors — navy band: partner logos + tiers + sponsorship CTA. */
(function () {
  const { Button, Card } = window.AstroHVLDesignSystem_1d7919;
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

  function Sponsors({ onNav, t }) {
    const sp = t.sponsors;
    return (
      <section className="sp" data-theme="dark">
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="sp__grid" />
        <div className="sp__inner">
          <div className="sp__head">
            <span className="eyebrow" style={{color:'var(--cyan-400)',justifyContent:'center'}}>{sp.eyebrow}</span>
            <h2>{sp.title}</h2>
            <p>{sp.lead}</p>
          </div>

          <div className="sp__logos">
            <img className="sp__logo" src="../../assets/sponsor-nammo.png" alt="Nammo" />
            <span className="sp__name">HVL</span>
            <span className="sp__name">Bergen Tech</span>
            <span className="sp__name">Nordic Aero</span>
          </div>

          <div className="sp__tiers">
            {sp.tiers.map(([tier,name,price,perks])=>(
              <Card key={name} className="tier">
                <div className="tier__name"><Icon name="Rocket" size={14} />{tier} {sp.tierWord}</div>
                <h4>{name}</h4>
                <p className="tier__sub">{price} {sp.perYear}</p>
                <ul>
                  {perks.map(p=>(
                    <li key={p}><Icon name="Check" size={15} />{p}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="sp__cta">
            <Button size="lg" icon={<Icon name="Mail" size={16} />} onClick={()=>onNav('join')}>{sp.cta}</Button>
          </div>
        </div>
      </section>
    );
  }
  window.Sponsors = Sponsors;
})();
