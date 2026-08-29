import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight, ArrowRight, Sparkles, Layout, Smartphone,
  MonitorSmartphone, Compass, Search, PenTool, Rocket, Package,
  Fingerprint, Component, Star, Instagram, Linkedin, Send, Mail,
  MapPin, MessageCircle, Plus, ChevronDown,
  Brain, Ruler, TrendingUp, Gem, Boxes, Zap, Layers,
} from "lucide-react";
import { PhotoshopIcon, IllustratorIcon, AfterEffectsIcon, CorelDrawIcon, FigmaIcon } from "@/components/BrandIcons";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MATIQ Design — UI/UX, Branding & Packaging Designer" },
      { name: "description", content: "MATIQ Design by Matadar Yahya — independent UI/UX, branding, packaging and graphic designer helping businesses create premium digital and visual experiences." },
      { property: "og:title", content: "MATIQ Design — UI/UX, Branding & Packaging Designer" },
      { property: "og:description", content: "MATIQ Design by Matadar Yahya — independent UI/UX, branding, packaging and graphic designer helping businesses create premium digital and visual experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP = "https://wa.me/916356349066";
const EMAIL = "matiqdesign0@gmail.com";

const BehanceIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7.4 5.5c1.2 0 2.2.2 2.9.5.7.3 1.2.9 1.5 1.7.2.5.3 1 .3 1.6 0 .7-.2 1.2-.5 1.7-.3.4-.8.8-1.4 1.1.8.2 1.5.6 1.9 1.2.4.6.6 1.3.6 2.1 0 .7-.1 1.3-.4 1.9-.3.5-.7 1-1.2 1.3-.5.3-1.1.6-1.7.7-.6.1-1.3.2-2 .2H1V5.5h6.4zm-.3 5.4c.6 0 1.1-.1 1.4-.4.4-.3.5-.7.5-1.2 0-.3-.1-.6-.2-.8-.1-.2-.3-.3-.5-.5-.2-.1-.4-.2-.7-.2-.3 0-.6-.1-.9-.1H3.9v3.2h3.2zm.2 5.7c.3 0 .6 0 .9-.1.3-.1.5-.1.7-.3.2-.1.4-.3.5-.6.1-.2.2-.6.2-.9 0-.7-.2-1.2-.6-1.5-.4-.3-.9-.4-1.6-.4H3.9v3.8h3.4zm11.4-.1c.4.4 1 .6 1.7.6.5 0 1-.1 1.4-.4.4-.3.6-.5.7-.8h2.4c-.4 1.2-1 2-1.8 2.5-.8.5-1.8.8-2.9.8-.8 0-1.5-.1-2.1-.4-.6-.2-1.2-.6-1.6-1.1-.4-.5-.8-1-1-1.6-.2-.6-.4-1.3-.4-2.1 0-.7.1-1.4.4-2.1.2-.6.6-1.2 1-1.7.5-.5 1-.8 1.6-1.1.6-.3 1.3-.4 2.1-.4.9 0 1.6.2 2.2.5.6.3 1.2.8 1.6 1.3.4.6.7 1.2.9 2 .1.7.2 1.5.2 2.4h-6.9c0 .8.3 1.5.7 1.9zm3-5.1c-.3-.4-.9-.6-1.5-.6-.4 0-.8.1-1.1.2-.3.1-.5.3-.7.5-.2.2-.3.5-.4.7-.1.2-.1.4-.1.6h4.2c-.1-.7-.3-1.1-.7-1.4zM15.8 6.4h5.4v1.3h-5.4V6.4z"/>
  </svg>
);

