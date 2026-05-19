import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "InfoSecDiaries | Cybersecurity for the Modern Enterprise" },
      {
        name: "description",
        content:
          "InfoSecDiaries Pvt Ltd delivers penetration testing, threat hunting, and 24/7 SOC services to defend modern enterprises.",
      },
    ],
  }),
});

const homeServices = [
  {
    id: "soc",
    title: "SOC – 24/7 Monitoring",
    tag: "Defensive",
    desc: "Continuous monitoring of logs, endpoints, and network traffic to detect and respond to threats in real time.",
    points: [],
  },
  {
    id: "mdr",
    title: "Managed Detection & Response (MDR)",
    tag: "Defensive",
    desc: "Advanced detection using EDR/XDR and behavioral analytics to identify sophisticated attacks.",
    points: [],
  },
  {
    id: "web-pentest",
    title: "Web Application Pentesting",
    tag: "Offensive",
    desc: "Identify OWASP Top 10 vulnerabilities, auth issues, and logic flaws.",
    points: [],
  },
  {
    id: "phishing-sim",
    title: "Phishing Simulation",
    tag: "Offensive",
    desc: "Controlled campaigns to test employee awareness and resilience.",
    points: [],
  },
  {
    id: "vciso",
    title: "Virtual CISO (vCISO)",
    tag: "Advisory",
    desc: "Strategic cybersecurity leadership without a full-time executive.",
    points: [],
  },
  {
    id: "training",
    title: "Security Training",
    tag: "Advisory",
    desc: "Hands-on workshops for developers, blue teams, and executives, practical skills, not slide decks.",
    points: [
      "Role-specific curricula",
      "Lab-based exercises",
      "On-site or remote delivery",
    ],
  },
];

const platforms = [
  {
    name: "MySocLabs",
    tag: "Service",
    desc: "Protect your business with our cybersecurity and artificial intelligence expertise. Tailor-made solutions to secure your digital future.",
    siteUrl: "https://www.mysoclabs.com/",
    tone: "from-emerald-600 to-teal-700",
  },
  {
    name: "BlueTeamers",
    tag: "Training",
    desc: "Hands-on Blue Team & SOC Training. Learn Detection, Threat Hunting, and Incident Response from Real Practitioners.",
    siteUrl: "https://www.infosecdairies.io/",
    tone: "from-cyan-600 to-blue-700",
  },
];

const whyItems = [
  {
    q: "How are your assessments different from checklist vendors?",
    a: "Every engagement is led by active practitioners. Findings map to real TTPs, reports are written by hand, and re-tests are included so fixes are verified, not just ticket-closed.",
  },
  {
    q: "Do we get direct access to engineers?",
    a: "Yes. You work with your engagement lead throughout, no account-manager relay when something critical surfaces.",
  },
  {
    q: "Can you work with our existing SOC and tools?",
    a: "We integrate with your SIEM, EDR, and workflows. Managed SOC and hunting services are built around your stack, not a forced platform migration.",
  },
  {
    q: "What industries do you typically support?",
    a: "Financial services, healthcare, SaaS, and critical infrastructure, with threat intelligence contextualised to your sector and regulatory landscape.",
  },
];

