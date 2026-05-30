# NOTES.md — MyEdSpace US Landing Page

Built in `app/page.tsx`. Stack as provided (Next.js 14 app router, Tailwind, TS, brand tokens in `tailwind.config.ts`, Inter in `app/layout.tsx`). Brand guidelines held throughout: flat design (no border-radius, no shadows, no glow), Inter everywhere, lime (`#b1db00`) reserved for CTAs only, all colour from the four brand tokens.

---

## 1. What I'd push back on or change in the brief

The brief is solid, but a few items would actively cost conversions or were inconsistent with a US, no-sales-call funnel. I made the call and shipped the fix rather than the literal instruction.

**The H1 is a placeholder, not copy.** "Create something that will capture attention" is a note to the writer, not a headline. I wrote an outcome-led, parent-voice H1: *"Math stops being the nightly fight. The grades start climbing."* It names the emotional before/after (the nightly homework battle → rising grades) rather than describing the product. I also kept it gender-neutral ("they/their", "our kid") since the audience is parents of both boys and girls.

**"Lead capture" form vs. the actual goal.** The brief's form is a lead-capture form (name, email, phone, grade → submit). But the stated goal is a **$7 charge with no human in the loop** — that's a checkout, not a lead form. A lead form would hand off to a sales motion the brief explicitly rules out. I built a real 3-step self-checkout (account → card + billing disclosure → success), so a parent can convert end-to-end alone.

**The phone field is a conversion tax in the wrong place — and it's UK-formatted.** The brief asks for a phone field with a `+1` prefix but a placeholder of `7XXX XXXXXX`, which is a UK mobile format, not US. More importantly, an extra required field before payment depresses completion, and collecting a phone number contradicts "no human in the loop." I didn't delete the requirement — I **moved it**: phone is now an *optional* opt-in **after** payment, for class reminders, in US format `(555) 123-4567`. We still get the number from people who want texts, without taxing the checkout.

**The "1,700+ Trustpilot reviews" proof point is UK baggage.** Trustpilot is far more recognised as a trust mark in the UK than the US, and the figure traces to the UK entity. For cold US parents it's noise at best, confusing at worst. I led instead with proof that lands for a US parent: **21,000+ US students** and **4.8 "Excellent."** (Kept the 4.8 rating, dropped the Trustpilot brand/volume.)

**Comparison was missing its most powerful column.** The brief specifies School vs MyEdSpace, and separately gives the "$640+/mo private tutor" anchor — but doesn't put them together. I built a **three-column** comparison (School / MyEdSpace / Private tutor) so the $640 anchor does its job *inside* the visual, with MyEdSpace centre-stage between "free but useless" and "great but unaffordable."

**No billing disclosure at the point of payment.** Charging $7-that-becomes-$149 with no disclosure is both a trust killer and a chargeback risk. I added explicit "then $149/month after your 7-day trial, cancel anytime" copy plus Terms/Privacy links at checkout.

**Grade vs. course mismatch.** The brief labels the selector "grade" but lists *course names* (Pre-Algebra, Algebra I…). Parents know their child's grade, not always the right course. I built a grade selector (6–12) that maps to the correct course, removing a decision the parent shouldn't have to make.

**A genuine source-asset inconsistency worth flagging.** The teacher is "Eddie Kang" in the brief, the curriculum PDFs, and the intro video. But one product screenshot in the asset folder (`img/eddie_3.webp`) shows the live-class UI under the name **"Daniel Khan."** I used `eddie_1` (headshot) and `eddie_2` (whiteboard, as the video poster) and **deliberately skipped `eddie_3`** to keep the named teacher consistent. The curriculum PDFs also still carry a few `myedspace.co.uk` footers and say "live lessons each month" where the page (correctly) says twice a week — so I linked them as proof of rigour but didn't screenshot their copy.

---

## 2. Prompts that meaningfully shaped the output

1. **Localisation + error-hunt framing.** I established up front that MyEdSpace is UK-rooted with a US arm, and instructed the agent to treat the brief as potentially containing planted UK→US localisation errors — then to flag each one rather than silently "fixing" it. This is what surfaced the UK phone format, the Trustpilot framing, and the timezone/cadence leftovers in the PDFs.

2. **"Lead the page with the blocking emotion, not the product."** I directed the agent to identify the audience's *blocking* emotion (fear of wasting money again, having been burned by tutors) and make the page answer that fear first — which drove the risk-reversal block into the hero rather than burying the guarantee in the FAQ.

