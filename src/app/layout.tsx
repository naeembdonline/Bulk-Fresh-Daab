import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Narkel – Premium Fresh Young Coconuts in Bulk | Direct from Noakhali Farms",
  description: "Premium fresh young coconuts (daab) in bulk for super shops and corporate events in Dhaka. Thailand-style diamond-cut packaging. Zero middlemen.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Narkel – Premium Fresh Young Coconuts in Bulk",
    description: "Premium fresh young coconuts (daab) in bulk for super shops and corporate events in Dhaka. Thailand-style diamond-cut packaging. Zero middlemen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
