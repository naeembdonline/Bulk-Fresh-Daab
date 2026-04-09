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
    default: "Narkel — তাজা ডাব ডেলিভারি ঢাকায় | Fresh Coconut Delivery",
    template: "%s | Narkel",
  },
  description:
    "ঢাকায় তাজা, হাইজেনিক কাটা ডাব হোম ডেলিভারি। রেস্তোরাঁ, হাসপাতাল ও অফিসে bulk সাপ্লাই। অর্ডার করুন narkel.co তে।",
  keywords: [
    "ডাব ডেলিভারি ঢাকা",
    "fresh coconut delivery Dhaka",
    "তাজা ডাব",
    "daab delivery",
    "narkel",
    "নারকেল",
    "coconut supplier Dhaka",
    "ডাব অর্ডার",
    "green coconut Bangladesh",
  ],
  metadataBase: new URL("https://narkel.co"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Narkel — তাজা ডাব ডেলিভারি ঢাকায় | Fresh Coconut Delivery",
    description:
      "ঢাকায় তাজা, হাইজেনিক কাটা ডাব হোম ডেলিভারি। রেস্তোরাঁ, হাসপাতাল ও অফিসে bulk সাপ্লাই। অর্ডার করুন narkel.co তে।",
    url: "https://narkel.co",
    siteName: "Narkel",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://narkel.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Narkel",
    "url": "https://narkel.co",
    "description": "Fresh coconut (daab) delivery in Dhaka, Bangladesh",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "BD",
    },
    "sameAs": ["https://www.facebook.com/narkel"],
    "priceRange": "৳৳",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does delivery take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To ensure farm-fresh quality and precision processing, we require at least 2–3 days advance booking for bulk orders.",
        },
      },
      {
        "@type": "Question",
        "name": "Where do you deliver?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver across Dhaka city, focusing on corporate offices, super shops, and events.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the minimum order quantity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our minimum bulk order starts from 12 pieces.",
        },
      },
      {
        "@type": "Question",
        "name": "Are the coconuts fresh and hygienic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, they are sourced directly from Noakhali farms and processed using premium diamond-cut and vacuum-sealing methods for maximum hygiene.",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
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
