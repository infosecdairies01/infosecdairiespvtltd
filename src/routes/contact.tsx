import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { CheckCircle2, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { submitContact } from "@/lib/actions/submitContact";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact | InfoSecDiaries Pvt Ltd" },
      {
        name: "description",
        content:
          "Get in touch with InfoSecDiaries for penetration testing, SOC services and security consulting.",
      },
    ],
  }),
});

const dialCodes = [
  { v: "+91", l: "India (+91)" },
  { v: "+971", l: "UAE (+971)" },
  { v: "+1", l: "US (+1)" },
  { v: "+44", l: "UK (+44)" },
  { v: "+65", l: "Singapore (+65)" },
] as const;

function Contact() {
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const fd   = new FormData(form);

    try {
      const dialCode = (fd.get("dial") as string) ?? "";
      const phoneNum = (fd.get("phone") as string) ?? "";
      const fullPhone = phoneNum.trim() ? `${dialCode} ${phoneNum}`.trim() : undefined;

      await submitContact({
        data: {
          firstName: fd.get("firstName") as string,
          lastName:  fd.get("lastName")  as string,
          email:     fd.get("email")     as string,
          phone:     fullPhone,
          message:   fd.get("message")   as string,
        },
      });
      setSent(true);
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#e8ecf2] text-slate-900 antialiased">
      <SiteHeader variant="black" />
      <div
        className="h-px w-full shrink-0 bg-gradient-to-r from-transparent via-teal-400/35 to-transparent"
        aria-hidden
      />

      <main className="relative flex-1 pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute left-1/2 top-0 h-[70vh] w-[min(140%,56rem)] -translate-x-1/2 opacity-[0.45]"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in oklab, white 90%, transparent), transparent)",
            }}
          />
          <div
            className="absolute -right-32 top-1/3 h-80 w-80 rounded-full opacity-[0.12] blur-3xl"
            style={{
              background: "color-mix(in oklab, oklch(0.72 0.14 195) 40%, transparent)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 pt-12 sm:px-6 md:pt-16">
          <h1 className="text-center text-4xl font-bold tracking-[-0.04em] text-slate-800 sm:text-5xl md:text-[3.25rem] md:leading-[1.05]">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-center text-base font-normal leading-relaxed text-slate-900 sm:text-[17px] sm:leading-relaxed">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
          <div
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent"
            aria-hidden
          />

          <div className="relative mx-auto mt-10 md:mt-12">
            <div
              className="absolute -inset-[2px] rounded-[1.85rem] bg-gradient-to-br from-white via-slate-100/80 to-slate-300/60 opacity-90"
              aria-hidden
            />
            <div
              className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-teal-500/12 via-transparent to-cyan-500/10 opacity-70 blur-[1px]"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-slate-200/90 bg-white shadow-[0_36px_80px_-28px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.9)]">
              <div
                className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-teal-400/0 via-teal-400/25 to-cyan-400/0 opacity-60 md:block"
                aria-hidden
              />
              <div className="grid lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
                <div className="relative border-b border-slate-100/90 bg-[linear-gradient(180deg,#fafbfc_0%,#ffffff_45%)] p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Send us a message
                  </h2>

                  <form
                    className="mt-8 space-y-5"
                    onSubmit={handleSubmit}
                  >
                    {sent ? (
                      <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50/60 py-16 text-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_8px_30px_-8px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/80">
                          <CheckCircle2 className="h-9 w-9 text-emerald-600" strokeWidth={1.75} />
                        </span>
                        <p className="mt-6 text-lg font-semibold tracking-tight text-slate-900">
                          Thank you
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label
                              htmlFor="firstName"
                              className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900"
                            >
                              First name
                            </label>
                            <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              required
                              autoComplete="given-name"
                              placeholder="Enter your first name"
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none ring-slate-900/[0.04] ring-offset-0 transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-teal-500/15"
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="lastName"
                              className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900"
                            >
                              Last name
                            </label>
                            <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              required
                              autoComplete="family-name"
                              placeholder="Enter your last name"
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-teal-500/15"
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900"
                            >
                              Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              placeholder="name@company.com"
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-teal-500/15"
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="phone"
                              className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900"
                            >
                              Contact number
                            </label>
                            <div className="flex gap-2">
                              <select
                                name="dial"
                                defaultValue="+91"
                                className="w-[min(7.5rem,34%)] shrink-0 rounded-xl border border-slate-200 bg-white px-2 py-3 text-sm text-slate-800 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none focus:ring-2 focus:ring-teal-500/15"
                                aria-label="Country code"
                              >
                                {dialCodes.map((d) => (
                                  <option key={d.v} value={d.v}>
                                    {d.v}
                                  </option>
                                ))}
                              </select>
                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                inputMode="tel"
                                autoComplete="tel"
                                placeholder="00000 00000"
                                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-teal-500/15"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900"
                          >
                            Your message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Your message"
                            className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-900 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-teal-500/15"
                          />
                        </div>

                        {error && (
                          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                            {error}
                          </p>
                        )}

                        <div className="flex justify-end border-t border-slate-100/90 pt-6">
                          <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex items-center justify-center rounded-xl bg-[#0c2238] px-9 py-3.5 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(12,34,56,0.55)] transition hover:bg-[#0f2d4d] hover:shadow-[0_18px_44px_-14px_rgba(12,34,56,0.5)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c2238] disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {loading ? "Sending…" : "Send a Message"}
                          </button>
                        </div>
                      </>
                    )}
                  </form>
                </div>

                <div className="relative flex flex-col overflow-hidden bg-[#071525] p-8 text-white md:p-10 lg:p-12">
                  <div
                    className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle, color-mix(in oklab, oklch(0.75 0.12 195) 35%, transparent), transparent 70%)",
                    }}
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    }}
                    aria-hidden
                  />

                  <ul className="relative space-y-3">
                    <li>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=Contact@blueteamers.io"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-[2px] transition hover:border-teal-400/25 hover:bg-white/[0.07]"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-500/10 text-teal-200 ring-1 ring-white/10 transition group-hover:ring-teal-300/30">
                          <Mail className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span className="min-w-0">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Email
                          </span>
                          <span className="mt-1 block truncate text-sm font-semibold text-white">
                            Contact@blueteamers.io
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://maps.google.com/?q=Hyderabad+Telangana"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-[2px] transition hover:border-teal-400/25 hover:bg-white/[0.07]"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-500/10 text-teal-200 ring-1 ring-white/10 transition group-hover:ring-teal-300/30">
                          <MapPin className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span className="min-w-0">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Headquarters
                          </span>
                          <span className="mt-1 block text-sm font-semibold text-white">
                            Hyderabad, Telangana
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>

                  <div className="relative mt-10 border-t border-white/[0.08] pt-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Connect
                    </p>
                    <div className="mt-4 flex gap-3">
                      <a
                        href="https://www.linkedin.com/company/infosecdairies/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:scale-105 hover:border-teal-400/35 hover:text-white"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" strokeWidth={1.75} />
                      </a>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=Contact@blueteamers.io"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:scale-105 hover:border-teal-400/35 hover:text-white"
                        aria-label="Gmail"
                      >
                        <Mail className="h-5 w-5" strokeWidth={1.75} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter variant="darkGrey" />
    </div>
  );
}
