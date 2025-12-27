'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PackagesPage() {
  const packages = [
    {
      name: 'Essential',
      price: '$500',
      duration: '4 hours',
      description: 'Perfect for smaller gatherings and intimate events',
      features: [
        'Professional DJ for 4 hours',
        'Quality sound system',
        'Basic lighting setup',
        'Music from all genres',
        'Pre-event consultation',
        'Online playlist collaboration',
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Premium',
      price: '$900',
      duration: '6 hours',
      description: 'Our most popular package for weddings and parties',
      features: [
        'Professional DJ for 6 hours',
        'Premium sound system',
        'Advanced lighting package',
        'Wireless microphones (2)',
        'MC services included',
        'Unlimited planning meetings',
        'Custom song requests',
        'Dance floor lighting effects',
      ],
      popular: true,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Ultimate',
      price: '$1,500',
      duration: '8 hours',
      description: 'The complete experience for unforgettable events',
      features: [
        'Professional DJ for 8 hours',
        'Premium sound system',
        'Deluxe lighting package',
        'Wireless microphones (4)',
        'MC services included',
        'Unlimited planning meetings',
        'Custom monogramming',
        'Photo booth (2 hours)',
        'Fog machine & special effects',
        'Dance floor lighting',
        'Ceremony sound setup',
        'Cocktail hour music',
      ],
      popular: false,
      color: 'from-pink-500 to-red-600',
    },
  ];

  const addOns = [
    { name: 'Extra Hour', price: '$150' },
    { name: 'Photo Booth (per hour)', price: '$200' },
    { name: 'Karaoke Setup', price: '$100' },
    { name: 'Additional Lighting', price: '$150' },
    { name: 'Fog Machine', price: '$75' },
    { name: 'Ceremony Sound', price: '$100' },
    { name: 'Custom Monogram', price: '$150' },
    { name: 'Wireless Microphone (each)', price: '$50' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            DJ Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Choose the perfect package for your event, or create a custom package
            that fits your specific needs and budget.
          </motion.p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className={`relative bg-white rounded-lg shadow-xl overflow-hidden ${
                  pkg.popular ? 'ring-4 ring-purple-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 rounded-bl-lg font-bold">
                    Most Popular
                  </div>
                )}

                <div className={`bg-gradient-to-r ${pkg.color} text-white p-6 text-center`}>
                  <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-5xl font-bold my-4">{pkg.price}</div>
                  <div className="text-lg opacity-90">{pkg.duration}</div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-center">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/quote"
                      className={`block w-full text-center bg-gradient-to-r ${pkg.color} text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow`}
                    >
                      Choose {pkg.name}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add-ons Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Add-Ons & Extras
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Customize any package with these additional services
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {addOns.map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 p-4 rounded-lg text-center border-2 border-gray-200 hover:border-purple-500 transition-colors"
                >
                  <div className="font-bold text-gray-800 mb-2">{addon.name}</div>
                  <div className="text-2xl font-bold text-purple-600">{addon.price}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Need a Custom Package?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Every event is unique. Let's create a custom package that perfectly
              fits your needs and budget.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/quote"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg glow-effect"
              >
                Request Custom Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
