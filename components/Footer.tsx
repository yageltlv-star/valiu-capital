"use client";

import Link from "next/link";
import { Twitter, Linkedin, Mail, Shield, Lock, Check } from "lucide-react";
import Container from "./ui/Container";

const footerLinks = {
  product: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Features", href: "/#features" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/valiucapital", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/valiucapital", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@valiucapital.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900 text-white">
      {/* Trust Badges */}
      <div className="border-b border-white/10">
        <Container className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-8 h-8 text-accent-400" />
              <div className="text-sm font-semibold">MSB Registered</div>
              <div className="text-xs text-gray-400">FinCEN Compliant</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Lock className="w-8 h-8 text-accent-400" />
              <div className="text-sm font-semibold">Bank-Grade Security</div>
              <div className="text-xs text-gray-400">256-bit Encryption</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-8 h-8 text-accent-400" />
              <div className="text-sm font-semibold">KYC/AML Compliant</div>
              <div className="text-xs text-gray-400">Verified Platform</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-8 h-8 text-accent-400" />
              <div className="text-sm font-semibold">Cold Storage</div>
              <div className="text-xs text-gray-400">95% Assets Secured</div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-neon">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold">Valiu Capital</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Your trusted crypto on/off ramp platform. Buy, sell, and exchange digital assets with ease and security.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Valiu Capital. All rights reserved.</p>
            <p>Built with security and compliance in mind.</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
