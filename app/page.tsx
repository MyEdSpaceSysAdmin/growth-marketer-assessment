"use client";

/**
 * MyEdSpace US Landing Page — cold US paid traffic -> $7 trial, no human in the loop.
 * Flat design (radius 0, no shadows, Inter). Brand tokens only. Lime = CTA only.
 * Lead principle: Loss Aversion / Risk Reversal (growth.design/psychology).
 * Real assets: img/eddie_1, img/eddie_2, video/MES_intro.mp4, img/favicon.webp, 4 curriculum PDFs.
 * Skipped img/eddie_3 (shows name "Daniel Khan", conflicts with "Eddie Kang") — see NOTES.md.
 */

import { useState } from "react";
import reviewsData from "../docs/REVIEWS.json";

type Review = {
  rating: number;
  title: string;
  body: string;
  name: string;
  city: string;
  date: string;
};

const reviews = reviewsData as Review[];

const GRADES = ["4", "5", "6", "7", "8", "9", "10", "11", "12"] as const;
const GRADE_TO_COURSE: Record<string, string> = {
  "4": "Elementary Math",
  "5": "Elementary Math",
  "6": "Pre-Algebra",
  "7": "Pre-Algebra",
  "8": "Algebra I",
  "9": "Algebra I",
  "10": "Geometry",
  "11": "Algebra II",
  "12": "Algebra II",
};
const COURSE_SCHEDULE: Record<string, string> = {
  "Elementary Math": "Mon & Wed · 6:00 PM PT · 45 min",
  "Pre-Algebra": "Mon & Wed · 5:00 PM PT · 60 min",
  "Algebra I": "Tue & Thu · 6:00 PM PT · 60 min",
  "Geometry": "Tue & Thu · 5:00 PM PT · 60 min",
  "Algebra II": "Mon & Wed · 5:00 PM PT · 60 min",
};

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
      <path
        d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.72.99-5.8-4.21-4.1 5.82-.85L10 1.5z"
        fill="#b1db00"
        stroke="#b1db00"
        strokeWidth="1"
      />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none" aria-hidden="true">
      <path d="M5 13l4 4L19 7" fill="none" stroke="#3533ff" strokeWidth="2" />
    </svg>
  );
}

function Cross() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Lock() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11V8a4 4 0 018 0v3" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Shield() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" fill="none" stroke="#3533ff" strokeWidth="2" />
      <path d="M9 12l2 2 4-4" fill="none" stroke="#3533ff" strokeWidth="2" />
    </svg>
  );
}

function Stars() {
  return (
    <span className="flex" aria-label="5 out of 5 stars">
      <Star /><Star /><Star /><Star /><Star />
    </span>
  );
}

function GradeChart() {
  return (
    <svg viewBox="0 0 320 200" className="h-auto w-full" role="img" aria-label="A line chart showing a math grade rising over time">
      <line x1="40" y1="20" x2="40" y2="170" stroke="#101626" strokeWidth="2" />
      <line x1="40" y1="170" x2="300" y2="170" stroke="#101626" strokeWidth="2" />
      <polyline
        points="40,150 100,140 160,110 220,70 290,30"
        fill="none"
        stroke="#3533ff"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <circle cx="40" cy="150" r="5" fill="#3533ff" />
      <circle cx="100" cy="140" r="5" fill="#3533ff" />
      <circle cx="160" cy="110" r="5" fill="#3533ff" />
      <circle cx="220" cy="70" r="5" fill="#3533ff" />
      <circle cx="290" cy="30" r="7" fill="#b1db00" stroke="#101626" strokeWidth="2" />
      <text x="40" y="190" fill="#101626" fontSize="11" fontWeight="bold" textAnchor="middle">Week 1</text>
      <text x="290" y="190" fill="#101626" fontSize="11" fontWeight="bold" textAnchor="middle">Week 8</text>
      <text x="298" y="22" fill="#101626" fontSize="13" fontWeight="bold" textAnchor="end">A</text>
    </svg>
  );
}

