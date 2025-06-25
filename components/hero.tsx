"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  Zap,
  Shield,
  Award,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ImageSlider from "@/components/image-slider";
import { useState, useEffect } from "react";

const bgImages = [
  "/11.jpg",
  
  // Add more background image URLs here
];

const contentSlides = [
  {
    title: "Your Trusted Partner for Energy & Technology",
    description:
      "At ABLY ELECTRIC, we specialize in high-quality electrical and mechanical products & services, ensuring businesses run efficiently and sustainably.",
    imageUrl: "/1.jpg", // Replace with your content image URLs
  },
  {
    title: "Innovative Solutions for a Sustainable Future",
    description:
      "Explore our range of EV chargers, power backup systems, industrial trainers, and automation solutions.",
    imageUrl: "/2.jpg",
  },
  {
    title: "Powering Homes, Businesses, and Industries",
    description:
      "From instrumentation to electrical board maintenance, we provide expertise and support for all your energy needs.",
    imageUrl: "/content3.jpg",
  },
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const [prevBgIndex, setPrevBgIndex] = useState(0); // For crossfade
  const [fade, setFade] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setPrevBgIndex(bgIndex);
      setFade(true);
      setTimeout(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        setFade(false);
      }, 800); // Fade duration
    }, 5000);

    const contentInterval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contentSlides.length);
    }, 7000);

    return () => {
      clearInterval(bgInterval);
      clearInterval(contentInterval);
    };
  }, [bgIndex]);

  return (
    <section className="relative text-white overflow-hidden">
      {/* Crossfade Background Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Previous background for crossfade */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${bgImages[prevBgIndex]})`, zIndex: 1 }}
        />
        {/* Current background */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${fade ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundImage: `url(${bgImages[bgIndex]})`, zIndex: 2 }}
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 60% 40%, rgba(255,80,80,0.25) 0%, rgba(30,30,30,0.7) 60%, rgba(20,20,20,0.95) 100%), linear-gradient(120deg, rgba(220,38,38,0.45) 0%, rgba(30,41,59,0.7) 60%, rgba(220,38,38,0.7) 100%)`
        }} />
        {/* Animated Light Effect */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.10) 0%, transparent 60%)',
          animation: 'pulseLight 4s ease-in-out infinite',
          zIndex: 4
        }} />
        <style>{`
          @keyframes pulseLight {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>

      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-8 transition-opacity duration-1000">
            {/* Title and Description */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                {contentSlides[contentIndex].title}
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                {contentSlides[contentIndex].description}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-red-600/20 text-red-400 border border-red-500/30 py-1 px-3 rounded-full font-medium">
                <Shield className="h-4 w-4 mr-1" /> 2-Year Warranty
              </Badge>
              <Badge className="bg-red-600/20 text-red-400 border border-red-500/30 py-1 px-3 rounded-full font-medium">
                <Clock className="h-4 w-4 mr-1" /> 24/7 Support
              </Badge>
              <Badge className="bg-red-600/20 text-red-400 border border-red-500/30 py-1 px-3 rounded-full font-medium">
                <Zap className="h-4 w-4 mr-1" /> 500+ Projects
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold group relative overflow-hidden rounded-md"
              >
                <Link href="/products" className="flex items-center">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-red-800 hover:text-white rounded-md group"
              >
                <Link href="/contact" className="flex items-center">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image on the right */}
          <div className="relative">
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={contentSlides[contentIndex].imageUrl}
                alt={contentSlides[contentIndex].title}
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-300 mb-2">Explore More</span>
          <ChevronDown className="h-6 w-6 text-red-400" />
        </div>
      </div>
    </section>
  );
}