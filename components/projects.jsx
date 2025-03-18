"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Coffee Shop",
    description: "A cozy place serving coffee, pastries, and a relaxing atmosphere.",
    image: "/coffee.png?height=400&width=600",
    tags: ["React", "Cloudinary", "Tailwind CSS"],
    link: "https://coffee-shop-orpin.vercel.app/",
    github: "#",
  },
  {
    title: "Claritag",
    description: "Advanced Skin Tag Removal Device with Squeeze & Freeze® Technology",
    image: "/claritag.png?height=400&width=600",
    tags: ["Shopify", "Premium Theme", "Custom CSS"],
    link: "https://www.claritag.com/",
    github: "#",
  },
  {
    title: "Multi Vendor Ecommerce",
    description: "A platform allowing multiple sellers to list and sell products online.",
    image: "/ecom.png?height=400&width=600",
    tags: ["Node js", "React",  "Tailwind CSS", "MongoDB"],
    link: "https://multi-vendor-client-rho.vercel.app/",
    github: "#",
  },
  {
    title: "Japanese Dream Tour",
    description: "A guided journey through Japan's culture, landmarks, cuisine, and traditions.",
    image: "/japanesedreamtour.png?height=400&width=600",
    tags: ["Node js", "React",  "Tailwind CSS", "MongoDB","Cloudinary"],
    link: "https://japanesedreamtour.vercel.app/",
    github: "#",
  },
  {
    title: "BMI-Interiors",
    description: "The Premier Interior Design & Fit-out Company in Dubai and UAE.",
    image: "/bmi.png?height=400&width=600",
    tags: ["React", "Tailwind CSS", "MongoDB"],
    link: "https://www.bmiinterior.com/",
    github: "#",
  },
  {
    title: "Travel With Me",
    description: "Travel With Me simplifies booking flights, hotels, and unforgettable adventures.",
    image: "/travel.png?height=400&width=600",
    tags: ["React", "Tailwind CSS",],
    link: "https://online-booking-inky.vercel.app/",
    github: "#",
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isCarouselMode, setIsCarouselMode] = useState(false)

  // Update items per view and carousel mode based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setItemsPerView(3)
        setIsCarouselMode(false)
      } else if (width >= 768) {
        setItemsPerView(2)
        setIsCarouselMode(true)
      } else {
        setItemsPerView(1)
        setIsCarouselMode(true)
      }
    }

    // Set initial values
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Get visible projects based on showAll state or carousel mode
  const visibleProjects = showAll ? projects : isCarouselMode ? projects : projects.slice(0, 3)

  // Calculate total slides for carousel
  const totalSlides = Math.ceil(projects.length / itemsPerView)

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }

  // Get current visible projects for carousel
  const getCarouselProjects = () => {
    const startIndex = currentIndex * itemsPerView
    return projects.slice(startIndex, startIndex + itemsPerView)
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
              Our Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Check out some of our recent projects that showcase our expertise and creativity.
          </p>
        </motion.div>

        {isCarouselMode ? (
          // Carousel View for Mobile and Tablet
          <div className="relative px-8">
            {/* Carousel navigation */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-2 md:left-0 -translate-y-1/2 z-20 bg-gray-700/80 hover:bg-gray-600 text-white p-2 md:p-3 rounded-full backdrop-blur-sm border border-gray-600/50 shadow-lg transition-all duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-2 md:right-0 -translate-y-1/2 z-20 bg-gray-700/80 hover:bg-gray-600 text-white p-2 md:p-3 rounded-full backdrop-blur-sm border border-gray-600/50 shadow-lg transition-all duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Carousel track */}
            <div className="overflow-hidden">
              <motion.div
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`}
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {getCarouselProjects().map((project, index) => (
                  <ProjectCard
                    key={`carousel-${currentIndex}-${index}`}
                    project={project}
                    index={index}
                    setHoveredIndex={setHoveredIndex}
                  />
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
                    currentIndex === index ? "bg-cyan-500 w-8" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Grid View for Desktop
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={`grid-${index}`} project={project} index={index} setHoveredIndex={setHoveredIndex} />
            ))}
          </div>
        )}

        {/* View All Projects Button - Only show if in grid mode and there are more projects to display */}
        {!showAll && !isCarouselMode && projects.length > 3 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gray-700/50 border border-gray-600/50 text-white font-medium hover:bg-gray-700 transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

// Extracted ProjectCard component to avoid code duplication
function ProjectCard({ project, index, setHoveredIndex }) {
  return (
    <motion.div
      className="relative bg-gray-700/30 backdrop-blur-sm rounded-xl overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      whileHover={{
        y: -10,
        transition: { duration: 0.2 },
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Image with enhanced hover effect */}
      <div className="relative h-48 overflow-hidden">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.7 }}>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>

        {/* Add a shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Links with enhanced animations */}
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.a
            href={project.link}
            className="bg-gray-800/80 backdrop-blur-sm p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4 text-white" />
          </motion.a>
          <motion.a
            href={project.github}
            className="bg-gray-800/80 backdrop-blur-sm p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4 text-white" />
          </motion.a>
        </div>
      </div>

      {/* Content with staggered animations */}
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-gray-300 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {project.description}
        </motion.p>

        {/* Tags with staggered animations */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className="text-xs font-medium bg-gray-800/80 text-gray-300 px-2.5 py-1 rounded-full border border-gray-700/50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 + tagIndex * 0.05 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(139, 92, 246, 0.3)",
                borderColor: "rgba(139, 92, 246, 0.5)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* View project button with enhanced animation */}
        <motion.a
          href={project.link}
          className="inline-flex items-center text-sm font-medium text-white group/btn"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            View project
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
            <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300 text-pink-500" />
          </motion.div>
        </motion.a>
      </div>
    </motion.div>
  )
}

