/* Mission — light section: intro + the four subsystems as feature cards. */
(function () {
  const { Card } = window.AstroHVLDesignSystem_1d7919;
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

  function Mission({ t }) {
    const m = t.mission;
    return (
      <section className="mz">
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="mz__inner">
          <div className="mz__head">
            <div>
              <span className="eyebrow">{m.eyebrow}</span>
              <h2>{m.title}</h2>
            </div>
            <p className="mz__lead">{m.lead}</p>
          </div>
          <div className="mz__grid">
            {m.subs.map(([title,icon,desc],i)=>(
              <Card key={title} interactive className="sub">
                <div className="sub__ic"><Icon name={icon} size={22} /></div>
                <div className="sub__no">0{i+1}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }
  window.Mission = Mission;
})();
