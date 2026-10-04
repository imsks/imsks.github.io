/* ==========================================================================
   ARTIFACT BAR
   Injected into the standalone Rajniti artifact pages. They each carry their
   own self-contained styling, so this deliberately ships its own scoped CSS
   and touches nothing else on the page.
   ========================================================================== */
(function () {
  'use strict';

  var ROOT = '../../';

  var PAGES = [
    ['market-opportunity.html',  'Market Opportunity'],
    ['roadmap.html',             'Roadmap'],
    ['trust-and-safety.html',    'Trust & Safety'],
    ['market-sizing.html',       'Market Sizing'],
    ['rice-prioritization.html', 'RICE + Kano'],
    ['okrs-dashboard.html',      'OKRs'],
    ['stakeholder-map.html',     'Stakeholders'],
    ['interview-script.html',    'Interviews'],
    ['experiment-brief.html',    'Experiment'],
    ['analytics-dashboard.html', 'Analytics']
  ];

  var here = location.pathname.split('/').pop();

  var css = [
    '.ab{position:sticky;top:0;z-index:999;background:#14110F;color:#FAF8F5;',
    'font-family:Archivo,system-ui,-apple-system,"Segoe UI",sans-serif;',
    'border-bottom:2px solid #E3B505;padding-top:env(safe-area-inset-top,0px)}',
    '.ab-in{max-width:1120px;margin:0 auto;padding:0 20px;height:52px;display:flex;align-items:center;gap:18px}',
    '.ab-back{font-size:13.5px;font-weight:700;color:#FAF8F5;text-decoration:none;white-space:nowrap;display:flex;align-items:center;gap:7px}',
    '.ab-back:hover{color:#E3B505}',
    '.ab-sep{width:1px;height:20px;background:rgba(250,248,245,.2);flex:none}',
    '.ab-list{display:flex;gap:14px;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;min-width:0}',
    '.ab-list::-webkit-scrollbar{display:none}',
    '.ab-list a{font-size:12.5px;font-weight:500;color:rgba(250,248,245,.6);text-decoration:none;white-space:nowrap;padding:4px 0;border-bottom:2px solid transparent}',
    '.ab-list a:hover{color:#FAF8F5}',
    '.ab-list a[aria-current="page"]{color:#E3B505;border-bottom-color:#E3B505}',
    '@media print{.ab{display:none}}'
  ].join('');

  var links = PAGES.map(function (p) {
    var cur = p[0] === here ? ' aria-current="page"' : '';
    return '<a href="' + p[0] + '"' + cur + '>' + p[1] + '</a>';
  }).join('');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var bar = document.createElement('nav');
  bar.className = 'ab';
  bar.setAttribute('aria-label', 'Case study navigation');
  bar.innerHTML =
    '<div class="ab-in">' +
      '<a class="ab-back" href="' + ROOT + 'work.html">\u2190 All work</a>' +
      '<span class="ab-sep"></span>' +
      '<div class="ab-list">' + links + '</div>' +
    '</div>';

  document.body.insertBefore(bar, document.body.firstChild);
})();
