"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Float } from "@react-three/drei"
import { Suspense, useRef } from "react"

function WebDevModel(props) {
  const group = useRef()
  // Using a laptop model to represent web development services
  const { nodes, materials } = useGLTF("/assets/3d/duck.glb")

  return (
    <group ref={group} {...props} dispose={null}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <primitive object={nodes.Scene} scale={2.5} position={[0, -0.5, 0]} />
      </Float>
    </group>
  )
}

function Loader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-cyan-500"></div>
    </div>
  )
}

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault()
    const element = document.querySelector("#contact")
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const scrollToNext = (e) => {
    e.preventDefault()
    const element = document.querySelector("#services")
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>

      <div className="container mx-auto px-4 md:px-6 z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                className="inline-block px-4 py-1 rounded-full bg-gray-800/80 text-sm font-medium text-cyan-400 mb-4 border border-gray-700/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
                  Web & App Development Services
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                We Build{" "}
                <motion.span
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Digital Experiences
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  That Matter
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              className="text-xl text-gray-300 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transform your online presence with our cutting-edge web development solutions. We create responsive,
              user-friendly websites that drive results.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-purple-500/20 flex items-center gap-2 group relative overflow-hidden"
                onClick={scrollToContact}
              >
                <span className="relative z-10">Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium border border-gray-700 hover:bg-gray-700 transition-colors duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Our Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-gray-800 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold">
                  JD
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-gray-800 bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-xs font-bold">
                  MK
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-gray-800 bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xs font-bold">
                  AS
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center text-xs font-bold">
                  +5
                </div>
              </div>
              <p>
                Trusted by <span className="text-white font-medium">80+</span> clients worldwide
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 group h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* 3D Model Canvas */}
              <div className="w-full h-full">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                    <WebDevModel />
                    <Environment preset="city" />
                    <OrbitControls
                      enableZoom={false}
                      autoRotate
                      autoRotateSpeed={1}
                      minPolarAngle={Math.PI / 3}
                      maxPolarAngle={Math.PI / 1.5}
                    />
                  </Suspense>
                </Canvas>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-gray-700/50 flex items-center gap-1 z-20">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Interactive 3D
              </div>

              <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-gray-700/50 z-20">
                React + Three.js
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500 rounded-lg opacity-20 blur-lg"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-cyan-500 rounded-lg opacity-20 blur-lg"></div>

            {/* Code snippet */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gray-800/90 backdrop-blur-md p-4 rounded-lg shadow-xl border border-gray-700/50 max-w-[200px] hidden md:block z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="text-xs font-mono text-gray-300">
                <span className="text-pink-400">const</span> <span className="text-cyan-400">app</span> ={" "}
                <span className="text-purple-400">createApp</span>()
                <br />
                <span className="text-pink-400">app</span>.<span className="text-cyan-400">awesome</span>()
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        onClick={scrollToNext}
      >
        <div className="w-10 h-16 rounded-full border-2 border-gray-500 flex flex-col items-center justify-start pt-3 gap-1">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
          <motion.div
            className="w-1.5 h-1.5 bg-white/50 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, delay: 0.1 }}
          />
        </div>
        <ChevronDown className="w-6 h-6 mx-auto mt-2 text-gray-400" />
      </motion.div>
    </div>
  )
}

