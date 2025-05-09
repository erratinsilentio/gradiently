"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Roboto, Saira } from 'next/font/google'

const orbitron = Saira({
  weight: '400',
  subsets: ['latin'],
})

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 0,
      title: "5K Quality",
      description: "Ultra-high resolution files",
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      id: 1,
      title: "Multiple Styles",
      description: "Diverse design options",
      color: "from-indigo-500 to-cyan-400",
    },
    {
      id: 2,
      title: "One-Time Payment",
      description: "No subscriptions ever",
      color: "from-rose-500 to-orange-400",
    },
    {
      id: 3,
      title: "New Collections",
      description: "Regular updates included",
      color: "from-emerald-500 to-lime-400",
    },
  ]

  return (
    <section className="w-full pb-20 relative overflow-hidden bg-[url('/pp.png')] bg-center bg-cover bg-no-repeat">
      <div className="absolute top-0 left-0 w-screen h-12 bg-gradient-to-t from-transparent to-black"></div>
      {/* Dynamic background */}
      <div className={`absolute inset-0 opacity-10`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-purple-500/10 rounded-full blur-3xl"
              style={{
                width: `${Math.random() * 30 + 10}vw`,
                height: `${Math.random() * 30 + 10}vw`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                transform: `scale(${Math.random() * 1 + 0.5})`,
                animation: `float ${Math.random() * 10 + 20}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className={`container relative z-10 px-4 mx-auto ${orbitron.className}`}>
        {/* Diagonal header */}
        <div className="mb-20 relative">
          <h2 className="text-6xl md:text-8xl font-bold text-white opacity-15 uppercase tracking-tighter">Features</h2>
          <h3 className="text-2xl md:text-3xl font-medium text-white absolute top-1/2 left-4 -translate-y-1/2 ">
            What makes our <span className="text-purple-400">gradients</span> special?
          </h3>
        </div>

        {/* Asymmetrical feature layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Left column - Feature selector */}
          <div className="md:col-span-1 space-y-2">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`p-4 cursor-pointer transition-all duration-300 border-l-2 hover:pl-6 ${
                  activeFeature === feature.id ? "border-l-purple-500 bg-purple-500/5" : "border-l-gray-800 opacity-60"
                }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <h4 className="text-white text-lg font-medium">{feature.title}</h4>
                <p className="text-purple-300/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right column - Feature visualization */}
          <div className="md:col-span-1 relative min-h-[400px] flex items-center justify-center">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeFeature === feature.id ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="relative h-full w-full">
                  {/* Feature visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-64 h-64 rounded-full bg-gradient-to-br ${feature.color} blur-2xl opacity-20`}
                    ></div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center max-w-md">
                      <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600 mb-4">
                        {feature.id + 1}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-purple-200/80">
                        {feature.id === 0 &&
                          "Every gradient is meticulously crafted at 5K resolution, ensuring perfect clarity at any scale."}
                        {feature.id === 1 &&
                          "From subtle meshes to bold vibrant flows, our collection offers endless creative possibilities."}
                        {feature.id === 2 &&
                          "No subscriptions or hidden fees. Pay once and own our entire collection forever."}
                        {feature.id === 3 && "Get exclusive access to all new gradient packs as they're released."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       

        {/* Creative CTA */}
        <div className="flex justify-center">
          <Button className="relative overflow-hidden group bg-transparent border border-purple-500/30 hover:border-purple-900/80 text-white px-10 py-6 rounded-full cursor-pointer">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-900 to-pink-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-2 text-lg">
              <span className="group-hover:translate-x-2 transition-transform duration-300">Explore Collection</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
