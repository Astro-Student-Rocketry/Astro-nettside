/* Team — light section: lead crew with avatars + subsystem roles. */
(function () {
  const { Card, Avatar, Tag } = window.AstroHVLDesignSystem_1d7919;

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

  function Team({ t }) {
    const tm = t.team;
    return (
      <section className="tm">
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="tm__inner">
          <div className="tm__head">
            <span className="eyebrow tm__center">{tm.eyebrow}</span>
            <h2>{tm.title}</h2>
            <p>{tm.lead}</p>
          </div>
          <div className="tm__grid">
            {tm.crew.map(([name,role,year])=>(
              <Card key={name} interactive className="mem">
                <Avatar name={name} size={72} ring />
                <h4>{name}</h4>
                <div className="mem__role">{role}</div>
                <div className="mem__year">{year}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }
  window.Team = Team;
})();
