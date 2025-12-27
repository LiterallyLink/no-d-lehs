'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: 'Professional Sound',
      description: 'Top-quality audio equipment for crystal clear sound',
    },
    {
      title: 'Amazing Lighting',
      description: 'Dynamic lighting effects to set the perfect mood',
    },
    {
      title: 'All Events',
      description: 'Weddings, parties, corporate events, and more',
    },
    {
      title: 'Experienced DJ',
      description: 'Years of experience reading crowds and keeping the energy high',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-bg-animated min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              No-D-Lehs DJ Services
            </h1>
            <p className="text-2xl md:text-3xl mb-8">
              Making Your Events Unforgettable
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Professional DJ services with state-of-the-art equipment,
              incredible sound, and the perfect vibe for any occasion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/quote"
                  className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg glow-effect"
                >
                  Get a Free Quote
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/packages"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  View Packages
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
          >
            Why Choose Us?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Book Your Event?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's make your event one to remember! Contact us today for a free consultation
              and custom quote tailored to your needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/quote"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg glow-effect"
              >
                Request a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