const SOCIALS: { Icon: React.ComponentType<{ size?: number }>; href: string; label: string }[] = [
  { Icon: BehanceIcon, href: "https://www.behance.net/yahyamatadar1", label: "Behance" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/yahya-matadar-48a159353", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/everdeen_creative_studio", label: "Instagram" },
];

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(20px)", transition: `opacity .8s cubic-bezier(.2,.8,.2,1) ${delay}ms, transform .8s cubic-bezier(.2,.8,.2,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`inline-flex items-center group ${className}`} aria-label="MATIQ Design — home">
      <img
        src={"/matiq-logo.png"}
        alt="MATIQ Design — Branding, UI/UX, Graphics"
        width={1623}
        height={576}
        decoding="async"
        className="block h-12 w-auto object-contain sm:h-14 lg:h-16"
      />
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5 ${scrolled ? "glass" : ""}`}>
          <Logo />
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
              {NAV.map(n => (
                <a key={n.label} href={n.href} className="relative rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 group">
                  {n.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-primary-glow transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_rgba(111,155,208,0.3)] transition-all hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(111,155,208,0.55)]">
              Let's Talk <ArrowUpRight size={16} />
            </a>
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border border-border transition-colors hover:border-primary/50"
            >
              <Plus size={18} className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
            </button>
          </div>
        </div>
        {open && (
          <nav className="lg:hidden mt-2 glass rounded-2xl p-3 flex flex-col gap-1 animate-reveal" aria-label="Mobile">
            {NAV.map(n => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">{n.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-1 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-3 py-3 text-center text-sm font-semibold text-primary-foreground">Let's Talk</a>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24 overflow-hidden sm:pt-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[150px] animate-float-slow" />
        <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-primary-glow/20 blur-[150px] animate-float" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                <Sparkles size={13} className="text-primary" /> Independent Designer • Available for work
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-8 font-display text-[2.5rem] font-bold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[4.5rem]">
                I Design <span className="gradient-text">Digital Products</span> &amp; <span className="gradient-text">Brands</span> That Feel <span className="gradient-text">Premium</span>.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I'm Matadar Yahya, an independent UI/UX, Packaging and Brand Identity Designer helping startups and businesses turn ideas into clear, memorable experiences.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a href="#work" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-glow px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[0_20px_60px_-20px_rgba(111,155,208,0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_24px_70px_-18px_rgba(111,155,208,0.75)]">
                  View My Work <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-border px-6 py-4 text-sm font-semibold transition-all hover:border-primary/50 hover:bg-white/5">
                  Let's Talk <ArrowUpRight size={16} className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={420}>
              <dl className="mt-16 grid max-w-md grid-cols-2 gap-8 border-t border-border pt-8">
                {[["25+", "Projects completed"], ["6", "Design specializations"]].map(([n, t]) => (
                  <div key={t}>
                    <dt className="sr-only">{t}</dt>
                    <dd>
                      <span className="block font-display text-3xl font-bold tracking-tight">{n}</span>
                      <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-muted-foreground">{t}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={180}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/30 via-primary-glow/15 to-transparent blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface shadow-[0_40px_120px_-40px_rgba(111,155,208,0.5)]">
                  <img src={"/pghub-cover.webp"} alt="PGHub — PG finder and booking app UI/UX case study by Matadar Yahya" width={1600} height={1200} fetchPriority="high" className="h-auto w-full" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                <div className="absolute -left-4 bottom-6 hidden glass rounded-2xl p-4 shadow-2xl md:block">
                  <div className="flex items-center gap-1 text-primary">
                    <Star size={12} fill="currentColor" />
                    <span className="text-[10px] uppercase tracking-[0.22em]">Featured</span>
                  </div>
                  <div className="mt-2 text-sm font-semibold">PGHub — UX Case Study</div>
                  <div className="text-xs text-muted-foreground">UI/UX · Mobile App</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={600}>
          <a href="#about" className="mx-auto mt-20 hidden w-fit flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground lg:flex">
            Scroll
            <span className="grid h-9 w-9 place-items-center rounded-full border border-border">
              <ChevronDown size={14} className="animate-bounce text-primary" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc, center = false }: { eyebrow: string; title: ReactNode; desc?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <span className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-primary ${center ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-primary" /> {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-5xl">{title}</h2>
      </Reveal>
      {desc && <Reveal delay={160}><p className={`mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{desc}</p></Reveal>}
    </div>
  );
}

