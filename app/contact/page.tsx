"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "support@valiucapital.com",
    link: "mailto:support@valiucapital.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Crypto Ave, Suite 456\nSan Francisco, CA 94102",
    link: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "24/7 Support Available",
    link: null,
  },
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    alert("Thank you for contacting us! We'll get back to you soon.");
    reset();
  };

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
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help. Reach out to our team anytime.
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </h2>
              </motion.div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-gradient-primary text-white">
                  <h3 className="font-bold text-xl mb-2">Need Immediate Help?</h3>
                  <p className="mb-4 text-white/90">
                    For urgent issues, our 24/7 support team is ready to assist you.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Live Chat
                  </Button>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Send Us a Message
                    </span>
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold mb-2 text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2 text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold mb-2 text-gray-700"
                      >
                        Subject
                      </label>
                      <input
                        {...register("subject")}
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="How can we help you?"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold mb-2 text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        {...register("message")}
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
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
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How long does verification take?",
                a: "Most accounts are verified within 24 hours. We'll notify you via email once your account is approved.",
              },
              {
                q: "What are your deposit limits?",
                a: "Limits vary by verification level and payment method. Starter accounts can deposit up to $10,000/month, Pro accounts up to $100,000/month.",
              },
              {
                q: "Do you offer corporate accounts?",
                a: "Yes! We offer dedicated business accounts with custom pricing and features. Contact our sales team for more information.",
              },
              {
                q: "Is my crypto insured?",
                a: "Yes, all crypto holdings are insured against security breaches and unauthorized access.",
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
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
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
