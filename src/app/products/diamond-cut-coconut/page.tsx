import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Gem, Truck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Diamond Cut Coconut - Premium Hygienic Fresh Daab | Narkel",
  description:
    "Discover our premium Diamond Cut coconuts - hygienically processed, vacuum-sealed fresh coconuts perfect for restaurants, hospitals, and health-conscious customers in Bangladesh.",
  keywords: [
    "diamond cut coconut",
    "ডায়মন্ড কাট ডাব",
    "hygienic coconut",
    "vacuum sealed coconut",
    "fresh cut coconut",
    "premium daab",
    "sanitized coconut",
    "ready-to-eat coconut",
    "স্বাস্থ্যকর ডাব",
  ],
  openGraph: {
    title: "Diamond Cut Coconut - Premium Hygienic Fresh Daab",
    description:
      "Premium Diamond Cut coconuts with hygienic processing. Vacuum-sealed for maximum freshness. Perfect for restaurants and health-conscious customers.",
    url: "https://narkel.co/products/diamond-cut-coconut",
    type: "website",
  },
};

export default function DiamondCutCoconutPage() {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Hygienic",
      description: "Processed using premium diamond-cut technology with sanitized equipment",
    },
    {
      icon: Gem,
      title: "Diamond Cut Design",
      description: "Easy-to-open diamond shape cut for convenient access to fresh coconut water",
    },
    {
      icon: Truck,
      title: "Vacuum-Sealed Fresh",
      description: "Immediately vacuum-sealed after cutting to preserve freshness and prevent contamination",
    },
    {
      icon: CheckCircle2,
      title: "Farm Fresh",
      description: "Sourced directly from Noakhali farms, delivered within 24-48 hours",
    },
  ];

  const benefits = [
    "Perfect for restaurants and cafes",
    "Ideal for hospitals and healthcare facilities",
    "Great for corporate events and meetings",
    "Convenient for home delivery",
    "Extended shelf life with vacuum sealing",
    "Consistent quality and taste",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-[#1A3C34] text-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-white/60 hover:text-white/90 transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Diamond Cut Coconut
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-3xl">
            Premium hygienic fresh daab with diamond-cut technology and vacuum-sealed freshness
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#D4A017] rounded-full text-sm font-semibold">
              Farm Fresh
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold">
              100% Hygienic
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold">
              Vacuum Sealed
            </span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#D4A017] flex items-center justify-center mb-4">
                <feature.icon className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our Diamond Cut Coconuts?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="size-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1A3C34] text-white py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Order Premium Diamond Cut Coconuts?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get your bulk quote in under 2 minutes
          </p>
          <a
            href="/#quote-form"
            className="inline-flex items-center bg-[#D4A017] hover:bg-[#c49515] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Bulk Quote
          </a>
        </div>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Diamond Cut Coconut",
            description:
              "Premium hygienic diamond cut coconut with vacuum-sealed freshness. Perfect for restaurants, hospitals, and health-conscious customers.",
            brand: {
              "@type": "Brand",
              name: "Narkel",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "BDT",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </div>
  );
}
