# Sachin Kumar Shukla — Portfolio

Live at **https://imsks.github.io**

A static personal site: AI product work, engineering work, two résumés, and the
creator side of things. No framework, no build step, no tracking.

## Structure

```
index.html                      Landing page
work.html                       Case study + artifact index
about.html                      Long-form story, experience timeline, skills
resume.html                     Both résumés (AI PM / AI Full-Stack), print-ready
for-brands.html                 Brand media kit — audience, rates, terms

sitemap.html                    Human-readable index of every page (unlisted)
sitemap.xml                     Public pages only, for search engines
robots.txt

Unlisted — direct link only, not in nav/footer/sitemap.xml:
for-brand-managers.html         Collab kit for community scouts
interview_report.html           Personal interview record, 2020–2026

assets/
  css/site.css                  Design system: tokens, components, animations
  js/data.js                    All portfolio content lives here
  js/site.js                    Shared nav, footer, scroll animations
  js/artifact-nav.js            Back-bar injected into the case-study pages
  resume/                       PDF résumés

work/rajniti/                   The Rajniti case study — 10 standalone artifacts
  market-opportunity.html       Chapter 2 — TAM/SAM/SOM, competition, pricing
  roadmap.html                  Chapter 3 — Now/Next/Later prioritisation
  trust-and-safety.html         Chapter 4 — responsible AI framework
  market-sizing.html            Bottom-up market model
  rice-prioritization.html      RICE + Kano feature scoring
  okrs-dashboard.html           Q1 OKRs + north-star dashboard
  stakeholder-map.html          Stakeholder map + RACI
  interview-script.html         JTBD user interview script
  experiment-brief.html         A/B test design (the Blur Test)
  analytics-dashboard.html      PM analytics dashboard
```

## Editing content

Almost everything on the portfolio pages is rendered from
[`assets/js/data.js`](assets/js/data.js) — stats, projects, experience, résumés,
nav. Edit that file and every page updates.

The two creator pages each keep their own `CONFIG` block at the bottom of the
file, because rates and collab terms change independently of the portfolio.

### Adding a page

1. Create the HTML file, copying the head/nav/footer scaffold from `work.html`.
2. Add an entry to `SITE.nav` (and optionally `SITE.footerNav`) in `data.js`.
3. Add it to `SITE.pages` so it shows up on `sitemap.html`, and to `sitemap.xml`.

Pages in a subfolder must declare their depth so shared links resolve:

```html
<html lang="en" data-root="../../">
```

### Unlisting a page

Some pages should exist but not be advertised — the scout collab kit and the
personal interview record, for example. To unlist one:

1. Keep it out of `SITE.nav` and `SITE.footerNav`.
2. Mark it `unlisted: true` in `SITE.pages` so `sitemap.html` flags it.
3. Leave it out of `sitemap.xml`.
4. Add `<meta name="robots" content="noindex, nofollow">` to the page.

The exclusion is deliberately not done with a `Disallow` rule in `robots.txt`,
because that file is public and would advertise the very URLs being hidden.

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

The repo is named `imsks.github.io`, so GitHub Pages serves it at the root
domain. Push to `main` and it is live within a minute.
