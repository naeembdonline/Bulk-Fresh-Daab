import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Package, Users, Building2, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "Wholesale Coconut Supplier in Bangladesh | Bulk Daab for Business",
  description:
    "Leading wholesale coconut supplier in Bangladesh. Bulk fresh green coconuts and Diamond Cut daab for restaurants, hospitals, supermarkets, and corporate events. Competitive pricing.",
  keywords: [
    "wholesale coconut supplier",
    "পাইকারি ডাব বিক্রেতা",
    "bulk coconut supplier",
    "coconut wholesaler Bangladesh",
    "wholesale daab",
    "coconut for restaurants",
    "coconut for hospitals",
    "supermarket coconut supplier",
    "corporate events coconut",
    "bulk coconut order",
  ],
  openGraph: {
    title: "Wholesale Coconut Supplier in Bangladesh",
    description:
      "Bangladesh's leading wholesale coconut supplier. Bulk orders for businesses with competitive pricing and reliable delivery.",
    url: "https://narkel.co/wholesale/bulk-coconut-supplier",
    type: "website",
  },
};

export default function WholesaleCoconutSupplierPage() {
  const clients = [
    {
      icon: Store,
      title: "Super Shops & Supermarkets",
      description: "Fresh coconut supply for retail with consistent quality and competitive wholesale pricing",
    },
    {
      icon: Building2,
      title: "Restaurants & Cafes",
      description: "Premium Diamond Cut coconuts for food service businesses with daily delivery options",
    },
    {
      icon: Users,
      title: "Hospitals & Healthcare",
      description: "Hygienic, vacuum-sealed coconuts perfect for health-conscious patients and visitors",
    },
    {
      icon: Package,
      title: "Corporate Events & Weddings",
      description: "Bulk coconut supply for corporate events, weddings, and special occasions",
    },
  ];

  const wholesaleBenefits = [
    "Minimum order: 12 pieces",
    "2-3 days advance booking",
    "Farm-fresh quality guaranteed",
    "Hygienic diamond-cut processing",
    "Vacuum-sealed for freshness",
    "Competitive wholesale pricing",
    "Reliable delivery across Dhaka",
    "Dedicated account manager",
  ];

  const orderSteps = [
    {
      step: "01",
      title: "Request Quote",
      description: "Fill out our quick quote form with your requirements",
    },
    {
      step: "02",
      title: "Get Pricing",
      description: "Receive competitive wholesale pricing within 24 hours",
    },
    {
      step: "03",
      title: "Confirm Order",
      description: "Confirm your order with advance booking (2-3 days)",
    },
    {
      step: "04",
      title: "Fresh Delivery",
      description: "Receive farm-fresh coconuts at your doorstep",
    },
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
            Wholesale Coconut Supplier in Bangladesh
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-3xl">
            Premium bulk fresh green coconuts and Diamond Cut daab for businesses. Farm-fresh quality,
            competitive pricing, and reliable delivery across Dhaka and nationwide.
          </p>
        </div>
      </div>

      {/* Clients Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Trusted by Businesses Across Bangladesh
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div key={client.title} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#D4A017] flex items-center justify-center mb-4">
                <client.icon className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{client.title}</h3>
              <p className="text-gray-600">{client.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Narkel for Wholesale?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We are Bangladesh's leading wholesale coconut supplier, providing farm-fresh quality
                to businesses across the country. Our hygienic processing and reliable delivery make us
                the preferred choice for businesses of all sizes.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {wholesaleBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bulk Order Process</h3>
              <div className="space-y-6">
                {orderSteps.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="text-3xl font-bold text-[#D4A017]">{step.step}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1A3C34] text-white py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Place Your Wholesale Order?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get your competitive quote in under 2 minutes
          </p>
          <a
            href="/#quote-form"
            className="inline-flex items-center bg-[#D4A017] hover:bg-[#c49515] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Wholesale Quote
          </a>
        </div>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Narkel - Wholesale Coconut Supplier",
            description:
              "Leading wholesale coconut supplier in Bangladesh. Bulk orders for restaurants, hospitals, supermarkets, and corporate events.",
            url: "https://narkel.co/wholesale/bulk-coconut-supplier",
            telephone: "+8801515620696",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Demra Staff Quarter, Gate No. 4",
              addressLocality: "Dhaka",
              addressCountry: "BD",
            },
            priceRange: "৳৳ - ৳৳৳",
          }),
        }}
      />
    </div>
  );
}
