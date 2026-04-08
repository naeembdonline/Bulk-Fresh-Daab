"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Menu,
  TreePine,
  Gem,
  Package,
  Truck,
  ShieldCheck,
  Sprout,
  Scissors,
  CheckCircle2,
  Send,
  ArrowRight,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

/* ───────────────────────────────────────────
   ANIMATION HELPERS
   ─────────────────────────────────────────── */

function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ScaleIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────────────────────────
   NAVBAR
   ─────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Super Shops", href: "#super-shops" },
    { label: "Corporate Events", href: "#corporates" },
    { label: "Why Narkel", href: "#why-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[#D4A017] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white text-xs font-bold">N</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold tracking-[0.18em] text-[#1A3C34]">
              NARKEL
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium tracking-wide text-[#2C2C2C]/70 hover:text-[#1A3C34] transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#1A3C34] hover:bg-[#142e28] text-white rounded-full px-7 text-[13px] font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-300 h-10"
            >
              <a href="#quote-form">Get Bulk Quote</a>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`${scrolled ? "text-[#1A3C34]" : "text-white"}`}
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 pt-16">
              <SheetHeader>
                <SheetTitle className="text-[#1A3C34] tracking-[0.18em] text-lg font-bold">
                  NARKEL
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 mt-10">
                {links.map((l) => (
                  <SheetClose key={l.href} asChild>
                    <a
                      href={l.href}
                      className="text-base font-medium text-[#2C2C2C]/70 hover:text-[#1A3C34] py-3 px-2 rounded-lg hover:bg-[#F5F0E8]/50 transition-all"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    asChild
                    className="mt-6 bg-[#1A3C34] hover:bg-[#142e28] text-white rounded-full w-full font-semibold h-11"
                  >
                    <a href="#quote-form">Get Bulk Quote</a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/* ───────────────────────────────────────────
   HERO SECTION
   ─────────────────────────────────────────── */

function HeroSection() {
  const trustBadges = [
    { icon: Sprout, text: "From Our Farms" },
    { icon: Gem, text: "Premium Diamond Cut Packaging" },
    { icon: Package, text: "Flexible Bulk (12 to 5000+ pcs)" },
    { icon: Truck, text: "Same Day Dhaka Delivery" },
  ];

  const WHATSAPP_URL =
    "https://wa.me/8801XXXXXXXXX?text=Hi%20Narkel,%20I%20need%20bulk%20fresh%20daab%20for%20my%20shop/event.%20Quantity%3A";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1A3C34]"
    >
      {/* ── Background image + overlay ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-daab.png"
          alt="Premium packaged diamond-cut fresh daab with plastic wrap and straw in cardboard box – bulk supply Bangladesh"
          fill
          className="object-cover object-center opacity-[0.35]"
          priority
          sizes="100vw"
        />
        {/* Subtle green gradient – 30-40% opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3C34]/50 via-[#1A3C34]/70 to-[#1A3C34]/95" />
      </div>

      {/* ── Ambient glow orbs ── */}
      <div className="absolute top-1/3 right-[15%] w-[500px] h-[500px] rounded-full bg-[#D4A017]/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-[350px] h-[350px] rounded-full bg-white/[0.03] blur-[80px] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-12 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/[0.08] text-white/60 text-[11px] font-medium tracking-[0.18em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
            Trusted by Super Shops &amp; Corporates
          </span>
        </motion.div>

        {/* H1 – SEO rich */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 sm:mt-9 text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-bold text-white leading-[1.08] tracking-[-0.02em]"
        >
          Fresh Daab{" "}
          <span className="text-white/30 font-light mx-1">|</span>{" "}
          <br className="sm:hidden" />
          <span className="text-[#D4A017]">
            Bulk Young Coconut
          </span>{" "}
          <br className="hidden sm:block" />
          Supply in Dhaka
        </motion.h1>

        {/* Subheadline – benefit-driven */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 sm:mt-7 text-base sm:text-[17px] lg:text-lg text-white/45 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Premium packaged fresh daab straight from our farms. Ready-to-serve
          for super shops, corporate events &amp; hydration stations in Bangladesh.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          {/* Primary – WhatsApp */}
          <Button
            asChild
            size="lg"
            className="bg-[#1A3C34] hover:bg-[#142e28] text-white rounded-full text-sm font-semibold px-7 sm:px-9 h-12 sm:h-[52px] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:scale-[1.02] transition-all duration-300 border border-white/[0.12]"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2.5 size-[18px]" />
              Get Bulk Quote on WhatsApp
            </a>
          </Button>

          {/* Secondary – Scroll to form */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/[0.06] border-white/[0.15] text-white/85 hover:bg-white/[0.12] hover:border-white/25 hover:text-white rounded-full text-sm font-medium px-7 sm:px-9 h-12 sm:h-[52px] backdrop-blur-sm transition-all duration-300"
          >
            <a href="#quote-form">Fill Quick Form Below</a>
          </Button>
        </motion.div>

        {/* ── Trust badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-8"
        >
          {trustBadges.map((b) => (
            <span
              key={b.text}
              className="inline-flex items-center gap-2 text-white/40 text-xs sm:text-[13px] font-light"
            >
              <b.icon className="size-[15px] text-[#D4A017]/70" />
              {b.text}
            </span>
          ))}
        </motion.div>

        {/* ── Local SEO micro-copy ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-10 sm:mt-12 text-[10px] sm:text-[11px] text-white/20 tracking-wide font-light"
        >
          Fresh Daab Dhaka &bull; Bulk Daab Supply Bangladesh &bull; Young Coconut
          for Super Shops &amp; Corporate Events
        </motion.p>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 mt-auto mb-6 sm:mb-8"
      >
        <motion.a
          href="#super-shops"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-white/20 hover:text-white/40 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-4 h-6 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <div className="w-0.5 h-1.5 rounded-full bg-white/40" />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}

/* ───────────────────────────────────────────
   FOR SUPER SHOPS
   ─────────────────────────────────────────── */

function SuperShopsSection() {
  const features = [
    {
      icon: Package,
      title: "Shelf-Ready Packaging",
      sub: "Branded boxes, retail-ready display.",
    },
    {
      icon: Truck,
      title: "Reliable Weekly Supply",
      sub: "Consistent delivery, never out of stock.",
    },
    {
      icon: ShieldCheck,
      title: "Hygiene Certified",
      sub: "Food-safe wrapped, quality checked.",
    },
  ];

  return (
    <section id="super-shops" className="py-24 sm:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <ScaleIn className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/super-shops.png"
                alt="Premium daabs in modern supermarket"
                width={720}
                height={480}
                className="w-full h-auto"
              />
            </div>
          </ScaleIn>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <FadeUp>
              <span className="text-[11px] font-semibold text-[#D4A017] tracking-[0.2em] uppercase">
                For Super Shops
              </span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3C34] leading-tight tracking-tight">
                Retail-Ready
                <br />
                Premium Daabs
              </h2>
            </FadeUp>

            <div className="mt-10 space-y-0">
              {features.map((f, i) => (
                <FadeUp key={f.title} delay={0.1 * (i + 1)}>
                  <div className="flex items-start gap-4 py-5 border-b border-gray-100 last:border-0 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F5F0E8] flex items-center justify-center group-hover:bg-[#D4A017]/10 transition-colors duration-300">
                      <f.icon className="size-[18px] text-[#1A3C34]" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-[15px] font-semibold text-[#1A3C34]">
                        {f.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-[#2C2C2C]/50 font-light">
                        {f.sub}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   FOR CORPORATE EVENTS
   ─────────────────────────────────────────── */

function CorporateEventsSection() {
  return (
    <section id="corporates" className="py-24 sm:py-32 lg:py-40 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <FadeUp>
              <span className="text-[11px] font-semibold text-[#D4A017] tracking-[0.2em] uppercase">
                Corporate Events
              </span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3C34] leading-tight tracking-tight">
                Fresh Daab
                <br />
                Hydration Station
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-5 text-[15px] text-[#2C2C2C]/60 leading-relaxed max-w-md font-light">
                Premium packaged coconuts with straws, elegantly presented
                for your corporate events. Healthy, refreshing, and
                Instagram-worthy.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Branded Setup",
                  "Min. 50 Pcs",
                  "Same-Day Delivery",
                  "Gold Straws Included",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white text-xs font-medium text-[#1A3C34]/70 border border-[#1A3C34]/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.35}>
              <Button
                asChild
                className="mt-10 bg-[#1A3C34] hover:bg-[#142e28] text-white rounded-full px-7 text-sm font-semibold h-11 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <a href="#quote-form">
                  Get Event Quote
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </FadeUp>
          </div>

          {/* Image */}
          <ScaleIn delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/corporate-events.png"
                alt="Corporate event hydration station"
                width={720}
                height={480}
                className="w-full h-auto"
              />
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   WHY NARKEL
   ─────────────────────────────────────────── */

function WhyNarkelSection() {
  const cards = [
    {
      icon: Sprout,
      title: "Straight from Our Farms",
      sub: "Direct from Noakhali. Zero middlemen.",
    },
    {
      icon: Gem,
      title: "Premium Diamond-Cut",
      sub: "Thailand-style elegant packaging.",
    },
    {
      icon: Package,
      title: "Flexible Bulk Orders",
      sub: "From 12 pcs to 5,000+.",
    },
    {
      icon: ShieldCheck,
      title: "Hygiene-First",
      sub: "Wrapped, sealed, ready-to-drink.",
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <FadeUp>
          <div className="text-center max-w-lg mx-auto">
            <span className="text-[11px] font-semibold text-[#D4A017] tracking-[0.2em] uppercase">
              Why Narkel
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3C34] tracking-tight">
              Built Different.
            </h2>
          </div>
        </FadeUp>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {cards.map((c, i) => (
            <ScaleIn key={c.title} delay={i * 0.1}>
              <div className="group p-7 sm:p-8 rounded-2xl border border-gray-100 bg-white hover:border-[#D4A017]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 h-full">
                <div className="w-11 h-11 rounded-xl bg-[#F5F0E8] group-hover:bg-[#D4A017]/15 flex items-center justify-center transition-colors duration-500">
                  <c.icon className="size-5 text-[#1A3C34]" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-[#1A3C34]">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#2C2C2C]/45 font-light leading-relaxed">
                  {c.sub}
                </p>
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* Decorative image */}
        <FadeUp delay={0.4}>
          <div className="mt-16 sm:mt-20 relative rounded-2xl overflow-hidden max-w-4xl mx-auto">
            <Image
              src="/images/packaging.png"
              alt="Premium packaged young coconut close-up"
              width={1024}
              height={480}
              className="w-full h-auto"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   HOW IT WORKS
   ─────────────────────────────────────────── */

function HowItWorksSection() {
  const steps = [
    {
      icon: Sprout,
      num: "01",
      title: "Farm Fresh",
      sub: "Harvested from our Noakhali farms",
    },
    {
      icon: Scissors,
      num: "02",
      title: "Precision Cut",
      sub: "Diamond-cut by skilled artisans",
    },
    {
      icon: Package,
      num: "03",
      title: "Quality Packed",
      sub: "Wrapped, sealed & boxed",
    },
    {
      icon: Truck,
      num: "04",
      title: "Fast Delivery",
      sub: "Same-day across Dhaka",
    },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#1A3C34] relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A017]/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <FadeUp>
          <div className="text-center max-w-lg mx-auto">
            <span className="text-[11px] font-semibold text-[#D4A017] tracking-[0.2em] uppercase">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Farm to Doorstep
            </h2>
          </div>
        </FadeUp>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <FadeUp key={s.num} delay={i * 0.12}>
              <div className="group text-center relative">
                {/* Number */}
                <span className="text-6xl sm:text-7xl font-bold text-white/[0.04] absolute -top-2 left-1/2 -translate-x-1/2 select-none">
                  {s.num}
                </span>

                <div className="relative mx-auto w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-[#D4A017]/20 group-hover:border-[#D4A017]/30 transition-all duration-500">
                  <s.icon className="size-6 text-[#D4A017]" />
                </div>

                <h3 className="relative mt-6 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="relative mt-1 text-sm text-white/40 font-light">
                  {s.sub}
                </p>

                {/* Connector line (desktop only, not last) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-7 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent" />
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Decorative images row */}
        <FadeUp delay={0.5}>
          <div className="mt-20 grid grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/farm.png"
                alt="Our farm"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/delivery.png"
                alt="Fast delivery"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/packaging.png"
                alt="Quality packing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   QUOTE FORM
   ─────────────────────────────────────────── */

function QuoteFormSection() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) {
      setErrors((p) => {
        const n = { ...p };
        delete n[name];
        return n;
      });
    }
  };

  const handleSelect = (val: string) => {
    setFormData((p) => ({ ...p, quantity: val }));
    if (errors.quantity) {
      setErrors((p) => {
        const n = { ...p };
        delete n.quantity;
        return n;
      });
    }
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.companyName.trim()) e.companyName = "Required";
    if (!formData.contactPerson.trim()) e.contactPerson = "Required";
    if (!formData.phone.trim()) e.phone = "Required";
    if (!formData.quantity) e.quantity = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setServerError("");
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
        setFormData({ companyName: "", contactPerson: "", phone: "", quantity: "", message: "" });
      } else if (data.errors) {
        setErrors(data.errors);
      } else {
        setServerError(data.message || "Something went wrong.");
      }
    } catch {
      setServerError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#2C2C2C] placeholder:text-gray-300 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/10 outline-none transition-all duration-300";

  return (
    <section id="quote-form" className="py-24 sm:py-32 lg:py-40 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <FadeUp>
          <div className="text-center max-w-lg mx-auto">
            <span className="text-[11px] font-semibold text-[#D4A017] tracking-[0.2em] uppercase">
              Get Started
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3C34] tracking-tight">
              Get Your Bulk Quote
            </h2>
            <p className="mt-3 text-sm text-[#2C2C2C]/50 font-light">
              We&apos;ll respond within 2 hours.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-12 sm:mt-16 max-w-xl mx-auto">
            <div className="bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.04)] p-7 sm:p-10">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="mx-auto w-16 h-16 rounded-full bg-[#1A3C34] flex items-center justify-center">
                      <CheckCircle2 className="size-8 text-[#D4A017]" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-[#1A3C34]">
                      Request Received!
                    </h3>
                    <p className="mt-2 text-sm text-[#2C2C2C]/50 font-light">
                      We&apos;ll contact you within 2 hours.
                    </p>
                    <Button
                      onClick={() => setIsSuccess(false)}
                      variant="outline"
                      className="mt-8 rounded-full text-sm font-medium h-10 px-6"
                    >
                      Send Another
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                  >
                    {serverError && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-xs">
                        {serverError}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-[12px] font-medium text-[#2C2C2C]/60 uppercase tracking-wider">
                          Company / Shop Name <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          name="companyName"
                          placeholder="Your business name"
                          value={formData.companyName}
                          onChange={handleChange}
                          className={`${inputCls} ${errors.companyName ? "border-red-200" : ""}`}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[12px] font-medium text-[#2C2C2C]/60 uppercase tracking-wider">
                          Contact Person <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          name="contactPerson"
                          placeholder="Full name"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          className={`${inputCls} ${errors.contactPerson ? "border-red-200" : ""}`}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-[12px] font-medium text-[#2C2C2C]/60 uppercase tracking-wider">
                          Phone <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="01XXXXXXXXX"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`${inputCls} ${errors.phone ? "border-red-200" : ""}`}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[12px] font-medium text-[#2C2C2C]/60 uppercase tracking-wider">
                          Quantity Needed <span className="text-red-400">*</span>
                        </Label>
                        <Select value={formData.quantity} onValueChange={handleSelect}>
                          <SelectTrigger
                            className={`w-full ${inputCls} h-[46px] ${errors.quantity ? "border-red-200" : ""}`}
                          >
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="12-50">12 – 50 pcs</SelectItem>
                            <SelectItem value="51-100">51 – 100 pcs</SelectItem>
                            <SelectItem value="101-500">101 – 500 pcs</SelectItem>
                            <SelectItem value="501-1000">501 – 1,000 pcs</SelectItem>
                            <SelectItem value="1000+">1,000+ pcs</SelectItem>
                            <SelectItem value="Custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-[12px] font-medium text-[#2C2C2C]/60 uppercase tracking-wider">
                        Message
                      </Label>
                      <Textarea
                        name="message"
                        placeholder="Any special requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className={inputCls}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1A3C34] hover:bg-[#142e28] text-white rounded-xl h-12 text-sm font-semibold mt-2 shadow-sm hover:shadow-md disabled:opacity-60 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="size-4" />
                          Send Request
                        </span>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   FOOTER
   ─────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-[#1A3C34] text-white">
      {/* CTA band */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Ready to order?
            </h2>
            <p className="mt-3 text-sm text-white/40 font-light">
              Get your bulk quote in under 2 minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="bg-[#D4A017] hover:bg-[#c49515] text-white rounded-full px-8 h-11 text-sm font-semibold shadow-lg shadow-[#D4A017]/20 hover:shadow-xl hover:shadow-[#D4A017]/30 transition-all duration-300"
              >
                <a href="#quote-form">
                  Get Bulk Quote
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/15 text-white/70 rounded-full px-8 h-11 text-sm font-medium hover:bg-white/5 hover:text-white hover:border-white/25 transition-all duration-300"
              >
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 size-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#D4A017] flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">N</span>
            </div>
            <span className="text-xl font-bold tracking-[0.18em]">NARKEL</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8" aria-label="Footer navigation">
            {[
              { label: "Super Shops", href: "#super-shops" },
              { label: "Corporate Events", href: "#corporates" },
              { label: "Why Narkel", href: "#why-us" },
              { label: "Get Quote", href: "#quote-form" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/40 hover:text-white/70 transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-white/30">
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white/50 transition-colors"
            >
              <MessageCircle className="size-3.5" />
              WhatsApp
            </a>
            <a
              href="mailto:hello@narkel.co"
              className="flex items-center gap-1.5 hover:text-white/50 transition-colors"
            >
              <Mail className="size-3.5" />
              hello@narkel.co
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              Dhaka, Bangladesh
            </span>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-8 border-t border-white/[0.06] w-full">
            <p className="text-xs text-white/20">
              narkel.co &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────────────────────
   MAIN PAGE
   ─────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SuperShopsSection />
        <CorporateEventsSection />
        <WhyNarkelSection />
        <HowItWorksSection />
        <QuoteFormSection />
      </main>
      <Footer />
    </div>
  );
}
