"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Menu,
  TreePine,
  Diamond,
  Package,
  Truck,
  ShieldCheck,
  Sprout,
  Scissors,
  Warehouse,
  Star,
  Phone,
  Mail,
  ChevronRight,
  CheckCircle2,
  X,
  Send,
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

/* ─── Fade-up animation wrapper ─── */
function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "For Super Shops", href: "#super-shops" },
    { label: "For Corporates", href: "#corporates" },
    { label: "Why Us", href: "#why-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-[#1A3C34]">
              NARKEL
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#2C2C2C] hover:text-[#1A3C34] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#D4A017] hover:bg-[#c4940f] text-white rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <a href="#quote-form">Get Bulk Quote</a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-[#1A3C34] tracking-widest text-xl">
                  NARKEL
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8 px-2" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <a
                      href={link.href}
                      className="text-base font-medium text-[#2C2C2C] hover:text-[#1A3C34] transition-colors py-2 border-b border-gray-100"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    asChild
                    className="mt-4 bg-[#D4A017] hover:bg-[#c4940f] text-white rounded-full w-full font-semibold"
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

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-daab.png"
          alt="Premium diamond-cut young coconut"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C34]/95 via-[#1A3C34]/80 to-[#1A3C34]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Direct from{" "}
            <span className="text-[#D4A017]">Noakhali Farms</span>{" "}
            to Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed"
          >
            Premium fresh young coconuts in bulk. Thailand-style
            diamond-cut packaging. Zero middlemen. Guaranteed freshness
            for super shops &amp; corporate events.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#D4A017] hover:bg-[#c4940f] text-[#1A3C34] rounded-full text-base md:text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <a href="#quote-form">
                Get Instant Bulk Quote
                <ChevronRight className="ml-1 size-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white rounded-full text-base md:text-lg px-8 py-6 font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              <a href="#why-us">See Pricing Options</a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-6 text-white/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#D4A017]" />
              1,000+ Farm Trees
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#D4A017]" />
              Same-Day Delivery
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#D4A017]" />
              Zero Middlemen
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── For Super Shops Section ─── */
function SuperShopsSection() {
  const features = [
    {
      icon: Package,
      title: "Branded Hygiene Packaging",
      description:
        "Diamond-cut coconuts in branded boxes, retail-ready for your shelves. Premium presentation that attracts customers.",
    },
    {
      icon: Truck,
      title: "Consistent Weekly Supply",
      description:
        "Reliable delivery schedule tailored to your needs. Never run out of stock with our dependable supply chain.",
    },
    {
      icon: Warehouse,
      title: "Easy Display & Storage",
      description:
        "Optimized packaging designed for shelf display and cold storage. Stackable, space-efficient, and customer-friendly.",
    },
  ];

  return (
    <section id="super-shops" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <FadeIn>
              <span className="text-sm font-semibold text-[#D4A017] tracking-wider uppercase">
                For Super Shops
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A3C34]">
                Elevate Your Produce Aisle with{" "}
                <span className="relative">
                  Premium Daab
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D4A017]/40 rounded-full" />
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-[#2C2C2C]/70 text-lg leading-relaxed">
                We supply super shops across Dhaka with fresh, diamond-cut
                young coconuts that are branded, hygienic, and ready for
                retail. Your customers deserve the best.
              </p>
            </FadeIn>

            <div className="mt-10 space-y-6">
              {features.map((feature, i) => (
                <FadeIn key={feature.title} delay={0.1 * (i + 1)}>
                  <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#D4A017]/30 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4A017]/10 flex items-center justify-center">
                      <feature.icon className="size-6 text-[#D4A017]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A3C34] text-lg">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-[#2C2C2C]/60 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Image */}
          <FadeIn delay={0.3}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/super-shops.png"
                alt="Narkel coconuts displayed in retail super shop"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-[#1A3C34]">
                🛒 Available at leading super shops in Dhaka
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── For Corporate Events Section ─── */
function CorporateEventsSection() {
  const features = [
    { icon: Star, text: "Premium branded setup at your venue" },
    { icon: Star, text: "Gold straws included for an elegant touch" },
    { icon: Star, text: "Minimum 50 pieces per order" },
    { icon: Star, text: "Event-day delivery guaranteed" },
    { icon: Star, text: "Custom branding available on request" },
  ];

  return (
    <section id="corporates" className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <FadeIn>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/images/corporate-events.png"
                alt="Corporate event hydration station with Narkel coconuts"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#1A3C34] text-white rounded-lg px-4 py-2 text-sm font-medium">
                🥥 Fresh hydration for your events
              </div>
            </div>
          </FadeIn>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <span className="text-sm font-semibold text-[#D4A017] tracking-wider uppercase">
                For Corporate Events
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A3C34]">
                Fresh Daab Hydration Station
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-[#2C2C2C]/70 text-lg leading-relaxed">
                Make your corporate events unforgettable with a premium fresh
                coconut hydration station. Elegant, healthy, and refreshing —
                your guests will love it.
              </p>
            </FadeIn>

            <div className="mt-8 space-y-3">
              {features.map((feature, i) => (
                <FadeIn key={feature.text} delay={0.1 * (i + 1)}>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4A017]/15 flex items-center justify-center mt-0.5">
                      <feature.icon className="size-4 text-[#D4A017]" />
                    </div>
                    <p className="text-[#2C2C2C] text-base">{feature.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.6}>
              <Button
                asChild
                className="mt-10 bg-[#1A3C34] hover:bg-[#15302a] text-white rounded-full px-8 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <a href="#quote-form">
                  Get Event Quote
                  <ChevronRight className="ml-1 size-4" />
                </a>
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Narkel Section ─── */
function WhyNarkelSection() {
  const usps = [
    {
      icon: TreePine,
      title: "Own 1,000+ Trees",
      description: "Direct farm ownership in Noakhali. Zero middlemen, best prices.",
    },
    {
      icon: Diamond,
      title: "Diamond-Cut Premium",
      description: "Thailand-style elegant white husk cutting for premium presentation.",
    },
    {
      icon: Package,
      title: "Flexible Orders",
      description: "From just 12 pieces to 5,000+. We handle orders of all sizes.",
    },
    {
      icon: Truck,
      title: "Dhaka Delivery",
      description: "Same-day and next-day delivery across all of Dhaka.",
    },
    {
      icon: ShieldCheck,
      title: "Hygiene First",
      description: "Gloves, food-safe packaging, quality checked at every step.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-[#D4A017] tracking-wider uppercase">
              Our Advantages
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A3C34]">
              Why Choose{" "}
              <span className="relative">
                Narkel?
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D4A017]/40 rounded-full" />
              </span>
            </h2>
            <p className="mt-4 text-[#2C2C2C]/70 text-lg">
              We&apos;re not just suppliers — we&apos;re farmers committed to
              bringing the freshest coconuts directly to your business.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {usps.map((usp, i) => (
            <FadeIn key={usp.title} delay={i * 0.1}>
              <div className="group text-center p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#D4A017]/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#D4A017]/10 group-hover:bg-[#D4A017]/20 flex items-center justify-center transition-colors">
                  <usp.icon className="size-8 text-[#D4A017]" />
                </div>
                <h3 className="mt-4 font-bold text-[#1A3C34] text-lg">
                  {usp.title}
                </h3>
                <p className="mt-2 text-[#2C2C2C]/60 text-sm leading-relaxed">
                  {usp.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works Section ─── */
function HowItWorksSection() {
  const steps = [
    {
      icon: Sprout,
      label: "Farm",
      title: "Harvested Fresh",
      description: "Harvested fresh from our Noakhali farms",
    },
    {
      icon: Scissors,
      label: "Cut",
      title: "Diamond-Cut",
      description: "Precision diamond-cut by skilled artisans",
    },
    {
      icon: Package,
      label: "Pack",
      title: "Hygienically Packed",
      description: "Packed in branded boxes with food-safe materials",
    },
    {
      icon: Truck,
      label: "Deliver",
      title: "Delivered Fresh",
      description: "Delivered fresh to your doorstep in Dhaka",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-[#D4A017] tracking-wider uppercase">
              Our Process
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A3C34]">
              From Farm to Your Doorstep
            </h2>
            <p className="mt-4 text-[#2C2C2C]/70 text-lg">
              A streamlined supply chain ensures maximum freshness every time.
            </p>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Timeline line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-[#D4A017]/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((step, i) => (
              <FadeIn key={step.label} delay={i * 0.15}>
                <div className="text-center relative">
                  {/* Step number circle */}
                  <div className="relative mx-auto w-20 h-20 rounded-full bg-[#1A3C34] flex items-center justify-center shadow-lg z-10">
                    <step.icon className="size-8 text-[#D4A017]" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#D4A017] text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-bold text-[#1A3C34] text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[#2C2C2C]/60 text-sm max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Decorative images */}
        <div className="mt-16 flex justify-center gap-8 flex-wrap">
          <FadeIn delay={0.2}>
            <div className="relative rounded-xl overflow-hidden shadow-lg w-64 h-44">
              <Image
                src="/images/farm.png"
                alt="Our coconut farm in Noakhali"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1A3C34]/30 flex items-end">
                <p className="text-white text-sm font-medium px-4 pb-3">
                  🌴 Our Noakhali Farm
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="relative rounded-xl overflow-hidden shadow-lg w-64 h-44">
              <Image
                src="/images/delivery.png"
                alt="Delivery truck in Dhaka"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1A3C34]/30 flex items-end">
                <p className="text-white text-sm font-medium px-4 pb-3">
                  🚚 Fast Dhaka Delivery
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="relative rounded-xl overflow-hidden shadow-lg w-64 h-44">
              <Image
                src="/images/packaging.png"
                alt="Hygienic packaging process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1A3C34]/30 flex items-end">
                <p className="text-white text-sm font-medium px-4 pb-3">
                  📦 Hygienic Packaging
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Quote Form Section ─── */
function QuoteFormSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    quantity: "",
    eventType: "",
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact person is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.quantity) newErrors.quantity = "Please select a quantity range";
    if (!formData.eventType) newErrors.eventType = "Please select an event/shop type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
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
        setFormData({
          companyName: "",
          contactPerson: "",
          phone: "",
          email: "",
          quantity: "",
          eventType: "",
          message: "",
        });
      } else if (data.errors) {
        setErrors(data.errors);
      } else {
        setServerError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#2C2C2C] placeholder:text-gray-400 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none transition-all";
  const errorInputClass =
    "w-full bg-white border border-red-300 rounded-lg px-4 py-3 text-[#2C2C2C] placeholder:text-gray-400 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none transition-all";

  return (
    <section id="quote-form" className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-[#D4A017] tracking-wider uppercase">
              Get Started
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A3C34]">
              Get Your Bulk Quote
            </h2>
            <p className="mt-4 text-[#2C2C2C]/70 text-lg">
              Fill in the form and we&apos;ll get back to you within 2 hours
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="size-10 text-green-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#1A3C34]">
                  Thank you!
                </h3>
                <p className="mt-2 text-[#2C2C2C]/70 text-lg">
                  We&apos;ll contact you within 2 hours.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 bg-[#D4A017] hover:bg-[#c4940f] text-white rounded-full px-8 font-semibold"
                >
                  Submit Another Quote
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Server error */}
                {serverError && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                    <X className="size-4 flex-shrink-0" />
                    {serverError}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="companyName" className="text-[#1A3C34] font-medium text-sm">
                      Company Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Your company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={errors.companyName ? errorInputClass : inputClass}
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  {/* Contact Person */}
                  <div className="space-y-1.5">
                    <Label htmlFor="contactPerson" className="text-[#1A3C34] font-medium text-sm">
                      Contact Person <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      type="text"
                      placeholder="Your full name"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className={errors.contactPerson ? errorInputClass : inputClass}
                    />
                    {errors.contactPerson && (
                      <p className="text-red-500 text-xs mt-1">{errors.contactPerson}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-[#1A3C34] font-medium text-sm">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="01XXXXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? errorInputClass : inputClass}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-[#1A3C34] font-medium text-sm">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? errorInputClass : inputClass}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Quantity */}
                  <div className="space-y-1.5">
                    <Label className="text-[#1A3C34] font-medium text-sm">
                      Quantity Needed <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.quantity}
                      onValueChange={(v) => handleSelectChange("quantity", v)}
                    >
                      <SelectTrigger
                        className={`w-full ${errors.quantity ? "border-red-300" : "border-gray-200"} bg-white`}
                      >
                        <SelectValue placeholder="Select quantity range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12-50">12 – 50 pieces</SelectItem>
                        <SelectItem value="51-100">51 – 100 pieces</SelectItem>
                        <SelectItem value="101-500">101 – 500 pieces</SelectItem>
                        <SelectItem value="501-1000">501 – 1,000 pieces</SelectItem>
                        <SelectItem value="1000+">1,000+ pieces</SelectItem>
                        <SelectItem value="Custom">Custom quantity</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.quantity && (
                      <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>
                    )}
                  </div>

                  {/* Event Type */}
                  <div className="space-y-1.5">
                    <Label className="text-[#1A3C34] font-medium text-sm">
                      Event / Shop Type <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.eventType}
                      onValueChange={(v) => handleSelectChange("eventType", v)}
                    >
                      <SelectTrigger
                        className={`w-full ${errors.eventType ? "border-red-300" : "border-gray-200"} bg-white`}
                      >
                        <SelectValue placeholder="Select your type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Super Shop">Super Shop</SelectItem>
                        <SelectItem value="Corporate Event">Corporate Event</SelectItem>
                        <SelectItem value="Wedding">Wedding</SelectItem>
                        <SelectItem value="Restaurant">Restaurant</SelectItem>
                        <SelectItem value="Hotel">Hotel</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.eventType && (
                      <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-[#1A3C34] font-medium text-sm">
                    Message <span className="text-gray-400">(optional)</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Any special requirements or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={inputClass}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4A017] hover:bg-[#c4940f] text-white rounded-lg py-3.5 text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="size-4" />
                      Submit Quote Request
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "For Super Shops", href: "#super-shops" },
    { label: "For Corporates", href: "#corporates" },
    { label: "Why Us", href: "#why-us" },
  ];

  return (
    <footer className="bg-[#1A3C34] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold tracking-[0.2em]">
              NARKEL
            </span>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Premium fresh young coconuts direct from Noakhali farms.
              Bringing the freshest daab to super shops and corporate
              events across Dhaka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4A017] mb-4">
              Quick Links
            </h3>
            <nav className="space-y-3" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#quote-form"
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Get Bulk Quote
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4A017] mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="size-4 text-[#D4A017]" />
                +880 1XXX-XXXXXX
              </a>
              <a
                href="mailto:hello@narkel.co"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="size-4 text-[#D4A017]" />
                hello@narkel.co
              </a>
              <div className="flex items-center gap-3">
                <Truck className="size-4 text-[#D4A017]" />
                Dhaka, Bangladesh
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          narkel.co &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
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
      </main>
      <Footer />
    </div>
  );
}