function StepArrow() {
  return (
    <svg viewBox="0 0 40 24" className="h-5 w-8 flex-none" aria-hidden="true">
      <path d="M4 12h28M24 4l8 8-8 8" fill="none" stroke="#3533ff" strokeWidth="2" />
    </svg>
  );
}

export default function HomePage() {
  const [signupOpen, setSignupOpen] = useState(false);
  const [presetGrade, setPresetGrade] = useState<string>("");

  function openSignup(grade?: string) {
    setPresetGrade(grade ?? "");
    setSignupOpen(true);
  }

  return (
    <main className="bg-white font-sans text-brand-dark antialiased">
      <header className="sticky top-0 z-40 border-b-2 border-brand-dark bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5">
          <a href="#" className="flex items-center">
            <img src="/assets/img/mes-logo-main-blue.webp" alt="MyEdSpace" className="h-7 w-auto sm:h-8" />
          </a>
          <button
            onClick={() => openSignup()}
            className="bg-brand-green px-3 py-2 text-xs font-bold text-brand-dark transition-opacity hover:opacity-90 sm:px-4 sm:text-sm"
          >
            Start Your $7 Trial
          </button>
        </div>
      </header>

      <section className="bg-brand-blue text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-5 md:grid-cols-2 md:gap-6 md:py-16">
          <div>
            <p className="mb-4 inline-block border-2 border-white/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              Live Online Math · Grades 4&ndash;12
            </p>
            <h1 className="text-[2.1rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              School moves too fast. Tutors didn&rsquo;t stick.
              <span className="text-brand-green"> This is the math help that works — try it for $7.</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-white/85 sm:text-lg">
              For grade 4&ndash;12 students who need more than school gives them. Live class twice a
              week, same teacher every time — for a fraction of a tutor&rsquo;s price.
            </p>
            <div className="mt-6 border-2 border-brand-green bg-white p-5 text-brand-dark sm:p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-brand-blue">
                Let&rsquo;s find your child&rsquo;s class
              </p>
              <p className="mt-1 text-sm text-brand-dark/70">
                Tell us their grade and we&rsquo;ll place them in the right course.
              </p>
              <GradePicker onStart={(g) => openSignup(g)} />
              <div className="mt-4 flex items-start gap-2 border-2 border-brand-dark bg-brand-light-blue/30 p-3">
                <Shield />
                <div>
                  <p className="text-sm font-bold text-brand-dark">$7 for 7 days. Cancel anytime.</p>
                  <p className="text-xs text-brand-dark/70">
                    Backed by a 30-day money-back guarantee — try it risk-free.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85">
              <span className="flex items-center gap-1.5">
                <Stars /> 4.8 &ldquo;Excellent&rdquo;
              </span>
              <span>21,000+ students taught</span>
              <span>95% parent satisfaction</span>
            </div>
          </div>

          <div className="order-first self-end md:order-last">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/eddie_hero.webp"
              alt="Eddie Kang, MyEdSpace lead math teacher"
              className="mx-auto w-full max-w-sm md:max-w-none"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x-2 divide-y-2 divide-brand-dark border-2 border-brand-dark sm:grid-cols-4 sm:divide-y-0">
          {[
            ["21,000+", "Students taught"],
            ["95%", "Parent satisfaction"],
            ["4.8★", "Average rating"],
            ["83%", "Improved confidence"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-white p-6 text-center sm:p-8">
              <p className="text-3xl font-extrabold text-brand-blue sm:text-4xl">{stat}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-brand-dark/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b-2 border-brand-dark bg-brand-light-blue/40">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-5 md:py-20">
          <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-4xl">
            Meet the teacher before you spend a cent
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-brand-dark/70">
            Watch Eddie explain how MyEdSpace classes work — then start your $7 trial.
          </p>
          <div className="mt-8 border-2 border-brand-dark bg-brand-dark">
            <video controls preload="metadata" poster="/assets/img/eddie_2.webp" className="aspect-video w-full">
              <source src="/assets/video/MES_intro.mp4" type="video/mp4" />
              Your browser doesn&rsquo;t support video playback.
            </video>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-brand-dark bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-5 md:py-20">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-brand-blue">
            How it works
          </p>
          <h2 className="mt-3 text-center text-2xl font-extrabold tracking-tight sm:text-4xl">
            Not tutoring. Not school. Something built to actually move the grade.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-dark/80 sm:text-lg">
            <p>
              Here&rsquo;s what tutoring never gave you: a teacher who shows up at the same time
              every week, a plan that goes somewhere, and momentum that doesn&rsquo;t reset every
              session. Not recorded video. Not a stranger each month.
            </p>
          </div>
          <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {[
              ["1", "Live, twice a week", "Real teaching in real time, grouped by your child's grade."],
              ["2", "Builds week on week", "Every lesson connects to the last. No gaps, no cramming."],
              ["3", "Support between classes", "Practice that reinforces, plus a 24/7 AI coach for stuck moments."],
            ].map(([num, t, b], i) => (
              <div key={t} className="contents">
                <div className="border-2 border-brand-dark bg-white p-5">
                  <span className="flex h-9 w-9 items-center justify-center bg-brand-blue text-base font-extrabold text-white">
                    {num}
                  </span>
                  <p className="mt-3 font-bold">{t}</p>
                  <p className="mt-2 text-sm text-brand-dark/70">{b}</p>
                </div>
                {i < 2 && (
                  <div className="flex items-center justify-center py-1 sm:py-0">
                    <span className="rotate-90 sm:rotate-0">
                      <StepArrow />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light-blue/40">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-5 md:py-20">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">
              Meet your teachers
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl">
              Real US teachers. The same face every class.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-brand-dark/70">
              No rotating tutors, no grad students. Your child learns from one expert teacher who
              shows up live twice a week — matched to their grade and course.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Eddie */}
            <div className="border-2 border-brand-dark bg-white">
              <div className="h-64 overflow-hidden border-b-2 border-brand-dark bg-brand-light-blue/40">
                <img
                  src="/assets/img/eddie_5.webp"
                  alt="Eddie Kang, MyEdSpace math teacher"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <p className="text-xl font-extrabold">Eddie Kang</p>
                <p className="mt-1 text-sm font-bold text-brand-blue">
                  Algebra I &amp; II · Geometry · AP Calculus
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex gap-2"><Check /> UCLA Pure Math degree</li>
                  <li className="flex gap-2"><Check /> Perfect SAT Math score (800/800)</li>
                  <li className="flex gap-2"><Check /> 9+ years teaching in California schools</li>
                </ul>
              </div>
            </div>

            {/* Adam */}
            <div className="border-2 border-brand-dark bg-white">
              <div className="h-64 overflow-hidden border-b-2 border-brand-dark bg-brand-light-blue/40">
                <img
                  src="/assets/img/adam_1.webp"
                  alt="Adam Gilbert, MyEdSpace math teacher"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <p className="text-xl font-extrabold">Adam Gilbert</p>
                <p className="mt-1 text-sm font-bold text-brand-blue">
                  Pre-Algebra · Earlier grades · AP Pre-Calculus
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex gap-2"><Check /> Brown University degree</li>
                  <li className="flex gap-2"><Check /> 7+ years teaching in US charter schools</li>
                  <li className="flex gap-2"><Check /> Specialist in building strong foundations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-blue text-white">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-14 sm:px-5 md:grid-cols-2 md:gap-12 md:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-light-blue">
              Why MyEdSpace
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl">
              A real teacher and a real plan — not a tutor you hope shows up.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
              School moves too fast for 30 kids at once. Tutors cost a fortune and still leave gaps.
              MyEdSpace gives your child the same top US teacher every week, a course that builds
              toward the exams that matter, and help between classes — for less than a few hours with
              a tutor.
            </p>
          </div>
          <div className="border-2 border-brand-green bg-white p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">
              The shift parents see
            </p>
            <div className="mt-3">
              <GradeChart />
            </div>
            <p className="mt-2 text-sm font-medium text-brand-dark/70">
              Steady, structured progress — not a one-off cram.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-brand-dark bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:py-20">
          <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-4xl">
            Everything included, one price
          </h2>
          <div className="mt-8 grid gap-[2px] border-2 border-brand-dark bg-brand-dark sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
            {[
              ["2 live classes every week", "Real-time teaching with Eddie, in your timezone."],
              ["Every class recorded", "Miss one? Watch the replay any time — no catching up alone."],
              ["Workbooks & homework", "Printable materials that match each lesson. No scrambling."],
              ["Video solutions", "On-demand walkthroughs for every topic, so nothing gets left behind."],
              ["24/7 AI math coach", "Unlimited help between lessons, day or night."],
              ["Built toward US exams", "Every course builds toward PSAT, SAT, ACT and AP."],
            ].map(([title, body]) => (
              <div key={title} className="bg-white p-6">
                <p className="font-bold">{title}</p>
                <p className="mt-2 text-sm text-brand-dark/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-brand-dark bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-5 md:py-20">
          <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-4xl">
            See exactly what they&rsquo;ll learn
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-brand-dark/70">
            Full month-by-month curriculum for every course — built toward US exams.
          </p>
          <div className="mt-8 grid gap-[2px] border-2 border-brand-dark bg-brand-dark sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Pre-Algebra", "/assets/curriculum/pre-algebra.pdf"],
              ["Algebra I", "/assets/curriculum/algebra-i.pdf"],
              ["Geometry", "/assets/curriculum/geometry.pdf"],
              ["Algebra II", "/assets/curriculum/algebra-ii.pdf"],
            ].map(([name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white p-6 transition-colors hover:bg-brand-light-blue/30"
              >
                <span className="font-bold">{name}</span>
                <span className="text-sm font-bold text-brand-blue">View &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-brand-dark bg-white text-brand-dark">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-5 md:py-20">
          <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-4xl">
            The gap school doesn&rsquo;t fill — without the tutor price
          </h2>
          <div className="mt-8 grid gap-[2px] border-2 border-brand-dark bg-brand-dark md:mt-10 md:grid-cols-3">
            <div className="bg-brand-light-blue/20 p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-dark/50">School</p>
              <p className="mt-2 text-2xl font-extrabold">Free</p>
              <ul className="mt-5 space-y-3 text-sm text-brand-dark/70">
                <li className="flex gap-2 text-brand-dark/40"><Cross /> 30 kids per class</li>
                <li className="flex gap-2 text-brand-dark/40"><Cross /> Same teacher? Not guaranteed</li>
                <li className="flex gap-2 text-brand-dark/40"><Cross /> Fixed pace</li>
                <li className="flex gap-2 text-brand-dark/40"><Cross /> No recordings</li>
                <li className="flex gap-2 text-brand-dark/40"><Cross /> No homework help</li>
              </ul>
            </div>
            <div className="bg-white p-6 text-brand-dark md:-my-3 md:border-x-2 md:border-brand-green">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">MyEdSpace</p>
              <p className="mt-2 text-2xl font-extrabold">$149<span className="text-base font-medium">/mo</span></p>
              <p className="text-sm font-bold text-brand-blue">$7 to start</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex gap-2"><Check /> Same teacher, every single week</li>
                <li className="flex gap-2"><Check /> One real teacher, every class</li>
                <li className="flex gap-2"><Check /> Your child&rsquo;s pace</li>
                <li className="flex gap-2"><Check /> Recordings included</li>
                <li className="flex gap-2"><Check /> 24/7 AI coach</li>
                <li className="flex gap-2"><Check /> Live twice a week</li>
              </ul>
              <button
                onClick={() => openSignup()}
                className="mt-6 w-full bg-brand-green px-4 py-3 text-sm font-bold text-brand-dark transition-opacity hover:opacity-90"
              >
                Start Your $7 Trial
              </button>
            </div>
            <div className="bg-brand-light-blue/20 p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-dark/50">Private tutor</p>
              <p className="mt-2 text-2xl font-extrabold">$640+<span className="text-base font-medium">/mo</span></p>
              <ul className="mt-5 space-y-3 text-sm text-brand-dark/70">
                <li className="flex gap-2"><Check /> 1 student</li>
                <li className="flex gap-2 text-brand-dark/40"><Cross /> Cancellations &amp; reschedules</li>
                <li className="flex gap-2 text-brand-dark/40"><Cross /> No structure</li>
                <li className="flex gap-2 text-brand-dark/40"><Cross /> Variable quality</li>
                <li className="flex gap-2 text-brand-dark/40"><Cross /> Pay for travel &amp; idle time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light-blue/30">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-5 md:py-20">
          <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-4xl">
            The shift parents tell us about
          </h2>
          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 md:gap-6">
            <div className="border-2 border-brand-dark bg-white p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-dark/60">Before</p>
              <p className="mt-3 text-base leading-relaxed sm:text-lg">
                Another bad test. Homework turning into a fight every night. A tutor that cost a
                fortune and just did the homework <em>with</em> their kid — never teaching
                <em> the why</em>.
              </p>
            </div>
            <div className="border-2 border-brand-blue bg-white p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                A few weeks in
              </p>
              <p className="mt-3 text-base leading-relaxed sm:text-lg">
                Something clicks. They start getting it. They stop dreading math. The grade goes
                up — and so does their confidence. You stop being the homework referee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-brand-dark bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:py-20">
          <div className="flex flex-col items-center gap-2 text-center">
            <Stars />
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
              Rated 4.8 &ldquo;Excellent&rdquo; by US parents
            </h2>
            <p className="text-brand-dark/70">21,000+ students taught across the US.</p>
          </div>
          <div className="mt-8 grid gap-[2px] border-2 border-brand-dark bg-brand-dark sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
            {reviews.map((r) => (
              <article key={r.name} className="flex flex-col bg-white p-6">
                <Stars />
                <p className="mt-3 font-bold">{r.title}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-dark/80">{r.body}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-brand-dark/50">
                  {r.name} · {r.city}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue text-white">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 sm:px-5 md:grid-cols-2 md:items-center md:gap-10 md:py-20">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
              Try it for $7. Decide once you&rsquo;ve seen it work.
            </h2>
            <p className="mt-4 text-base text-white/85 sm:text-lg">
              7 days of full access for $7 — every live class, recording, workbook and the AI
              coach. After that it&rsquo;s $149/month, and you can cancel anytime. Plus a
              30-day money-back guarantee on top.
            </p>
            <p className="mt-3 text-sm text-white/70">Compare that to a private tutor at $640+/month.</p>
            <button
              onClick={() => openSignup()}
              className="mt-6 bg-brand-green px-6 py-3 font-bold text-brand-dark transition-opacity hover:opacity-90"
            >
              Start Your $7 Trial
            </button>
          </div>
          <div className="border-2 border-brand-green bg-white p-6 text-brand-dark">
            <Stars />
            <p className="mt-3 font-bold">The 30-day refund made me try it</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/80">
              &ldquo;I almost didn&rsquo;t sign up — we&rsquo;d been burned before. The
              money-back guarantee was the only reason I tried. Three months in, no regrets.&rdquo;
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-brand-dark/50">
              Lauren H. · Charlotte, NC
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-brand-dark bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-5 md:py-20">
          <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-4xl">
            Questions parents ask first
          </h2>
          <div className="mt-8 border-2 border-brand-dark md:mt-10">
            <Faq
              items={[
                ["What if my child needs 1-on-1 attention?", "Classes are small and interactive, and Eddie answers questions live. Between lessons, the 24/7 AI coach gives unlimited one-on-one help — and every class is recorded to rewatch."],
                ["How does the cost compare to tutoring?", "A private tutor runs $640+/month. MyEdSpace is $149/month for live classes twice a week, recordings, workbooks and the AI coach — and you start for $7."],
                ["What grades and courses do you teach?", "Elementary Math, Pre-Algebra, Algebra I, Geometry and Algebra II, built toward PSAT, SAT, ACT and AP. Pick your child's grade and we'll place them in the right course — full curriculum above."],
                ["What if my child misses a class?", "Every live class is recorded and available to rewatch any time, so a missed session never means falling behind."],
                ["Is there a guarantee?", "Yes — a 30-day money-back guarantee. Start for $7, and if it isn't right for your child, you're covered."],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-blue text-white">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-5 md:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
            Same teacher. Same time. Every week until it clicks.
          </h2>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Start today for $7. Cancel anytime. 30-day money-back guarantee.
          </p>
          <button
            onClick={() => openSignup()}
            className="mt-7 bg-brand-green px-8 py-4 text-base font-bold text-brand-dark transition-opacity hover:opacity-90 sm:text-lg"
          >
            Start Your $7 Trial
          </button>
        </div>
      </section>

      <footer className="bg-brand-dark pb-20 text-white/60 md:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t-2 border-white/20 px-4 py-8 text-sm sm:flex-row sm:px-5">
          <span className="font-extrabold text-white">MyEdSpace</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <span>© {new Date().getFullYear()} MyEdSpace</span>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t-2 border-brand-dark bg-white p-3 md:hidden">
        <button
          onClick={() => openSignup()}
          className="flex w-full items-center justify-center gap-2 bg-brand-green px-4 py-3 font-bold text-brand-dark"
        >
          Start Your $7 Trial
          <span className="text-xs font-medium">· risk-free</span>
        </button>
      </div>

      {signupOpen && <SignupModal presetGrade={presetGrade} onClose={() => setSignupOpen(false)} />}
    </main>
  );
}

function GradePicker({ onStart }: { onStart: (grade: string) => void }) {
  const [grade, setGrade] = useState("");
  return (
    <div className="mt-4">
      <select
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        className="w-full border-2 border-brand-dark bg-white px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue"
      >
        <option value="">Choose grade…</option>
        {GRADES.map((g) => (
          <option key={g} value={g}>Grade {g}</option>
        ))}
      </select>
      {grade && (
        <div className="mt-3 border-l-2 border-brand-blue bg-brand-light-blue/30 px-3 py-2 text-sm text-brand-dark">
          <p>
            Perfect — they&rsquo;ll join{" "}
            <span className="font-bold text-brand-blue">{GRADE_TO_COURSE[grade]}</span>, matched to
            their grade.
          </p>
          <p className="mt-1 text-xs font-medium text-brand-dark/70">
            Classes: {COURSE_SCHEDULE[GRADE_TO_COURSE[grade]]}
          </p>
        </div>
      )}
      <button
        onClick={() => onStart(grade)}
        disabled={!grade}
        className="mt-4 w-full bg-brand-green px-4 py-3 font-bold text-brand-dark transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {grade ? "Start Your $7 Trial" : "Choose a grade to start"}
      </button>
    </div>
  );
}

function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} className={i > 0 ? "border-t-2 border-brand-dark" : ""}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold"
            >
              {q}
              <span className="text-brand-blue">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-brand-dark/80">{a}</p>}
          </div>
        );
      })}
    </div>
  );
}

function SignupModal({ presetGrade, onClose }: { presetGrade: string; onClose: () => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState(presetGrade);
  const [phone, setPhone] = useState("");
  const [phoneSaved, setPhoneSaved] = useState(false);

  const step1Valid = firstName && lastName && email.includes("@") && grade;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-brand-dark/80 p-4 sm:items-center"
      onClick={onClose}
    >
      <div className="my-auto w-full max-w-md border-2 border-brand-dark bg-white" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b-2 border-brand-dark px-5 py-3">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-dark/60">
            {step < 3 ? `Step ${step} of 2` : "You're in"}
          </span>
          <button onClick={onClose} aria-label="Close" className="text-brand-dark/60 hover:text-brand-dark">
            <Cross />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          {step === 1 && (
            <>
              <h3 className="text-xl font-extrabold">Start your $7 trial</h3>
              <p className="mt-1 text-sm text-brand-dark/70">7 days full access. Cancel anytime.</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Field label="First name" value={firstName} onChange={setFirstName} />
                <Field label="Last name" value={lastName} onChange={setLastName} />
              </div>
              <div className="mt-3">
                <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@email.com" />
              </div>
              <div className="mt-3">
                <label className="text-xs font-bold uppercase tracking-wide text-brand-dark/60">
                  Child&rsquo;s grade
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="mt-1 w-full border-2 border-brand-dark bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                >
                  <option value="">Choose grade…</option>
                  {GRADES.map((g) => (
                    <option key={g} value={g}>Grade {g} — {GRADE_TO_COURSE[g]}</option>
                  ))}
                </select>
              </div>
              <button
                disabled={!step1Valid}
                onClick={() => setStep(2)}
                className="mt-5 w-full bg-brand-green px-4 py-3 font-bold text-brand-dark transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue to checkout
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="text-xl font-extrabold">Checkout</h3>
              <div className="mt-4 border-2 border-brand-dark bg-brand-light-blue/30 p-4 text-sm">
                <div className="flex justify-between font-bold">
                  <span>7-day trial — {grade ? GRADE_TO_COURSE[grade] : "Math"}</span>
                  <span>$7.00</span>
                </div>
                <p className="mt-2 text-brand-dark/70">
                  Then $149/month after your 7-day trial. Cancel anytime before it ends and you
                  won&rsquo;t be charged.
                </p>
              </div>
              <div className="mt-4 space-y-3">
                <Field label="Card number" placeholder="1234 1234 1234 1234" />
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Expiry" placeholder="MM / YY" />
                  <Field label="CVC" placeholder="123" />
                </div>
                <Field label="ZIP code" placeholder="90210" />
              </div>
              <button
                onClick={() => setStep(3)}
                className="mt-5 w-full bg-brand-green px-4 py-3 font-bold text-brand-dark transition-opacity hover:opacity-90"
              >
                Pay $7 &amp; start trial
              </button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-brand-dark/60">
                <Lock /> Secure checkout · 30-day money-back guarantee
              </p>
              <p className="mt-2 text-center text-xs text-brand-dark/50">
                By starting your trial you agree to our{" "}
                <a href="#" className="underline">Terms</a> and{" "}
                <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </>
          )}

          {step === 3 && (
            <>
              <div className="flex items-center gap-2">
                <Check />
                <h3 className="text-xl font-extrabold">You&rsquo;re in, {firstName}!</h3>
              </div>
              <p className="mt-2 text-sm text-brand-dark/80">
                We&rsquo;ve emailed your class schedule and login to{" "}
                <span className="font-bold">{email}</span>. Eddie will see your child in their first
                live {grade ? GRADE_TO_COURSE[grade] : "math"} class this week.
              </p>
              <div className="mt-5 border-2 border-brand-dark p-4">
                <p className="text-sm font-bold">Want class reminders by text? (optional)</p>
                <p className="mt-1 text-xs text-brand-dark/60">
                  We&rsquo;ll text a reminder before each live class. US numbers only.
                </p>
                {!phoneSaved ? (
                  <div className="mt-3 flex gap-2">
                    <span className="flex items-center border-2 border-brand-dark px-3 text-sm">+1</span>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full border-2 border-brand-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                    <button onClick={() => setPhoneSaved(true)} className="bg-brand-blue px-3 text-sm font-bold text-white">
                      Save
                    </button>
                  </div>
                ) : (
                  <p className="mt-3 text-sm font-bold text-brand-blue">
                    Saved — we&rsquo;ll text you before each class.
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="mt-5 w-full bg-brand-green px-4 py-3 font-bold text-brand-dark transition-opacity hover:opacity-90"
              >
                Done
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-wide text-brand-dark/60">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        className="mt-1 w-full border-2 border-brand-dark bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue"
      />
    </div>
  );
}
