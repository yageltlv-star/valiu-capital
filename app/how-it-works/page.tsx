import HowItWorks from "@/components/sections/HowItWorks";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen pt-12">
      <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                How Valiu Capital Works
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about depositing, exchanging, withdrawing, and staying secure.
            </p>
          </div>
        </Container>
      </div>
      <HowItWorks />
    </main>
  );
}
