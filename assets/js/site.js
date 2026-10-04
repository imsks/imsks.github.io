/* ==========================================================================
   SITE RUNTIME
   Renders the shared chrome (nav + footer) from SITE data, then wires up
   the scroll/entry animations. Classic script, no modules, no build step.

   Pages in a subfolder must declare their depth:
     <html lang="en" data-root="../../">
   ========================================================================== */
(function () {
  'use strict';

  var S = window.SITE;
  if (!S) return;

  var ROOT = document.documentElement.getAttribute('data-root') || '';
  var PAGE = (location.pathname.split('/').pop() || 'index.html');

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  // Relative hrefs are rewritten for the page's folder depth. Absolute,
  // mailto and hash links are left alone.
  function url(href) {
    if (!href) return '#';
    if (/^(https?:|mailto:|tel:|#|\/)/.test(href)) return href;
    return ROOT + href;
  }

  function isExternal(href) {
    return /^https?:/.test(href);
  }

  function linkAttrs(href) {
    return isExternal(href) ? ' target="_blank" rel="noopener"' : '';
  }

  function navHref(item) {
    return item.mail ? 'mailto:' + S.person.email : url(item.href);
  }

  /* ---------- scroll progress ---------- */
  function mountProgress() {
    var bar = document.createElement('div');
    bar.className = 'progress';
    document.body.appendChild(bar);

    var ticking = false;
    function update() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')';
      ticking = false;
    }
    addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ---------- navigation ---------- */
  function mountNav() {
    var host = document.querySelector('[data-nav]');
    if (!host) return;

    var items = S.nav.map(function (item, i) {
      var href = navHref(item);
      var current = !item.mail && href.replace(ROOT, '') === PAGE ? ' aria-current="page"' : '';
      return '<a href="' + esc(href) + '"' + linkAttrs(href) + current +
             ' style="--i:' + i + '" class="' + (item.cta ? 'nav-cta' : '') + '">' +
             esc(item.label) + '</a>';
    }).join('');

    host.className = 'nav';
    host.innerHTML =
      '<div class="nav-in">' +
        '<a class="nav-brand" href="' + esc(url('index.html')) + '">' +
          '<span class="dot"></span>' + esc(S.person.name) +
        '</a>' +
        '<div class="nav-links" id="navLinks">' + items + '</div>' +
        '<button class="nav-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="navLinks">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>';

    var toggle = host.querySelector('.nav-toggle');
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    host.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    addEventListener('scroll', function () {
      host.classList.toggle('is-stuck', window.scrollY > 8);
    }, { passive: true });
  }

  /* ---------- footer ---------- */
  function mountFooter() {
    var host = document.querySelector('[data-footer]');
    if (!host) return;

    var cols = S.footerNav.map(function (col) {
      return '<div class="foot-col"><h4>' + esc(col.title) + '</h4>' +
        col.links.map(function (l) {
          var href = url(l.href);
          return '<a href="' + esc(href) + '"' + linkAttrs(href) + '>' + esc(l.label) + '</a>';
        }).join('') +
      '</div>';
    }).join('');

    var social = S.social.map(function (l) {
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
    }).join('<span aria-hidden="true"> · </span>');

    host.className = 'site-footer';
    host.id = host.id || 'contact';
    host.innerHTML =
      '<div class="wrap">' +
        '<div class="foot-top">' +
          '<div>' +
            '<h3>Let\u2019s talk.</h3>' +
            '<p class="muted" style="max-width:34ch">Open to AI product roles, founding engineering roles and collaborations. India or remote.</p>' +
            '<a class="foot-mail" href="mailto:' + esc(S.person.email) + '">' + esc(S.person.email) + '</a>' +
          '</div>' +
          cols +
        '</div>' +
        '<div class="foot-bottom">' +
          '<span>' + esc(S.person.name) + ' \u00b7 ' + esc(S.person.location) + '</span>' +
          '<span>' + social + '</span>' +
          '<span>\u00a9 <span data-year></span> \u00b7 ' + esc(S.footerNote) + '</span>' +
        '</div>' +
      '</div>';

    host.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------- marquee ---------- */
  function mountMarquee() {
    document.querySelectorAll('[data-marquee]').forEach(function (el) {
      var run = S.marquee.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('');
      el.className = 'marquee';
      el.innerHTML = '<div class="marquee-track" aria-hidden="true">' + run + run + '</div>';
    });
  }

  /* ---------- kinetic headings ---------- */
  // Splits a heading into masked words so each line can rise into place.
  function splitKinetic() {
    document.querySelectorAll('[data-kinetic]').forEach(function (el) {
      el.classList.add('kinetic');
      el.innerHTML = el.innerHTML.split(/<br\s*\/?>/i).map(function (line) {
        return line.trim().split(/\s+/).map(function (w) {
          return '<span class="word"><i>' + w + '</i></span>';
        }).join(' ');
      }).join('<br>');
    });
  }

  /* ---------- role rotator ---------- */
  function mountRotator() {
    var el = document.querySelector('[data-roles]');
    if (!el || !S.person.roles.length) return;
    var i = 0;
    el.textContent = S.person.roles[0];
    setInterval(function () {
      i = (i + 1) % S.person.roles.length;
      el.style.opacity = '0';
      el.style.transform = 'translateY(-8px)';
      setTimeout(function () {
        el.textContent = S.person.roles[i];
        el.style.transform = 'translateY(8px)';
        requestAnimationFrame(function () {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      }, 280);
    }, 2600);
  }

  /* ---------- counters ---------- */
  function countUp(el) {
    var raw = el.getAttribute('data-count');
    var target = parseFloat(raw.replace(/,/g, ''));
    if (!isFinite(target)) { el.textContent = raw; return; }
    var grouped = raw.indexOf(',') > -1;
    var start = performance.now();
    var dur = 1200;

    function frame(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var v = Math.round(target * eased);
      el.textContent = grouped ? v.toLocaleString('en-IN') : String(v);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ---------- reveal on scroll ---------- */
  var io = null;

  function observe() {
    var targets = [].slice.call(
      document.querySelectorAll('.reveal, .stagger, .rule, .kinetic, [data-count]')
    ).filter(function (el) { return !el.dataset.observed; });

    targets.forEach(function (el) { el.dataset.observed = '1'; });

    var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) {
        el.classList.add('in');
        if (el.hasAttribute('data-count')) el.textContent = el.getAttribute('data-count');
      });
      return;
    }

    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('in');
          if (e.target.hasAttribute('data-count')) countUp(e.target);
          io.unobserve(e.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    }

    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- boot ---------- */
  function init() {
    mountNav();
    mountFooter();
    mountMarquee();
    mountRotator();
    splitKinetic();
    mountProgress();
    observe();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Exposed so page scripts can re-run the observer after rendering content.
  window.SITE_UI = { observe: observe, esc: esc, url: url, linkAttrs: linkAttrs };
})();
