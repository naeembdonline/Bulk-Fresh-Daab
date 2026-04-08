import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Narkel – Premium Daabs. Ready to Serve.",
  description: "Premium fresh young coconuts in bulk for super shops and corporate events in Dhaka. Direct from Noakhali farms. Modern packaging. Reliable supply.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Narkel – Premium Daabs. Ready to Serve.",
    description: "Premium fresh young coconuts in bulk for super shops and corporate events in Dhaka.",
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
