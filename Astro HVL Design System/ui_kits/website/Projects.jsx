/* Projects — light section: a featured flight + a grid of project cards. */
(function () {
  const { Card, Badge, Button } = window.AstroHVLDesignSystem_1d7919;
  const Icon = window.Icon;

  const CSS = `
  .pj{ background:var(--surface-sunken); padding:clamp(64px,8vw,112px) 0; }
  .pj__inner{ max-width:var(--container); margin:auto; padding-inline:var(--gutter); }
  .pj__top{ display:flex; justify-content:space-between; align-items:flex-end; gap:24px; margin-bottom:40px; }
  .pj__top h2{ font-size:clamp(30px,4vw,46px); margin:14px 0 0; }
  .pj__feat{ display:grid; grid-template-columns:1.15fr 1fr; gap:0; border-radius:var(--radius-xl); overflow:hidden;
    box-shadow:var(--shadow-md); margin-bottom:20px; background:var(--navy-900); }
  .pj__featart{ position:relative; background:var(--navy-850); min-height:320px; overflow:hidden;
    background-image:linear-gradient(90deg, rgba(10,26,47,.15), rgba(10,26,47,.55)), url(../../assets/static-fire.png);
    background-size:cover; background-position:54% 46%; }
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

  function Projects({ onNav, t }) {
    const pj = t.projects;
    return (
      <section className="pj">
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="pj__inner">
          <div className="pj__top">
            <div>
              <span className="eyebrow">{pj.eyebrow}</span>
              <h2>{pj.title}</h2>
            </div>
            <Button variant="secondary" iconRight={<Icon name="ArrowRight" size={16} />} onClick={()=>onNav('projects')}>{pj.all}</Button>
          </div>

          <div className="pj__feat" data-theme="dark">
            <div className="pj__featart" role="img" aria-label="Static fire test of the hybrid motor"></div>
            <div className="pj__featbody">
              <div style={{display:'flex',gap:8,alignItems:'center'}}>
                <span className="eyebrow" style={{color:'var(--cyan-400)'}}>{pj.featEyebrow}</span>
                <Badge variant="warning" dot>{pj.featStatus}</Badge>
              </div>
              <h3>{pj.featTitle}</h3>
              <p>{pj.featDesc}</p>
              <div className="pj__specs">
                {pj.specs.map(([v,l])=>(
                  <div key={l} className="pj__spec"><b>{v}</b><span>{l}</span></div>
                ))}
              </div>
              <Button size="sm" iconRight={<Icon name="ArrowRight" size={15} />} onClick={()=>onNav('projects')}>{pj.follow}</Button>
            </div>
          </div>

          <div className="pj__grid">
            {pj.list.map(([title,yr,desc,variant,status])=>(
              <Card key={title} interactive className="pjc">
                <div className="pjc__head">
                  <Badge variant={variant} dot>{status}</Badge>
                  <span className="pjc__yr">{yr}</span>
                </div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }
  window.Projects = Projects;
})();
