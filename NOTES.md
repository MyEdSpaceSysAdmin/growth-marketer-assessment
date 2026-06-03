# NOTES.md — MyEdSpace US Landing Page

Built in `app/page.tsx` on the provided stack (Next.js 14 app router, Tailwind, TypeScript, brand tokens in `tailwind.config.ts`, Inter in `app/layout.tsx`). Brand guidelines held throughout: flat design (no border-radius, no shadows, no glow), Inter everywhere, lime (`#b1db00`) reserved for CTAs only, every colour drawn from the four brand tokens.

How to read this doc: the page is built for one job — **convert cold US paid traffic into $7 trials that go on to retain at $149/mo, with no human in the loop.** Every decision below traces back to that. Section 5 is the strategy in full; the rest shows the thinking that produced the page.

---

## 1. What I'd push back on or change in the brief

The brief is solid, but several items would actively cost conversions, were UK artifacts in a US funnel, or contradicted the "no sales call" goal. In each case I made the call, shipped the fix, and documented it rather than following the literal instruction.

**"Lead capture" form vs. the actual goal.** The brief's form is a lead-capture form (name, email, phone, grade → submit). But the goal is a **$7 charge with no human in the loop** — that's a *checkout*, not a lead form. A lead form hands off to a sales motion the brief explicitly rules out. I built a real multi-step self-checkout (account → card + billing disclosure → success) so a parent converts end-to-end alone.

**The phone field is a conversion tax in the wrong place — and it's UK-formatted.** The brief asks for a phone field with a `+1` prefix but a `7XXX XXXXXX` placeholder, which is a UK mobile format. Worse, a required field before payment depresses completion and collecting a phone contradicts "no human in the loop." I didn't drop it — I **moved it** to an optional opt-in *after* payment (for class reminders), in US format. We still capture numbers from people who want texts, without taxing the checkout.

**"1,700+ Trustpilot reviews" is UK baggage.** Trustpilot reads as a trust mark in the UK far more than the US, and that figure traces to the UK entity. For cold US parents it's noise. I led instead with proof that lands for a US parent: **21,000+ US students** and **4.8 "Excellent."**

**No billing disclosure at the point of payment.** Charging $7-that-becomes-$149 with no disclosure is a trust killer and a chargeback risk. I added explicit "then $149/month after your 7-day trial, cancel anytime" copy plus Terms/Privacy at checkout — which also protects retention economics by preventing refund regret.

**Grade vs. course mismatch.** The brief labels the selector "grade" but lists *course names*. Parents know their child's grade, not always the right course. I built a grade selector that maps grade → correct course behind the scenes, removing a decision the parent shouldn't have to make.

**Grade range: the brief says 6–12, the live product offers from grade 4.** MyEdSpace's live US site actually runs from **grade 4** (Elementary Math, grades 4–5). Since the page sends real parents to real classes, I extended the selector to **grades 4–12** and added Elementary Math with its real schedule, rather than turn away a grade-4 parent the product serves. A conscious deviation from the brief in favour of product reality — the same judgment I applied in *holding* the brief's $149/$640 pricing where it diverged from the live site's newer numbers. Where the brief and reality disagree, I picked the option that doesn't break the user's actual experience and flagged it.

**Source-asset inconsistency.** The teacher is "Eddie Kang" in the brief, PDFs, and video — but one screenshot in the asset folder (`img/eddie_3.webp`) shows the class UI under the name **"Daniel Khan."** I skipped `eddie_3` to keep the named teacher consistent. The curriculum PDFs also carry stray `myedspace.co.uk` footers and "lessons each month" copy where the page (correctly) says twice a week — so I linked them as proof of rigour without screenshotting their copy.

**The "Not 1:1 Tutoring" eyebrow is a negative — I cut it.** Leading with a negation primes the reader on the thing you're *not* and reads as defensive. I led with a positive, benefit-led eyebrow ("Live Online Math · Grades 4–12") and handled the 1-on-1 concern where it belongs — as an FAQ, answered positively. Same truth, framed to convert rather than apologise.

**One teacher undersells a platform.** Real proof of a *platform* (not a one-person dependency) is a teaching *team*, so I presented Eddie alongside a second real US teacher, **Adam Gilbert** (Brown University, 7+ years in US charter schools), split by course. It doubles the authority signal and removes the "what if that one teacher leaves?" doubt. Both credentials verified against the live US page — real, not invented.

---

## 2. Prompts that meaningfully shaped the output

I treated the AI as a fast junior who needs sharp direction and correction, not a vending machine. The decisions were mine; the prompts enforced them.

