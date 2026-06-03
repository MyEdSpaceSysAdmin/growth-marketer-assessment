# Unpacking the Brief — MyEdSpace US Landing Page

## Annotation key
🔴 **CONTENTION** — error, gap, or thing I'd push back on (feeds Deliverable 1)
🟠 **JUDGMENT CALL** — an ambiguity I'm resolving + my decision (my "calls under ambiguity" evidence)
🔵 **CONVERSION IMPLICATION** — what this means for the page
⚪ **ASSUMPTION** — taken as given, flagged to verify against the product brief

---

## 1. How I'm reading this test

I'm treating this as a judgment test wearing the costume of a build test. The tell is in the language used in the brief — "feels professional, not AI-generated," "hold the line when the AI gets distracted," "did you catch the errors?" They're screening out the person who one-shots "build a tutoring landing page" into an LLM and ships generic output. So I'm weighting my thinking artifacts (this doc, my prompt log, the errors I catch) as heavily as the page itself, and making my reasoning visible at every step.

One structural note before I annotate: the document below is the assessment spec (the rubric) — not BRIEF.md. The spec references BRIEF.md and BRAND_GUIDELINES.md as separate files containing "product brief, copy, brand tokens, must-haves." That's where the errors will live, so I annotate the spec here for strategy, and do a separate critical read of the product brief in Section 3 for errors.

---

## 2. Decoding the assessment spec

**BRIEF: Goal — Build a US-market landing page that converts cold paid traffic into $7 trial signups, without a sales call.**
🔴 "Without a sales call" conflicts with MyEdSpace's live US site, which routes to a "Book A Call" CTA. I'll strip every consultation/call path and send 100% of intent into self-checkout for the $7 trial. 🔵 Cold paid traffic = no prior trust, high skepticism. The fold has ~5 seconds to pay off whatever the ad promised (message match) before they bounce. 🔵 Exactly one conversion event — the $7 trial. No competing asks (newsletter, quiz dead-ends) that leak intent.

**BRIEF: We want to see how you drive an AI coding agent to take a brief and turn it into a converting page.**
🟠 Tooling call: I drove **Claude Opus directly**, feeding it the brief, BRAND_GUIDELINES.md and the Tailwind tokens as context, and reviewed/corrected each iteration myself before placing the validated output into `app/page.tsx`. I deliberately kept a hand on every change rather than letting an agent auto-apply edits — the brief is explicit that this is a test of judgment, not hands-off automation, so I treated the model as a fast junior I direct and correct, and I compile-checked the output before shipping.

**BRIEF: Audience — A growth marketer who can: read a brief critically… translate growth psychology… drive your best LLM… sanity-check and iterate… hold the line on conversion thinking when the AI gets distracted.**
🔵 "Hold the line when the AI gets distracted" → I keep a short CRO checklist to re-anchor the agent each time it drifts toward generic output (it tried twice: a "book a call" CTA, and a lead-capture form instead of a real checkout — both caught and corrected).

**BRIEF: What you'll build — A US-market landing page for MyEdSpace… convert cold paid traffic (Google Ads, Meta) from US parents into $7 trial signups.**
⚪ Decision-maker = parent; end-user = child. Copy targets the parent's fears (slipping grades, money already wasted on tutors, homework-night conflict) while reassuring them about the child's experience. Verify the product brief doesn't blur these two.

**BRIEF: Must-read before you start — BRIEF.md (product brief, copy, brand tokens, must-haves); BRAND_GUIDELINES.md (colors, typography, design style).**
🔴 The meta-catch: the substantive brief and brand standards are separate files. My error-hunting (UK→US localization, pricing, unsubstantiated claims) happens against those, captured in Section 3.

**BRIEF: Stack — Brand tokens already wired in tailwind.config.ts; Inter font already wired in app/layout.tsx.**
🔵 Tokens and font are pre-wired → discipline rule: use the supplied tokens, invent nothing. Off-brand colors and a random font are the fastest "AI-generated" tell, so I hold the agent to the design system.

**BRIEF: What we're evaluating — Prompting quality · Critical reading · Conversion thinking · Growth psychology (visibly on the page, not just listed) · Self-checkout completeness · Polish & taste.**
🔵 I'm decoding each line into an artifact:
— Prompting quality → my curated prompt log (Deliverable 2).
— Critical reading → this annotated doc is the proof.
— Conversion thinking → each page section documented with the job it does and the objection it kills.
— Growth psychology, "visibly on the page" → I name the specific growth.design principle next to the element that uses it, both on the page (`[GP: …]` comments) and in notes — not a listed appendix.
— Self-checkout completeness → reinforces no-call: full checkout path plus visible trust and secure-payment cues.
— Polish, "not AI-generated" → kill emoji feature cards, gradient hero, and "world-class" filler; lead with specifics.

