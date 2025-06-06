import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Products from "@/components/products"
import About from "@/components/about"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Phone, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-black to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-400 font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 mt-2">The ABLY ELECTRIC Advantage</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise, quality products, and exceptional service to deliver solutions that exceed
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="bg-red-600 p-3 rounded-full w-fit mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Expertise</h3>
              <p className="text-gray-300 text-sm">
                Our team of certified engineers and technicians brings decades of combined experience to every project.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="bg-red-600 p-3 rounded-full w-fit mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-300 text-sm">
                All our products undergo rigorous testing and meet international quality standards and certifications.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="bg-red-600 p-3 rounded-full w-fit mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
              <p className="text-gray-300 text-sm">
                We understand the importance of deadlines and ensure prompt delivery and installation of all products.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="bg-red-600 p-3 rounded-full w-fit mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Support</h3>
              <p className="text-gray-300 text-sm">
                Our dedicated support team is available 24/7 to address any concerns and provide technical assistance.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 group">
                <span>Contact Us Today</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Our Trusted Partners</h2>
        <p className="text-gray-600">We collaborate with industry-leading partners to deliver exceptional solutions.</p>
          </div>

          {/* Partners Logo Slider (Replace with actual slider component) */}
          <div className="flex flex-wrap justify-around items-center gap-6">
        {/* Partner Logos - Replace with actual image URLs */}
        <img src="/logo/mge.webp" alt="Partner 1" className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        <img src="/logo/Microchip.png" alt="Partner 2" className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        <img src="/logo/apc.png" alt="Partner 3" className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        <img src="/logo/Schneider.png" alt="Partner 4" className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </section>
      <Products />
      <About />

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="circuit-cta" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M0 25 H20 M30 25 H50 M25 0 V20 M25 30 V50" stroke="white" strokeWidth="1" fill="none" />
                    <circle cx="25" cy="25" r="2" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-cta)" />
              </svg>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Power Your Success?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Partner with ABLY ELECTRIC for innovative electrical and mechanical solutions that drive efficiency,
                reliability, and growth for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 group">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>Call: +251 911 464023</span>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20 group">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  <span>Request a Quote</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
