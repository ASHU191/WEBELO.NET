"use client"

import { useEffect, useState, useCallback } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Partners from "@/components/partners"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
// import CustomCursor from "@/components/custom-cursor"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen overflow-x-hidden">
      <AnimatedBackground />
{/*       <CustomCursor /> */}
      <Navbar scrollY={scrollY} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="partners">
          <Partners />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

