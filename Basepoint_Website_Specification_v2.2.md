# Basepoint Website Specification — v2.2 FINAL MERGE

### For: Michael Kamau, CTO · Engineering · Product · Design · Marketing/Growth

### From: Basepoint Marketing & Communications

### Status: Final merged implementation specification — v2 page/copy system + v2.1 CTO/Base Collabs architecture

### Supersedes: Basepoint Website Specification v2, v2.1, and Website Remodel Brief v1 where this document introduces a newer requirement

**Grounded in:**

- Website Remodel Brief v1 (carried forward where still valid, revised where the financial model below changes the picture)
- Basepoint Marketing & Communications Plan v3 (personas, proof hierarchy, campaigns, brand voice)
- **Basepoint Marketing & Communications Plan v4 — Clean financial model** (`V4_Executive_Summary`, `ICP_B_Cohort_Model`, `ICP_B_CAC_Model`, `ICP_B_Budget_Scenarios`, `5K_CAC_Scenarios`, `Financial_Model_Reconciliation`) — this is new since v1 and changes two structural decisions in this spec (Sections 2 and 4)
- Design inspiration: Google Workspace Individual page (layout/copy rhythm)
- Product-truth source: `basepoint.mintlify.app`
- Current live site audited: `basepoint.co.ke`

**What changed since v1, in one paragraph:** v1 was written before Basepoint had modeled its own acquisition economics. The v4 financial model now shows two _completely different_ cost structures depending on what the site is asking a visitor to do: a near-zero-cost **signup** (organic content converts at KES 0 marginal CAC; referral at ~KES 2,000) versus an expensive, sales-assisted **activated merchant account** (blended ~KES 12,730, ranging up to KES 45,200 for a founder-closed enterprise deal). A website that treats every visitor the same way — funnel everyone to "Book a demo" — is quietly assuming the expensive path for people who would have converted for free. That distinction is now the organizing principle of this spec, not a footnote.

---

## 0A. Merge Authority — How to Read This Final Version

This document deliberately restores the implementation-ready material that v2.1 compressed or omitted. **v2 remains authoritative for literal page copy, hero headlines, brand colors, visual system, page-level content, page sequencing, product-status language, and public-facing compliance instructions. v2.1 remains authoritative for CTO ownership, Base Collabs, attribution, onboarding, CRM/data contracts, technical architecture, event taxonomy, RACI, acceptance criteria, and resource allocation.** Where the two conflict, the newer v2.1 implementation requirement wins without deleting v2's literal copy unless the copy itself is contradicted by a newer product-truth or compliance rule.

The objective is one buildable specification: a designer can lift approved copy and visual rules directly; Engineering can implement routing, attribution, provisioning and CRM semantics without reconstructing requirements from strategy prose; Growth can operate Base Collabs and Learn as attributable acquisition infrastructure.

### Non-negotiable source-of-truth order

1. Confirmed Product/Engineering/Finance truth overrides marketing copy.
2. v2.1 technical/CTO requirements override older implementation assumptions.
3. v2 literal copy and design specifications are retained wherever they are not contradicted by (1) or (2).
4. Never invent missing prices, customer proof, live capability, integration status, or product status.

---

## 0. How to Use This Document

1. **Read Section 1 (Compliance Flags) before touching copy** — three carried forward from v1, two new ones from the v4 financial model.
2. **Read Section 2 before touching the sitemap** — it changes the primary CTA logic sitewide, not just on one page.
3. Where this document gives literal copy, it's ready to implement — checked against Plan v3 §12's proof hierarchy. Where it gives an instruction instead of copy, the number/asset doesn't exist yet — don't invent one.
4. **Section 13 (Imagery & Resource Budget) is not optional reading.** This site is being built pre-revenue with a funding gap already flagged in the financial model (KES 773,900 short of the modeled ICP-B acquisition budget). Do not spend build budget on anything Section 13 flags as skippable.

---

## 1. Critical Compliance Flags

### 🚩 Flag 1 (carried forward) — No "Trusted by thousands of businesses" logo bar

Zero confirmed enterprise accounts exist per the CRM tracker (every contact "Not yet contacted" or "To be assigned"). Do not use named real company logos (Naivas, Goodlife, Java House, MedPlus, Chandarana — all shown in the supplied reference mockup) without a signed logo-use agreement tied to an actual account. **Replace with:** "24 of 26 River Road shops onboarded in under 12 minutes" (tier-3 evidence, Plan v3 §9) — see Section 8.1.

### 🚩 Flag 2 (carried forward, updated) — Resolve the Duka/Pesa/Mteja/Bandu/Dala naming collision before writing product copy

Full detail unchanged from v1 — the mockup's "Dala = Payments" conflicts directly with the documented "Dala = Real Estate." **Escalate to Michael Kamau (CTO) before writing any Dala copy.** Omit Dala from nav and the app-switcher graphic until resolved. **"Smart Reja" is retired as a name sitewide, per direction — see Flag 6 and Section 10a.** Note this makes the plain "Reja" app-tray icon (shown in the mockup's "more apps" tray as a small "Retail Insights" utility, distinct from the old "Smart Reja Dashboards" surface) an open naming question in its own right: it isn't automatically renamed to Biashara AI just because "Smart Reja" was, and it isn't confirmed as a real, shipping module either. Flag "Reja" (on its own, without "Smart") to Michael Kamau alongside Dala — don't guess whether it survives, gets folded into Biashara AI, or gets dropped.

### 🚩 Flag 6 (NEW) — Biashara AI is vision-stage. The waitlist page is the only permitted surface, and it never claims a live capability

"Smart Reja" is removed from the site entirely and replaced by **Biashara AI** — but this is not a rename of equivalent scope. Smart Reja was one Phase 3 task-board line item (task-11, KES 55,000, "AI WhatsApp Advisor," gated behind Phase 2 telemetry). Biashara AI, as now defined, is a five-capability "business augmentation engine" (market sensing, hypothesis validation, supply-chain optimisation, execution coordination, continuous learning) with an **18-month** strategic-priorities horizon — more than double the length of Plan v3's entire 7-month roadmap, and nowhere yet reconciled against the task board, budget, or dependency map. That reconciliation is a real, open piece of work (flag it to whoever owns the roadmap), but it does **not** block shipping the page below, because the page itself makes no claim that any of this exists yet — it is explicitly, and correctly, framed as a waitlist. Keep it that way:

- The only CTA anywhere on `/solutions/biashara-ai` is **"Join the waitlist."** No "Book a demo," no "Start free," no pricing.
- Every capability bullet on the page stays in present-continuous/vision language ("augments," "strengthens") describing what the platform is _designed to do_, never past-tense or claimed-live language ("has helped," "already optimises").
- The "Strategic Priorities" list is publishable as vision/roadmap content for a partner audience (this is normal, healthy B2B-platform communication) — but it must not be reworded into achievement language. "Validate the Business Augmentation Engine through measurable customer outcomes" is a goal; do not let a future copy pass quietly turn it into a claim that validation has happened.

### 🚩 Flag 3 (carried forward) — "Illustrative data" caption on every dashboard screenshot

Every mockup dashboard (Pesa financial overview, Partner Portal network overview) shows specific numbers that are UI sample data, not real Basepoint metrics. Caption every one.

### 🚩 Flag 4 (NEW) — Do not publish an ARR, revenue, or "customers served" figure anywhere on the site

The v4 financial model's own internal reconciliation (`Financial_Model_Reconciliation`, Section D) found that its two methods of calculating ICP-B ARR at the 83-account mix disagree with each other — **$139,400/year vs. $102,186/year** — and flags this explicitly as _"the supplied cohort/MRR inputs do not reproduce that figure."_ If Basepoint's own model can't agree with itself on this number internally, it cannot appear on a public page under any framing, illustrative or otherwise. This also rules out any "5,000+ Dukas" or similar scale claim — the model shows that number's cost ranges from **KES 5.25M to KES 63.65M depending on which definition of "customer" is used** (see Flag 5), meaning it isn't a settled figure Marketing can point to yet.

### 🚩 Flag 5 (NEW) — Do not conflate "signup" and "activated merchant" anywhere in copy, forms, or analytics

This is the most important new finding in this spec, expanded fully in Section 2. The v4 model treats a **self-serve signup** (someone who creates a Duka account, KES 0–2,000 CAC) and an **activated merchant account** (someone onboarded through agent/founder/field sales, KES 4,100–45,200 CAC) as two different things that must not be blended — the workbook says this explicitly: _"should not be blended without reconciliation."_ Practically: the site needs two visibly different conversion paths, not one "Book a demo" button doing both jobs. Getting this wrong doesn't just mis-state a number — it will make the site's own analytics unusable for the next CAC model revision, because there'll be no way to tell which funnel a lead came through.

