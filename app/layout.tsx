import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valiu Capital - Your Trusted Crypto On/Off Ramp Platform",
  description: "Buy, sell, and exchange cryptocurrency with ease. Lightning-fast transactions, bank-level security, and competitive rates.",
  keywords: "crypto, cryptocurrency, bitcoin, ethereum, on-ramp, off-ramp, buy crypto, sell crypto, exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
