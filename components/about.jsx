"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Users, Award, Clock } from "lucide-react"

export default function About() {
  const benefits = [
    "Custom solutions tailored to your business needs",
    "Responsive designs that work on all devices",
    "SEO-friendly development for better visibility",
    "Fast loading times for improved user experience",
    "Secure code with regular updates and maintenance",
    "Dedicated support team available 24/7",
  ]

  const stats = [
    { icon: <Users className="w-6 h-6 text-purple-400" />, value: "50+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6 text-pink-400" />, value: "70+", label: "Projects Completed" },
    { icon: <Clock className="w-6 h-6 text-cyan-400" />, value: "3+", label: "Years Experience" },
  ]

  return (
    <div className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <Image
                src="/team2.jpg?height=600&width=600"
                alt="About Us"
                width={600}
                height={600}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating elements */}
              <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-gray-700/50">
                Since 2023
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30 flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-gray-800/80 p-2 rounded-lg mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 -mt-4 -ml-4 w-24 h-24 bg-purple-500 rounded-lg opacity-20 blur-lg"></div>
            <div className="absolute bottom-0 right-0 -mb-4 -mr-4 w-24 h-24 bg-cyan-500 rounded-lg opacity-20 blur-lg"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <motion.div
                className="inline-block px-4 py-1 rounded-full bg-gray-700/80 text-sm font-medium text-purple-400 mb-4 border border-gray-600/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                  About Us
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                We Create{" "}
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
                  Digital Solutions
                </span>{" "}
                For Your Business
              </motion.h2>
            </div>

            <motion.p
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              With over 3 years of experience in web development, we've helped businesses of all sizes establish a
              strong online presence. Our team of skilled developers, designers, and digital strategists work together
              to deliver exceptional results.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {/* <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-purple-500/20"
              >
                Learn More
              </motion.button> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

