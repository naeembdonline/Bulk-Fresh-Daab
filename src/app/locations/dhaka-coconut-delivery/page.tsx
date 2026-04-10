import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Truck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Coconut Delivery in Dhaka | Fresh Daab Delivery Service",
  description:
    "Premium fresh coconut delivery service in Dhaka, Bangladesh. Fast delivery to Demra, Gulshan, Banani, Dhanmondi, Uttara, and all areas. Order online for doorstep delivery.",
  keywords: [
    "coconut delivery Dhaka",
    "ডাব ডেলিভারি ঢাকা",
    "fresh coconut delivery",
    "daab delivery service",
    "coconut home delivery",
    "Dhaka coconut supplier",
    "quick coconut delivery",
    "same day coconut delivery",
  ],
  openGraph: {
    title: "Coconut Delivery in Dhaka | Fresh Daab Delivery Service",
    description:
      "Fast fresh coconut delivery across Dhaka. Doorstep delivery to all areas with farm-fresh quality.",
    url: "https://narkel.co/locations/dhaka-coconut-delivery",
    type: "website",
  },
};

export default function DhakaCoconutDeliveryPage() {
  const areas = [
    "Demra",
    "Gulshan",
    "Banani",
    "Dhanmondi",
    "Uttara",
    "Baridhara",
    "Mohammadpur",
    "Mirpur",
    "Pallabi",
    "Cantonment",
  ];

  const deliveryFeatures = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "2-3 days for bulk orders, same-day available for urgent requests",
    },
    {
      icon: CheckCircle2,
      title: "Fresh Quality Guaranteed",
      description: "Farm-fresh coconuts delivered directly from Noakhali farms",
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Delivery available from 8AM to 8PM, Saturday to Thursday",
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Serving all areas of Dhaka city and surrounding regions",
    },
  ];

  const orderingSteps = [
    "Choose your coconut quantity (min. 12 pieces for bulk)",
    "Provide your delivery address and contact information",
    "Confirm your order with 2-3 days advance booking",
    "Receive fresh coconuts at your doorstep",
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
            Coconut Delivery in Dhaka
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-3xl">
            Premium fresh coconut delivery service across Dhaka city. Farm-fresh quality, hygienic
            processing, and reliable doorstep delivery to your area.
          </p>
        </div>
      </div>

      {/* Delivery Areas */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Areas We Serve in Dhaka
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {areas.map((area) => (
            <div
              key={area}
              className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <MapPin className="size-6 text-[#D4A017] mx-auto mb-2" />
              <span className="text-sm font-semibold text-gray-900">{area}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-6">
          And many more areas across Dhaka city.{" "}
          <a href="/#quote-form" className="text-[#D4A017] font-semibold hover:underline">
            Contact us
          </a>{" "}
          to check availability in your area.
        </p>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our Delivery Service?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4A017] flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="size-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Order */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          How to Order for Delivery
        </h2>
        <div className="space-y-4">
          {orderingSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#D4A017] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <p className="text-lg text-gray-700 pt-1">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1A3C34] text-white py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Order Fresh Coconuts in Dhaka?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get your quote and schedule delivery in under 2 minutes
          </p>
          <a
            href="/#quote-form"
            className="inline-flex items-center bg-[#D4A017] hover:bg-[#c49515] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Delivery Quote
          </a>
        </div>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DeliveryService",
            name: "Narkel - Coconut Delivery Service",
            description: "Fresh coconut delivery service in Dhaka, Bangladesh",
            areaServed: {
              "@type": "City",
              name: "Dhaka",
            },
            offers: {
              "@type": "Offer",
              description: "Fresh coconut delivery with farm-to-doorstep service",
            },
          }),
        }}
      />
    </div>
  );
}