1. **Localisation + error-hunt framing (context loading).** Before building, I told the agent MyEdSpace is UK-rooted with a newer US arm, and to treat the brief as *potentially seeded with UK→US errors* — flagging each rather than silently fixing it. That frame is what surfaced the UK phone format, the Trustpilot framing, and the `.co.uk` leftovers. Loading the right context changed what the model even looked for.

2. **"Lead with the blocking emotion, not the product."** I made the agent first articulate the audience's *blocking* emotion — fear of wasting money again after being burned by tutors — and build the page to answer that fear first. That's what pushed risk-reversal into the hero rather than leaving the guarantee in the FAQ.

3. **Label every growth principle inline, then justify it.** I had it annotate each section with the specific growth.design principle it implements and defend why it earned its place, then cut anything decorative rather than load-bearing. This stopped the model padding the page with generic "nice" sections.

4. **Correcting drift: lead-capture → real checkout.** The first pass gave me a lead form. I pushed back — the goal is a $7 *charge*, not a lead — and made it rebuild a true self-checkout with billing disclosure and a success state. Catching when the AI has quietly missed the *actual objective* is most of the job.

5. **Positive-framing constraint across the page.** The page must never *lead* with a negation. Every objection had to be reframed as a benefit or handled as a Q&A. This kept tone consistent even as sections were rewritten.

---

## 3. The single biggest conversion lever

**Loss aversion / risk reversal — the $7 trial plus the 30-day money-back guarantee, surfaced into the hero.**

For this audience, *desire isn't the bottleneck* — the ad already selected for parents who want better math help. The bottleneck is **fear of wasting money again** after a tutor that didn't work. So the single highest-leverage move for cold traffic is to make the downside feel like zero, as early as possible. The $7 trial converts a high-commitment $149 decision into a near-zero-risk one; the guarantee removes the residual fear; together they pair loss aversion with the goal-gradient effect (a tiny first "yes" pulls them down the funnel).

It isn't fine print: it's a bordered promise in the hero ("$7 for 7 days. Cancel anytime. 30-day money-back guarantee"), restated at checkout as billing transparency, and reinforced by the one review that credits the guarantee as the reason for signing up. We don't sell harder — we remove the risk that's actually blocking the click.

**The price anchor is the *support* lever, not the lead.** The $640 tutor column reframes $149 as cheap — but that only matters *after* the $7 has made acting feel safe. Risk-reversal gets the stranger to act; anchoring justifies the price once they're considering it.

### Every growth principle on the page, and where it lives

Each is labelled inline in the code with a `[GP: ...]` comment so it's visible in the build, not just claimed here:

- **Loss aversion / risk reversal** — hero promise block, checkout billing disclosure, the guarantee-led review.
- **Cost of inaction (the other half of loss aversion)** — the "math compounds — every month a gap goes unfixed, the next topic gets harder" call-out. Motivates the fence-sitter factually, without the hype of a scare stat.
- **Anchoring** — the $640+/mo private-tutor column makes $149 read small.
- **Centre-stage effect** — MyEdSpace is the centre column of the comparison, badged "Best value" and colour-isolated in blue.
- **Von Restorff (isolation)** — lime reserved exclusively for CTAs, so the action pops.
- **Hick's Law** — one CTA per moment of conviction (never two competing); the grade selector collapses "which course?" into one grade choice.
- **Goal-gradient effect** — the grade pick is a micro-step toward checkout; the checkout shows step progress.
- **Labor illusion** — selecting a grade triggers a brief "Matching your child to the right class…" beat before revealing the placement, so the match feels considered and earned rather than an instant lookup. Raises perceived value of the placement.
- **Social proof** — US-localised review carousel plus the "21,000+ / 4.8 / 95%" trust band with its own framing headline.
- **Authority bias** — the two named teachers with real, verifiable credentials (UCLA + perfect SAT; Brown), split by course.

That's ten principles deployed *visibly* — chosen and placed deliberately rather than listed.

---

## 4. The comparison table — an optimisation worth testing

I want to call this section out, because it's an example of taking something MyEdSpace already does and exploring whether it could land better — the kind of optimisation I'd want to test rather than assume.

The live US site presents its comparison as **three side-by-side cards** (School / MyEdSpace / Private tutor) where each column lists its own features. It looks good — but because the columns don't line up on shared rows, a parent has to read and interpret each card and mentally map them against one another. My hypothesis is that this adds cognitive load at exactly the moment you want effortless comprehension, and that a more scannable format *might* convert better.

