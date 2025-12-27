'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Wedding DJ Services',
      description: 'Make your special day perfect with our professional wedding DJ services. We work with you to create the perfect playlist and ensure smooth transitions throughout your reception.',
      features: [
        'Ceremony & Reception Music',
        'MC Services',
        'Custom Playlist Creation',
        'Sound System & Microphones',
        'Lighting Package Available',
        'Unlimited Planning Meetings',
      ],
      icon: '💒',
    },
    {
      title: 'Corporate Events',
      description: 'Professional entertainment for company parties, team building events, product launches, and more. We provide sophisticated sound and can adapt to any corporate atmosphere.',
      features: [
        'Professional Setup',
        'Background Music',
        'Announcements & Presentations',
        'Wireless Microphones',
        'Customizable Music Selection',
        'Punctual & Professional',
      ],
      icon: '🏢',
    },
    {
      title: 'Private Parties',
      description: 'Birthdays, anniversaries, graduations, or just because! We bring the party to you with energetic music and entertainment for all ages.',
      features: [
        'All Music Genres',
        'Interactive DJ Performance',
        'Dance Floor Lighting',
        'Special Song Requests',
        'Age-Appropriate Content',
        'Karaoke Available',
      ],
      icon: '🎈',
    },
    {
      title: 'School Events',
      description: 'Proms, homecomings, dances, and school functions. We create a fun, safe environment with age-appropriate music that students love.',
      features: [
        'Age-Appropriate Music',
        'Interactive Activities',
        'Professional Chaperoning',
        'Energetic Performance',
        'Modern Hit Songs',
        'Clean Lyrics Only',
      ],
      icon: '🎓',
    },
    {
      title: 'Club & Bar Events',
      description: 'Regular DJ nights, special events, and themed parties. We know how to keep the energy high and the dance floor packed.',
      features: [
        'Extended Sets',
        'Genre-Specific Nights',
        'Live Mixing',
        'Crowd Reading',
        'Professional Equipment',
        'Themed Events',
      ],
      icon: '🍸',
    },
    {
      title: 'Special Events',
      description: 'Festivals, fundraisers, community events, and more. Whatever your event, we have the experience and equipment to make it memorable.',
      features: [
        'Large Venue Experience',
        'Scalable Sound Systems',
        'Outdoor Equipment',
        'Multi-Day Events',
        'Custom Packages',
        'Event Coordination',
      ],
      icon: '🎪',
    },
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Professional DJ services tailored to your event. From intimate gatherings
            to large celebrations, we bring the perfect soundtrack to your special moments.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="gradient-bg text-white p-6 text-center">
                  <div className="text-6xl mb-3">{service.icon}</div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's talk! We'll help you choose the perfect package for your event.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/quote"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg glow-effect"
              >
                Get a Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
