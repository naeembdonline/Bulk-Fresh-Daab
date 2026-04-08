import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Fresh Daab | Bulk Young Coconut Supply Dhaka Bangladesh | Narkel",
  description:
    "Premium fresh daab (young coconut) bulk supply in Dhaka. Thailand-style diamond cut packaging for super shops and corporate events. From our farms — ready to serve. Get instant quote on WhatsApp.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      "Fresh Daab | Bulk Young Coconut Supply Dhaka Bangladesh | Narkel",
    description:
      "Premium fresh daab (young coconut) bulk supply in Dhaka. Thailand-style diamond cut packaging for super shops and corporate events. From our farms — ready to serve.",
    type: "website",
    siteName: "Narkel",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
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