function Index() {
  const [activeService, setActiveService] = useState(0);
  const selected = homeServices[activeService];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-28 md:pb-32 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center min-h-[32rem] md:min-h-[36rem]">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Cybersecurity engineered to defend the{" "}
              <span className="text-gradient">modern enterprise</span>.
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
              InfoSecDiaries Private Limited partners with security teams to deliver offensive
              testing, managed detection, and platforms that train the next generation of defenders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-brand text-primary-foreground font-medium hover:opacity-90 transition"
              >
                Request a consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-foreground hover:bg-muted transition"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="InfoSecDiaries logo"
              className="w-64 h-64 md:w-80 md:h-80"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[#005f5f] bg-[#007979]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
          <div className="mb-6 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-200">
              Capabilities
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Explore our services
            </h2>
            <p className="mt-2 text-sm text-teal-50/90 md:text-base">
              Select a capability to see scope and deliverables, then visit the full services page
              for engagement models.
            </p>
          </div>

          <div className="grid min-h-[22rem] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:min-h-[26rem] lg:grid-cols-[minmax(0,380px)_1fr]">
            <ul className="border-b border-slate-200 lg:border-b-0 lg:border-r" role="tablist">
              {homeServices.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeService === i}
                    onClick={() => setActiveService(i)}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 px-5 py-3 text-left transition",
                      activeService === i
                        ? "border-l-4 border-l-[#007979] bg-teal-50 text-slate-900"
                        : "border-l-4 border-l-transparent text-slate-600 hover:bg-slate-50",
                    )}
                  >
                    <span>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#007979]">
                        {s.tag}
                      </span>
                      <span className="mt-0.5 block text-base font-semibold">{s.title}</span>
                    </span>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 shrink-0 transition",
                        activeService === i ? "text-[#007979]" : "text-slate-400",
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col p-6 md:p-7" role="tabpanel">
              <div key={selected.id} className="transition-opacity duration-300">
                <span className="inline-block rounded-md bg-teal-100 px-2.5 py-1 text-xs font-semibold text-teal-800">
                  {selected.tag}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                  {selected.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">
                  {selected.desc}
                </p>
                {selected.points && selected.points.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {selected.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2 text-sm text-slate-700 md:text-base"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-6">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#007979] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#006868]"
                  >
                    All services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">
                Platforms
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                Train and grow defenders
              </h2>
            </div>
            <Link
              to="/product"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-teal-200"
            >
              View platforms
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex min-h-[9rem] flex-col gap-4 overflow-hidden rounded-xl bg-slate-800 p-8 transition hover:bg-slate-700 md:min-h-[10rem] md:flex-row md:items-center md:justify-between md:p-10"
              >
                <div
                  className={cn(
                    "absolute inset-y-0 left-0 w-1 bg-gradient-to-b transition-all group-hover:w-1.5",
                    p.tone,
                  )}
                />
                <div className="pl-4 md:pl-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {p.tag}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white md:text-2xl">{p.name}</h3>
                  <p className="mt-2 max-w-2xl text-sm text-slate-400">{p.desc}</p>
                </div>
                <span className="inline-flex items-center gap-2 pl-4 text-sm font-semibold text-white md:pl-0">
                  Open platform
                  <ExternalLink className="h-4 w-4 text-teal-400 transition group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                Why InfoSecDiaries
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Questions teams ask before they engage
              </h2>
              <p className="mt-4 text-slate-600">
                Expand any item for detail, or reach out and we will walk through fit, scope, and
                timeline on a call.
              </p>
              <Button
                asChild
                className="mt-6 bg-[#007979] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#006868]"
              >
                <Link to="/about">
                  About our team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Accordion
                type="single"
                collapsible
                defaultValue="item-0"
                className="w-full px-4 md:px-6"
              >
                {whyItems.map((item, i) => (
                  <AccordionItem
                    key={item.q}
                    value={`item-${i}`}
                    className="border-slate-200 last:border-b-0"
                  >
                    <AccordionTrigger className="text-base font-semibold text-slate-900 hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 shadow-xl md:grid-cols-2 md:min-h-[18rem]">
            <div className="flex flex-col justify-center bg-slate-900 p-10 md:p-14">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Start with a conversation
              </h2>
              <p className="mt-4 text-slate-400">
                Tell us about your environment and priorities. We will propose a scoped engagement,
                assessment, retainer, or managed operations.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-6 bg-white p-10 md:p-14">
              <p className="text-slate-600">
                Typical first step: a 30-minute discovery call with a senior consultant. No sales
                deck, just clarity on how we can help.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Browse services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter variant="darkGrey" />
    </div>
  );
}