**Everything below this point assumes Flags 1–5 have been actioned.**

---

## 2. The Two Acquisition Motions This Site Must Serve (NEW — read before touching the sitemap)

The v4 model prices six acquisition channels for reaching Basepoint's next block of Duka signups:

| Channel                      |              Scenario CAC per signup (KES) |
| ---------------------------- | -----------------------------------------: |
| Organic / Content            | **0** (marginal cost, once content exists) |
| Social ads                   |                                        500 |
| Field / Events               |                                      1,000 |
| Search / SEM                 |                                      1,000 |
| Other partners               |                                      1,500 |
| Referral / Collab incentives |                                      2,000 |

Against that, the ICP-B activated-merchant model (agent, founder, field-agent, reseller channels) runs **4,100 to 45,200 KES per account** — one to two orders of magnitude more expensive, because it includes agent time, travel, commissions, and hands-on onboarding.

**This means the website has to do two different jobs, and it currently only has the plumbing for one of them.** Today's site (and v1 of this brief) routes essentially every path to "Book a demo," which is the _expensive_ motion — fine for a Multi-outlet or Higher-complexity SME prospect who genuinely needs a human, wasteful and CAC-inflating for a single-shop owner who would have signed up on their own if the path existed.

### 2.1 What this changes, concretely

- **A self-serve signup path must exist and must be visually equal-or-more-prominent than "Book a demo" on every page aimed at Micro/Established-tier visitors** (Home, `/products/duka`, `/solutions/retailers`). Site nav and hero CTAs currently assume "talk to a human" is the only door in — it needs a second door.
- **"Book a demo" is reserved for Multi-outlet and Higher-complexity SME contexts** — `/solutions/enterprise`, `/partners`, `/solutions/distributors`. Do not put a demo-booking CTA as the primary action on a page aimed at a single-shop owner; it's asking Basepoint to pay agent/founder-level CAC for a customer who didn't need it.
- **Every lead capture form on the site needs a hidden field recording which path it came through** (self-serve vs. assisted) and, where possible, the channel (organic/social/search/field/partner/referral) — this is a UTM-parameter and form-field requirement, not a design one, and it's what will let the next CAC model revision actually use real data instead of modeled assumptions. Loop in whoever owns analytics before build starts; this is cheap to do now and expensive to retrofit.

### 2.2 New CTA hierarchy, sitewide

| Visitor context | Primary CTA | Secondary CTA |
| --- | --- | --- |
| Home, `/products/duka`, `/solutions/retailers` | **Start free with Duka** (self-serve signup) | Book a demo (for anyone who wants a human first) |
| `/products/pesa`, `/products/mteja`, `/products/bandu` | **Add to your account** (self-serve, if already signed up) / **Start free** (if not) | Talk to sales |
| `/solutions/distributors`, `/solutions/enterprise`, `/partners` | **Talk to our enterprise team** (assisted) | See the Partner Portal / Explore the platform |
| `/pricing` | Both paths shown side by side, see Section 8.4 | — |

---

## 3. New Sitemap (revised from v1)

```
/                              Home (rebuilt — dual CTA per Section 2.2)
/start                         ★ NEW — self-serve Duka signup flow (Section 9.1)
/platform                      Platform overview
/solutions
  /solutions/retailers         Refreshed copy, self-serve CTA
  /solutions/distributors      Refreshed copy, assisted CTA
  /solutions/enterprise        Enterprise Page A (unchanged from v1, see Section 10)
  /solutions/biashara-ai       ★ NEW — Biashara AI waitlist page (Section 10a), replaces all "Smart Reja" references sitewide
/partners                      Enterprise Page B, "Partner Portal" (unchanged from v1, see Section 11)
/partners/apply                ★ NEW — partner/reseller intake form (Section 9.2), serves the "Other partners" channel
/refer                         ★ NEW — referral program landing page (Section 9.3), serves the "Referral/Collab" channel
/products
  /products/duka
  /products/pesa
  /products/mteja
  /products/bandu
  (dala — omitted pending Flag 2)
/pricing                       Dual-path pricing (Section 8.4, revised from v1)
/resources                     ★ ELEVATED — now a real content engine, not just a docs link (Section 8.6)
/company                       Unchanged scope, tone pass only
```

Global nav: **Platform · Solutions · Resources · Pricing · Company · [Log in] [Start free] [Book a demo]** — note the nav itself now needs _two_ action buttons, not one, per Section 2.

---

## 4. Acquisition Channel Enablement Map (NEW)

Each of the six modeled channels needs a specific, minimal piece of site infrastructure to actually work. This table exists so build effort goes where the cheap-CAC channels need it, not where it's easiest to build.

| Channel | Modeled CAC | What the site needs | Priority |
| --- | --: | --- | --- |
| **Organic / Content** | KES 0 | A real `/resources` content engine (Section 8.6) that's actually indexable — this is the _only_ channel in the model with zero marginal cost, and the site currently has nothing here beyond a docs link. This is the single highest-leverage build item in this entire spec. | **Highest** |
| **Referral / Collab** | KES 2,000 | `/refer` page + a way to generate a trackable referral link per existing customer (Section 9.3) | High |
| **Search / SEM** | KES 1,000 | Clean, fast-loading, keyword-relevant landing pages per product (`/products/duka` etc.) that don't force a paid click into a slow page — see Section 6 on performance | High |
| **Social ads** | KES 500 | Lightweight, mobile-first landing pages with obvious single CTAs (no nav clutter) for ad traffic — a stripped-down template variant, not the full site chrome | Medium |
| **Field / Events** | KES 1,000 | A lead-capture form that works on poor connectivity (agents demoing in Gikomba/Toi, CBD, Eastleigh don't reliably have strong signal) — plain HTML form, minimal JS, works offline-first if possible | Medium |
| **Other partners** | KES 1,500 | `/partners/apply` intake form (Section 9.2) | Medium |

**Do not build the Enterprise pages (Section 10–11) before `/resources` and `/start` exist.** The financial model makes clear the cheap channels are where the volume needs to come from; the Enterprise pages serve a motion that's already flagged as underfunded (Flag 4's KES 773,900 gap) and shouldn't consume build time ahead of the near-zero-cost channels that don't have a funding gap at all.

---

## 5. Global Design System — Unchanged From v1

Carry forward exactly: Navy `#1F2B5D`, digital green `#8AFEA7`/print `#9DE89F`, secondary palette used sparingly (blue `#0800F0`, cyan `#80E4F1`, orange `#F7B344`, yellow `#FFE700`), white-dominant neutral layer, Montserrat for marketing copy, Product Sans reserved for in-app UI only. Tone: lively-not-hectic, unexpected-not-silly, bold-not-aloof; confident/fresh/stunning/accessible. No changes here — this part of v1 was already correct and nothing in the financial model touches brand identity.

---

## 6. Performance & Data-Efficiency Budget (NEW)

This section exists because of who's actually visiting this site, not because of generic web-performance best practice. Basepoint's own audience research (Plan v3) is explicit that this market is WhatsApp-first, often on shared or budget data bundles, and frequently on 3G/4G in areas like Gikomba/Toi and Eastleigh where connectivity is inconsistent. A heavy site isn't just slow — it costs a prospective Micro-tier customer real money in data to load, which is a genuine barrier to the KES-0-marginal-cost organic channel actually converting at KES 0.

**Concrete budgets, not vibes:**

- **Total page weight target: under 1.5MB for any landing page**, under 3MB for the richest product page. This is a hard ceiling, not an aspiration — flag any page exceeding it before launch.
- **No autoplay video anywhere.** If a product demo video is wanted, it should be click-to-play, thumbnail-first, and hosted with a compressed poster frame — never an autoplaying hero background video, which is one of the single biggest data-cost offenders on marketing sites.
- **Every dashboard screenshot (already required to carry an "Illustrative data" caption per Flag 3) should also be compressed to WebP/AVIF, not PNG** — these mockup-derived screenshots are the heaviest assets on the site and the easiest to shrink without any visible quality loss.
- **Lazy-load everything below the fold.** Nothing not visible on first paint should be downloaded before it's needed.
- **WhatsApp link-preview (Open Graph) tags must be set on every page**, sized and compressed appropriately — given the audience is WhatsApp-first, a shared Basepoint link that renders an ugly or slow-loading preview card is a real conversion loss, not a cosmetic detail.
- **Test on throttled 3G before calling any page done.** Not Lighthouse-in-good-conditions — actually throttle the connection.

---

## 7. Layout & Copy Patterns (Google Workspace-Inspired) — Unchanged From v1

