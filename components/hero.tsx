import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Zap, Shield, Award, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-red-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          // style={{
          //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          // }}
        />
      </div>

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 H40 M60 50 H100 M50 0 V40 M50 60 V100" stroke="white" strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="3" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                {/* <Image
                  src="/images/ably-logo.png"
                  alt="ABLY ELECTRIC"
                  width={200}
                  height={67}
                  className="h-16 w-auto"
                /> */}
              </div>

              <div className="relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Trusted Partner for{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                      Energy & Technology
                    </span>
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></span>
                  </span>
                </h1>
              </div>

              <h2 className="text-xl lg:text-2xl text-red-400 font-semibold">
                Supporting Homes, Businesses & Industries!
              </h2>

              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                At ABLY ELECTRIC, we specialize in high-quality electrical and mechanical products & services, ensuring
                businesses run efficiently and sustainably. Our expertise spans EV chargers, power backup systems,
                industrial trainers, automation solutions, instrumentation, and electrical board maintenance.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {/* <Badge className="bg-red-600/20 text-red-400 border border-red-500/30 py-1 px-3">
                <Award className="h-4 w-4 mr-1" /> ISO 9001:2015 Certified
              </Badge> */}
              <Badge className="bg-red-600/20 text-red-400 border border-red-500/30 py-1 px-3">
                <Shield className="h-4 w-4 mr-1" /> 2-Year Warranty
              </Badge>
              <Badge className="bg-red-600/20 text-red-400 border border-red-500/30 py-1 px-3">
                <Clock className="h-4 w-4 mr-1" /> 24/7 Support
              </Badge>
              <Badge className="bg-red-600/20 text-red-400 border border-red-500/30 py-1 px-3">
                <Zap className="h-4 w-4 mr-1" /> 500+ Projects
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold group relative overflow-hidden"
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
                className="border-white text-black hover:bg-white hover:text-black group"
              >
                <Link href="/contact" className="flex items-center">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">500+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">15+</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>

          {/* Electrical Icons Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* EV Charger Icon */}
              <div className="bg-gradient-to-br from-red-600 to-black rounded-2xl p-6 text-center transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 group">
                <svg
                  className="h-16 w-16 mx-auto mb-4 text-white group-hover:text-red-300 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z" />
                </svg>
                <div className="text-white font-semibold group-hover:text-red-300 transition-colors">EV Chargers</div>
              </div>

              {/* Power Supply Icon */}
              <div className="bg-gradient-to-br from-red-600 to-black rounded-2xl p-6 text-center transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 group">
                <svg
                  className="h-16 w-16 mx-auto mb-4 text-white group-hover:text-red-300 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z" />
                </svg>
                <div className="text-white font-semibold group-hover:text-red-300 transition-colors">UPS Systems</div>
              </div>

              {/* Industrial Control Icon */}
              <div className="bg-gradient-to-br from-red-600 to-black rounded-2xl p-6 text-center transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 group">
                <svg
                  className="h-16 w-16 mx-auto mb-4 text-white group-hover:text-red-300 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 9V7l-2-2H4L2 7v2h20zm0 2H2v8l2 2h16l2-2v-8zM6 16h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
                </svg>
                <div className="text-white font-semibold group-hover:text-red-300 transition-colors">
                  Industrial Control
                </div>
              </div>

              {/* Training Equipment Icon */}
              <div className="bg-gradient-to-br from-red-600 to-black rounded-2xl p-6 text-center transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 group">
                <svg
                  className="h-16 w-16 mx-auto mb-4 text-white group-hover:text-red-300 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zM18.82 9L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
                <div className="text-white font-semibold group-hover:text-red-300 transition-colors">
                  Training Equipment
                </div>
              </div>
            </div>

            {/* Floating Lightning Bolt */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-full animate-bounce shadow-lg shadow-red-500/50">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-300 mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-red-400" />
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  )
}
