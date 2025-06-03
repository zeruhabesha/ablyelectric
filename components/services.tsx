import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Settings, Cpu, Battery, Zap, Phone, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: <Settings className="h-12 w-12 text-red-600" />,
      title: "Installation & Maintenance",
      description:
        "Expert setup and servicing of industrial equipment with professional standards and safety protocols.",
      link: "/services/installation",
      features: ["Certified technicians", "Safety compliance", "Warranty support"],
    },
    {
      icon: <Cpu className="h-12 w-12 text-red-600" />,
      title: "Electrical Board Maintenance",
      description: "Ensuring functionality and safety of electrical systems with comprehensive maintenance solutions.",
      link: "/services/electrical-board",
      features: ["Preventive maintenance", "Emergency repairs", "Safety inspections"],
    },
    {
      icon: <Battery className="h-12 w-12 text-red-600" />,
      title: "Instrumentation & Process Control",
      description: "High-precision control solutions for industrial applications with advanced automation technology.",
      link: "/services/instrumentation",
      features: ["Calibration services", "System integration", "Performance monitoring"],
    },
    {
      icon: <Zap className="h-12 w-12 text-red-600" />,
      title: "EV Charger Installation",
      description: "Professional setup for home, commercial, and fleet charging stations with smart connectivity.",
      link: "/services/ev-installation",
      features: ["Level 2 & DC fast charging", "Smart connectivity", "Load management"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-2">Professional Solutions for Businesses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive electrical and mechanical services ensure your business operations run efficiently,
            safely, and sustainably with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <CardHeader className="text-center pb-4 relative">
                <div className="mx-auto mb-4 p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-lg mb-2 group-hover:text-red-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={service.link}>
                  <Button
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 w-full group-hover:bg-red-600 group-hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="circuit-small" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M0 25 H20 M30 25 H50 M25 0 V20 M25 30 V50" stroke="white" strokeWidth="1" fill="none" />
                    <circle cx="25" cy="25" r="2" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-small)" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-4 relative">Need Tailored Technical Solutions?</h3>
            <p className="text-red-100 mb-6 relative max-w-2xl mx-auto">
              Our expert team provides customized solutions for your specific industrial and commercial needs. Schedule
              a consultation with our specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 group">
                <Phone className="mr-2 h-5 w-5" />
                <span>Call for Consultation</span>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20 group">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Schedule Meeting</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
