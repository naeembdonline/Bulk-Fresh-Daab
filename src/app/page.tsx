"use client";

import { useState, useEffect, type FormEvent } from "react";
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
  Phone,
  MapPin,
  ChevronDown,
  Facebook,
  Mail,
  Clock,
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

/* ───────────────────────────────────────────────────────────────
   CONSTANTS
   ─────────────────────────────────────────────────────────────── */

const WHATSAPP_NUMBER = "8801515620696";
const WHATSAPP_QUOTE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Narkel, I need bulk fresh daab for my super shop or corporate event. Please send quote. Quantity:"
)}`;
const WHATSAPP_FLOAT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Narkel, I want bulk fresh daab quote for my business."
)}`;

/* ───────────────────────────────────────────────────────────────
   FLOATING WHATSAPP BUTTON
   ─────────────────────────────────────────────────────────────── */

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_FLOAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 transition-all duration-300 hover:scale-105 group animate-[fadeIn_0.5s_ease_2s_both]"
    >
      <span className="absolute -top-0.5 -left-0.5 w-3 h-3">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      </span>
      <MessageCircle className="size-5 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-[13px] font-semibold hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

/* ───────────────────────────────────────────────────────────────
   NAVBAR
   ─────────────────────────────────────────────────────────────── */

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
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[#D4A017] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <TreePine className="size-4 text-white" />
            </div>
            <span
              className={`text-xl lg:text-2xl font-bold tracking-[0.18em] ${
                scrolled ? "text-[#1A3C34]" : "text-white"
              } transition-colors duration-500`}
            >
              NARKEL
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "text-[#2C2C2C]/70 hover:text-[#1A3C34]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#1A3C34] hover:bg-[#142e28] text-white rounded-full px-7 text-[13px] font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-300 h-10"
            >
              <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 size-[14px]" />
                Get Quote on WhatsApp
              </a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={scrolled ? "text-[#1A3C34]" : "text-white"}
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
                    <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 size-4" />
                      Get Quote on WhatsApp
                    </a>
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

/* ───────────────────────────────────────────────────────────────
   HERO SECTION
   ─────────────────────────────────────────────────────────────── */

function HeroSection() {
  const trustBadges = [
    { icon: Sprout, text: "From Our Farms" },
    { icon: Gem, text: "Thailand-style Diamond Cut Packaging" },
    { icon: Truck, text: "Same Day Dhaka Delivery" },
    { icon: Package, text: "Minimum Order 12 pcs" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1A3C34]"
    >
      {/* ── Background image + stronger overlay ── */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-daab.png"
          alt="Premium packaged diamond-cut fresh daab with plastic wrap and straw in cardboard box – bulk supply Bangladesh"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.45]"
        />
        {/* Stronger gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3C34]/60 via-[#1A3C34]/80 to-[#1A3C34]/[0.97]" />
      </div>

      {/* ── Ambient glow orbs ── */}
      <div className="absolute top-1/3 right-[15%] w-[500px] h-[500px] rounded-full bg-[#D4A017]/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-[350px] h-[350px] rounded-full bg-white/[0.03] blur-[80px] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-12 text-center animate-[fadeUp_0.9s_ease_both]">
        {/* Badge */}
        <div className="animate-[fadeUp_0.9s_ease_0.1s_both]">
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/[0.08] text-white/60 text-[11px] font-medium tracking-[0.18em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
            Trusted by Super Shops &amp; Corporates
          </span>
        </div>

        {/* H1 – conversion-focused */}
        <h1 className="mt-7 sm:mt-9 text-3xl sm:text-[2.65rem] md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold text-white leading-[1.1] tracking-[-0.02em] animate-[fadeUp_0.9s_ease_0.2s_both]">
          Bulk Fresh Daab for{" "}
          <span className="text-[#D4A017]">Super Shops</span>
          {" "}&amp;{" "}
          <span className="text-[#D4A017]">Corporate Events</span>
        </h1>

        {/* Subheadline – bullet-point benefits */}
        <p className="mt-5 sm:mt-7 text-[15px] sm:text-base lg:text-[17px] text-white/50 max-w-2xl mx-auto leading-relaxed font-light animate-[fadeUp_0.9s_ease_0.35s_both]">
          Premium diamond-cut packaged daab &bull; Same-day Dhaka delivery &bull;{" "}
          Flexible from 12 pcs &bull; Hygiene-first supply
        </p>

        {/* ── CTAs ── */}
        <div className="mt-9 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-[fadeUp_0.9s_ease_0.5s_both]">
          {/* Primary – WhatsApp */}
          <Button
            asChild
            size="lg"
            className="bg-[#1A3C34] hover:bg-[#142e28] text-white rounded-full text-sm font-semibold px-7 sm:px-9 h-12 sm:h-[52px] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:scale-[1.02] transition-all duration-300 border border-white/[0.12]"
          >
            <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer">
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
            <a href="#quote-form">Fill Quick Form</a>
          </Button>
        </div>

        {/* ── Trust badges with gold icons ── */}
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-8 animate-[fadeUp_0.9s_ease_0.65s_both]">
          {trustBadges.map((b) => (
            <span
              key={b.text}
              className="inline-flex items-center gap-2 text-white/40 text-xs sm:text-[13px] font-light"
            >
              <b.icon className="size-[15px] text-[#D4A017]/70" />
              {b.text}
            </span>
          ))}
        </div>

        {/* ── Local SEO micro-copy ── */}
        <p className="mt-10 sm:mt-12 text-[10px] sm:text-[11px] text-white/20 tracking-wide font-light animate-[fadeIn_1s_ease_1s_both]">
          Fresh Daab Dhaka &bull; Bulk Daab Supply Bangladesh &bull; Young Coconut
          for Super Shops &amp; Events
        </p>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="relative z-10 mt-auto mb-6 sm:mb-8 animate-[fadeIn_1s_ease_1.5s_both]">
        <a
          href="#super-shops"
          className="flex flex-col items-center gap-1.5 text-white/20 hover:text-white/40 transition-colors duration-300 animate-[bounce_2.2s_ease-in-out_infinite]"
          aria-label="Scroll down"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-4 h-6 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <div className="w-0.5 h-1.5 rounded-full bg-white/40" />
          </div>
        </a>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────
   FOR SUPER SHOPS
   ─────────────────────────────────────────────────────────────── */

function SuperShopsSection() {
  const features = [
    {
      icon: Package,
      title: "Shelf-Ready Packaging",
      sub: "Branded boxes, retail-ready display. Perfect for fresh daab super shops.",
    },
    {
      icon: Truck,
      title: "Reliable Weekly Supply",
      sub: "Consistent delivery, never out of stock. Bulk daab Dhaka made easy.",
    },
    {
      icon: ShieldCheck,
      title: "Hygiene Certified",
      sub: "Food-safe wrapped, quality checked. Premium daab supply you can trust.",
    },
  ];

  return (
    <section id="super-shops" className="py-24 sm:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 scroll-animate">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/super-shops.png"
                alt="Premium fresh daab displayed in modern supermarket produce section – bulk daab supply for super shops in Dhaka"
                width={720}
                height={480}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="scroll-animate">
              <span className="text-[11px] font-semibold text-[#D4A017] tracking-[0.2em] uppercase">
                For Super Shops
              </span>
            </div>
            <div className="scroll-animate" style={{ animationDelay: "0.08s" }}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3C34] leading-tight tracking-tight">
                Retail-Ready
                <br />
                Premium Fresh Daab
              </h2>
            </div>
            <div className="scroll-animate" style={{ animationDelay: "0.14s" }}>
              <p className="mt-4 text-[15px] text-[#2C2C2C]/60 leading-relaxed max-w-md font-light">
                Stock your shelves with Thailand-style premium packaged young
                coconuts. Your customers will love the ready-to-drink convenience.
              </p>
            </div>

            <div className="mt-10 space-y-0">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="scroll-animate"
                  style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                >
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────
   FOR CORPORATE EVENTS
   ─────────────────────────────────────────────────────────────── */

function CorporateEventsSection() {
  return (
    <section id="corporates" className="py-24 sm:py-32 lg:py-40 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <div className="scroll-animate">
              <span className="text-[11px] font-semibold text-[#D4A017] tracking-[0.2em] uppercase">
                Corporate Events
              </span>
            </div>
            <div className="scroll-animate" style={{ animationDelay: "0.08s" }}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3C34] leading-tight tracking-tight">
                Fresh Daab
                <br />
                Hydration Station
              </h2>
            </div>
            <div className="scroll-animate" style={{ animationDelay: "0.15s" }}>
              <p className="mt-5 text-[15px] text-[#2C2C2C]/60 leading-relaxed max-w-md font-light">
                Create an Instagram-worthy daab hydration station for your
                corporate events. Premium young coconut Bangladesh — elegantly
                presented with gold straws and branded setup.
              </p>
            </div>
            <div className="scroll-animate" style={{ animationDelay: "0.25s" }}>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Branded Setup",
                  "Min. 50 Pcs",
                  "2-3 Days Advance Booking",
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
            </div>
            <div className="scroll-animate" style={{ animationDelay: "0.35s" }}>
              <Button
                asChild
                className="mt-10 bg-[#1A3C34] hover:bg-[#142e28] text-white rounded-full px-7 text-sm font-semibold h-11 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer">
                  Get Event Quote
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="scroll-animate" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/corporate-events.png"
                alt="Elegant daab hydration station at corporate event – fresh daab for corporate events Bangladesh"
                width={720}
                height={480}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────
   WHY NARKEL
   ─────────────────────────────────────────────────────────────── */

function WhyNarkelSection() {
  const cards = [
    {
      icon: Sprout,
      title: "Straight from Our Farms",
      sub: "Direct from Noakhali. Zero middlemen. Fresh daab Bangladesh at its finest.",
    },
    {
      icon: Gem,
      title: "Premium Diamond-Cut",
      sub: "Thailand-style elegant packaging. Luxury young coconut presentation.",
    },
    {
      icon: Package,
      title: "Flexible Bulk Orders",
      sub: "From 12 pcs to 5,000+. Bulk daab Dhaka for any business size.",
    },
    {
      icon: ShieldCheck,
      title: "Hygiene-First",
      sub: "Wrapped, sealed, ready-to-drink. Premium daab supply you can trust.",
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="scroll-animate">
          <div className="text-center max-w-lg mx-auto">
            <span className="text-[11px] font-semibold text-[#D4A017] tracking-[0.2em] uppercase">
              Why Narkel
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3C34] tracking-tight">
              Built Different.
            </h2>
            <p className="mt-4 text-sm text-[#2C2C2C]/50 font-light max-w-md mx-auto">
              Narkel delivers the freshest young coconut Bangladesh has to offer —
              from our farms to your doorstep, with world-class packaging.
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="scroll-animate"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
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
            </div>
          ))}
        </div>

        <div className="scroll-animate" style={{ animationDelay: "0.4s" }}>
          <div className="mt-16 sm:mt-20 relative rounded-2xl overflow-hidden max-w-4xl mx-auto">
            <img
              src="/images/packaging.png"
              alt="Premium packaged young coconut close-up – Thailand-style diamond cut packaging with plastic wrap"
              width={1024}
              height={480}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────
   HOW IT WORKS
   ─────────────────────────────────────────────────────────────── */

function HowItWorksSection() {
  const steps = [
    { icon: Sprout, num: "01", title: "Farm Fresh", sub: "Harvested from our Noakhali farms" },
    { icon: Scissors, num: "02", title: "Precision Cut", sub: "Diamond-cut by skilled artisans" },
    { icon: Package, num: "03", title: "Quality Packed", sub: "Wrapped, sealed & boxed" },
    { icon: Truck, num: "04", title: "Fast Delivery", sub: "Same-day across Dhaka" },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#1A3C34] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A017]/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="scroll-animate">
          <div className="text-center max-w-lg mx-auto">
            <span className="text-[11px] font-semibold text-[#D4A017] tracking-[0.2em] uppercase">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Farm to Doorstep
            </h2>
            <p className="mt-4 text-sm text-white/40 font-light max-w-md mx-auto">
              From harvesting to delivery — our fresh daab supply process is
              designed for quality and speed.
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="scroll-animate"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="group text-center relative">
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
                {i < 3 && (
                  <div className="hidden lg:block absolute top-7 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-animate" style={{ animationDelay: "0.5s" }}>
          <div className="mt-20 grid grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img src="/images/farm.png" alt="Our coconut farm in Noakhali" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img src="/images/delivery.png" alt="Fast delivery across Dhaka" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img src="/images/packaging.png" alt="Quality packing process" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────
   QUOTE FORM
   ─────────────────────────────────────────────────────────────── */

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
      setErrors((p) => { const n = { ...p }; delete n[name]; return n; });
    }
  };

  const handleSelect = (val: string) => {
    setFormData((p) => ({ ...p, quantity: val }));
    if (errors.quantity) {
      setErrors((p) => { const n = { ...p }; delete n.quantity; return n; });
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
        <div className="scroll-animate">
          <div className="text-center max-w-lg mx-auto">
            <span className="text-[11px] font-semibold text-[#D4A017] tracking-[0.2em] uppercase">
              Get Started
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3C34] tracking-tight">
              Get Your Bulk Quote
            </h2>
            <p className="mt-3 text-sm text-[#2C2C2C]/50 font-light">
              We&apos;ll respond within 2 hours. Or get an instant quote on WhatsApp.
            </p>
          </div>
        </div>

        <div className="scroll-animate" style={{ animationDelay: "0.15s" }}>
          <div className="mt-12 sm:mt-16 max-w-xl mx-auto">
            <div className="bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.04)] p-7 sm:p-10">
              {isSuccess ? (
                <div className="text-center py-10">
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
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
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
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────
   FAQ SECTION
   ─────────────────────────────────────────────────────────────── */

function FAQSection() {
  const faqs = [
    {
      question: "How long does delivery take?",
      answer:
        "To ensure farm-fresh quality and precision processing, we require at least 2–3 days advance booking for bulk orders.",
    },
    {
      question: "Where do you deliver?",
      answer:
        "We deliver across Dhaka city, focusing on corporate offices, super shops, and events.",
    },
    {
      question: "What is the minimum order quantity?",
      answer: "Our minimum bulk order starts from 12 pieces.",
    },
    {
      question: "Are the coconuts fresh and hygienic?",
      answer:
        "Yes, they are sourced directly from Noakhali farms and processed using premium diamond-cut and vacuum-sealing methods for maximum hygiene.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center scroll-animate">
          <span className="text-[11px] font-semibold text-[#D4A017] tracking-[0.2em] uppercase">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3C34]">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#2C2C2C]/60 font-light max-w-2xl mx-auto">
            Everything you need to know about our bulk fresh daab service
          </p>
        </div>

        <div className="mt-12 sm:mt-16 space-y-4 scroll-animate">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-[#F5F0E8] rounded-2xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-[#1A3C34]/5 transition-all duration-300">
                <span className="text-base sm:text-lg font-semibold text-[#1A3C34] pr-4">
                  {faq.question}
                </span>
                <ChevronDown className="size-5 text-[#D4A017] flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-[#2C2C2C]/70 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────────
   FOOTER
   ─────────────────────────────────────────────────────────────── */

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "Diamond Cut Coconut", href: "#why-us" },
        { label: "Fresh Green Coconut", href: "#why-us" },
        { label: "Wholesale Supply", href: "#super-shops" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Super Shops", href: "#super-shops" },
        { label: "Corporate Events", href: "#corporates" },
        { label: "Bulk Orders", href: "#quote-form" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Why Narkel", href: "#why-us" },
        { label: "Contact Us", href: "#quote-form" },
        { label: "Get Quote", href: "#quote-form" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/narkel",
      icon: Facebook,
      color: "hover:bg-[#1877F2]",
    },
    {
      name: "WhatsApp",
      href: WHATSAPP_FLOAT_URL,
      icon: MessageCircle,
      color: "hover:bg-[#25D366]",
    },
    {
      name: "Email",
      href: "mailto:info@narkel.co",
      icon: Mail,
      color: "hover:bg-white/20",
    },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Demra Staff Quarter, Gate No. 4, Dhaka, Bangladesh" },
    { icon: Clock, text: "Sat-Thu: 8AM - 8PM" },
    { icon: Phone, text: "+880 1515-620696" },
  ];

  return (
    <footer className="bg-[#1A3C34] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 text-center scroll-animate">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Ready to order premium coconuts?
          </h2>
          <p className="mt-3 text-sm text-white/40 font-light">
            Get your bulk quote in under 2 minutes. Farm-fresh, hygienic, diamond-cut delivery.
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
              <a href={WHATSAPP_FLOAT_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 size-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4A017] flex items-center justify-center">
                <TreePine className="size-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-[0.18em]">NARKEL</span>
                <p className="text-xs text-white/40">Premium Coconut Supplier</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Bangladesh's leading wholesale supplier of fresh green coconuts and premium Diamond Cut coconuts.
              Farm-fresh quality, hygienic processing, and reliable delivery across Dhaka and nationwide.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/10`}
                  aria-label={social.name}
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <info.icon className="size-4 text-white/60" />
                </div>
                <div>
                  <p className="text-sm text-white/60">{info.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25">
            © {currentYear} Narkel.co &mdash; Premium Wholesale Coconut Supplier Bangladesh
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="#privacy" className="hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Schema.org Location Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Narkel",
            "image": "https://narkel.co/og-image.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Demra Staff Quarter, Gate No. 4",
              "addressLocality": "Dhaka",
              "addressRegion": "Dhaka",
              "addressCountry": "BD",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "23.6992",
              "longitude": "90.4326",
            },
            "url": "https://narkel.co",
            "telephone": "+8801515620696",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
              "opens": "08:00",
              "closes": "20:00",
            },
            "sameAs": ["https://www.facebook.com/narkel"],
          }),
        }}
      />
    </footer>
  );
}

/* ───────────────────────────────────────────────────────────────
   MAIN PAGE
   ─────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SuperShopsSection />
        <CorporateEventsSection />
        <WhyNarkelSection />
        <HowItWorksSection />
        <QuoteFormSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
