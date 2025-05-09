'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ProductShowcase() {
  return (
    <section className="bg-white dark:bg-[#000] py-36 px-6 bg-[url('/time2.png')] relative h-[110vh] bg-center bg-cover">
      <div className="absolute top-0 left-0 w-screen h-24 bg-gradient-to-t from-transparent to-black"></div>
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center space-y-10">
        {/* Text Content */}
        <div className="text-center px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white">
            Tired of searching for the perfect background?
          </h2>

          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Stop wasting hours on generators and moodboards.
            <br className="hidden md:inline" />
            <span className="text-white font-medium">Gradiently</span> delivers
            hand-crafted gradients — ready to drop into your next design.
          </p>

          <ParallaxImage />
        </div> 

        {/* Image */}
        
      </div>
    </section>
  );
}

  
  function ParallaxImage() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: '-100px' })
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 120, scale: 1 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeIn' }}
        className="w-full max-w-md mx-auto my-8 rounded-2xl overflow-hidden shadow-2xl shadow-amber-200/15 border-[1px] border-pink-300/10"
      >
        <img
          src="/hero.png"
          alt="Gradient example"
          className="w-full h-auto object-cover grayscale dark:opacity-80"
        />
      </motion.div>
    )
  }