3. **Label growth principles inline, then defend them.** I asked the agent to annotate each section with the specific growth.design principle it implements (e.g. Anchoring, Centre-stage, Loss Aversion, Goal-gradient, Hick's Law) so I could sanity-check that each was load-bearing, not decorative — and cut anything that was just "a nice section."

4. **Iterating against the no-human-in-the-loop constraint.** When the first pass produced a lead-capture form, I pushed back that the goal requires an actual charge with nobody in the loop, and had it rebuild the form as a real self-checkout with success state — and relocate the phone capture to a post-purchase optional step.

---

## 3. The single biggest conversion lever

**Loss aversion / risk reversal — the $7 trial plus the 30-day money-back guarantee, surfaced into the hero.**

The audience is defined by the brief: price-conscious parents who have *already* considered tutoring and *already* been burned by inconsistency. For that person, desire isn't the bottleneck — they want their kid to do better. The bottleneck is **fear of wasting money again.** So the highest-leverage move is to make the downside feel like zero, as early as possible.

Concretely: the guarantee isn't left as fine print. It's a bordered promise block in the hero ("$7 for 7 days. Cancel anytime. Backed by a 30-day money-back guarantee"), it's restated at checkout as billing transparency, and it's reinforced with the one review that explicitly credits the guarantee as the reason for signing up (Lauren H.). That's loss aversion (Kahneman/Tversky) operationalised — we're not selling harder, we're removing the perceived risk that's actually blocking the click.

(Honourable mention: goal-gradient in the checkout progress indicator — but that lifts *completion* once they've started, whereas risk reversal is what gets them to start at all, so it's the bigger lever for cold traffic.)

### Every growth principle on the page, and where it lives

Risk reversal is the *lead* lever, but the page applies a stack of principles from growth.design — each one labelled inline in the code with a `[GP: ...]` comment so it's visible in the build, not just claimed here:

- **Loss aversion / risk reversal** — hero promise block, checkout billing disclosure, Lauren H. review.
- **Anchoring** — the $640+/mo private-tutor column makes $149 read as small.
- **Centre-stage effect** — MyEdSpace occupies the middle comparison column, lifted and green-bordered.
- **Von Restorff (isolation) effect** — lime (`#b1db00`) reserved exclusively for CTAs, so the action pops against everything around it.
- **Hick's Law** — one CTA in the header (not competing buttons); the grade selector collapses "which course?" into a single grade choice.
- **Goal-gradient effect** — the "Step 1 of 2" progress indicator in the checkout modal pulls people toward completion.
- **Social proof** — US-localised reviews grid plus the "21,000+ students / 4.8 Excellent" trust strip.
- **Authority bias** — Eddie's credentials block (UCLA, perfect SAT, 9+ years) anchored by his real photo and intro video.

---

## 4. What I'd ship next with another day

- **A/B test the phone field: present vs. absent at checkout.** I made a judgment call to pull phone out of the pre-payment form and offer it as an optional post-purchase opt-in, to cut checkout friction. I'd prove that call with data rather than assert it: measure trial-start completion *and* whether no-phone signups convert to paid at the same rate as phone-captured ones. If completion lifts without hurting paid conversion, the friction-removal wins; if paid conversion drops, the phone was qualifying intent and belongs back in. This is the test with the clearest revenue thesis on the page.
- **Then A/B test the H1.** Lower priority but worth running: my headline is one hypothesis (loss aversion / sunk-cost). I'd test it against a credential-led variant ("Learn from a teacher with a perfect SAT score") since the headline is the highest-traffic element — but only after the checkout-friction question, which moves more money.
- **Funnel instrumentation first, so the tests above are measurable.** Fire events on grade-select, each checkout step, and trial-start. You can't run either test — or optimise paid traffic at all — without seeing exactly where parents drop off. This is the prerequisite for everything else.
- **Wire a real payment processor (Stripe) + server-side validation.** The checkout is currently a faithful front-end simulation; production needs actual payment plus email/calendar provisioning on success.
- **Swap `<img>`/`<video>` for Next.js `<Image>` and a lazy-loaded poster.** I used plain tags for reliability; production should use `<Image>` for automatic optimisation and faster LCP, which matters on paid mobile traffic where every 100ms costs conversions.
- **Exit-intent and scroll-depth triggers.** A last-chance risk-reversal modal on exit intent, and re-surfacing the CTA at scroll milestones, to recover abandoning paid clicks.
- **Localise the curriculum PDFs.** They still carry UK footers (`.co.uk`) and "lessons each month" language; I'd get clean US versions before relying on them as primary proof.