**BRIEF: Deliverables — push-back · 3–4 shaping prompts · biggest conversion lever · what you'd ship next. If blocked — email only if genuinely blocking; otherwise make a call and document it.**
🟠 Every 🟠 in this doc is deliberate evidence for "making good calls under ambiguity," which they explicitly reward. I won't email unless truly blocked; I'll decide and record.

---

## 3. Critical read of the product BRIEF.md

I read this against three lenses: US localization (MyEdSpace is UK-rooted), internal coherence (does the brief contradict itself?), and conversion/trust completeness (can a "cold" parent actually pay $7 without talking to anyone?). Catches below, walked in document order, then ranked at the end for Deliverable 1.

**BRIEF: Goal — "The page must close the deal on its own — no sales call, no human in the loop."**
🔵 This is the north star: it rules out any "book a call," callback, or advisor path. Every CTA resolves to self-serve checkout for the $7 trial. I'll hold the agent to this — it will try to add a "Talk to us" CTA on instinct. 🔴 Flag for later: this promise directly conflicts with the phone field the same brief asks for (see Form). You can't say "no human in the loop" and then collect a phone number — that signals to the parent that someone will call.

**BRIEF: Hero — "Eyebrow: Not 1:1 Tutoring."**
🔴 The eyebrow leads with a negation. "Not 1:1 Tutoring" primes the reader on the very thing we're *not*, and reads as defensive — the first words a cold, skeptical parent sees shouldn't be an apology for what the product isn't. The product genuinely *is* better than 1:1 (a real teacher, structure, recordings, an AI coach, all for a fraction of the cost), so I led with a positive, benefit-led eyebrow ("Live Online Math · Grades 4–12") and handled the 1-on-1 concern where it actually helps — as an FAQ question, answered positively. Same truth, framed to convert rather than to defend.

**BRIEF: Audience — "US parents of children aged 11–17… price-conscious but not cheap… considered private tutoring and balked… many have tried tutors and been burned by inconsistency."**
🔵 This is a gift for the copy: the page should name the tutor wound directly ("the tutor who just did the homework with them," the cost, the inconsistency) before pitching. Agitate what they already feel. 🟠 The brief scopes the audience to ages 11–17 (≈ grades 6–12) and lists Pre-Algebra → Algebra II. But checking the live US product, MyEdSpace actually teaches from **grade 4** (Elementary Math) up through AP Pre-Calculus / Calculus. Since the page sends real parents to real classes, I extended the selector to **grades 4–12** and added Elementary Math with its real schedule, rather than turn away a grade-4 parent the product serves — a conscious deviation from the brief in favour of product reality, flagged the same way as the pricing call below.

**BRIEF: Hero — "H1: Create something that will capture attention."**
🔴 The H1 is a placeholder, not copy. This is the core headline of a page selling to cold traffic, and the brief leaves it as an instruction to myself. The H1 must carry the outcome, speak to the parent, and pay off the ad's promise. I considered three directions — an emotional before/after ("Your kid stops dreading math…"), a credential-led line, and an outcome-led value line — and shipped **"The math help that finally sticks — for $7."** with the audience and mechanism in the subhead. It message-matches what a parent clicks a math-help ad for (the thing that *finally works*), names the outcome, and pulls the $7 risk-reversal into the headline itself for cold traffic. 🔵 The supplied subhead ("Live classes twice a week, in your timezone") is a feature, not a benefit, so I rewrote the subhead as a benefit + qualifier ("Live online classes twice a week with the same expert teacher every time. For grade 4–12 students who need more than school gives them.") rather than leading with the feature. (This is also a Deliverable-4 A/B test: the headline is the highest-traffic element, worth testing variants once traffic is live.)

**BRIEF: Hero — "Grade pill label: Select their grade to get started · Grades: Pre-Algebra · Algebra I · Geometry · Algebra II."**
🔴 Label/option mismatch: it says "select their grade," but the options are course names. A parent knows their child is "in 9th grade" — they often don't know whether that maps to Algebra I or Geometry. Asking them to self-diagnose the course is friction and a wrong-choice risk on the very first interaction. I'll let them pick by grade level and map grade→course behind the scenes (reduces decision load).