Carried forward without edits: hero pattern (benefit H1 → 1-sentence subhead → primary + low-friction secondary CTA), feature-grid pattern (icon + H3 + 1-sentence description), single pricing-card pattern (now doubled per Section 8.4), tabbed product deep-dive pattern, FAQ accordion + footer CTA banner. See v1 Section 4 for full detail — nothing here changed.

---

## 8. Page-by-Page Rebuild

### 8.1 Home (`/`)

**Hero:**

- Kicker: `THE OPERATING SYSTEM FOR MODERN BUSINESS`
- H1: **"Unify your business. Multiply your impact."**
- Subhead: _"Base connects the activity of your business — sales, stock, money, and customers — into one clear picture, so you always know what matters before it matters."_
- **Primary CTA: "Start free with Duka"** (self-serve signup — changed from v1's single "Book a demo," per Section 2.2) · **Secondary: "Book a demo"**
- Visual: dashboard mockup panel, captioned **"Illustrative data"** (Flag 3), exported as compressed WebP (Section 6)

**"One system. Multiple surfaces." band:** unchanged from v1 in structure — the third item relabels to **"Biashara AI — coming soon"**, linking to `/solutions/biashara-ai` (Section 10a). Drop the specific "2027" date that Smart Reja carried — Biashara AI's scope has grown well beyond the task-11 estimate that date was based on (Flag 6), so a firm year is no longer a claim this document can support. "Coming soon" plus the waitlist link is the honest version.

**"Tailored for your industry" grid:** unchanged from v1 (Retail/Hospitality/Clinics & Pharmacies — generic, safe).

**Proof strip (replaces the logo bar, Flag 1):**

> **"24 of 26 River Road shops onboarded in under 12 minutes."** > _Early field pilot, CBD — September 2026._

**NEW — "Two ways to get started" band** (immediately below the proof strip, before any other content): a simple two-card layout — Card 1: "Run your shop" → Start free with Duka (self-serve, no call needed). Card 2: "Run your whole operation" → Book a demo (for multi-location or full-suite needs). This band is the single clearest expression of Section 2's dual-motion principle and should not be buried — it belongs above the fold or immediately below the hero.

### 8.2 Platform (`/platform`) — Unchanged from v1

Full content carries forward from v1 Section 5.2 verbatim (ecosystem sections, Pesa/Duka/Mteja/Bandu summaries). No changes — this page's copy was already generic/safe and doesn't touch the acquisition-motion question.

### 8.3 Solutions hub (`/solutions/retailers`, `/solutions/distributors`, `/solutions/enterprise`)

Unchanged copy from v1, **but update the CTA on each per Section 2.2:**

- `/solutions/retailers` → primary CTA becomes **"Start free"**, not "Book a demo"
- `/solutions/distributors` → stays **"Book a demo"** / "Talk to our enterprise team" (assisted motion, correctly matched already)
- `/solutions/enterprise` → unchanged, see Section 10

### 8.4 Pricing (`/pricing`) — Revised Structure

v1 specified a single Workspace-style pricing card. **This needs to become two paths, not one**, per Section 2:

1. **Path A — "Start with Duka" (self-serve):** the single clear core card from v1 (Duka + Pesa bundled entry point), but with a **working "Start free" button, not a "contact us" gate.** Bullet list unchanged from v1 (bold micro-heading + 1–2 sentence description + bolded outcome).
2. **Path B — "Running more than one location?"**: a smaller, adjacent card that routes straight to `/solutions/enterprise`, not to a price — this is intentionally not a self-serve price, it's a qualified handoff to the assisted motion.
3. Module add-on row (Mteja, Bandu) — unchanged from v1, sits below Path A.
4. FAQ accordion — unchanged from v1, **add one new question:** "What's the difference between starting free and booking a demo?" — answer honestly, in plain language, using Section 2's own logic (single shop → start free; multiple locations or full suite → talk to us).
5. Footer CTA — unchanged from v1: "Run your business on one system." → but now two buttons, not one.

**Still true from v1:** do not publish specific KES prices in this document — leave as `{{PRICE}}` for Founder/Finance. That has not changed; the financial model gives CAC and LTV figures, not a retail price.

### 8.5 Products (`/products/duka`, `/products/pesa`, `/products/mteja`, `/products/bandu`) — Mostly Unchanged

Structure and mintlify-sourced content carries forward from v1 Section 5.5 exactly. **One change:** `/products/duka`'s CTA becomes "Start free," matching Section 2.2 (Duka is the entry-point product and should never gate behind a demo call). Pesa/Mteja/Bandu keep "Add to your account" for existing users, "Start free" for new ones — these are add-on modules reached mostly by already-signed-up users, so the CTA should assume that context first.

### 8.6 Resources (`/resources`) — Elevated From "Docs Link" to Real Content Engine

This is the single most consequential change in this spec, per Section 4's channel-enablement table. v1 treated this page as a pointer to `basepoint.mintlify.app` plus an empty case-studies placeholder. That's no longer sufficient — **organic/content is the only channel in the entire model with zero marginal CAC**, and a content engine with zero actual content can't produce zero-cost signups.

**Minimum build:**

- Keep the direct link to `basepoint.mintlify.app` for product documentation (still the single source of truth for docs — don't duplicate).
- **Add an actual content section** — plain-language guides addressing the real questions Basepoint's own personas ask (Plan v3 §6/§18): "How do I know if my shop is ready for Pesa?", "What changes when you open a second location?", "eTIMS compliance for small retailers, explained simply." This doesn't need to launch with dozens of articles — 3–5 genuinely useful pieces, written in the same plain, non-jargon voice as the rest of the site, outperforms a large volume of thin content for both SEO and trust.
- Case studies section: **stays an honest placeholder** ("Our first customer stories are coming soon — we're currently in early field pilots across Nairobi") until Plan v3's Signal Sheet produces tier-1/tier-2 evidence. This has not changed from v1 — do not backfill with fake testimonials just because this section got a content-strategy upgrade elsewhere.

---

## 9. New Supporting Pages (NEW — not in v1)

### 9.1 `/start` — Self-Serve Duka Signup Flow

The landing page for the "Start free with Duka" CTA used sitewide. Keep this page radically simple — it exists to remove friction, not add a second sales pitch:

- One-line reminder of the value prop (reuse the home hero subhead, shortened)
- The signup form itself (whatever fields Product/Eng require for Duka provisioning — this spec doesn't dictate the form schema, that's a product decision)
- **Hidden tracking fields per Flag 5:** acquisition channel (organic/social/search/field/referral/partner, populated from UTM parameters where available) and a flag marking this as a "self-serve signup" record, distinct from an "activated merchant account" record
- No pricing table, no FAQ, no product comparison — those belong on `/pricing` and `/products/duka`. This page's only job is: reduce the number of clicks between "I want this" and "I have an account."

### 9.2 `/partners/apply` — Partner/Reseller Intake

Serves the "Other partners" channel (KES 1,500 modeled CAC). Simple qualification form: business type, region, existing customer base size, interest area (reseller vs. referral partner vs. integration partner). Routes to whoever owns partner relationships — not a self-serve signup, this feeds the assisted motion.

### 9.3 `/refer` — Referral Program Landing Page

Serves the "Referral/Collab" channel (KES 2,000 modeled CAC — the incentive cost). Needs:

- Plain explanation of what an existing customer gets for referring a peer (the actual incentive terms are a Product/Finance decision, not specified here)
- A mechanism to generate a trackable referral link/code per existing customer (talk to Product/Eng about whether this lives in-app or on the marketing site — if in-app, this page can simply explain the program and link to where it lives inside the product)

---

## 10. Enterprise Page A: `/solutions/enterprise` — Unchanged From v1

Full hero, ecosystem section, "every actor becomes more valuable" section, and proof section carry forward from v1 Section 6 verbatim — nothing in the financial model changes this page's content. **One addition:** given Flag 4/5's funding-gap and definition findings, add a small, honest internal note (not visitor-facing) in the page's CMS metadata: _"This page serves the assisted/high-CAC acquisition motion, currently short KES 773,900 of its modeled budget per the v4 financial model — do not scale paid traffic to this page ahead of a Founder funding decision."_ This isn't copy for the page; it's a flag for whoever manages paid spend against it.

## 10a. NEW — `/solutions/biashara-ai` (Waitlist Page, replaces all "Smart Reja" surfaces)

**Audience — read this before writing anything else on the page:** unlike every other page in this spec, this one is not aimed at a Duka/Pesa/Mteja/Bandu merchant persona. It's aimed at **third-party tools, applications, and organisations** who might integrate with, build on, or partner around Biashara AI. Keep the register accordingly — closer to a platform/ecosystem pitch than a retail-merchant pitch. Do not reuse "Know what matters, before it matters" retail-register copy here; this page can nod to the master brand promise once, but its job is different.

### Hero

- Kicker: `BIASHARA AI — COMING SOON`
- H1: **"The business augmentation engine for commercial decision-making."**
- Subhead: _"Biashara AI augments commercial decision-making by continuously sensing markets, validating hypotheses, optimising supply-chain decisions, coordinating execution across stakeholders, and learning from outcomes. Rather than replacing management, it strengthens organisational judgment through continuous intelligence."_
- **Primary CTA (only CTA on this page): "Join the waitlist"**

### Section: What it's designed to do

Five-item feature-grid pattern (Section 7), one line each, present-continuous/vision phrasing throughout:

1. **Sensing markets** — Continuously identifying emerging opportunities as market conditions shift.
2. **Validating commercial hypotheses** — Turning assumptions about what will work into tested, evidence-backed decisions.
3. **Optimising supply-chain decisions** — Improving how goods, cash, and information move through the chain.
4. **Coordinating execution** — Aligning the people and systems that need to act once a decision is made.
5. **Learning from outcomes** — Feeding what actually happened back into better future decisions.

### Section: Our philosophy (pull-quote treatment)

> **"Rather than replacing management, the platform strengthens organisational judgment through continuous intelligence."**

Set this as a standalone, large-type pull-quote — it's the single sentence doing the most work to distinguish this from generic "AI will run your business" hype, and it's consistent with the brand's own restraint principle (confident, not hectic).

### Section: Where we're headed (strategic priorities, next 18 months)

Publishable as roadmap/vision content for a partner audience — five items, kept exactly as goals, never reworded into achievement claims (Flag 6):

- Validate the Business Augmentation Engine through measurable customer outcomes.
- Build a reusable intelligence infrastructure that compounds across industries.
- Embed Basepoint into recurring commercial and supply-chain workflows.
- Establish strategic partnerships that strengthen platform intelligence and distribution.
- Position Basepoint as a thought leader in adaptive business systems through research, product innovation, and market insights.

### Section: Waitlist form

Minimal fields: Name · Organisation · Organisation type (Tool/App maker · Platform · Enterprise · Other) · Area of interest (checkboxes against the five capabilities above, or "Partnership/integration") · Email. No pricing, no product comparison, no timeline commitment beyond "coming soon."

### CTA banner (footer of page)

_"Help shape the next generation of commercial intelligence."_ → Join the waitlist.

### Sequencing note

This page can ship independently of everything else in this spec — it has no dependency on `/start`, `/resources`, or the Enterprise pages, and no funding-gap exposure (Flag 1/4's concerns are about paid acquisition spend; a waitlist page costs nothing to run). It's a reasonable candidate to ship early, precisely because it carries so little risk.

---

## 11. Enterprise Page B: `/partners` ("Partner Portal") — Unchanged From v1

Full spec carries forward from v1 Section 7 verbatim — hero, network overview dashboard (still needs "Illustrative data" caption per Flag 3), product movement/channel performance section, three-value-prop row, CTA banner. Same funding-gap flag as Section 10 applies. Sequencing note from v1 stands: this page should not go live before `/solutions/enterprise`.

---

## 11a. NEW — `/products/duka/hospitality` ("Duka for Hospitality" — Early Access)

**Source:** a supplied deep-research report proposing a hospitality/services edition of Duka (restaurants, hotels, bars, bakeries, cloud kitchens; salons as a lower-priority extension). **Same discipline as Section 10a applies here:** this is a planning document, not a shipped product. Its own Gantt roadmap starts the MVP build in **October 2026** with a beta in **mid-December 2026** — meaning as of this spec, the feature set below does not exist yet. Treat everything on this page as early-access/coming-soon, never as a live purchasable product, until Product/Eng confirms the beta is real.

### 🚩 Flag 7 (NEW) — Hospitality Duka is pre-MVP; its pricing figures are estimates, not approved prices

The source report proposes three tiers (Starter/Pro/Enterprise) with specific KES pricing and its own CAC-by-channel table. The report **says this about itself**: "these are estimates — actual values will be tuned once we have real prospect feedback." That's the same status as every other unpriced page on this site. Do not publish the report's KES 3,000 / 7,000 / 15,000 monthly figures (or the 0 / 15,000 / 30,000 onboarding fees) as live prices. They're useful for Founder/Finance planning discussions and for this spec's internal tier-differentiation table (Section 11a.3) — not for the public page.

**One thing worth flagging to Founder/Finance directly, not resolving here:** these proposed hospitality tiers sit well above where core Duka's pricing will presumably land once `{{PRICE}}` gets filled in (Section 8.4). Whether that's intentional (hospitality genuinely costs more to serve) or an artifact of two pricing exercises done independently is a real open question — the two pricing decisions should be made together, not published separately without either side knowing what the other says.

### 11a.1 Hero

- Kicker: `DUKA FOR RESTAURANTS, CAFÉS & HOSPITALITY — EARLY ACCESS`
- H1: **"Duka, built for how restaurants and hospitality businesses actually run."**
- Subhead: _"Everything you already know about Duka — plus tables, kitchen tickets, split bills, and the reports that actually match how a restaurant, café, or hotel makes money."_
- **Primary CTA: "Join early access"** (not "Start free" — this isn't self-serve-ready yet, see Flag 7) · **Secondary: "Talk to sales"** (for hotels and multi-outlet chains — the Enterprise-tier audience, which the source report's own GTM section treats as a higher-touch, on-site-demo sale)

### 11a.2 What carries over from Duka (reassurance section — keep short, plain, no jargon)

Per the source report's feature-mapping table, these carry over largely as-is:

- Checkout, receipts, and the reporting you already know
- M-Pesa and mobile money, built in
- eTIMS-compliant tax on every bill
- Multi-location support, if you run more than one outlet

_(Two items the report explicitly says to drop for this edition: multi-channel e-commerce sync and an e-commerce website — not relevant to in-person dining, don't build or mention them here.)_

### 11a.3 What's different (Must-have features from the source report, benefit-framed for the page; full priority/effort table kept as an internal appendix, not page copy)

**On the public page**, translate the report's "Must" features into plain benefit language:

- **Table management** — see every table's status at a glance, and move a ticket if a party changes seats.
- **Kitchen ticket printing** — orders route straight to the kitchen or bar. No shouting order numbers across the room.
- **Split bills** — split a check by item or by guest, and take more than one payment on the same table.
- **Order modifiers** — extras, sizes, and spice levels, without a workaround.
- **Staff shifts** — clock in and out, and see which shift a cash discrepancy happened on.
- **Works offline** — keep taking orders when the connection drops, and sync once it's back.

**Coming after early access** (the report's "Should"/"Nice" items — publish as honest roadmap, same discipline as Biashara AI's Flag 6):

- Reservations
- Recipe-level ingredient costing (auto-deducts stock per dish, shows true cost of goods)
- Multi-terminal sync for larger floors
- Hotel property-management system (PMS) integration, for F&B charges posted to rooms

**Internal-only reference table** (do not put this level of detail on the live page — it's a dev/product priority list, not marketing copy):

| Feature | Priority | Dev effort | Page treatment |
| --- | --- | --- | --- |
| Table management, order tickets, modifiers, split bills, kitchen routing, staff permissions, offline mode | Must | Medium–High | Listed above, live at MVP |
| Reservations, recipe/portion costing, multi-terminal sync, PMS integration | Should/Nice | High | Listed as "coming after early access" |
| Service charge/tips, covers tracking | Should | Low | Fold into reporting copy, not a headline feature |
| Guest profiles/CRM, customer display, loyalty | Nice | Medium | Omit from page entirely for now — not differentiating enough to lead with, revisit once Mteja integration is scoped |

### 11a.4 Pricing section (careful framing per Flag 7)

Do not show KES numbers. Show tier **names** and **feature differentiation only**, with a plain status line:

> _"Pricing for Duka Hospitality is still being finalized alongside early access feedback. Join early access and we'll bring you in as pricing is confirmed."_

Tier names and what differentiates them (features only, no prices): **Starter** (single terminal, core dining features) → **Pro** (adds recipe costing and a second terminal once those ship) → **Enterprise** (multi-branch, dedicated support — the hotel/chain tier, routed to "Talk to sales" rather than self-serve regardless of eventual pricing).

### 11a.5 CTA banner (footer of page)

_"Be one of the first restaurants running on Duka."_ → Join early access.

### 11a.6 Sequencing and GTM note

The source report's own go-to-market plan for this edition is high-touch and in-person (on-site demos, a field-agent WhatsApp network, neighborhood-clustered demo weekends) — **not a self-serve, organic-content motion like core Duka's `/start` flow (Section 9.1).** That's consistent with Section 2's dual-motion framework: this page's Starter tier _might_ eventually support self-serve once the product and pricing are both confirmed, but Pro/Enterprise should route to "Talk to sales" from day one, the same way `/solutions/enterprise` does. Don't build a self-serve checkout for this page at launch — build the early-access waitlist first, exactly as Biashara AI does, and only add self-serve once there's an actual shipped MVP and an approved price to sell at.

**Cross-check worth recording:** the source report's own Starter-tier referral CAC (KES 2,000) matches the core Duka model's referral channel CAC exactly (`5K_CAC_Scenarios`, Section 4 of this spec). Its Pro/Enterprise agent and founder-sale CAC figures (7,500 / 15,000–18,000) are in the same order of magnitude as core Duka's merchant-agent and founder channels (9,000 / 33,500–45,200) but not identical — treat this as a related, separately-modeled CAC structure for a different product line, not a figure to blend into the core ICP-B model (same discipline as Flag 5).

---

## 12. Copy-to-Persona Grounding Map (Revised)

| Page | Persona (Plan v3 §6/§18) | Acquisition motion | Proof tier available today |
| --- | --- | --- | --- |
| `/` Home | All tiers (entry point) | Both (dual CTA) | Tier 3 (24/26 shops stat) |
| `/start` | Micro/Established (self-serve capable) | **Self-serve** | Tier 7 (no claims, pure UX) |
| `/solutions/retailers` | The Connector Trader | **Self-serve** | Tier 5 |
| `/solutions/distributors` | The Outgrowing Operator (early) | Assisted | Tier 5 |
| `/solutions/enterprise` | The Outgrowing Operator | Assisted | Tier 6/7 (aspiration + demo only) |
| `/partners` | Distributor/manufacturer segment | Assisted | Tier 7 |
| `/partners/apply` | Reseller/partner segment | Assisted (partner-mediated) | Tier 7 |
| `/solutions/biashara-ai` | 3rd-party tools/apps/organisations (new, non-merchant audience) | Waitlist only — no acquisition-motion CAC applies | Tier 7 (vision/roadmap content, explicitly not a live-capability claim) |
| `/refer` | Existing customers | Self-serve-adjacent | Tier 7 |
| `/resources` | All tiers, top-of-funnel | Organic/content | Tier 7 (feature/educational content, no claims) |
| `/pricing` | Cross-tier | Both (dual path) | N/A |

---

## 13. Imagery & Resource Budget (NEW — read before commissioning any asset)

Given the funding gap flagged in Section 1 (Flag 4) and the general pre-revenue posture of this whole plan, **no page in this rebuild should require new custom photography or video as a prerequisite for launch.**

- **Dashboard/product screenshots:** source from the existing reference mockup or real product screens where available, captioned "Illustrative data" (Flag 3), compressed per Section 6. Zero incremental cost.
- **Industry imagery ("Tailored for your industry" grid, etc.):** the reference mockup's retail/hospitality/clinic photography is generic stock-style imagery, not customer photography — fine to reuse or replace with similarly-licensed stock. **Do not commission a photoshoot for this.**
- **Icons:** simple line-icon sets (storefront, truck, person, clock, network) — these are cheap/free to source from any standard icon library consistent with the brand's clean, restrained visual language. No custom illustration budget needed.
- **The one place where real photography would genuinely help — and should be sequenced, not skipped — is the eventual case-studies section (Section 8.6).** Once Plan v3's Signal Sheet produces real tier-1/tier-2 evidence worth publishing, that's the moment to budget for real photography of real shops/owners (with consent, per Plan v3's Consent & Risk Log discipline) — not before, and not as generic stock in the meantime.
- **Video:** none required for this rebuild. If Product/Marketing wants a demo video later, treat it as a separate, explicitly-scoped project — don't let "the hero needs a video" scope-creep into this build.

---

## 14. Dependencies & Sequencing (Revised)

```
Flags 1, 3, 4, 5 actioned                    ─┬─► Home page ships
(no fake logos/ARR figures, captions applied, │
 dual-tracking fields in place)               ─┘

Flag 2 resolved (Dala + standalone "Reja"     ──► /platform, /products/*, and the
naming confirmed with Michael Kamau)                app-switcher graphic ship

/resources content engine has 3-5 real         ──► Organic/content channel spend
guides published (Section 8.6)                     can meaningfully begin

/start self-serve flow built + tracking        ──► Home page's dual-CTA band goes live;
fields confirmed with analytics owner              without this, Flag 5 is violated by default

Product/Eng confirms Partner Portal            ──► /partners ships
feature is real or roadmap-labelled

/solutions/enterprise ships                    ──► /partners ships (routes from it)

Founder funding decision on the KES 773,900    ──► Paid acquisition spend against
gap (v4 model, Section 1 Flag 4)                   /solutions/enterprise or /partners

/solutions/biashara-ai has no upstream           ──► Can ship independently, any time —
dependency (waitlist only, no CAC exposure)          see Section 10a sequencing note

Roadmap owner reconciles the 18-month            ──► Anything beyond the waitlist page
Biashara AI priorities against Plan v3's             itself (actual product build, a demo,
7-month horizon and task board (Flag 6)              a "coming [specific date]" claim)

Plan v3 Signal Sheet produces a                ──► /resources "Case Studies" gets real
tier-1/tier-2 evidence entry                       content; real photography gets budgeted

Founder/Finance supplies real pricing          ──► /pricing goes live with real numbers
```

**Build order recommendation, given Section 4's priority ranking:** `/start` and `/resources` (the zero/near-zero-CAC channels) should ship **before** the Enterprise pages, not after — the current v1-inherited instinct to build the impressive Enterprise pages first is exactly backwards from what the financial model says is cheapest to make work.

---

## 15. How This Rebuild Serves NRR and APC (1.2 → 2.0) — Updated

Two levers carry forward from v1 unchanged (pricing-page module framing, "works better with" cross-sell strips). **One new lever, specific to this revision:**

3. **Correct CTA routing (Section 2) prevents CAC-inflation that would otherwise starve the expansion motion.** Every Micro-tier visitor routed unnecessarily into the assisted "Book a demo" path costs the company agent/founder time worth 2–15x what that same signup would have cost self-serve — time that isn't then available for the Multi-outlet/Higher-complexity accounts where founder-led sales actually pays for itself (LTV:CAC of 63–524x per `ICP_B_Cohort_Model`). Fixing the routing is a zero-cost, immediate lever on the same budget the whole company is short KES 773,900 against.

---

## 16. SEO / Metadata — Strengthened From v1

v1's core instruction stands: keep the existing indexed meta title/description, let the H1 carry new messaging, flag the Dala keyword conflict to whoever owns SEO. **Additionally:** the existing site's meta keywords still reference "Base Smart Reja" (per the SEO audit in v1) — that keyword is now stale the moment "Smart Reja" is retired sitewide. Whoever owns SEO needs a redirect/keyword-transition plan from the old "Smart Reja" indexing to "Biashara AI," not just a find-and-replace on-page. **New, given Section 4's finding that organic/content is the only zero-CAC channel:** SEO is no longer a "nice to have carried forward" item — it is the highest-leverage acquisition channel in the entire financial model, and the `/resources` build (Section 8.6) should be treated as effectively an SEO investment, not a documentation courtesy. Prioritize real keyword research (what do Kenyan SME owners actually search for — likely Swahili/English/Sheng mixed queries, per Plan v3's audience notes) before writing the first 3–5 resource guides, rather than writing generic content and hoping it ranks.

---

## 17. Handoff Checklist — Updated

- [ ] Michael Kamau (CTO) has confirmed the canonical meaning of "Dala" and the status of the standalone "Reja" app-tray icon (Flag 2)
- [ ] No page anywhere on the site still references "Smart Reja" — full sitewide sweep, not just the pages explicitly listed in this document (Flag 6)
- [ ] `/solutions/biashara-ai` copy reviewed to confirm every capability/priority bullet is in vision/goal language, never claimed-live language (Flag 6)
- [ ] Whoever owns the product roadmap has been made aware that Biashara AI's 18-month priorities are not yet reconciled against Plan v3's 7-month horizon or task board (Flag 6) — this doesn't block the waitlist page but shouldn't be discovered later by surprise
- [ ] Founder/BD has confirmed zero real customer logos without a signed agreement (Flag 1)
- [ ] Every dashboard/screenshot has an "Illustrative data" caption, compressed to WebP/AVIF (Flags 3, Section 6)
- [ ] **No ARR, revenue, or total-customer-count figure appears anywhere on the site (Flag 4)**
- [ ] **Analytics owner has confirmed UTM/channel tracking and the self-serve-vs-assisted tracking field are implemented before `/start` goes live (Flag 5)**
- [ ] Founder/Finance has supplied real `{{PRICE}}` values, or approved "Contact us for pricing" as the interim state
- [ ] Content Lead confirms the 24/26-shops CBD stat is cleared for public use
- [ ] Product/Eng confirms Partner Portal feature status (live/build/concept)
- [ ] Legal has reviewed `/partners` for data-sharing/privacy language
- [ ] **Every page tested on throttled 3G and under the page-weight budget in Section 6 before launch**
- [ ] **`/resources` launches with at least 3 real, keyword-researched guides — not zero, not generic filler**
- [ ] **Founder has made the fund/re-scope/extend-timeline decision on the KES 773,900 gap before any paid spend is directed at `/solutions/enterprise` or `/partners`**

---

---

# PART II — CTO / GTM IMPLEMENTATION LAYER (Merged from v2.1)

The sections below are additive implementation requirements. They do **not** replace Part I's literal page copy, brand system, page-level copy, or public-facing content specifications.

# 0. Michael — read this before touching the sitemap

This update is not primarily a visual redesign. It is a **conversion-architecture, attribution, onboarding, and resource-allocation change**.

The website must now support **two acquisition motions with fundamentally different economics**, while also becoming the public acquisition and attribution layer for **Base Collabs**.

> **Base Collabs is Basepoint's strategy for turning 100 independent experts, resellers, advisors and champions into one coordinated Go-To-Market engine that lives where business happens — on WhatsApp — and runs on our mission: setting a higher standard so every agent and every business can Achieve More 💚™.**

The operating model is:

**Website = Discover → Learn → Qualify → Refer → Start → Attribute**  
**WhatsApp / Base Collabs = Coordinate → Distribute → Introduce → Support → Learn → Advocate**  
**CRM = Record → Attribute → Measure → Reward → Expand**

The website is therefore not replacing Base Collabs. It gives Base Collabs the parts WhatsApp is weak at: **public discovery, identity, searchable content, conversion routing, attribution, consent, structured forms, durable URLs, SEO, and measurable handoff into onboarding and CRM.**

The implementation consequence is significant: the current site is effectively designed around one conversion path — **"Book a demo."** V4 shows that this is economically wrong for a meaningful share of traffic.

---

# 3. Base Collabs: how the website becomes part of the GTM engine

Base Collabs should **not** become a web community that competes with WhatsApp.

WhatsApp remains the operating interface for daily collaboration.

The website should provide six capabilities around that operating layer.

## 3.1 Public identity: `/collabs`

Create a public page that establishes what Base Collabs is.

### Recommended positioning

**Base Collabs**  
**People who help businesses Achieve More™.**

> Base Collabs brings independent business experts, advisors and resellers into one coordinated network — sharing knowledge, opening doors, helping businesses adopt better ways of working, and creating opportunities for one another.

### Primary actions

- **Become a Collab**
- **Find a Basepoint Expert** — P1, only after credential and profile rules are ready
- **Refer a business**
- **Learn with Basepoint**

Do not expose the raw WhatsApp Community invite publicly. Application / qualification should happen first; the Community invitation is an approved-member onboarding step.

---

## 3.2 Referral engine: `/refer`

The referral program converts trusted local relationships into attributable acquisition.

### Proposed pilot concept

**Refer a business. Help them get started. Earn when they activate.**

A customer-facing incentive such as **"1 month free"** may be tested, but this is **not an approved price or benefit until Founder/Finance confirms the Duka price and unit economics**.

### Required mechanics

Every Collab / approved referrer gets:

- internal `collab_id`,
- unique referral code,
- unique referral URL,
- source campaign parameters,
- attributable landing session,
- CRM relationship to the referred business,
- reward status.

Example structure:

`/start?ref=COLLAB-047&utm_source=collabs&utm_medium=referral&utm_campaign=duka_referral`

### Reward should trigger on a qualified event, not on a form fill

Recommended sequence:

**Referral click → signup → activation → first value / first paid period → reward eligibility**

This protects the program from paying for low-quality or duplicate leads.

### Minimum anti-abuse controls

- duplicate email / phone checks,
- duplicate business / account check,
- no self-referral,
- referral-code ownership,
- reward status log,
- manual review path,
- terms and eligibility page,
- Finance-approved reward rules.

---

## 3.3 Basepoint Learn: `/resources`

`/resources` becomes the content supply chain for both SEO and Base Collabs.

Organic/content is modeled at **KES 0 marginal CAC once the content exists**. That assumption only has a chance of becoming true if the site contains genuinely useful, indexable, merchant-facing content.

### Launch with at least 3 real guides

Not filler.

Suggested starting themes:

- **Run:** stock, POS, staff, operating discipline
- **Money:** cash flow, eTIMS, reconciliation
- **Grow:** opening a second location, margins, expansion
- **Customers:** repeat business, customer records, loyalty
- **Industry:** retail, hospitality, pharmacies
- **Higher Standard:** practical operating practices

### Every Learn article needs a Collab distribution layer

At article end:

- **Share on WhatsApp**
- **Download the 1-page Hack Card**
- **Copy the 30-second client explanation**
- **Refer this business**
- **Start free with Duka**

This creates the intended loop:

**Search → Learn article → Hack Card → WhatsApp → merchant conversation → referral link → signup → CRM attribution → proof → next Learn asset**

---

## 3.4 Collab Academy and credentialing — P1

Do not build a full learning-management system initially.

Start with lightweight learning paths:

- Duka Foundations
- Selling Duka
- Onboarding a Retailer
- Hospitality Foundations
- Pesa Foundations
- Customer Data / Mteja
- Higher Standard

Completion can later unlock public credentials such as:

- Certified Reseller
- Certified Advisory Expert
- Hospitality Specialist
- Zone Captain

This is important because Base Collabs should give members something to build **their own professional value** on — not just another product to sell.

---

## 3.5 Basepoint Expert Directory — P1/P2

Once credential and conduct rules are working, introduce a searchable directory.

Possible filters:

- GEO / city,
- ZONE,
- category / role,
- industry,
- language,
- certification,
- availability.

Example customer journey:

**Find a Basepoint Expert → Nairobi → Westlands → Hospitality → Certified Advisory Expert → Request help / WhatsApp**

Do not publish member phone numbers as the primary data layer. Contact should happen through an intentional CTA / lead handoff that preserves consent and attribution.

---

## 3.6 Opportunity registration — P1

Base Collabs already has a money/opportunity layer on WhatsApp.

The website should add structured opportunity capture where WhatsApp is weak.

Suggested path:

`/collabs/opportunity`

Minimum fields:

- need,
- location / GEO,
- zone,
- business type,
- contact permission,
- interested product,
- referrer / Collab ID,
- urgency,
- assisted-sales requirement.

The opportunity can then be discussed in WhatsApp while CRM remains the system of record.

---

# 4. Michael: technical implications for the current onboarding flow

This is the part of the strategy that needs your technical decision.

The website cannot simply add a `/start` page if Duka provisioning still requires manual sales/admin work.

Before implementation, confirm the current state of:

- authentication,
- tenant/account creation,
- Duka workspace provisioning,
- business verification,
- phone/email verification,
- plan / trial creation,
- eTIMS dependencies,
- first-owner creation,
- onboarding checklist,
- product analytics,
- CRM record creation,
- cancellation / abandoned-signup cleanup.

## 4.1 `/start` minimum requirement

The page exists to minimize friction.

Do not turn it into another lead form.

Minimum visible fields should be whatever Product/Eng actually require for account creation.

Minimum hidden context should include:

- `acquisition_motion = self_serve`
- `acquisition_channel`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `landing_page`
- `referral_code`
- `collab_id`
- `partner_id`
- `first_touch_timestamp`
- `last_touch_timestamp`
- consent / privacy status where required.

## 4.2 Core conversion-event taxonomy

Implement before launch.

Recommended event chain:

1. `website_visit`
2. `cta_start_clicked`
3. `cta_demo_clicked`
4. `referral_link_opened`
5. `signup_started`
6. `signup_completed`
7. `account_provisioned`
8. `merchant_activated`
9. `first_value_reached`
10. `module_added`
11. `second_module_activated`
12. `demo_requested`
13. `demo_completed`
14. `assisted_onboarding_started`
15. `assisted_onboarding_completed`
16. `referral_reward_qualified`
17. `collab_application_started`
18. `collab_approved`

The exact analytics stack is an Engineering decision. The **event semantics are not optional** if V4 is expected to move from modeled CAC to measured CAC.

---

# 5. CRM / data contract changes

The website, onboarding flow and CRM need one shared acquisition vocabulary.

### Required fields

| Field | Purpose |
| --- | --- |
| `acquisition_motion` | `self_serve`, `assisted`, `waitlist`, `partner` |
| `acquisition_channel` | organic, social, search, field_event, partner, referral_collab |
| `collab_id` | Internal identifier for referring Collab |
| `referral_code` | Referral attribution |
| `partner_id` | Partner attribution |
| `geo` | City / territory |
| `zone` | Business zone |
| `collab_category` | Reseller / Expert / Champion etc. |
| `landing_page` | First web surface |
| `first_touch_source` | Original acquisition source |
| `last_touch_source` | Most recent attributable source |
| `signup_at` | Self-serve conversion |
| `activated_at` | Activated-merchant conversion |
| `first_value_at` | First agreed product-value event |
| `assisted_sales_required` | Boolean |
| `assisted_sales_reason` | complexity / multi-site / enterprise / hospitality / other |
| `modules_active` | APC / expansion measurement |

**Phone number must remain contact data, not the Collab ID.**

---

# 6. Qualification and handoff rules

The website should not rely on visitors to correctly decide whether they need sales help.

A lightweight qualification layer can route them.

### Route self-serve by default when

- single location,
- standard Duka use case,
- low setup complexity,
- no enterprise integration request,
- user explicitly chooses "Start free."

### Escalate to assisted when

- multi-location,
- enterprise / distributor,
- custom integrations,
- complex rollout,
- assisted hospitality setup,
- partner / manufacturer use case,
- future Biashara AI enterprise or partnership inquiry,
- self-serve user requests help.

**Do not block a simple merchant from signing up merely because they came through a Collab.**

Referral is a source; it is not automatically an assisted-sales requirement.

---

# 11. Base Collabs × content distribution loop

Every important resource should be designed for redistribution.

### Standard content package

One source asset produces:

1. indexable web article,
2. 1-page Hack Card,
3. WhatsApp-forwardable caption,
4. Collab teaching note,
5. social derivative,
6. CTA to `/start`, `/refer`, or assisted sales,
7. attribution back to source asset and Collab.

This is the website implementation of:

**INSIGHT → CREATE → PACKAGE → DISTRIBUTE → CONVERSE → REFER/SELL → SUPPORT/LEARN → CAPTURE DATA → PROVE OUTCOME → STORY → REDISTRIBUTE**

---

# 12. WhatsApp-specific web requirements

Because Base Collabs lives on WhatsApp:

- every major article/page needs correct Open Graph metadata,
- preview images should be compressed and readable at mobile preview size,
- "Share on WhatsApp" should use concise pre-filled copy,
- links must preserve attribution,
- referral links must survive WhatsApp forwarding,
- landing pages must load acceptably on constrained mobile networks,
- phone-number visibility / personal-data implications must be considered in Community operations,
- no sensitive merchant/referral information should be encoded directly into public URLs.

---

# 17. Technical delivery architecture

Michael should make explicit decisions on:

### Application boundary

- marketing website framework / CMS,
- auth boundary,
- product app boundary,
- `/start` handoff,
- identity session persistence.

### Attribution

- UTM persistence,
- referral persistence,
- first-touch / last-touch,
- assisted override rules,
- CRM creation timing.

### Referral service

Decide whether referral generation lives:

- in product,
- in CRM,
- in website backend,
- or through a small dedicated service.

### Content

`/resources` must be maintainable by Marketing without requiring Engineering deploys for every article.

### Feature flags

Use flags for:

- `/start`,
- referral reward redemption,
- Collab directory,
- Academy,
- Hospitality early access,
- Biashara AI waitlist changes.

### Rollback

Each acquisition-path change must have a rollback path that does not destroy attribution data.

---

# 18. Resource allocation recommendation

## P0 — build before scaling traffic

1. Dual CTA architecture
2. `/start`
3. account-provisioning / onboarding-flow confirmation
4. attribution schema
5. self-serve vs assisted CRM field
6. `/resources` / Basepoint Learn
7. first 3+ keyword-researched guides
8. `/collabs`
9. `/refer`
10. referral code / link attribution
11. Smart Reja removal / redirect plan
12. performance / image optimization
13. product-truth / illustrative-data sweep

## P1 — after P0 behavior works

1. partner intake improvements
2. Collab Academy MVP
3. opportunity registration
4. public event / meetup pages
5. qualification automation
6. lightweight Expert Directory beta
7. ad-specific landing templates
8. Hospitality early-access flow
9. lifecycle module cross-sell instrumentation

## P2 — only when volume proves the need

1. full Collab dashboard
2. earnings / reward wallet
3. automated GEO / ZONE / CAT routing
4. advanced partner portal
5. full Expert Directory
6. advanced Academy / certifications
7. automated lead matching
8. self-service reward redemption.

---

# 19. RACI / ownership

| Workstream | Accountable | Responsible | Consulted |
| --- | --- | --- | --- |
| Website architecture | **Michael Kamau / CTO** | Engineering | Marketing, Product |
| `/start` provisioning | CTO / Product | Engineering | Growth Ops |
| CTA / page strategy | Marketing/Growth | Marketing + Design | CTO/Product |
| Analytics taxonomy | Growth Ops / Analytics | Engineering | Marketing, Finance |
| CRM data contract | Growth Ops | Engineering / CRM owner | Sales, Finance |
| Referral rules | Growth | Engineering / CRM owner | Finance, Legal |
| Referral economics | Founder/Finance | Finance | Growth |
| Base Collabs operations | Growth / Marketing | Crew/Admin owners | CTO |
| Basepoint Learn | Marketing | Content | Product/SEO |
| Product claims | Product | Product + Marketing | CTO |
| Biashara AI roadmap language | Product/Roadmap owner | Product + Marketing | CTO |
| Privacy / partner terms | Legal / Privacy owner | Legal | CTO, Growth |
| Pricing | Founder/Finance | Finance | Product/Growth |
| Customer proof permissions | Founder/BD | Marketing | Legal |
| Performance acceptance | CTO | Engineering | Design/Marketing |

---

# 20. Dependencies and launch sequence

```text
Michael resolves Flag 2 naming
        │
        ├──► product/app-tray copy can finalize
        └──► redirect / SEO plan can finalize

Attribution schema + CRM fields
        │
        └──► /start can safely go live
                 │
                 └──► Home self-serve CTA becomes primary

/resources + 3 real guides
        │
        └──► organic/content motion becomes operational

Collab ID + referral attribution
        │
        └──► /refer launches
                 │
                 └──► Base Collabs can distribute tracked web assets

Finance approves reward economics
        │
        └──► referral reward redemption goes live

Product confirms Hospitality MVP status
        │
        └──► hospitality early-access copy can be upgraded as appropriate

Founder decides fund / re-scope / extend timeline
        │
        └──► paid acquisition to Enterprise / Partners may scale
```

---

# 21. Acceptance criteria

A page / flow is not complete until:

- correct CTA motion is implemented,
- event tracking exists,
- attribution persists,
- CRM receives correct acquisition motion,
- referral context persists where relevant,
- copy status matches Product truth,
- privacy/consent is correct,
- page meets weight budget,
- page works on throttled 3G,
- OG / WhatsApp preview is correct,
- images are optimized,
- dashboard mockups say "Illustrative data",
- no disallowed customer / ARR / scale claim exists,
- redirects/canonicals are correct,
- Marketing can edit content where intended,
- rollback is possible.

---

# 22. CTO implementation handoff checklist — Michael Kamau

Use this as the launch gate.

- [ ] **1. CTO ownership corrected.** Every reference to Sarah Njeri as CTO has been removed and replaced with **Michael Kamau** where CTO ownership is required.
- [ ] **2. Product naming resolved.** Michael has confirmed the canonical meaning of **Dala**, the retirement/status of **Smart Reja**, and the status of the standalone **Reja** app-tray icon.
- [ ] **3. Smart Reja sweep completed.** No page anywhere still references "Smart Reja." `/solutions/biashara-ai` uses only vision/goal language, never claimed-live language. The roadmap owner knows the 18-month Biashara AI priorities are not reconciled against Plan v3's 7-month horizon/task board; this does not block the waitlist page.
- [ ] **4. Logo permissions confirmed.** Founder/BD has confirmed that no real customer logo is shown without a signed agreement.
- [ ] **5. Illustrative UI handled correctly.** Every dashboard/screenshot with mock data carries **"Illustrative data"** and is compressed to WebP/AVIF.
- [ ] **6. No unsupported scale claims.** No ARR, revenue, or total-customer-count number appears anywhere on the public website.
- [ ] **7. Attribution exists before `/start`.** Analytics owner has confirmed UTM/channel tracking plus `self_serve` vs `assisted` acquisition-motion tracking before `/start` goes live.
- [ ] **8. Pricing is approved.** Founder/Finance has supplied real `{{PRICE}}` values or explicitly approved **"Contact us for pricing"** as the interim state.
- [ ] **9. Pilot stat cleared.** Content Lead / Founder has confirmed whether the **24/26 CBD shops / under-12-minute** statistic is approved for public use. Until approval, it remains internal.
- [ ] **10. Partner Portal status confirmed.** Product/Eng has classified Partner Portal as live / build / concept and public copy matches that status.
- [ ] **11. Legal/privacy review complete.** Legal has reviewed `/partners`, `/refer`, Collab referral attribution, and any data-sharing / consent language.
- [ ] **12. Performance/content gate passed.** Every page has been tested on throttled 3G and against the Section 13 page-weight budget. `/resources` launches with **at least 3 real, keyword-researched guides** — not zero and not generic filler.
- [ ] **13. Funding-gap decision made.** Founder has made the **fund / re-scope / extend-timeline** decision on the modeled **KES 773,900 gap** before any paid spend is scaled toward `/solutions/enterprise` or `/partners`.

### Additional Base Collabs launch checks

- [ ] `/collabs` exists and clearly explains the network.
- [ ] `/refer` exists or equivalent referral functionality is confirmed.
- [ ] `collab_id` is not a phone number.
- [ ] unique referral link/code mechanics are defined.
- [ ] reward trigger is defined and Finance-approved.
- [ ] referral abuse rules exist.
- [ ] referral attribution survives through signup and activation.
- [ ] Collab / referral traffic can still use self-serve.
- [ ] complex referrals can be escalated into assisted sales.
- [ ] every Learn article has a WhatsApp / referral distribution action.
- [ ] the WhatsApp Community invite is not exposed publicly without approval controls.
- [ ] CRM remains the system of record.

---

# 23. The intended end state

This rebuild should create a website that behaves like the public layer of Basepoint's Go-To-Market system.

A visitor should be able to:

**Learn → Start → Achieve More**

A Collab should be able to:

**Learn → Share → Introduce → Earn → Teach**

A complex business should be able to:

**Explore → Qualify → Talk to Basepoint → Activate → Expand**

And Basepoint should be able to measure all three without confusing them.

The point is not to put WhatsApp on the website.

The point is to turn **100 independent local relationships into one coordinated, attributable distribution network** without destroying what makes those relationships valuable.

> **Base Collabs is where Basepoint's brand becomes operating behavior: independent experts working from the same knowledge, the same mission, the same attribution system, and the same standard — so every agent and every business can Achieve More 💚™.**

---

# PART III — FINAL RECONCILIATION TABLES

### Sitewide routing rule

| Visitor / page context | Primary CTA | Secondary CTA | Acquisition motion |
| --- | --- | --- | --- |
| Home | **Start free with Duka** | Book a demo | Dual |
| `/products/duka` | **Start free** | Book a demo | Self-serve first |
| `/solutions/retailers` | **Start free** | Talk to us | Self-serve first |
| `/resources/*` | **Start free** / contextual tool CTA | Talk to us if needed | Organic → self-serve |
| `/refer` | **Refer a business** | Learn how referrals work | Referral |
| `/collabs` | **Become a Collab** / **Find an expert** | Learn how it works | Network acquisition |
| `/solutions/distributors` | **Talk to our enterprise team** | Explore platform | Assisted |
| `/solutions/enterprise` | **Talk to our enterprise team** | Explore platform | Assisted |
| `/partners` | **Talk to Basepoint / Apply** | Explore partner model | Assisted |
| `/solutions/biashara-ai` | **Join the waitlist** | — | Waitlist only |
| `/products/duka/hospitality` | **Join early access** | Talk to sales | Assisted / early access |
| `/pricing` | **Start free** + **Talk to sales** | — | Explicit dual path |

---

# 7. Revised sitemap

```text
/
├── /start                                  ★ P0 self-serve Duka
├── /platform
├── /solutions
│   ├── /solutions/retailers
│   ├── /solutions/distributors
│   ├── /solutions/enterprise
│   └── /solutions/biashara-ai             ★ waitlist only
├── /products
│   ├── /products/duka
│   ├── /products/duka/hospitality          ★ early access
│   ├── /products/pesa
│   ├── /products/mteja
│   └── /products/bandu
├── /collabs                                ★ NEW — public network home
│   ├── /collabs/apply                      ★ NEW
│   ├── /collabs/opportunity                ★ P1
│   ├── /collabs/academy                    ★ P1
│   └── /collabs/experts                    ★ P1/P2
├── /refer                                  ★ NEW — referral engine
├── /partners
│   └── /partners/apply
├── /pricing
├── /resources                              ★ Basepoint Learn
│   ├── /resources/run
│   ├── /resources/money
│   ├── /resources/grow
│   ├── /resources/customers
│   └── /resources/industry
└── /company
```

### Global nav

**Platform · Solutions · Learn · Pricing · Company · [Log in] [Start free] [Book a demo]**

Base Collabs can live under **Company** or as a visible **Partners / Collabs** item depending on how prominently Growth wants to recruit the network.

---

# 8. Acquisition-channel enablement map

| Channel | Internal modeled CAC | Required web infrastructure | Priority |
| --- | --: | --- | --- |
| Organic / Content | KES 0 marginal | Basepoint Learn, SEO pages, self-serve CTA | **P0** |
| Social ads | KES 500 | lightweight mobile landing template | P1 |
| Field / Events | KES 1,000 | low-data lead / referral capture | P1 |
| Search / SEM | KES 1,000 | fast keyword-specific landing pages | P0/P1 |
| Other partners | KES 1,500 | `/partners/apply`, partner attribution | P1 |
| Referral / Base Collabs | KES 2,000 | `/refer`, referral IDs, Collab attribution | **P0** |

These numbers remain **planning assumptions**. Do not expose them on the public site.

---

# 18. Resource allocation recommendation

## P0 — build before scaling traffic

1. Dual CTA architecture
2. `/start`
3. account-provisioning / onboarding-flow confirmation
4. attribution schema
5. self-serve vs assisted CRM field
6. `/resources` / Basepoint Learn
7. first 3+ keyword-researched guides
8. `/collabs`
9. `/refer`
10. referral code / link attribution
11. Smart Reja removal / redirect plan
12. performance / image optimization
13. product-truth / illustrative-data sweep

## P1 — after P0 behavior works

1. partner intake improvements
2. Collab Academy MVP
3. opportunity registration
4. public event / meetup pages
5. qualification automation
6. lightweight Expert Directory beta
7. ad-specific landing templates
8. Hospitality early-access flow
9. lifecycle module cross-sell instrumentation

## P2 — only when volume proves the need

1. full Collab dashboard
2. earnings / reward wallet
3. automated GEO / ZONE / CAT routing
4. advanced partner portal
5. full Expert Directory
6. advanced Academy / certifications
7. automated lead matching
8. self-service reward redemption.

---

# 19. RACI / ownership

| Workstream | Accountable | Responsible | Consulted |
| --- | --- | --- | --- |
| Website architecture | **Michael Kamau / CTO** | Engineering | Marketing, Product |
| `/start` provisioning | CTO / Product | Engineering | Growth Ops |
| CTA / page strategy | Marketing/Growth | Marketing + Design | CTO/Product |
| Analytics taxonomy | Growth Ops / Analytics | Engineering | Marketing, Finance |
| CRM data contract | Growth Ops | Engineering / CRM owner | Sales, Finance |
| Referral rules | Growth | Engineering / CRM owner | Finance, Legal |
| Referral economics | Founder/Finance | Finance | Growth |
| Base Collabs operations | Growth / Marketing | Crew/Admin owners | CTO |
| Basepoint Learn | Marketing | Content | Product/SEO |
| Product claims | Product | Product + Marketing | CTO |
| Biashara AI roadmap language | Product/Roadmap owner | Product + Marketing | CTO |
| Privacy / partner terms | Legal / Privacy owner | Legal | CTO, Growth |
| Pricing | Founder/Finance | Finance | Product/Growth |
| Customer proof permissions | Founder/BD | Marketing | Legal |
| Performance acceptance | CTO | Engineering | Design/Marketing |

---

# FINAL CHANGELOG

| Date | Version | Change |
| --- | --- | --- |
| 2026-08-22 | v1 | Initial Website Remodel Brief. |
| 2026-08-26 | v2 | Added dual-acquisition economics, literal page copy, design system, page rebuild, performance/resource budgets and supporting flows. |
| 2026-08-27 | v2 | Retired Smart Reja; introduced Biashara AI waitlist and Duka Hospitality early-access framing. |
| 2026-09-21 | v2.1 | Reframed for Michael Kamau, CTO; added Base Collabs, referral/attribution architecture, CRM contract, event taxonomy, RACI, technical priorities and acceptance criteria. |
| 2026-09-24 | **v2.2 FINAL MERGE** | Restored v2's literal implementation-ready copy and visual specification while retaining v2.1's CTO-focused technical/GTM architecture. Corrected CTO ownership to Michael Kamau throughout. This document supersedes v2 and v2.1 as the single implementation handoff. |
