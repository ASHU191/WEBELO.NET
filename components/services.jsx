"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Code, Smartphone, Globe, Rocket, Zap, Database, ArrowRight } from "lucide-react"

const services = [
  {
    icon: <Code className="w-10 h-10" />,
    title: "Web Development",
    description: "Custom websites built with the latest technologies to deliver exceptional user experiences.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Responsive Design",
    description: "Mobile-first designs that work flawlessly across all devices and screen sizes.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "E-Commerce Solutions",
    description: "Powerful online stores with secure payment gateways and inventory management.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: "Performance Optimization",
    description: "Speed up your website for better user experience and improved search rankings.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "CMS Integration",
    description: "Easy-to-use content management systems that give you full control of your website.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "API Development",
    description: "Custom API solutions to connect your website with other services and applications.",
    color: "from-purple-500 to-pink-500",
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-gray-800/80 text-sm font-medium text-purple-400 mb-4 border border-gray-700/50 backdrop-blur-sm">
            <span className="flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            We offer a comprehensive range of web development services to help your business thrive online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              {/* Border gradient */}
              <div className="absolute inset-0 p-0.5">
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>

              <div className="relative p-8 bg-gray-800 rounded-xl h-full flex flex-col">
                {/* Icon with enhanced animation */}
                <motion.div
                  className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-6 transform-gpu`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content with staggered animation */}
                <motion.h3
                  className="text-xl font-bold mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>

                {/* Learn more button with enhanced animation */}
                <div className="mt-auto">
                  <motion.button
                    className="flex items-center text-sm font-medium text-white group/btn"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      Learn more
                    </span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        duration: 1,
                        delay: index * 0.1,
                      }}
                    >
                      <ArrowRight
                        className={`ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                      />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