**BRIEF: Teacher — "Eddie Kang · @EddieDoesMath · UCLA Pure Math · Perfect SAT (800/800) · 9+ years…"**
🔵 No contention on Eddie — he's the strongest trust asset on the page: specific, verifiable, named. 🟠 But a single teacher quietly *undersells* the offer and creates a one-person-dependency doubt ("what if that one teacher leaves?"). Real proof of a *platform* is a teaching team. Checking the live US site, MyEdSpace now runs two US teachers, so I presented Eddie alongside **Adam Gilbert** (Brown University, 7+ years in US charter schools), split by course — Adam on Elementary/Pre-Algebra and earlier grades plus AP Pre-Calc, Eddie on Algebra/Geometry/Calculus. This doubles the authority signal, covers the full 4–12 range, and removes the single-point-of-failure doubt. Both teachers' credentials are real (verified against the live site), not invented. I gave the pair real estate near the fold (authority bias) rather than burying it.

**BRIEF: Pricing — "$149/month · $7 for 7 days · anchor: private tutors $640+/month." and Comparison columns — School vs MyEdSpace only.**
🔴 The brief states its most powerful anchor ($640+ private tutor) but then leaves it out of the comparison table, which only contrasts School vs MyEdSpace. That wastes the anchor. A three-column layout — Free-but-useless school / MyEdSpace centre / $640 private tutor — puts the offer in the centre-stage position between "cheap and inadequate" and "great but unaffordable." I'll add the tutor column. 🔴 The CTA area has no billing disclosure. A $7 trial that rolls into $149/month is a negative-option subscription; not stating "then $149/month after 7 days, cancel anytime" near the button is both a trust killer for skeptical parents and a disclosure problem. The brief omits it; I'll add it (the live US site already shows this line). ⚪ Note: the live US site has since moved to $199/mo with a $600+ anchor — but I deliberately held the brief's **$149 / $640** figures, since the brief is the source of truth for this exercise. Flagged so it reads as a conscious choice, not a missed update.

**BRIEF: Form fields — "First/Last name · Email · Phone (+1 prefix, placeholder 7XXX XXXXXX) · Grade dropdown · Submit."**
🔴 Flagship catch — the phone placeholder `7XXX XXXXXX` is a UK number format. UK mobiles are +44 7XXX XXXXXX; US numbers are 10 digits formatted (XXX) XXX-XXXX. The +1 prefix was localized but the placeholder body wasn't — a leftover UK artifact a US parent would never recognize. Fix the format. 🟠 The phone field's placement is the real issue, not the field itself. A number is genuinely useful post-purchase — class reminders, transactional alerts, win-back — so I'm not throwing it away. But on the pre-payment form it's the highest-friction field and it signals an incoming call on a page that promises none. My call: take only what's needed to charge the $7 (name, email, grade), then collect phone as an opt-in after checkout, framed as "text me class reminders." Keeps the retention value, protects the conversion. 🔴 No payment capture. The brief calls this "lead capture," but the goal is a $7 trial signup and "close the deal on its own." A lead form that collects name/email isn't a conversion — converting means the $7 is charged. I resolved this: the form flows into a real checkout step so the parent completes the $7 without talking to anyone. 🔴 Microcopy says "agree to receive communications… unsubscribe anytime" but there are no Terms / Privacy links on a form taking PII and (per above) payment. Add them — trust and compliance.

**BRIEF: Social proof — "21,000+ students · 1,700+ Trustpilot reviews · 4.8 'Excellent'."**
🟠 "21,000+ students" matches the US figure but "1,700+ Trustpilot reviews" is the number MyEdSpace's UK site cites. On a page that explicitly claims US-localized proof, leaning on a UK-origin review count is a subtle credibility mismatch. I led with the US-specific proof (student count + a positive stat bar: 4.8 · 21,000+ · 95% parent satisfaction) and the localized REVIEWS.json quotes, rather than foregrounding a UK-origin review tally.

**BRIEF: Reviews source — "Use docs/REVIEWS.json… already localized… do not pull from the UK Trustpilot page."**
⚪ Confirms the localization theme is deliberate and that UK assets are explicitly off-limits — reinforces that the phone-format and Trustpilot points above are real, not me over-reading. I sourced all quotes from REVIEWS.json only.

### BRAND cross-check (BRAND_GUIDELINES.md vs BRIEF.md)
⚪ Colors, font, and design rules match across both files — no conflict there (worth stating that I checked). 🔵 The flat constraints (border-radius: 0, no shadows, no glow) actually help the "not AI-generated" goal — default AI output is rounded cards with soft shadows. With elevation off the table, I built hierarchy through the type scale, weight, generous spacing, and the blue/lime/dark-blue palette. Deliberate, not decorative. 🟠 CTA green `#b1db00` is a bright lime — white text on it fails contrast. Buttons use dark-blue (`#101626`) text on green for legibility/accessibility, and I used the lime sparingly so it reads as a premium accent, not a highlighter. The primary CTA owns that color; nothing else competes for it (Von Restorff / isolation effect).

