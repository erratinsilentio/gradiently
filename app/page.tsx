"use client"
import ProductShowcase from "@/components/home/showcase-section"
import GradientCarousell from "@/components/home/carousel-section"
import HeroSection from "@/components/home/hero-section"
import Pricing from "@/components/home/pricing-section"
import FeatureShowcase from "@/components/home/features-section"
import Newsletter from "@/components/home/newsletter-section"
import FrequentQuestions from "@/components/home/faq-section"

export default function LandingPage() {

  return (
      <main className="flex-1">

        {/* Hero Section */}
        <HeroSection />

        {/* Product Showcase */}
        <ProductShowcase />

        {/* Gradient Carousel */}
        <GradientCarousell />

        {/* Features Section */}
        <FeatureShowcase />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FrequentQuestions />

        {/* Newsletter Section */}
        <Newsletter />
        
      </main>
  )
}