"use client";

import { motion } from "framer-motion";
import { Shield, Users, Target, TrendingUp, Award, Globe } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Your assets and data are protected with bank-grade security measures and insurance coverage.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "We build our platform around your needs, with 24/7 support and user-friendly interfaces.",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "No hidden fees, no surprises. Everything is clear and upfront from the start.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We continuously improve our platform with the latest technology and features.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP at Goldman Sachs with 15+ years in fintech and blockchain.",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer specializing in distributed systems and crypto infrastructure.",
  },
  {
    name: "Emily Thompson",
    role: "Head of Compliance",
    bio: "20 years experience in regulatory compliance and risk management.",
  },
  {
    name: "David Kim",
    role: "Head of Security",
    bio: "Former cybersecurity lead at major financial institutions.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Valiu Capital was born with a mission to democratize crypto access.",
  },
  {
    year: "2021",
    title: "Platform Launch",
    description: "Launched our beta platform with support for Bitcoin and Ethereum.",
  },
  {
    year: "2022",
    title: "MSB Registration",
    description: "Achieved full regulatory compliance and MSB registration.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded to 150+ countries with multi-currency support.",
  },
  {
    year: "2024",
    title: "$100M+ Volume",
    description: "Processed over $100M in transactions serving 50,000+ users.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-12">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                About Valiu Capital
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to make cryptocurrency accessible, secure, and easy for everyone.
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Valiu Capital was founded on the belief that everyone should have access to the financial opportunities 
                that cryptocurrency provides. We've built a platform that combines the security and trust of traditional 
                finance with the innovation and speed of blockchain technology.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of financial experts, engineers, and compliance professionals work tirelessly to ensure that 
                your experience is seamless, secure, and compliant with all regulatory requirements.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're buying your first Bitcoin or managing a multi-million dollar portfolio, we're here 
                to support you every step of the way.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[400px] lg:h-[500px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl shadow-neon-lg" />
              <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Globe className="w-24 h-24 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Trusted Globally</h3>
                  <p className="text-lg text-white/90">
                    Serving 50,000+ users across 150+ countries
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
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
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-neon">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              From startup to trusted platform
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex gap-6 mb-12 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-neon">
                    <span className="text-white font-bold text-lg">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-lg">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
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
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 shadow-neon flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust Indicators */}
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
                Why Trust Us
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Fully Regulated",
                description: "MSB registered and compliant with all financial regulations",
              },
              {
                icon: Award,
                title: "Industry Leading",
                description: "Recognized as one of the most secure crypto platforms",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "4.9/5 rating from 10,000+ verified customer reviews",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <item.icon className="w-16 h-16 mx-auto mb-4 text-primary-600" />
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
