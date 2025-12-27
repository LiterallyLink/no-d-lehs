'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventLocation: '',
    guestCount: '',
    duration: '',
    package: '',
    addons: [] as string[],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddonChange = (addon: string) => {
    setFormData({
      ...formData,
      addons: formData.addons.includes(addon)
        ? formData.addons.filter(a => a !== addon)
        : [...formData.addons, addon],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // In a real application, this would send the data to a backend
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your quote request has been received. We'll get back to you within 24 hours
            with a custom quote for your event!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

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
            Get a Free Quote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Fill out the form below and we'll send you a custom quote within 24 hours.
            No obligation, just honest pricing for your special event.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Event Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="eventType">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900"
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="school">School Event</option>
                  <option value="club">Club/Bar Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="eventDate">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="guestCount">
                  Expected Guest Count
                </label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="eventLocation">
                Event Location *
              </label>
              <input
                type="text"
                id="eventLocation"
                name="eventLocation"
                required
                value={formData.eventLocation}
                onChange={handleChange}
                placeholder="City, State or Full Address"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="duration">
                Event Duration
              </label>
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900"
              >
                <option value="">Select Duration</option>
                <option value="4">4 hours</option>
                <option value="6">6 hours</option>
                <option value="8">8 hours</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="package">
                Preferred Package
              </label>
              <select
                id="package"
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900"
              >
                <option value="">Select Package</option>
                <option value="essential">Essential - $500</option>
                <option value="premium">Premium - $900</option>
                <option value="ultimate">Ultimate - $1,500</option>
                <option value="custom">Custom Package</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-4">
                Interested Add-ons (Optional)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Photo Booth', 'Karaoke', 'Extra Lighting', 'Fog Machine', 'Custom Monogram'].map((addon) => (
                  <label key={addon} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.addons.includes(addon)}
                      onChange={() => handleAddonChange(addon)}
                      className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="ml-2 text-gray-700">{addon}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Additional Details or Special Requests
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your event, music preferences, or any special requests..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-gray-900"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-lg font-bold text-lg glow-effect"
            >
              Request Your Free Quote
            </motion.button>

            <p className="text-gray-500 text-sm mt-4 text-center">
              * Required fields. We respect your privacy and will never share your information.
            </p>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
