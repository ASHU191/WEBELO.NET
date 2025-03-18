"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Partners", href: "#partners" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar({ scrollY }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = document.querySelectorAll("section")
          const scrollPosition = window.scrollY + 100

          sections.forEach((section) => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.offsetHeight
            const sectionId = section.getAttribute("id")

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              setActiveSection(sectionId)
            }
          })

          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      setIsOpen(false) // Close the menu first
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        })
      }, 100) // Small delay to ensure menu closes first
    }
  }

  const scrollToTop = (e) => {
    e.preventDefault()
    setIsOpen(false) // Close mobile menu if open
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? "bg-gray-900/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          animate={{
            y: [0, -5, 0],
            transition: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 3,
            },
          }}
        >
          <a href="#home" className="flex items-center cursor-pointer" onClick={scrollToTop}>
            <div className="relative h-20 w-40">
              <Image src="/MainLogo.png" alt="WEBELO Logo" fill className="object-contain" priority />
            </div>
          </a>
        </motion.div>

        {/* Enhanced nav items with more fluid animations */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              className="relative group px-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md ${activeSection === item.href.substring(1) ? "text-white font-medium" : ""}`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-3"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ display: activeSection === item.href.substring(1) ? "none" : "block" }}
              />
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white px-5 py-2 rounded-full font-medium ml-2 shadow-lg shadow-purple-500/20 relative overflow-hidden group"
            onClick={(e) => scrollToSection(e, "#contact")}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: navItems.length * 0.05, duration: 0.5 }}
          >
            <span className="relative z-10">Get Started</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </motion.button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-gray-800/95 backdrop-blur-md shadow-xl overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-5 space-y-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`block py-2 px-3 rounded-lg transition-colors duration-300 ${activeSection === item.href.substring(1) ? "bg-gray-700/50 text-white font-medium" : "text-gray-300 hover:bg-gray-700/30 hover:text-white"}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                className="w-full mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white px-5 py-3 rounded-lg font-medium"
                onClick={(e) => {
                  scrollToSection(e, "#contact")
                  setIsOpen(false)
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

