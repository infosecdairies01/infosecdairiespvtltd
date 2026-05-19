import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/product", label: "Product" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader({ variant = "default" }: { variant?: "default" | "light" | "black" }) {
  const [open, setOpen] = useState(false);
  const light = variant === "light";
  const black = variant === "black";
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b",
        black && "border-neutral-800 bg-neutral-900 shadow-[0_1px_0_rgba(255,255,255,0.06)]",
        !black &&
          cn(
            light
              ? "border-neutral-200/90 bg-white/85 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-xl"
              : "border-neutral-800 bg-neutral-900 shadow-[0_1px_0_rgba(255,255,255,0.06)]",
          ),
      )}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="InfoSecDiaries" className="h-9 w-9 transition" />
          <div className="leading-tight">
            <div
              className={cn(
                "font-bold text-sm tracking-tight",
                light ? "text-neutral-900" : "text-white",
              )}
            >
              InfosecDiaries
            </div>
            <div
              className={cn(
                "text-[10px] font-mono uppercase tracking-widest",
                (black || (!black && !light)) && "text-neutral-500",
                light && "text-neutral-500",
              )}
            >
              Pvt Ltd
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-sm transition",
                (black || (!black && !light)) && "text-neutral-400 hover:text-white",
                light && "text-neutral-600 hover:text-neutral-900",
              )}
              activeProps={{
                className:
                  black || (!black && !light)
                    ? "text-white font-medium"
                    : light
                      ? "text-neutral-900 font-medium"
                      : "text-foreground font-medium",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "text-sm font-medium px-4 py-2 rounded-md bg-gradient-brand text-primary-foreground hover:opacity-90 transition",
              black ? "shadow-[0_0_24px_-4px_rgba(52,211,153,0.45)]" : "glow",
            )}
          >
            Get a Quote
          </Link>
        </nav>
        <button
          className={cn(
            "md:hidden",
            (black || (!black && !light)) && "text-white",
            light && "text-neutral-900",
          )}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div
          className={cn(
            "md:hidden border-t",
            black && "border-neutral-800 bg-neutral-900",
            light && "border-neutral-200 bg-white/98",
            !black && !light && "border-neutral-800 bg-neutral-900",
          )}
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "text-sm",
                  black && "text-neutral-300 hover:text-white",
                  light && "text-neutral-600",
                  !black && !light && "text-neutral-300 hover:text-white",
                )}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter({
  variant = "default",
}: {
  variant?: "default" | "light" | "darkGrey";
}) {
  const light = variant === "light";
  const darkGrey = variant === "darkGrey";
  return (
    <footer
      className={cn(
        "mt-24 border-t",
        light && "border-neutral-200 bg-neutral-50/80",
        darkGrey && "border-neutral-800 bg-neutral-900 text-neutral-300",
        !light && !darkGrey && "border-border",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" className="h-8 w-8" />
            <div
              className={cn(
                "font-bold",
                light && "text-neutral-900",
                darkGrey && "text-neutral-100",
              )}
            >
              <span className="text-gradient">Infosec</span>
              <span className={cn(light && "text-neutral-900", darkGrey && "text-neutral-200")}>
                Diaries Pvt Ltd
              </span>
            </div>
          </div>
         
        </div>
        <div>
          <div
            className={cn(
              "text-sm font-semibold mb-3",
              light && "text-neutral-900",
              darkGrey && "text-neutral-100",
            )}
          >
            Company
          </div>
          <ul
            className={cn(
              "space-y-2 text-sm",
              light && "text-neutral-600",
              darkGrey && "text-neutral-400",
              !light && !darkGrey && "text-muted-foreground",
            )}
          >
            <li>
              <Link
                to="/about"
                className={cn(
                  light && "hover:text-neutral-900",
                  darkGrey && "hover:text-white",
                  !light && !darkGrey && "hover:text-foreground",
                )}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={cn(
                  light && "hover:text-neutral-900",
                  darkGrey && "hover:text-white",
                  !light && !darkGrey && "hover:text-foreground",
                )}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className={cn(
                  light && "hover:text-neutral-900",
                  darkGrey && "hover:text-white",
                  !light && !darkGrey && "hover:text-foreground",
                )}
              >
                Product
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div
            className={cn(
              "text-sm font-semibold mb-3",
              light && "text-neutral-900",
              darkGrey && "text-neutral-100",
            )}
          >
            Contact
          </div>
          <ul
            className={cn(
              "space-y-2 text-sm font-mono",
              light && "text-neutral-600",
              darkGrey && "text-neutral-400",
              !light && !darkGrey && "text-muted-foreground",
            )}
          >
            <li>
              <a
                href="mailto:Contact@blueteamers.io"
                className={cn(
                  "hover:underline",
                  light && "hover:text-neutral-900",
                  darkGrey && "hover:text-white",
                  !light && !darkGrey && "hover:text-foreground",
                )}
              >
                Contact@blueteamers.io
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <div
        className={cn(
          "border-t",
          light && "border-neutral-200",
          darkGrey && "border-neutral-800 bg-neutral-950/50",
          !light && !darkGrey && "border-border",
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl px-6 py-5 text-xs flex justify-between font-mono",
            light && "text-neutral-500",
            darkGrey && "text-neutral-500",
            !light && !darkGrey && "text-muted-foreground",
          )}
        >
          <span>© {new Date().getFullYear()} InfoSecDiaries Private Limited. All rights reserved</span>
          
        </div>
      </div>
    </footer>
  );
}
