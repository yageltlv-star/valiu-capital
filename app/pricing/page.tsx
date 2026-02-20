"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const pricingTiers = [
  {
    name: "Starter",
    price: "0.5%",
    description: "Perfect for individuals getting started with crypto",
    features: [
      "Up to $10,000/month volume",
      "0.5% trading fee",
      "1% deposit fee (card)",
      "0.5% withdrawal fee",
      "Basic support",
      "Standard KYC",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "0.3%",
    description: "For active traders and businesses",
    features: [
      "Up to $100,000/month volume",
      "0.3% trading fee",
      "0.8% deposit fee (card)",
      "0.3% withdrawal fee",
      "Priority support",
      "Advanced KYC",
      "API access",
      "Dedicated account manager",
    ],
    cta: "Start Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For institutions and high-volume traders",
    features: [
      "Unlimited volume",
      "Custom fee structure",
      "Negotiable deposit fees",
      "Negotiable withdrawal fees",
      "24/7 premium support",
      "White-glove onboarding",
      "Full API suite",
      "Dedicated relationship manager",
      "Custom integrations",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const feeComparison = [
  {
    service: "Deposit - Bank Transfer",
    starter: "0.5%",
    pro: "0.3%",
    enterprise: "Custom",
  },
  {
    service: "Deposit - Card",
    starter: "1%",
    pro: "0.8%",
    enterprise: "Custom",
  },
  {
    service: "Trading/Exchange",
    starter: "0.5%",
    pro: "0.3%",
    enterprise: "Custom",
  },
  {
    service: "Withdrawal - ACH/SEPA",
    starter: "0.5%",
    pro: "0.3%",
    enterprise: "Custom",
  },
  {
    service: "Withdrawal - SWIFT",
    starter: "1.5%",
    pro: "1%",
    enterprise: "Custom",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-12">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              No hidden fees. No surprises. Choose the plan that fits your needs.
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Pricing Tiers */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full relative ${
                    tier.popular
                      ? "border-2 border-primary-500 shadow-neon-lg"
                      : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold mb-2">
                      {tier.price === "Custom" ? (
                        <span className="text-3xl">Custom</span>
                      ) : (
                        <>
                          <span className="text-primary-600">{tier.price}</span>
                          <span className="text-xl text-gray-500"> /trade</span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.popular ? "primary" : "outline"}
                    href={
                      tier.name === "Enterprise"
                        ? "/contact"
                        : "https://app.valiucapital.com"
                    }
                  >
                    {tier.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fee Comparison Table */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Detailed Fee Breakdown
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Complete transparency on all our fees
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-bold">Service</th>
                    <th className="text-center py-4 px-4 font-bold">Starter</th>
                    <th className="text-center py-4 px-4 font-bold bg-primary-50">
                      Pro
                    </th>
                    <th className="text-center py-4 px-4 font-bold">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeComparison.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-4 font-medium text-gray-700">
                        {row.service}
                      </td>
                      <td className="py-4 px-4 text-center">{row.starter}</td>
                      <td className="py-4 px-4 text-center bg-primary-50 font-semibold text-primary-700">
                        {row.pro}
                      </td>
                      <td className="py-4 px-4 text-center">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </motion.div>

          <motion.div
            className="mt-8 text-center text-sm text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>* Minimum fees may apply. Enterprise pricing is customized based on volume and requirements.</p>
          </motion.div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Pricing FAQs
              </span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Are there any hidden fees?",
                a: "No. All fees are transparently displayed before you confirm any transaction. What you see is what you pay.",
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes! You can upgrade to a higher tier at any time. Your new fee structure applies immediately to all future transactions.",
              },
              {
                q: "How does volume-based pricing work?",
                a: "Higher trading volumes automatically qualify you for lower fees. We'll notify you when you're eligible for an upgrade.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank transfers (ACH, SEPA, SWIFT), credit/debit cards, and wire transfers. Each has different fee structures.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="font-bold mb-2 text-lg">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
