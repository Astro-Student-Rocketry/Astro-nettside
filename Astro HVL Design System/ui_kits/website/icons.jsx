/* Astro HVL — icon wrapper over Lucide (loaded via CDN as window.lucide).
   Lucide = MIT-licensed stroke icons, 24×24 / 2px / round — matches the
   technical, precise brand voice. Use <Icon name="Rocket" /> with any
   Lucide PascalCase name. */
(function () {
  const h = React.createElement;
  function Icon({ name, size = 20, stroke = 2, className = '', style, ...rest }) {
    const L = window.lucide || {};
    const node = (L.icons && L.icons[name]) || L[name] || [];
    const kids = node.map((c, i) => h(c[0], { key: i, ...c[1] }));
    return h('svg', {
      width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
      stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round',
      strokeLinejoin: 'round', className, style, 'aria-hidden': true, ...rest,
    }, kids);
  }
  window.Icon = Icon;
})();