So I built the alternative to test: a **true feature-comparison table**. Features run down the left, the three options across the top, and every cell is a clear tick / cross / "Varies." A parent can scan a single row ("Lesson recordings?") and instantly see MyEdSpace ✓ vs both others ✗ — no interpretation required. MyEdSpace is the centre column, colour-isolated in blue with a "Best value" badge and the price + CTA built in, so the eye lands quickly on the one column ticked all the way down while costing a fraction of the tutor.

Why I think it's worth testing, in CRO terms:
- **Comprehension over flair.** The job of a comparison is instant understanding; a shared-row table is built for scanning, where separate cards ask the reader to do the mapping.
- **Centre-stage + Von Restorff working together.** One blue column between two muted white ones makes the recommended option unmistakable.
- **Anchoring may land harder** when $149 and $640 sit in the *same row* the eye is already scanning, rather than in separate cards.
- **It stays premium and on-brand** — flat, bordered, brand-colour only — so any clarity gain doesn't cost taste.

I'd treat this as a hypothesis to validate with an A/B test, not a settled win — but it's the kind of thinking I'd bring: respect what's working on the live site, then look for the optimisation that hasn't been tried yet. I didn't copy the reference and I didn't ignore it; I formed a view on where it *might* be improved and built a version to prove or disprove it.

---

## 5. Campaign strategy — attracting *qualified* leads, not just signups

The brief's stated goal is "$7 trial signups." But $7 isn't where the business makes money — it makes money when a trial converts to **$149/month and retains.** So I designed the page against the real objective: **$7 signups that predict $149 retention.** That reframe drives every decision, and it's the lens I'd bring to this as one of my own paid campaigns.

### Who is a *qualified* lead (and who I'm happy to filter out)

A qualified lead is a parent with a high probability of becoming a *retained* subscriber. Three conditions:

1. **Genuine, ongoing need** — the child is sustainably behind, not recovering from one bad test. A monthly subscription is justified by a chronic problem, so the copy speaks to *recurring* pain (the nightly homework fight, grades slipping across a term) — and the "math compounds" line frames the need as ongoing. This resonates with chronic-need parents and quietly under-sells to the one-off crowd who'd churn after a single good grade.
2. **Willing to pay $149/mo** — "price-conscious but not cheap." This parent balks at a $640 tutor but will gladly pay $149 for something that works. So I anchor relentlessly against the *tutor*, never against "free." Competing on cheapness would attract bargain-hunters whose $7 converts but whose $149 never does — the most expensive kind of lead, because they burn CAC and a trial slot.
3. **Will actually show up** — this is a *live*-class product, so retention depends on attendance. The "same teacher, live twice a week, in your timezone" framing does qualification work: a parent who reads that and thinks "yes, we'll build that into our week" is worth far more than one who wants passive on-demand video. I lean into the commitment rather than hiding it.

**The CAC trap I'm designing around:** the $7 trial is so frictionless it will attract tyre-kickers who try it out of curiosity and never convert. Optimising purely for $7 conversion rate would *look* good and *perform* badly downstream. So the strategy is not "maximise signups" — it's **qualify with the message, convert with the mechanics.**

### Qualify with the message, convert with the mechanics

The page pre-qualifies *upstream* through copy — the $640 anchor, the chronic-problem language, the "been burned before? this is different" reassurance, the live-attendance commitment — so that by the payment step, the wrong people have already self-selected out. Then the payment itself is kept frictionless so I don't lose the committed parents I worked to attract.

The one place I deliberately *add* a step is **qualification disguised as personalisation**: the grade selector isn't just routing — it's a micro-commitment ("tell me about your child") that (a) filters low-intent clickers, (b) increases follow-through via the consistency principle, (c) produces the data that drives *retention* (right grade → right class → the kid succeeds → they stay), and (d) via the brief "matching…" beat, *feels* like the platform is doing real work to place the child well. Framed as "let's find your child's class," the same step that screens tyre-kickers also reduces anxiety for committed parents — they feel understood, not processed.

### Why each key decision sits where it does (the whys and hows)

