"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "/2.png?height=100&width=100",
    quote:
      "Working with Webelo has been a game-changer for our business. They built a website that worked perfectly for us and helped increase our online sales by 40%.",
  } ,

  {
    name: "Michael Chen",
    position: "Marketing Director, GrowthLabs",
    image: "/1.png?height=100&width=100",
    quote:
      "The Webelo team really understood what we needed. They made a beautiful website that represents our brand and helped us connect better with our users.",
  }, 
  {
    name: "Emily Rodriguez",
    position: "Founder, EcoShop",
    image: "/3.png?height=100&width=100",
    quote:
      "I’m so happy with Webelo! They turned our old website into a modern online store that's easy to manage, and our sales have grown a lot.",
  }, 
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-gray-700/80 text-sm font-medium text-cyan-400 mb-4 border border-gray-600/50 backdrop-blur-sm">
            <span className="flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              Client Feedback
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="bg-gray-700/30 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-600/30 relative"
          >
            <motion.div
              className="absolute top-8 left-8 w-12 h-12 text-gray-600 opacity-50"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1, 0.9, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
              }}
            >
              <Quote />
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <motion.div
                  className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-700 mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{
                    y: [0, -5, 0],
                    transition: {
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      duration: 2,
                    },
                  }}
                >
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />

                  {/* Add a subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20"
                    animate={{
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                    }}
                  />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {testimonials[currentIndex].name}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-400 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {testimonials[currentIndex].position}
                </motion.p>
              </div>

              <div className="md:w-2/3">
                <motion.blockquote
                  className="text-xl italic text-gray-300 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  "{testimonials[currentIndex].quote}"
                </motion.blockquote>
              </div>
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gray-600"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={
                    index === currentIndex
                      ? {
                          scale: [1, 1.2, 1],
                          transition: {
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            duration: 1,
                          },
                        }
                      : {}
                  }
                />
              ))}
            </div>
          </motion.div>

          <div className="flex justify-between mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="bg-gray-700/50 backdrop-blur-sm p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 border border-gray-600/50"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="bg-gray-700/50 backdrop-blur-sm p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 border border-gray-600/50"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

