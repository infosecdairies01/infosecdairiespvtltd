import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ArrowRight, ShieldCheck, Users, Beaker, BookOpen, Target, Layers } from "lucide-react";

export const Route = createFileRoute("/product")({
  component: Platforms,
  head: () => ({
    meta: [
      { title: "Platforms | MySocLabs & BlueTeamers | InfoSecDiaries" },
      { name: "description", content: "Discover MySocLabs and BlueTeamers, InfoSecDiaries' platforms for SOC analyst training and the defensive security community." },
      { property: "og:title", content: "Platforms | MySocLabs & BlueTeamers" },
      { property: "og:description", content: "Training and community platforms for the next generation of cyber defenders." },
    ],
  }),
});

const platforms = [
  {
    name: "MySocLabs",
    visitUrl: "https://www.mysoclabs.com/",
    tag: "Service",
    blurb:
      "Protect your business with our cybersecurity and artificial intelligence expertise. Tailor-made solutions to secure your digital future.",
    features: [
      { icon: Beaker, t: "Realistic attack scenarios", d: "Curated incidents mapped to MITRE ATT&CK techniques." },
      { icon: ShieldCheck, t: "Detection engineering", d: "Write, tune and test detections inside live SIEM environments." },
      { icon: Target, t: "Role-based learning paths", d: "Structured tracks for L1, L2 and L3 SOC analysts." },
    ],
  },
  {
    name: "BlueTeamers",
    visitUrl: "https://www.infosecdairies.io/",
    tag: "Training",
    blurb:
      "Hands-on Blue Team & SOC Training. Learn Detection, Threat Hunting, and Incident Response from Real Practitioners.",
    features: [
      { icon: Users, t: "Practitioner community", d: "Connect with SOC engineers, threat hunters and DFIR responders." },
      { icon: BookOpen, t: "Defender content library", d: "Playbooks, write-ups and curated resources for blue teams." },
      { icon: Layers, t: "Career pathways", d: "Roadmaps from beginner to senior defensive security roles." },
    ],
  },
];

function Platforms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader variant="black" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-3">
              Two platforms powering the next generation of cyber defenders
            </h1>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              <span className="font-semibold text-white">MySocLabs</span> delivers cybersecurity and
              AI expertise with solutions tailored to your digital future.{" "}
              <span className="font-semibold text-white">BlueTeamers</span> offers hands-on Blue Team
              & SOC training in detection, threat hunting, and incident response.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-emerald-200"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-px bg-emerald-500" />

                <div className="relative p-10">
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-emerald-50 rounded-full mb-4">
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                        {platform.tag}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                      {platform.name}
                    </h2>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    {platform.blurb}
                  </p>

                  {platform.visitUrl ? (
                    <a
                      href={platform.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors duration-300"
                    >
                      Visit site
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform -rotate-45" />
                    </a>
                  ) : (
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors duration-300"
                    >
                      Visit site
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform -rotate-45" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interested in partnering with our platforms?
          </h2>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Whether you're a learner, an enterprise looking to upskill your SOC, or a partner, we'd love to talk.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-colors duration-300"
          >
            Contact us
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <SiteFooter variant="darkGrey" />
    </div>
  );
}

