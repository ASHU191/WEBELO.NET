"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Code, Smartphone, Globe, Rocket, Zap, Database, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    icon: <Code className="w-12 h-12" />,
    title: "Web Development",
    description: "Custom websites built with the latest technologies to deliver exceptional user experiences.",
    color: "from-purple-500 to-indigo-500",
    textColor: "text-purple-500",
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Responsive Design",
    description: "Mobile-first designs that work flawlessly across all devices and screen sizes.",
    color: "from-cyan-500 to-blue-500",
    textColor: "text-cyan-500",
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "E-Commerce Solutions",
    description: "Powerful online stores with secure payment gateways and inventory management.",
    color: "from-green-500 to-emerald-500",
    textColor: "text-green-500",
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Performance Optimization",
    description: "Speed up your website for better user experience and improved search rankings.",
    color: "from-orange-500 to-amber-500",
    textColor: "text-orange-500",
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "CMS Integration",
    description: "Easy-to-use content management systems that give you full control of your website.",
    color: "from-pink-500 to-rose-500",
    textColor: "text-pink-500",
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "API Development",
    description: "Custom API solutions to connect your website with other services and applications.",
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-500",
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const carouselRef = useRef(null)

  // Determine items per slide based on screen size
  const getItemsPerSlide = () => {
    if (windowWidth < 768) return 1 // Mobile: 1 card
    if (windowWidth < 1024) return 2 // Tablet: 2 cards
    return 3 // Desktop: 3 cards
  }

  const itemsPerSlide = getItemsPerSlide()
  const totalSlides = Math.ceil(services.length / itemsPerSlide)

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Navigate to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: slideIndex * carouselRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
  }

  // Handle next and previous slide
  const nextSlide = () => {
    const next = (currentSlide + 1) % totalSlides
    goToSlide(next)
  }

  const prevSlide = () => {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides
    goToSlide(prev)
  }

  // Handle scroll event to update current slide
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft
      const slideWidth = carouselRef.current.offsetWidth
      const newSlide = Math.round(scrollPosition / slideWidth)
      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide)
      }
    }
  }

  // Add scroll event listener
  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll)
      return () => carousel.removeEventListener("scroll", handleScroll)
    }
  }, [currentSlide])

  // Render service card
  const renderServiceCard = (service, index) => (
    <motion.div
      key={index}
      className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      {/* Border gradient */}
      <div className="absolute inset-0 p-0.5">
        <div
          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        ></div>
      </div>

      <div className="relative p-8 md:p-10 bg-gray-800 rounded-xl h-full flex flex-col">
        {/* Centered icon with color and animation */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className={`${service.textColor} bg-gradient-to-br ${service.color} bg-clip-text`}>{service.icon}</div>
        </motion.div>

        {/* Content with staggered animation */}
        <motion.h3
          className="text-xl md:text-2xl font-bold mb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {service.title}
        </motion.h3>
        <motion.p
          className="text-gray-300 mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {service.description}
        </motion.p>

        {/* Learn more button with enhanced animation */}
        <div className="mt-auto flex justify-center">
          <motion.button
            className="flex items-center text-sm font-medium text-white group/btn"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>Learn more</span>
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
  )

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

        {/* Carousel for mobile and tablet */}
        <div className="lg:hidden relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {services.map((service, index) => (
              <div key={index} className="snap-start w-full md:w-1/2 flex-shrink-0 px-4">
                {renderServiceCard(service, index)}
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/80 p-2 rounded-full text-white z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/80 p-2 rounded-full text-white z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination dots */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${currentSlide === index ? "bg-purple-500" : "bg-gray-600"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Regular grid for desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="h-full">
              {renderServiceCard(service, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

