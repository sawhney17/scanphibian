'use client';
import React from 'react';
import { motion } from 'framer-motion';


const PLACEHOLDER_IMAGE_URL = '';

const FEATURES = [
  {
    title: 'some fetureerejksdfhbksdjf',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'some mioreefetureerejksdfhbksdjf',
    description:
       'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'more thigsdk jgls ',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'even mre hsjkdsf sd',
    description:
     'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function ScanphibianLanding() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-blue-700 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Scanphibian
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Leap into a new era of patient information and safety. Powered by AR and AI.
        </motion.p>
         
        <motion.button
          className="px-8 py-3 text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-800"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            className="bg-blue-50 rounded-full blur-3xl opacity-40 w-96 h-96 absolute -top-32 -left-32"
            initial={{ scale: 0 }}
            animate={{ scale: 1.4 }}
            transition={{ duration: 2 }}
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Key Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Screenshot Section */}
      <section className="py-16 bg-white flex flex-col items-center">
        <div className="max-w-6xl w-full px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            App Preview
          </motion.h2>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-screen-md shadow-md overflow-hidden rounded-lg">
              <img
                src={PLACEHOLDER_IMAGE_URL}
                alt="Scanphibian Screenshot"
                className="object-cover w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white flex flex-col items-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Dive In?
        </motion.h2>

        <motion.p
          className="text-lg max-w-2xl text-center mb-8 text-blue-100"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Experience the joy of patient information and optimal with our AR and AI powered solution
        </motion.p>

        <motion.button
          className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Install Now
        </motion.button>
      </section>
    </main>
  );
}