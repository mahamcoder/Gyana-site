# Gyanasarathi site: copy rewrite rules

Stack: React + Vite SPA, 7 routes: / (Home), /about, /analytics, /ai-lab, /alpha, /research, /contact.
Source of truth for all copy: `docs/copy-rewrite.pdf` ("Gyanasarathi.com Copy Rewrite: SEO and GEO", 73 pages).
If the PDF cannot be parsed well, use `docs/copy-rewrite.md`.

## How to apply the PDF

- Every block in the PDF has a table: Element / Live / New / Why. Use the **New** column VERBATIM, character for character. Do not paraphrase or improve it.
- "Keep" = leave the existing text unchanged.
- "Use the <Page> answer capsule below" = paste the full answer capsule text from the PDF there.
- "Remove ..." = delete that element and fix the layout (e.g. the 99% chip, the 4.8/5 star row).
- `[confirm]` = fact only the client can verify. Use the text as written, add `// TODO(confirm): <what>` next to it, and list it in your final report.
- Keep the existing design, classes, animations and components. Change copy, not styling, unless the PDF requires a structural change.
- If a new line is longer than the live one and the Why column warns about layout, check that it fits and adjust spacing minimally.
- If the repo's current text differs from the PDF "Live" column, still apply the PDF "New" text and mention the mismatch in the report.

## Sitewide rules (apply everywhere: copy, alt text, aria-labels, form labels, emails)

- Brand is typed `Gyanasarathi` in HTML. Never GyanSarathi, GYANSARATHI, Gyan Sarathi. Use CSS `text-transform: uppercase` for capitals.
- Nav and footer label "About GP" becomes "About".
- Primary CTA is always "Book a Strategy Call" (footer pill: "BOOK A STRATEGY CALL"). Never "Strategy Session", "Strategic Call", "Consultation Call".
- Say "private AI model". Do not use "Sovereign AI" alone.
- Banned words: guarantee, world-class, transformative, superhuman, bleeding edge.
- Location: "Hubs in India, clients worldwide". No city names. No "USA, Europe, Middle East and Australia".
- Response time: "two business hours" everywhere.
- Numbers: capital is `$2.5B+` only. Remove $4.2B, 90%, 99%, 99.8%, +24.8%, $14.2M, 4.8/5.
- Email: `contact@gyanasarathi.com` as a placeholder with `// TODO(confirm)`. Remove every gayan-sarathi / gayansarathi domain.

## Structure rules

- Exactly ONE `<h1>` per page: the page headline. The hero wordmark and footer logo become plain `<div>` or `<span>`.
- Home block 6: the three large lines become one `<h2>` (currently `<h4>`).
- Ticker: one copy of the text in the DOM; repeats are created in JS/CSS and marked `aria-hidden="true"`.
- Testimonials (Home 7): hide the whole block behind a flag `SHOW_TESTIMONIALS = false`. H2 becomes "WHAT CLIENTS SAY". Never add Review or AggregateRating schema.
- No dead buttons. Every button links to a real route or is hidden (Learn More, Download Framework, Read Insight, Client Portal, Developer Portal).
- Remove `maximum-scale=1.0` and `user-scalable=no` from the viewport meta tag.

## Working style

- Work one page at a time. Commit after each page with a clear message.
- Run `npm run build` and lint before reporting a page as done.
- Do not skip blocks. Do not touch pages that are not in the current prompt.
- Final report always lists: files changed, remaining `[confirm]` items, placeholders, mismatches, anything not applied and why.
