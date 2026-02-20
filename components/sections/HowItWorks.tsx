"use client";

import { 
  Wallet, 
  ArrowRightLeft, 
  Banknote, 
  Shield,
  CheckCircle,
  TrendingUp,
  Clock,
  Lock,
  AlertCircle,
  Zap
} from "lucide-react";
import Tabs, { Tab } from "../ui/Tabs";
import Card from "../ui/Card";
import Container from "../ui/Container";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const tabs: Tab[] = [
    {
      id: "deposit",
      label: "Deposit",
      icon: <Wallet />,
      content: <DepositTab />,
    },
    {
      id: "exchange",
      label: "Exchange",
      icon: <ArrowRightLeft />,
      content: <ExchangeTab />,
    },
    {
      id: "withdraw",
      label: "Withdraw",
      icon: <Banknote />,
      content: <WithdrawTab />,
    },
    {
      id: "security",
      label: "Security",
      icon: <Shield />,
      content: <SecurityTab />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white" id="how-it-works">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, secure, and fast. Everything you need to know about using Valiu Capital.
          </p>
        </motion.div>

        <Tabs tabs={tabs} defaultTab="deposit" />
      </Container>
    </section>
  );
}

function DepositTab() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Create Your Account",
      description: "Sign up in minutes with your email and complete KYC verification for security.",
    },
    {
      icon: Wallet,
      title: "Choose Payment Method",
      description: "Select from multiple options: Bank transfer (ACH/SEPA/SWIFT), credit/debit card, or wire transfer.",
    },
    {
      icon: Zap,
      title: "Make Your Deposit",
      description: "Enter the amount you want to deposit. We'll provide clear instructions and real-time processing.",
    },
    {
      icon: CheckCircle,
      title: "Funds Credited",
      description: "Your balance is credited instantly (cards) or within 1-3 business days (bank transfers).",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Visualization */}
      <Card className="bg-gradient-to-br from-primary-50 to-accent-50 p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Fund Your Account</h3>
            <p className="text-gray-600 mb-6">
              Add funds to your Valiu Capital account using your preferred payment method. 
              Fast, secure, and transparent.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Instant card deposits</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Low fees - from 0.5%</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Multiple currencies supported</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-glass p-6">
            <div className="text-sm text-gray-500 mb-2">Deposit Amount</div>
            <div className="text-4xl font-bold mb-4">$5,000.00</div>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Payment Method</div>
                <div className="font-semibold">Visa •••• 4242</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Processing Time</div>
                <div className="font-semibold text-green-600">Instant</div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Fee (1%)</span>
                <span className="font-semibold">$50.00</span>
              </div>
              <div className="border-t pt-3 flex justify-between">
                <span className="font-semibold">You'll Receive</span>
                <span className="font-bold text-lg text-primary-600">$4,950.00</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Step-by-Step Guide */}
      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-primary-600 font-semibold mb-1">
                    Step {index + 1}
                  </div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Payment Methods */}
      <Card>
        <h4 className="font-bold mb-4">Supported Payment Methods</h4>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <Banknote className="w-8 h-8 mx-auto mb-2 text-primary-600" />
            <div className="font-semibold mb-1">Bank Transfer</div>
            <div className="text-xs text-gray-500">ACH, SEPA, SWIFT</div>
            <div className="text-xs text-green-600 mt-1">0.5% fee</div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <Wallet className="w-8 h-8 mx-auto mb-2 text-primary-600" />
            <div className="font-semibold mb-1">Credit/Debit Card</div>
            <div className="text-xs text-gray-500">Visa, Mastercard</div>
            <div className="text-xs text-green-600 mt-1">1-2% fee</div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary-600" />
            <div className="font-semibold mb-1">Wire Transfer</div>
            <div className="text-xs text-gray-500">Domestic & International</div>
            <div className="text-xs text-green-600 mt-1">1% fee</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ExchangeTab() {
  return (
    <div className="space-y-8">
      {/* Exchange Interface Mockup */}
      <Card className="bg-gradient-to-br from-primary-50 to-accent-50 p-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Instant Crypto Exchange</h3>
          
          <div className="bg-white rounded-2xl shadow-glass p-6 space-y-4">
            {/* From */}
            <div>
              <div className="text-sm text-gray-500 mb-2">You Send</div>
              <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                    $
                  </div>
                  <div>
                    <div className="font-semibold">USD</div>
                    <div className="text-xs text-gray-500">US Dollar</div>
                  </div>
                </div>
                <div className="text-right">
                  <input 
                    type="text" 
                    className="bg-transparent text-2xl font-bold text-right outline-none w-32" 
                    placeholder="5,000"
                    disabled
                    value="5,000"
                  />
                  <div className="text-xs text-gray-500">Balance: $12,450</div>
                </div>
              </div>
            </div>

            {/* Swap Icon */}
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <ArrowRightLeft className="w-5 h-5 text-primary-600" />
              </div>
            </div>

            {/* To */}
            <div>
              <div className="text-sm text-gray-500 mb-2">You Receive</div>
              <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600">
                    ₿
                  </div>
                  <div>
                    <div className="font-semibold">BTC</div>
                    <div className="text-xs text-gray-500">Bitcoin</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">0.0842</div>
                  <div className="text-xs text-gray-500">≈ $5,000</div>
                </div>
              </div>
            </div>

            {/* Exchange Info */}
            <div className="bg-primary-50 rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Exchange Rate</span>
                <span className="font-semibold">1 BTC = $59,380</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fee (0.5%)</span>
                <span className="font-semibold">$25.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Processing Time</span>
                <span className="font-semibold text-green-600">Instant</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-primary text-white font-bold py-4 rounded-xl hover:shadow-neon transition-all">
              Exchange Now
            </button>
          </div>
        </div>
      </Card>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <Zap className="w-10 h-10 text-accent-500 mb-4" />
          <h4 className="font-bold mb-2">Real-Time Rates</h4>
          <p className="text-gray-600 text-sm">
            Always get the best market rates with live price updates every second.
          </p>
        </Card>
        <Card>
          <Clock className="w-10 h-10 text-accent-500 mb-4" />
          <h4 className="font-bold mb-2">Instant Settlement</h4>
          <p className="text-gray-600 text-sm">
            Crypto transactions settle immediately - no waiting periods.
          </p>
        </Card>
        <Card>
          <TrendingUp className="w-10 h-10 text-accent-500 mb-4" />
          <h4 className="font-bold mb-2">Competitive Fees</h4>
          <p className="text-gray-600 text-sm">
            Starting from 0.5% - transparent pricing with no hidden costs.
          </p>
        </Card>
      </div>

      {/* Supported Cryptocurrencies */}
      <Card>
        <h4 className="font-bold mb-4">Supported Cryptocurrencies</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: "Bitcoin", symbol: "BTC", color: "orange" },
            { name: "Ethereum", symbol: "ETH", color: "blue" },
            { name: "USDT", symbol: "USDT", color: "green" },
            { name: "USDC", symbol: "USDC", color: "blue" },
            { name: "Solana", symbol: "SOL", color: "purple" },
            { name: "Cardano", symbol: "ADA", color: "blue" },
            { name: "Ripple", symbol: "XRP", color: "gray" },
            { name: "Litecoin", symbol: "LTC", color: "gray" },
          ].map((crypto) => (
            <div key={crypto.symbol} className="border border-gray-200 rounded-lg p-3 text-center">
              <div className="font-bold">{crypto.symbol}</div>
              <div className="text-xs text-gray-500">{crypto.name}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function WithdrawTab() {
  const withdrawMethods = [
    {
      icon: Banknote,
      title: "ACH Transfer",
      description: "Direct deposit to US bank accounts",
      time: "1-2 business days",
      fee: "0.5%",
      min: "$10",
    },
    {
      icon: TrendingUp,
      title: "SEPA Transfer",
      description: "European bank transfers",
      time: "1-3 business days",
      fee: "0.5%",
      min: "€10",
    },
    {
      icon: Wallet,
      title: "SWIFT Transfer",
      description: "International wire transfers",
      time: "2-5 business days",
      fee: "1.5%",
      min: "$50",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <Card className="bg-gradient-to-br from-primary-50 to-accent-50 p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Withdraw to Your Bank Account</h3>
          <p className="text-gray-600 mb-6">
            Convert your crypto to fiat and send it directly to your bank account. 
            Fast, secure, and compliant withdrawals worldwide.
          </p>
        </div>
      </Card>

      {/* Withdrawal Methods */}
      <div className="grid md:grid-cols-3 gap-6">
        {withdrawMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <method.icon className="w-12 h-12 text-primary-600 mb-4" />
              <h4 className="font-bold mb-2">{method.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{method.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Processing Time</span>
                  <span className="font-semibold">{method.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Fee</span>
                  <span className="font-semibold text-green-600">{method.fee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Minimum</span>
                  <span className="font-semibold">{method.min}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Process Steps */}
      <Card>
        <h4 className="font-bold mb-6">Withdrawal Process</h4>
        <div className="space-y-4">
          {[
            {
              step: 1,
              title: "Select Amount & Method",
              description: "Choose how much to withdraw and your preferred transfer method.",
            },
            {
              step: 2,
              title: "Add Bank Details",
              description: "Enter your bank account information securely (one-time setup).",
            },
            {
              step: 3,
              title: "Confirm Transaction",
              description: "Review the details and confirm your withdrawal request.",
            },
            {
              step: 4,
              title: "Receive Funds",
              description: "Money arrives in your bank account within the stated timeframe.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-600">
                {item.step}
              </div>
              <div>
                <h5 className="font-semibold mb-1">{item.title}</h5>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Important Notes */}
      <Card className="bg-accent-50 border-accent-200">
        <div className="flex gap-3">
          <AlertCircle className="w-6 h-6 text-accent-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold mb-2">Important Notes</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>All withdrawals require KYC verification</li>
              <li>Bank account must be in your name</li>
              <li>Daily withdrawal limits apply based on verification level</li>
              <li>Processing times may vary during weekends and holidays</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

function SecurityTab() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Cold Storage",
      description: "95% of crypto assets stored offline in secure cold wallets, protected from online threats.",
    },
    {
      icon: Shield,
      title: "2FA Authentication",
      description: "Mandatory two-factor authentication for all accounts using TOTP or hardware keys.",
    },
    {
      icon: CheckCircle,
      title: "KYC/AML Compliance",
      description: "Full regulatory compliance with Know Your Customer and Anti-Money Laundering procedures.",
    },
    {
      icon: Lock,
      title: "Encryption",
      description: "Bank-grade 256-bit SSL encryption for all data transmission and storage.",
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Crypto holdings insured against security breaches and unauthorized access.",
    },
    {
      icon: AlertCircle,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and instant threat detection systems.",
    },
  ];

  const regulations = [
    {
      title: "MSB Registered",
      description: "Money Services Business registration with FinCEN",
      badge: "FinCEN",
    },
    {
      title: "SOC 2 Compliant",
      description: "System and Organization Controls certification",
      badge: "SOC 2",
    },
    {
      title: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      badge: "PCI",
    },
    {
      title: "GDPR Compliant",
      description: "General Data Protection Regulation adherence",
      badge: "GDPR",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <Card className="bg-gradient-to-br from-primary-50 to-accent-50 p-8">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-primary-600" />
          <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Security</h3>
          <p className="text-gray-600">
            Your assets are protected by the same security standards used by major financial institutions. 
            Multiple layers of protection ensure your funds and data remain safe.
          </p>
        </div>
      </Card>

      {/* Security Features */}
      <div className="grid md:grid-cols-3 gap-6">
        {securityFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <feature.icon className="w-10 h-10 text-primary-600 mb-4" />
              <h4 className="font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Regulations & Compliance */}
      <Card>
        <h4 className="font-bold mb-6">Regulatory Compliance</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          {regulations.map((reg, index) => (
            <div
              key={index}
              className="border border-primary-200 rounded-xl p-4 flex items-start gap-4"
            >
              <div className="flex-shrink-0 px-3 py-1 bg-primary-100 rounded-lg font-bold text-primary-700 text-sm">
                {reg.badge}
              </div>
              <div>
                <h5 className="font-semibold mb-1">{reg.title}</h5>
                <p className="text-sm text-gray-600">{reg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Trust Indicators */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">256-bit</div>
          <div className="text-sm text-gray-600">SSL Encryption</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
          <div className="text-sm text-gray-600">Cold Storage</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
          <div className="text-sm text-gray-600">Monitoring</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
          <div className="text-sm text-gray-600">Compliant</div>
        </Card>
      </div>
    </div>
  );
}