---

## 4. Running assumptions & calls log

Same annotation key as Section 3. The brief rewards making a call under ambiguity and documenting it rather than asking for more information unless something is genuinely blocking. Nothing below was blocking, so this consolidates every 🟠 JUDGMENT CALL and ⚪ ASSUMPTION into one place, so the resolution of every contradiction is undeniable.

### 🟠 Judgment calls (decided and acting on)

| # | Ambiguity in the brief | My call | Why it's defensible |
|---|---|---|---|
| 1 | Phone field requested in the pre-payment form, but goal says "no sales call, no human in the loop" | Move phone after checkout as an optional opt-in (class reminders), not in the pre-payment form | A number is legitimate for post-purchase reminders/retention, so I'm not discarding it — but in the lead form it's the highest-abandonment field and signals "expect a call." Collecting it once the $7 is charged keeps retention value without taxing the conversion or breaking the no-call promise |
| 2 | Brief calls it "lead capture," goal calls for a $7 trial signup | Form flows into a real $7 checkout (card step), not a name/email handoff | "Convert" = $7 charged with no human in the loop; a lead form wouldn't satisfy the goal |
| 3 | H1 left as a placeholder instruction | Wrote an outcome-led H1 ("The math help that finally sticks — for $7."); rewrote supplied subhead into a benefit + qualifier | Cold traffic decides on the headline; it message-matches ad intent and folds the risk-reversal into the fold |
| 4 | Eyebrow specified as "Not 1:1 Tutoring" | Replaced with a positive eyebrow ("Live Online Math · Grades 4–12"); moved the 1-on-1 concern to a positively-answered FAQ | Leading with a negation primes the wrong thing and reads defensive; the product is better than 1:1, so frame it as a benefit |
| 5 | Brief centres a single teacher (Eddie) | Added a second real US teacher (Adam Gilbert), split by course | A team beats a one-person dependency for trust, covers the full 4–12 range, and doubles the authority signal; credentials verified against the live site |
| 6 | $640 tutor anchor given, but comparison table only shows School vs MyEdSpace | Added tutor as a third column, MyEdSpace centred | Puts the offer centre-stage between "free but useless" and "great but unaffordable" (anchoring + centre-stage effect) |
| 7 | No billing disclosure or legal links near the form | Added "then $149/mo, cancel anytime" + Terms/Privacy | Trust for a been-burned parent and FTC compliance on trial-to-subscription billing |
| 8 | Selector labelled "grade" but lists course names | Parent picks grade; map grade→course behind the scenes | Parents know the grade, not the course; removes a wrong-choice risk on the first interaction (Hick's Law) |
| 9 | Live site now prices at $199/mo ($600+ anchor); brief says $149 / $640 | Held the brief's $149 / $640 | The brief is the source of truth for this exercise; flagged as a conscious choice, not a missed update |
| 10 | Guidelines titled "MES," brief says "MyEdSpace" | Public page uses "MyEdSpace" only; MES treated as internal shorthand | Consistent customer-facing brand |
| 11 | Lime CTA green fails contrast with white text | Dark-navy text on the green; lime reserved for the primary CTA only | Legibility/accessibility, and the colour isolates the one action (Von Restorff effect) |
| 12 | "Best LLM" / tooling unspecified | Drove Claude Opus directly, reviewed/corrected each pass, placed validated output myself | Keeps my judgment in the loop on every change, which is what the brief is actually testing — not hands-off automation |

### ⚪ Assumptions (proceeding on, would verify if possible)

| # | Assumption | How I'm proceeding | What I'd confirm |
|---|---|---|---|
| 1 | "1,700+ Trustpilot reviews" is the UK figure | Led with US-specific proof (21,000+ students + a positive stat bar + localised REVIEWS.json quotes) | Whether that review count reflects US reviewers before featuring it prominently |
| 2 | Course range extends from grade 4 (Elementary Math) through AP Pre-Calc / Calculus, per the live site | Extended the selector to Grades 4–12, added Elementary Math with its real schedule, and split the two teachers to cover the full range | Whether the brief's narrower course list (grades 6–12, tops at Algebra II) or the live site's fuller range is the intended scope |
| 3 | Single self-serve funnel, not a parallel lead-nurture track | Built the simplest path that meets "no human in the loop" | Whether a CRM sequence sits behind the form |
| 4 | Decision-maker is the parent, end-user is the child | Copy targets the parent's fears; reassures about the child's experience | — (consistent across both files) |