function About() {
  const stats = [
    { n: "3+", t: "Years Designing" },
    { n: "25+", t: "Projects Completed" },
    { n: "6", t: "Design Specializations" },
  ];
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <div>
            <SectionHeader eyebrow="About Me" title={<>An independent designer obsessed with <span className="gradient-text">craft</span>.</>} />
            <Reveal delay={180}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  I started with a sketchbook and a stubborn belief that good design should do more than look nice — it should move a business forward. Today I work one-to-one with founders and teams, designing digital products, packaging and brand identities from the first sketch to the final pixel.
                </p>
                <p>
                  Working independently means you talk to the person doing the work. No handoffs, no account managers — just clear thinking, honest timelines, and a relentless eye for detail on every deliverable.
                </p>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <dl className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map(s => (
                  <div key={s.t} className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <dt className="sr-only">{s.t}</dt>
                    <dd>
                      <span className="block font-display text-4xl font-bold gradient-text">{s.n}</span>
                      <span className="mt-2 block text-sm text-muted-foreground">{s.t}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-tr from-primary/25 via-transparent to-primary-glow/15 blur-3xl" />
              <figure className="relative rounded-[24px] border border-border bg-surface p-4">
                <div className="relative aspect-square overflow-hidden rounded-[16px]">
                  <img
                    src={"/matadar-yahya.webp"}
                    alt="Portrait of Matadar Yahya, independent UI/UX and packaging designer"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="px-2 pb-2 pt-6 text-center">
                  <div className="font-display text-2xl font-semibold tracking-tight">Matadar Yahya</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    UI/UX · Packaging · Brand Identity
                  </div>
                  <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <MapPin size={13} className="text-primary" /> Bharuch, Gujarat · Working worldwide
                  </div>
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Layout, title: "UI/UX Design", desc: "Product interfaces engineered for clarity, flow and conversion — from wireframe to polished hi-fi." },
  { icon: Package, title: "Packaging Design", desc: "Shelf-ready packaging with premium typography, print-perfect dielines and unmistakable presence." },
  { icon: Fingerprint, title: "Brand Identity", desc: "Logos, visual systems and guidelines that make a brand instantly recognisable and consistent." },
  { icon: MonitorSmartphone, title: "Website Design", desc: "Responsive marketing sites and landing pages built around a single, measurable business goal." },
  { icon: Smartphone, title: "Mobile App Design", desc: "iOS and Android experiences with intuitive interaction models and accessible, tested flows." },
  { icon: Component, title: "Design Systems", desc: "Scalable component libraries, tokens and documentation your team can actually build with." },
];

function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-96 bg-gradient-to-r from-primary/8 via-transparent to-primary-glow/8 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Services" title={<>What I can <span className="gradient-text">design</span> for you.</>} desc="Focused design specializations covering the surfaces where your brand meets its customer." />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 70}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_30px_80px_-40px_rgba(111,155,208,0.55)]">
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-primary-glow/5 text-primary transition-all duration-500 group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-[0_0_28px_rgba(111,155,208,0.35)]">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                    Enquire <ArrowRight size={13} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

type Work = {
  category: string;
  title: string;
  desc: string;
  image?: string;
  href?: string;
  cta: string;
  challenge: string;
  solution: string;
  outcome: string;
  tools: string;
  role: string;
};

const WORKS: Work[] = [
  {
    category: "UI/UX Design · UX Case Study",
    title: "PGHub — Modern PG Finder & Booking App",
    desc: "A complete UX case study for a PG discovery and booking app for students and working professionals.",
    image: "/pghub-cover.webp",
    href: "https://www.behance.net/gallery/253307339/PGHub-Modern-PG-Finder-Booking-App-UIUX-Case-Study",
    cta: "View Case Study",
    challenge: "Finding verified PG accommodation meant scattered listings, no trust signals and no way to compare options fairly.",
    solution: "The full Design Thinking process — research, competitive analysis, personas, flows, wireframes, a design system and hi-fi prototypes.",
    outcome: "A validated end-to-end booking journey with verified listings, side-by-side comparison and a reusable design system.",
    tools: "Figma, FigJam, Design System, Prototype",
    role: "UX Research, UI Design & Prototyping",
  },
  {
    category: "Graphic Design · Print",
    title: "Chhatral Environment Brochure Design",
    desc: "A corporate brochure for Chhatral Environment Management System Pvt. Ltd., built on hierarchy and print-ready precision.",
    image: "/chhatral-brochure.webp",
    href: "https://www.behance.net/gallery/235108263/Chhatral-Environment-Brochure-Design/modules/1350645015",
    cta: "View on Behance",
    challenge: "Dense technical and environmental information had to feel credible and effortless to scan for corporate stakeholders.",
    solution: "A structured editorial grid, disciplined typography and eco-led colour, with layouts prepared for professional print.",
    outcome: "A brochure that communicates authority at a glance and reproduces cleanly across the full print run.",
    tools: "InDesign, Illustrator, Photoshop",
    role: "Editorial & Print Design",
  },
  {
    category: "Brand Identity · Logo Design",
    title: "Brand Design",
    image: "/brand-design.webp",
    desc: "A branding and logo design project built around a clear identity system, crafted end to end in Adobe Illustrator.",
    href: "https://www.behance.net/gallery/220623491/Brand-Design",
    cta: "View Case Study",
    challenge: "The brand needed a mark and identity that stayed recognisable across every size and surface it would appear on.",
    solution: "Concept exploration, mark refinement and a consistent identity system of type, colour and logo lockups.",
    outcome: "A clean, distinctive brand identity ready for print and digital application.",
    tools: "Adobe Illustrator",
    role: "Brand Identity & Logo Design",
  },
];

function WorkCard({ w }: { w: Work }) {
  const meta = [
    { k: "Challenge", v: w.challenge },
    { k: "Solution", v: w.solution },
    { k: "Outcome", v: w.outcome },
  ];
  const cta = w.href ? (
    <a
      href={w.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${w.title} — ${w.cta} (opens in a new tab)`}
      className="group/cta inline-flex items-center gap-3 rounded-full border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      {w.cta}
      <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/cta:rotate-45" />
    </a>
  ) : (
    <span className="inline-flex items-center gap-3 rounded-full border border-dashed border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
      {w.cta}
    </span>
  );

  return (
    <article className="group overflow-hidden rounded-[24px] border border-border bg-surface p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_36px_90px_-45px_rgba(111,155,208,0.6)] sm:p-6">
      <div className="grid items-start gap-6 lg:grid-cols-[44%_1fr] lg:gap-10">
        <div className="relative overflow-hidden rounded-[18px] bg-[#F2F2F2]">
          <div className="aspect-[16/10] w-full">
            {w.image ? (
              <img
                src={w.image}
                alt={w.title}
                loading="lazy"
                width={1600}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <div className="grid h-full w-full place-items-center bg-[#F2F2F2] text-[10px] uppercase tracking-[0.28em] text-[#8A8A8A]">
                {w.title}
              </div>
            )}
          </div>
        </div>

        <div className="flex min-w-0 flex-col">
          <div className="text-[10px] uppercase tracking-[0.28em] text-primary">{w.category}</div>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-[1.1] tracking-tight lg:text-[32px]">{w.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{w.desc}</p>

          <dl className="mt-6 space-y-3 border-t border-border pt-6">
            {meta.map(({ k, v }) => (
              <div key={k} className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
                <dt className="text-[10px] uppercase tracking-[0.2em] text-foreground/70">{k}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <div className="min-w-0 space-y-1">
              <div className="text-xs text-muted-foreground"><span className="text-foreground/70">Role:</span> {w.role}</div>
              <div className="text-xs text-muted-foreground"><span className="text-foreground/70">Tools:</span> {w.tools}</div>
            </div>
            {cta}
          </div>
        </div>
      </div>
    </article>
  );
}

function WorkSection() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Selected Projects"
          title={<>Work that solved a <span className="gradient-text">real</span> problem.</>}
          desc="Selected projects, each with the thinking behind them — the challenge, the decision, and what came out the other side."
        />
        <div className="mt-16 grid gap-6">
          {WORKS.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <WorkCard w={w} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TOOLS = [
  { Icon: PhotoshopIcon, name: "Adobe Photoshop" },
  { Icon: IllustratorIcon, name: "Adobe Illustrator" },
  { Icon: AfterEffectsIcon, name: "Adobe After Effects" },
  { Icon: CorelDrawIcon, name: "CorelDRAW" },
  { Icon: FigmaIcon, name: "Figma" },
];

function Tools() {
  return (
    <section id="tools" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader center eyebrow="Tools I Use" title={<>Tools behind the <span className="gradient-text">craft</span>.</>} desc="A focused toolkit for digital products, visual design and production-ready creative work." />
        <ul className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {TOOLS.map(({ Icon, name }, i) => (
            <li key={name}>
              <Reveal delay={i * 70}>
                <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_28px_70px_-45px_rgba(111,155,208,0.6)]">
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon size={40} />
                  </span>
                  <span className="text-sm font-medium leading-snug">{name}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Discover", d: "Goals, audience and competitive landscape — before a single pixel.", icon: Search },
  { n: "02", t: "Strategize", d: "Positioning, structure and the creative direction we'll commit to.", icon: Compass },
  { n: "03", t: "Design", d: "Wireframes into a polished visual system and interactive prototypes.", icon: PenTool },
  { n: "04", t: "Refine", d: "Feedback, testing and detail passes until every edge is deliberate.", icon: Ruler },
  { n: "05", t: "Deliver", d: "Handoff files, print-ready assets and support after launch.", icon: Rocket },
];

function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Process" title={<>A clear, <span className="gradient-text">deliberate</span> process.</>} desc="Five steps that keep quality high, feedback tight and timelines honest." />
        <div className="relative mt-16">
          <div className="absolute inset-x-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {STEPS.map(({ n, t, d, icon: Icon }, i) => (
              <li key={n}>
                <Reveal delay={i * 110}>
                  <div className="group relative lg:text-center">
                    <div className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl border border-primary/25 bg-surface text-primary transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_rgba(111,155,208,0.4)] lg:mx-auto">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>
                    <div className="mt-6">
                      <div className="font-display text-[11px] tracking-[0.3em] text-primary">{n}</div>
                      <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">{t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: Brain, t: "Strategic Thinking", d: "Every decision traces back to a business goal, not a personal preference." },
  { icon: Gem, t: "Pixel Perfect Execution", d: "Grids, spacing and type are held to the same standard on every screen and surface." },
  { icon: TrendingUp, t: "Business Focus", d: "Design measured by conversion, clarity and how easily your team can ship it." },
  { icon: Layers, t: "Premium UI", d: "Restrained, modern interfaces that feel expensive without shouting about it." },
  { icon: Boxes, t: "Packaging Expertise", d: "Print-ready dielines, foil and finish decisions handled end to end." },
  { icon: Zap, t: "Fast Communication", d: "You talk to the designer. Replies in hours, not days, throughout the project." },
];

function WhyMe() {
  return (
    <section id="why" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader center eyebrow="Why Work With Me" title={<>Six reasons clients <span className="gradient-text">stay</span>.</>} desc="No agency overhead, no diluted craft — just a designer accountable for the outcome." />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 70}>
              <article className="group h-full rounded-3xl border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_30px_80px_-45px_rgba(111,155,208,0.55)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-500 group-hover:shadow-[0_0_26px_rgba(111,155,208,0.35)]">
                  <Icon size={18} strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">{t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "What does a typical project timeline look like?", a: "Most projects run 2–6 weeks depending on scope. You get a clear roadmap on day one and an update at the end of every milestone." },
  { q: "Do you work with early-stage startups?", a: "Often. Early-stage work is where good design compounds the most — the only requirement is that you care about the details as much as I do." },
  { q: "Can you handle packaging and print production files?", a: "Yes. Dielines, bleed, colour profiles and print-ready exports are part of every packaging and print engagement." },
  { q: "How do we get started?", a: "Send a short brief through the form or message me on WhatsApp. You'll get a reply within one business day with next steps and a quote." },
  { q: "Do you work with international clients?", a: "Yes — I work remotely with clients across time zones, with async updates and scheduled calls that fit your working hours." },
  { q: "What do you need from me to start a project?", a: "A brief overview of your business, goals, audience, required deliverables and timeline is enough to begin the conversation." },
  { q: "Do you offer revisions?", a: "Yes. Revisions are included according to the agreed project scope and are handled through a structured feedback process." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
        <div>
          <SectionHeader eyebrow="FAQ" title={<>Answers to common <span className="gradient-text">questions</span>.</>} desc="Something not covered here? Message me — I usually reply within a few hours." />
        </div>
        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className={`rounded-2xl border bg-surface transition-all duration-300 ${isOpen ? "border-primary/40 shadow-[0_24px_70px_-50px_rgba(111,155,208,0.7)]" : "border-border hover:border-primary/25"}`}>
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-2xl"
                    >
                      <span className="font-display text-base font-semibold tracking-tight sm:text-lg">{f.q}</span>
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-primary transition-all duration-300 ${isOpen ? "rotate-45 bg-primary text-primary-foreground" : "bg-primary/12"}`}>
                        <Plus size={15} />
                      </span>
                    </button>
                  </h3>
                  <div className={`grid px-6 transition-[grid-template-rows,opacity,padding] duration-500 ease-out ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] pb-0 opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const CONTACT_LINKS = [
  { Icon: MessageCircle, label: "WhatsApp", value: "Message on WhatsApp", href: WHATSAPP, external: true },
  { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { Icon: BehanceIcon, label: "Behance", value: "behance.net/yahyamatadar1", href: "https://www.behance.net/yahyamatadar1", external: true },
  { Icon: Linkedin, label: "LinkedIn", value: "Yahya Matadar", href: "https://www.linkedin.com/in/yahya-matadar-48a159353", external: true },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-surface via-background to-surface" />
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[150px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary-glow/15 blur-[150px]" />
          <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-[0.9fr_1fr] lg:gap-16 lg:p-16">
            <div>
              <SectionHeader eyebrow="Contact" title={<>Let's build something <span className="gradient-text">worth</span> shipping.</>} />
              <p className="mt-6 text-base text-muted-foreground sm:text-lg">Tell me about your project — I reply within one business day.</p>

              <Reveal delay={120}>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-glow px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[0_20px_60px_-24px_rgba(111,155,208,0.7)] transition-all hover:scale-[1.02]">
                  <MessageCircle size={16} /> Message me on WhatsApp
                </a>
              </Reveal>

              <ul className="mt-10 space-y-3">
                {CONTACT_LINKS.map(({ Icon, label, value, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      aria-label={`${label}: ${value}`}
                      className="group flex items-center gap-4 rounded-2xl border border-transparent px-3 py-3 transition-all hover:border-border hover:bg-white/[0.03]"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon size={17} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
                        <span className="block truncate text-sm text-foreground">{value}</span>
                      </span>
                      <ArrowUpRight size={15} className="ml-auto shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-4 px-3 py-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary"><MapPin size={17} /></span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Based in</span>
                    <span className="block text-sm text-foreground">Bharuch, Gujarat, India</span>
                  </span>
                </li>
              </ul>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="glass rounded-3xl p-6 sm:p-8">
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Jane Doe" required />
                  <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone" name="phone" placeholder="Optional" />
                  <SelectField label="Service" name="service" options={["UI/UX Design", "Packaging Design", "Brand Identity", "Website Design", "Mobile App Design", "Design Systems"]} />
                </div>
                <SelectField label="Budget" name="budget" options={["Under ₹5,000", "₹5,000 – ₹15,000", "₹15,000 – ₹30,000", "₹30,000 – ₹50,000", "₹50,000+"]} />
                <div>
                  <label htmlFor="message" className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Project details</label>
                  <textarea id="message" name="message" rows={4} placeholder="What are you building, and what does success look like?" className="mt-2.5 w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30" />
                </div>
                <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-glow px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[0_20px_60px_-24px_rgba(111,155,208,0.7)] transition-all hover:scale-[1.01]">
                  {sent ? "Message sent — talk soon!" : (<>Send message <Send size={14} className="transition-transform group-hover:translate-x-0.5" /></>)}
                </button>
                <p className="text-center text-xs text-muted-foreground">Prefer email? <a href={`mailto:${EMAIL}`} className="text-primary underline-offset-4 hover:underline">{EMAIL}</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} className="mt-2.5 w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30" />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <select id={name} name={name} className="mt-2.5 w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30">
        <option value="">Select {label.toLowerCase()}</option>
        {options.map(o => <option key={o} value={o} className="bg-background">{o}</option>)}
      </select>
    </div>
  );
}

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const FOOTER_SOCIALS = [
  ...SOCIALS,
  { Icon: MessageCircle, href: WHATSAPP, label: "WhatsApp" },
];

function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <Logo />
            <p className="mt-6 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Branding • UI/UX • Graphics</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Independent designer creating thoughtful digital experiences, brands and visual systems.
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:items-end">
            <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
              {FOOTER_LINKS.map(l => (
                <a key={l.label} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>
              ))}
            </nav>
            <div className="flex gap-2">
              {FOOTER_SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} MATIQ Design · Matadar Yahya</div>
          <div>Designed & built with care in Bharuch, India.</div>
        </div>
      </div>
    </footer>
  );
}

function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let rx = 0, ry = 0, x = 0, y = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; if (dot.current) dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`; };
    const loop = () => { rx += (x - rx) * 0.15; ry += (y - ry) * 0.15; if (ring.current) ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`; raf = requestAnimationFrame(loop); };
    let raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div ref={ring} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-9 w-9 rounded-full border border-primary/60 mix-blend-difference md:block" />
      <div ref={dot} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 rounded-full bg-primary md:block" />
    </>
  );
}

function Index() {
  return (
    <div className="relative overflow-x-clip bg-background text-foreground">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WorkSection />
        <Process />
        <Tools />
        <WhyMe />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