- **Primary CTA in the hero, repeated at each moment of conviction (after the explainer, after the comparison, after the FAQ; sticky on mobile) — but never two competing within a section.** Cold traffic converts at different scroll depths depending on what convinced them — some on price, some on the teacher, some only after their objection is answered. I place one CTA at each *moment of conviction* so there's always a next step the instant a parent is ready, but never two asks leaking attention (single conversion event; Hick's Law).
- **Grade selector high in the hero, not at the bottom.** It's the lowest-commitment "yes" on the page and the start of the qualification-as-personalisation flow. An early micro-commitment raises the odds of completing the real one (foot-in-the-door), and it routes the child to a fitting class — the first step of the *retention* story, not just the conversion one.
- **Risk-reversal ($7 + 30-day guarantee) in the hero, not buried.** The blocking emotion is fear of wasting money again. Surfacing "try it for $7, money-back guarantee" before the price removes the brake on the click — and it qualifies, because a confident guarantee appeals to a parent serious about solving the problem, not someone hunting for free.
- **"Been burned before? This is different" proof directly under the hero.** Cold traffic is skeptical; the hardest objection is "why is this not another tutor that fails?" Answering it *before* the checkout ask — naming the specific, credible differentiator (same teacher every week, structured, recorded) — bridges the trust gap at the point it actually blocks the click.
- **Comparison as a scannable table, MyEdSpace centred.** Anchoring + centre-stage, executed for instant comprehension (see Section 4). It frames $149 as the smart middle between "free but limited" (school) and "great but unaffordable" (tutor), self-selecting for the parent who values the outcome over the lowest price — i.e. the one who'll retain.
- **Reviews placed *low*, in a swipe carousel.** Cold traffic needs to understand *what this is* and *who teaches it* before social proof means anything — proof answers "can I trust it?", a question that only lands after desire is built. The carousel keeps that proof present without costing vertical space on the path to the offer.
- **Checkout kept minimal, with billing disclosure.** Every field past what's needed to charge $7 is abandonment risk for the qualified parent. The qualifying already happened upstream, so checkout's only job is to not lose them — frictionless, with the "$149/mo, cancel anytime" disclosure doing the trust work that prevents refund regret and chargebacks.

### Why this page is right for *cold* traffic specifically

Cold traffic has zero prior trust and bounces in seconds, so the page is built around four cold-traffic truths:

1. **Message-match in ~5 seconds.** The hero answers who it's for, what it is, why it's different, and what to do — instantly, with no carousel or vague "empower your child" filler. A parent from a "math help" ad lands and sees "math help that finally sticks, $7."
2. **Trust before the ask.** The stats band, named teachers, and "this is different" proof all hit *before* the page asks for a card — because a stranger won't commit until the "can I trust this?" question is answered.
3. **Friction removed at the decision.** Frictionless $7 self-checkout, no call, no long form — the lowest-possible cost for the first "yes."
4. **Motivation for the fence-sitter.** The "math compounds" cost-of-inaction line gives the hesitating parent a factual reason to act *now* rather than bookmark-and-forget — the silent killer of cold-traffic conversion.

### How I'd measure whether the strategy is working

I wouldn't judge this page on $7 conversion rate alone — that's the vanity metric that hides the CAC trap. The numbers that matter:

- **$7 → $149 conversion rate**, segmented by ad/creative, so I can kill campaigns that bring cheap, non-converting trials.
- **Trial-to-attendance** — did the kid actually show up to a live class in week one? The strongest leading indicator of retention.
- **Step-level funnel drop-off** (grade-select → each checkout step → trial-start), so I fix exactly where qualified parents bounce rather than guessing.
- **Retention/churn by acquisition source**, fed back into the media buy so spend concentrates on channels that deliver *retained* subscribers, not just clicks.

That feedback loop — page → trial → attendance → retention → back into the media buy — is how the landing page stops being a one-off asset and becomes part of a system that gets *more qualified* over time.

---

## 6. What I'd ship next with another day

- **A/B test the phone field: present vs. absent at checkout.** I pulled phone out of the pre-payment form on judgment; I'd prove it with data — measure trial-start completion *and* whether no-phone signups convert to paid at the same rate. If completion lifts without hurting paid conversion, friction-removal wins; if paid conversion drops, the phone was qualifying intent and belongs back. Clearest revenue thesis on the page.
- **Funnel instrumentation first**, so the test above is measurable: fire events on grade-select, each checkout step, and trial-start. Prerequisite for optimising paid traffic at all.
- **Then A/B test the H1** — my headline is one hypothesis (the "finally sticks" / sunk-cost angle); I'd test it against a credential-led variant, but only after the checkout-friction question, which moves more money.
- **Wire a real payment processor (Stripe) + server-side validation** — the checkout is currently a faithful front-end simulation; production needs real payment plus email/calendar provisioning on success.
- **Swap `<img>`/`<video>` for Next.js `<Image>`** for automatic optimisation and faster LCP — every 100ms costs conversions on paid mobile.
- **Exit-intent + scroll-depth triggers** to recover abandoning paid clicks.
- **Localise the curriculum PDFs** — they still carry UK footers; I'd get clean US versions before relying on them as primary proof.
