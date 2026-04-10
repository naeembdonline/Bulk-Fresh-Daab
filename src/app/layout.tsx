import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Narkel.co — Wholesale Coconut Supplier in Bangladesh | Premium Diamond Cut Daab",
    template: "%s | Narkel",
  },
  description:
    "Premium wholesale supplier of fresh green coconuts and Diamond Cut coconuts in Bangladesh. Located in Demra, Dhaka. Bulk orders for restaurants, hospitals, supermarkets, and events. Farm-fresh, hygienic, vacuum-sealed delivery.",
  keywords: [
    // Bengali Keywords
    "নারকেল",
    "ডাব",
    "পাইকারি ডাব বিক্রেতা",
    "তাজা ডাব",
    "ডাব সরবরাহকারী",
    "ডাব ডেলিভারি ঢাকা",
    "পাইকারি নারকেল",
    "ডায়মন্ড কাট ডাব",
    "সতেজ ডাব",
    "ডাব পাইকারি বাজার",
    "ঢাকায় ডাব সরবরাহ",
    "বালু ডাব",
    "পানি ডাব",

    // English Keywords
    "wholesale coconut supplier",
    "bulk coconut supplier Bangladesh",
    "premium diamond cut coconut",
    "fresh green coconut",
    "coconut wholesaler Dhaka",
    "daab supplier",
    "coconut delivery",
    "bulk coconut order",
    "fresh coconut Bangladesh",
    "coconut for restaurants",
    "coconut for hospitals",
    "wholesale daab",
    "tender coconut",
    "green coconut supplier",
    "coconut distributor",

    // Location-Based Keywords
    "Demra coconut supplier",
    "Dhaka coconut wholesale",
    "Bangladesh coconut exporter",
    "Narkel.co",
  ],
  metadataBase: new URL("https://narkel.co"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Narkel.co — Premium Wholesale Coconut Supplier in Bangladesh",
    description:
      "Bangladesh's leading supplier of fresh green coconuts and Diamond Cut coconuts. Farm-fresh, hygienic, vacuum-sealed. Bulk orders for businesses in Dhaka and nationwide delivery.",
    url: "https://narkel.co",
    siteName: "Narkel",
    locale: "en_BD",
    alternateLocale: ["bn_BD"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Narkel - Premium Coconut Supplier in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Narkel.co — Premium Wholesale Coconut Supplier",
    description:
      "Fresh green coconuts & Diamond Cut daab. Bulk wholesale supplier in Dhaka, Bangladesh. Farm-to-doorstep delivery.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://narkel.co",
  },
  verification: {
    google: "google-site-verification-token",
    yandex: "yandex-verification-token",
  },
  authors: [{ name: "Narkel Team" }],
  creator: "Narkel",
  publisher: "Narkel",
  category: "Food & Beverage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced JSON-LD for LocalBusiness with complete details
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Narkel",
    "alternateName": "Narkel.co",
    "url": "https://narkel.co",
    "logo": "https://narkel.co/logo.png",
    "description": "Premium wholesale supplier of fresh green coconuts and Diamond Cut coconuts in Bangladesh. Farm-fresh, hygienic, vacuum-sealed delivery.",
    "email": "info@narkel.co",
    "telephone": "+880-1XXX-XXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Demra Staff Quarter, Gate No. 4",
      "addressLocality": "Dhaka",
      "addressRegion": "Dhaka",
      "postalCode": "1362",
      "addressCountry": "BD",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.6992",
      "longitude": "90.4326",
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "23.6992",
        "longitude": "90.4326",
      },
      "geoRadius": "100000",
    },
    "sameAs": [
      "https://www.facebook.com/narkel",
      "https://www.instagram.com/narkel",
      "https://www.linkedin.com/company/narkel",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880-1XXX-XXXXXX",
      "contactType": "sales",
      "availableLanguage": ["Bengali", "English"],
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://narkel.co",
    "name": "Narkel - Premium Coconut Supplier",
    "image": "https://narkel.co/og-image.jpg",
    "url": "https://narkel.co",
    "telephone": "+880-1XXX-XXXXXX",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "20:00",
    },
    "priceRange": "৳৳ - ৳৳৳",
    "currenciesAccepted": "BDT",
    "paymentAccepted": ["Cash", "Bank Transfer", "Bkash"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156",
    },
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fresh Green Coconut (ডাব)",
    "alternateName": "Diamond Cut Coconut",
    "description": "Premium quality fresh green coconuts sourced directly from farms. Hygienically processed using diamond-cut technology and vacuum-sealed for freshness.",
    "brand": {
      "@type": "Brand",
      "name": "Narkel",
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BDT",
      "availability": "https://schema.org/InStock",
      "offeredBy": {
        "@type": "Organization",
        "name": "Narkel",
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the minimum order quantity for bulk coconut supply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our minimum bulk order starts from 12 pieces. For wholesale orders, we offer competitive pricing and discounts based on quantity.",
        },
      },
      {
        "@type": "Question",
        "name": "How long does delivery take in Dhaka?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To ensure farm-fresh quality and precision processing, we require at least 2–3 days advance booking for bulk orders. Same-day delivery may be available for urgent orders.",
        },
      },
      {
        "@type": "Question",
        "name": "Where does Narkel deliver coconuts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver across Dhaka city and surrounding areas. Our main service areas include Demra, Gulshan, Banani, Dhanmondi, Uttara, and other major locations in Bangladesh.",
        },
      },
      {
        "@type": "Question",
        "name": "Are the coconuts fresh and hygienic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our coconuts are sourced directly from Noakhali farms and processed using premium diamond-cut and vacuum-sealing methods for maximum hygiene and freshness.",
        },
      },
      {
        "@type": "Question",
        "name": "What is Diamond Cut coconut?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diamond Cut is our premium hygienic coconut processing method. We cut the coconut in a diamond shape using sanitized equipment and vacuum-seal it immediately to preserve freshness and prevent contamination.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you offer wholesale pricing for restaurants and businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer special wholesale pricing for restaurants, hospitals, supermarkets, corporate events, and other businesses. Contact us for custom quotes based on your requirements.",
        },
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Premium Wholesale Coconut Supplier in Bangladesh - Narkel",
    "description": "Discover Bangladesh's leading supplier of fresh green coconuts and Diamond Cut coconuts. Farm-fresh quality, hygienic processing, and reliable delivery.",
    "image": "https://narkel.co/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": "Narkel Team",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Narkel",
      "logo": {
        "@type": "ImageObject",
        "url": "https://narkel.co/logo.png",
      },
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1A3C34" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        {/* Scroll Animation Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof IntersectionObserver !== 'undefined') {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                      }
                    });
                  },
                  { threshold: 0.1, rootMargin: '-60px 0px' }
                );
                document.addEventListener('DOMContentLoaded', () => {
                  document.querySelectorAll('.scroll-animate').forEach((el) => {
                    observer.observe(el);
                  });
                });
              }
            `,
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
