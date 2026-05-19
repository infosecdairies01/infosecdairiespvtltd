import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services | InfoSecDiaries Pvt Ltd" },
      {
        name: "description",
        content:
          "Penetration testing, red teaming, managed SOC, cloud security, threat hunting and security training.",
      },
    ],
  }),
});

type CategoryId = "all" | "defensive" | "offensive" | "advisory";

type Service = {
  id: string;
  title: string;
  category: Exclude<CategoryId, "all">;
  tag: string;
  desc: string;
  highlights: string[];
};

const categories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All services" },
  { id: "defensive", label: "Defensive" },
  { id: "offensive", label: "Offensive" },
  { id: "advisory", label: "Advisory" },
];

const services: Service[] = [
  {
    id: "soc",
    title: "SOC – 24/7 Monitoring",
    category: "defensive",
    tag: "Defensive",
    desc: "Continuous monitoring of logs, endpoints, and network traffic to detect and respond to threats in real time.",
    highlights: [
      "Real-time threat detection",
      "Log and traffic analysis",
      "24/7 eyes on glass"
    ],
  },
  {
    id: "mdr",
    title: "Managed Detection & Response (MDR)",
    category: "defensive",
    tag: "Defensive",
    desc: "Advanced detection using EDR/XDR and behavioral analytics to identify sophisticated attacks.",
    highlights: [
      "EDR/XDR integration",
      "Behavioral analytics",
      "Automated threat response"
    ],
  },
  {
    id: "ir",
    title: "Incident Response (IR)",
    category: "defensive",
    tag: "Defensive",
    desc: "Rapid containment, investigation, recovery, and post-incident analysis.",
    highlights: [
      "Rapid containment",
      "Forensic investigation",
      "Post-incident analysis"
    ],
  },
  {
    id: "vm",
    title: "Vulnerability Management",
    category: "defensive",
    tag: "Defensive",
    desc: "Continuous discovery, assessment, and prioritization of vulnerabilities.",
    highlights: [
      "Continuous discovery",
      "Risk-based prioritization",
      "Remediation guidance"
    ],
  },
  {
    id: "ns",
    title: "Network Security",
    category: "defensive",
    tag: "Defensive",
    desc: "Firewall protection, IDS/IPS, segmentation, and malicious traffic detection.",
    highlights: [
      "Firewall management",
      "IDS/IPS implementation",
      "Network segmentation"
    ],
  },
  {
    id: "ecs",
    title: "Email & Cloud Security",
    category: "defensive",
    tag: "Defensive",
    desc: "Protection against phishing, malware, and account compromise.",
    highlights: [
      "Anti-phishing controls",
      "Malware protection",
      "Account takeover prevention"
    ],
  },
  {
    id: "web-pentest",
    title: "Web Application Pentesting",
    category: "offensive",
    tag: "Offensive",
    desc: "Identify OWASP Top 10 vulnerabilities, auth issues, and logic flaws.",
    highlights: [
      "OWASP Top 10 coverage",
      "Business logic testing",
      "Actionable reporting"
    ],
  },
  {
    id: "network-pentest",
    title: "Network Pentesting",
    category: "offensive",
    tag: "Offensive",
    desc: "Simulated attacks to uncover misconfigurations and exposed services.",
    highlights: [
      "Internal & external testing",
      "Misconfiguration discovery",
      "Exploitation validation"
    ],
  },
  {
    id: "phishing-sim",
    title: "Phishing Simulation",
    category: "offensive",
    tag: "Offensive",
    desc: "Controlled campaigns to test employee awareness and resilience.",
    highlights: [
      "Custom phishing scenarios",
      "Click-rate tracking",
      "User training integration"
    ],
  },
  {
    id: "vciso",
    title: "Virtual CISO (vCISO)",
    category: "advisory",
    tag: "Advisory",
    desc: "Strategic cybersecurity leadership without a full-time executive.",
    highlights: [
      "Security roadmap development",
      "Board-level reporting",
      "Budget optimization"
    ],
  },
  {
    id: "sec-awareness",
    title: "Security Awareness Training",
    category: "advisory",
    tag: "Advisory",
    desc: "Role-based training to reduce human risk.",
    highlights: [
      "Role-specific modules",
      "Interactive learning",
      "Compliance tracking"
    ],
  },
  {
    id: "compliance",
    title: "Compliance Support",
    category: "advisory",
    tag: "Advisory",
    desc: "ISO 27001, SOC 2, GDPR, HIPAA, PCI-DSS readiness.",
    highlights: [
      "Gap analysis",
      "Policy development",
      "Audit preparation"
    ],
  },
  {
    id: "training",
    title: "Security Training",
    category: "advisory",
    tag: "Advisory",
    desc: "Hands-on workshops for developers, blue teams, and executives, practical skills, not slide decks.",
    highlights: [
      "Role-specific curricula",
      "Lab-based exercises",
      "On-site or remote delivery"
    ],
  },
];

