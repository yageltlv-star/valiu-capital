"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  DollarSign, 
  Globe, 
  Clock, 
  Users,
  TrendingUp,
  Lock,
  Headphones
} from "lucide-react";
import Container from "../ui/Container";
import Card from "../ui/Card";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Transactions",
    description: "Instant crypto purchases and exchanges. Most transactions complete in under 60 seconds.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Multi-layer security with 2FA, cold storage, and insurance coverage for your peace of mind.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Transparent pricing starting from 0.5%. No hidden fees, no surprises.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Support for 150+ countries with multiple payment methods and currencies.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Trade crypto anytime, anywhere. Our platform never sleeps.",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Users,
    title: "KYC/AML Compliant",
    description: "Fully regulated and compliant with international financial standards.",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Rates",
    description: "Live market prices updated every second for the best exchange rates.",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Lock,
    title: "Cold Storage",
    description: "95% of crypto assets stored offline in secure cold wallets.",
    color: "from-gray-400 to-gray-600",
  },
  {
    icon: Headphones,
    title: "Premium Support",
    description: "Dedicated customer support team ready to help you 24/7.",
    color: "from-red-400 to-red-600",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Why Choose Valiu Capital
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to buy, sell, and exchange cryptocurrency with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-xl">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
