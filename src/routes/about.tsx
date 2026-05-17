import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — InfoSecDiaries Pvt Ltd" },
      {
        name: "description",
        content:
          "InfoSecDiaries Private Limited is a cybersecurity firm built by ethical hackers protecting modern enterprises.",
      },
    ],
  }),
});

const values = [
  {
    title: "Adversarial mindset",
    text: "We plan and operate like the attackers we help you defend against — so controls are tested against reality, not assumptions.",
  },
  {
    title: "Radical transparency",
    text: "Every finding is reproducible, evidenced, and explained in language your engineers and leadership can act on.",
  },
  {
    title: "Outcomes over output",
    text: "We measure success by reduced risk and verified fixes — not by the thickness of a deliverable.",
  },
];

const process = [
  { step: "01", label: "Listen", detail: "Understand your stack, threats, and business context." },
  { step: "02", label: "Assess", detail: "Execute scoped testing or operations with clear rules of engagement." },
  { step: "03", label: "Report", detail: "Deliver prioritized, actionable guidance — no boilerplate." },
  { step: "04", label: "Partner", detail: "Support remediation, re-test, and long-term resilience." },
];

const facts = [
  { value: "2019", label: "Founded" },
  { value: "40+", label: "Security engineers" },
  { value: "12", label: "CVEs disclosed" },
  { value: "100+", label: "Clients served" },
];

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader variant="black" />

      <section className="bg-[#007979] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">
            About InfoSecDiaries
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Built by practitioners.
            <br />
            Trusted when it matters.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-teal-50">
            We are a private cybersecurity firm founded by offensive security specialists who
            believe defenses should survive contact with real adversaries — not just pass audits.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Who we are</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                InfoSecDiaries Private Limited was founded by ethical hackers who were tired of
                checkbox security. Today we partner with fintechs, SaaS platforms, healthcare, and
                critical infrastructure teams across India and beyond.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Our work spans penetration testing, managed detection, threat hunting, and platforms
                that train the next generation of defenders.
              </p>
            </div>
            <div className="border-l-4 border-[#007979] pl-8">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">What we believe</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                Security is a discipline of craft. Reports should be written by the people who did
                the work. Engagements should be scoped around your risk — not a catalogue SKU.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                When something critical surfaces, you speak with an engineer — not an
                account-manager relay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900 md:text-3xl">
            What we stand for
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
            Principles that shape every assessment, hunt, and briefing we deliver.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <article
                key={v.title}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 h-1 w-12 rounded-full bg-[#007979]" aria-hidden />
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">How we work with you</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            A consistent engagement rhythm — from first conversation through verified remediation.
          </p>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.step} className="relative">
                {i < process.length - 1 && (
                  <span
                    className="absolute left-[calc(50%+2rem)] top-6 hidden h-px w-[calc(100%-4rem)] bg-slate-200 lg:block"
                    aria-hidden
                  />
                )}
                <p className="font-mono text-sm font-bold text-[#007979]">{p.step}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{p.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <dl className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-6">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-3xl font-bold text-white md:text-4xl">{f.value}</dt>
                <dd className="mt-2 text-sm text-slate-400">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#007979] py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-white">Ready to work together?</h2>
            <p className="mt-2 text-teal-50">
              Tell us about your environment. We will propose a scoped path forward.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#007979] transition hover:bg-teal-50"
          >
            Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter variant="darkGrey" />
    </div>
  );
}