function Services() {
  const [category, setCategory] = useState<CategoryId>("all");
  const [selectedId, setSelectedId] = useState(services[0].id);

  const filtered = useMemo(
    () => (category === "all" ? services : services.filter((s) => s.category === category)),
    [category],
  );

  const selected = filtered.find((s) => s.id === selectedId) ?? filtered[0] ?? services[0];

  const selectCategory = (id: CategoryId) => {
    setCategory(id);
    const next = id === "all" ? services[0] : services.find((s) => s.category === id);
    if (next) setSelectedId(next.id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader variant="black" />

      <section className="bg-[#1a4d7a] py-7 md:py-9">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Comprehensive cybersecurity Services
            </h1>
            <p className="mt-4 text-base leading-relaxed text-blue-50/90 md:text-[0.95rem]">
              Defensive, offensive, and advisory services aligned to your risk posture.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#eef1f6] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 max-w-2xl text-slate-600">
            Filter by practice area, then select a service to read scope and deliverables. Every
            engagement is tailored to your environment.
          </p>

          <div className="mb-8 flex flex-wrap gap-2 border-b border-slate-300/80 pb-6">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => selectCategory(c.id)}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition",
                  category === c.id
                    ? "bg-[#007979] text-white"
                    : "bg-white text-slate-700 ring-1 ring-slate-300 hover:ring-slate-400",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-10">
            <ul className="grid list-none grid-cols-1 gap-2 auto-rows-min p-0 sm:grid-cols-2">
              {filtered.map((s) => {
                const isSelected = selected.id === s.id;
                return (
                  <li key={s.id} className="min-h-0">
                    <button
                      type="button"
                      onClick={() => setSelectedId(s.id)}
                      className={cn(
                        "h-auto w-full self-start rounded-lg border bg-white px-4 py-3.5 text-left transition",
                        isSelected
                          ? "border-[#007979] border-l-4 shadow-md"
                          : "border-slate-200 hover:border-slate-300 hover:shadow-sm",
                      )}
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-[#007979]">
                        {s.tag}
                      </span>
                      <span className="mt-1.5 block text-sm font-semibold leading-snug text-slate-900">
                        {s.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <article
              key={selected.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:min-h-[20rem] md:p-8"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-[#007979]">
                  {selected.tag}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">{selected.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{selected.desc}</p>
                <ul className="mt-6 space-y-2 border-t border-slate-100 pt-6">
                  {selected.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-slate-700">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#007979]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-[#007979] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#006868]"
              >
                Request this service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-white">Why choose InfosecDiaries?</h2>
              <p className="text-lg leading-relaxed text-slate-300">
                We combine deep technical expertise with practical, business-focused security
                solutions. Our team of certified professionals brings years of experience across
                multiple industries.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to secure your organization?</h3>
              <p className="mb-8 text-indigo-100">
                Get in touch with our security experts to discuss your specific needs and how we
                can help protect your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors duration-300"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter variant="darkGrey" />
    </div>
  );
}
