"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const partners = [
  {
    name: "Muhammad Hamza",
    logo: "/hamza2.png",
    description: "Founder",
  },
  {
    name: "Muhammad Arsalan",
    logo: "/arsalan1.jpg",
    description: "Full Stack Developer",
  },
  {
    name: "Syed Huzaifa",
    logo: "/huzaifa2.jpg",
    description: "Wordpress Developer",
  },
  {
    name: "Hashir Meraj",
    logo: "/hashir.png",
    description: "Shopify Developer",
  },
  {
    name: "Syed Najam",
    logo: "/najam.jpg",
    description: "Mern Stack Developer",
  },
  {
    name: "Saad Ahmed",
    logo: "/saad.png",
    description: "App Developer",
  },
]

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(4) // xl: 4 items
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2) // md: 2 items
      } else {
        setItemsPerView(1) // sm: 1 item
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.ceil(partners.length / itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }

  // Get current visible partners
  const getVisiblePartners = () => {
    const startIndex = currentIndex * itemsPerView
    return partners.slice(startIndex, startIndex + itemsPerView)
  }

  return (
    <div className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-sm"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-gray-800/80 text-sm font-medium text-pink-400 mb-4 border border-gray-700/50 backdrop-blur-sm">
            <span className="flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-pink-400 mr-2 animate-pulse"></span>
              Our Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Trusted by Industry Leaders</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 text-center mb-6">
            We collaborate with forward-thinking companies and visionary leaders, including founders, team members, and
            industry experts, across various sectors.
          </p>
        </motion.div>

        {/* Carousel container */}
        <div className="relative px-8">
          {/* Carousel navigation */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-2 md:left-0 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700 text-white p-2 md:p-3 rounded-full backdrop-blur-sm border border-gray-700/50 shadow-lg transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-2 md:right-0 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700 text-white p-2 md:p-3 rounded-full backdrop-blur-sm border border-gray-700/50 shadow-lg transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel track */}
          <div className="overflow-hidden">
            <motion.div
              className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8`}
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {getVisiblePartners().map((partner, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center border border-gray-700/30 group hover:border-pink-500/50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={partner.logo || "/placeholder.svg?height=300&width=300"}
                      alt={partner.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center text-white">{partner.name}</h3>
                  <p className="text-sm text-gray-400 text-center mt-2">{partner.description}</p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-pink-500 w-8" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Become a Part of Our Team</h3>
              <p className="text-gray-300">
                Join us and be a part of an innovative and passionate team that's shaping the future.
              </p>
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <div className="flex-1 max-w-xs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-purple-500/20"
              >
                Request Partnership
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

