"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-primary-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-accent-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container className="relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-200 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Shield className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Secure & Compliant Platform
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent">
                Your Gateway
              </span>
              <br />
              <span className="text-gray-900">
                to Digital Finance
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
              Buy, sell, and exchange cryptocurrency with confidence. 
              Lightning-fast transactions, bank-level security, and competitive rates.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                <Zap className="w-5 h-5 text-accent-500" />
                <span className="font-medium text-gray-700">Instant Transfers</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                <Shield className="w-5 h-5 text-accent-500" />
                <span className="font-medium text-gray-700">Bank-Grade Security</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                <Globe className="w-5 h-5 text-accent-500" />
                <span className="font-medium text-gray-700">Global Coverage</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" href="https://app.valiucapital.com">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" href="/how-it-works">
                Learn How It Works
              </Button>
            </div>

            {/* Trust Stats */}
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    $100M+
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Volume Processed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    50K+
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Active Users
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Uptime
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="relative lg:block hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Floating Cards */}
            <div className="relative w-full h-[600px]">
              {/* Main Card */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-primary rounded-3xl shadow-neon-lg p-8 flex flex-col justify-between"
                animate={{
                  y: [0, -20, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div>
                  <div className="text-white/80 text-sm mb-2">Total Balance</div>
                  <div className="text-white text-4xl font-bold">$24,580.50</div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex justify-between items-center text-white">
                      <span className="text-sm">Bitcoin</span>
                      <span className="font-semibold">0.842 BTC</span>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex justify-between items-center text-white">
                      <span className="text-sm">Ethereum</span>
                      <span className="font-semibold">12.5 ETH</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 1 */}
              <motion.div
                className="absolute top-20 right-10 bg-white rounded-2xl shadow-glass-lg p-4 flex items-center gap-3"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Transfer Complete</div>
                  <div className="font-semibold text-gray-900">+$5,000</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                className="absolute bottom-32 left-10 bg-white rounded-2xl shadow-glass-lg p-4 flex items-center gap-3"
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Security</div>
                  <div className="font-semibold text-gray-900">Verified</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
