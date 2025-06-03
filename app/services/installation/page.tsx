"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Settings, CheckCircle, Clock, Shield, Wrench, Zap, Phone, Calendar } from "lucide-react"

export default function InstallationServicesPage() {
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const serviceImages = [
    {
      id: 1,
      title: "Industrial Panel Installation",
      category: "Electrical Panels",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete installation of industrial electrical control panels with safety compliance and testing.",
      details: {
        duration: "2-5 days",
        warranty: "2 years",
        certification: "BIS Approved",
        features: [
          "Safety compliance testing",
          "Load balancing optimization",
          "Emergency shutdown systems",
          "Remote monitoring setup",
          "Documentation and training",
        ],
      },
    },
    {
      id: 2,
      title: "UPS System Installation",
      category: "Power Backup",
      image: "/placeholder.svg?height=300&width=400",
      description: "Professional UPS installation with battery backup configuration and monitoring systems.",
      details: {
        duration: "1-3 days",
        warranty: "3 years",
        certification: "ISO Certified",
        features: [
          "Battery bank configuration",
          "Automatic transfer switch",
          "Power monitoring dashboard",
          "Maintenance scheduling",
          "24/7 remote support",
        ],
      },
    },
    {
      id: 3,
      title: "Motor Control Center Setup",
      category: "Industrial Motors",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete motor control center installation with variable frequency drives and protection systems.",
      details: {
        duration: "3-7 days",
        warranty: "2 years",
        certification: "CE Marked",
        features: [
          "VFD configuration",
          "Motor protection relays",
          "SCADA integration",
          "Energy monitoring",
          "Preventive maintenance plan",
        ],
      },
    },
    {
      id: 4,
      title: "Instrumentation Setup",
      category: "Process Control",
      image: "/placeholder.svg?height=300&width=400",
      description: "Precision instrumentation installation for process control and monitoring applications.",
      details: {
        duration: "2-4 days",
        warranty: "1 year",
        certification: "Calibrated",
        features: [
          "Sensor calibration",
          "Data logging setup",
          "Alarm configuration",
          "HMI programming",
          "System validation",
        ],
      },
    },
    {
      id: 5,
      title: "Generator Installation",
      category: "Backup Power",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete diesel generator installation with automatic start systems and fuel management.",
      details: {
        duration: "3-5 days",
        warranty: "2 years",
        certification: "CPCB Approved",
        features: [
          "Automatic start/stop",
          "Fuel level monitoring",
          "Load bank testing",
          "Noise reduction setup",
          "Emission compliance",
        ],
      },
    },
    {
      id: 6,
      title: "Electrical Maintenance",
      category: "Maintenance",
      image: "/placeholder.svg?height=300&width=400",
      description: "Comprehensive electrical maintenance services including preventive and corrective maintenance.",
      details: {
        duration: "Ongoing",
        warranty: "Service guarantee",
        certification: "Certified technicians",
        features: [
          "Thermal imaging inspection",
          "Insulation resistance testing",
          "Contact cleaning",
          "Torque verification",
          "Performance optimization",
        ],
      },
    },
  ]

  const servicePackages = [
    {
      name: "Basic Installation",
      // price: "₹25,000",
      duration: "1-2 days",
      features: ["Equipment installation", "Basic testing", "User manual", "3 months warranty", "Phone support"],
    },
    {
      name: "Professional Installation",
      // price: "₹45,000",
      duration: "2-3 days",
      features: [
        "Complete installation",
        "Comprehensive testing",
        "Training session",
        "1 year warranty",
        "On-site support",
        "Documentation",
      ],
      popular: true,
    },
    {
      name: "Enterprise Installation",
      // price: "₹75,000",
      duration: "3-5 days",
      features: [
        "Full system integration",
        "Advanced testing",
        "Staff training",
        "2 years warranty",
        "24/7 support",
        "Maintenance plan",
        "Remote monitoring",
      ],
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Site Assessment",
      description: "Detailed evaluation of installation requirements and site conditions",
      icon: <Settings className="h-8 w-8 text-red-600" />,
    },
    {
      step: 2,
      title: "Planning & Design",
      description: "Custom installation plan with technical specifications and timeline",
      icon: <Wrench className="h-8 w-8 text-red-600" />,
    },
    {
      step: 3,
      title: "Installation",
      description: "Professional installation by certified technicians with safety protocols",
      icon: <Zap className="h-8 w-8 text-red-600" />,
    },
    {
      step: 4,
      title: "Testing & Commissioning",
      description: "Comprehensive testing and system commissioning with documentation",
      icon: <CheckCircle className="h-8 w-8 text-red-600" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-red-600 text-white mb-4">Professional Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Installation & Maintenance Services</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Expert installation and maintenance of electrical and mechanical systems with professional standards and
              safety protocols.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-red-600 text-white px-4 py-2">Certified Technicians</Badge>
              <Badge className="bg-red-600 text-white px-4 py-2">24/7 Support</Badge>
              <Badge className="bg-red-600 text-white px-4 py-2">2 Year Warranty</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Professional Installation Services</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our certified technicians provide comprehensive installation and maintenance services for all types of
                electrical and mechanical equipment. We ensure safety compliance, optimal performance, and long-term
                reliability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Certified Technicians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Safety Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Quality Assurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Warranty Support</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 border-red-200">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Installations Completed</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-red-200">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Support</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-red-200">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-red-200">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-600">Systematic approach ensuring quality and safety</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-4 bg-red-50 rounded-full w-fit">{step.icon}</div>
                  <div className="text-2xl font-bold text-red-600 mb-2">Step {step.step}</div>
                  <h3 className="font-bold text-lg text-black mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Gallery */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Our Installation Projects</h2>
            <p className="text-xl text-gray-600">Browse our completed installations and maintenance work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceImages.map((item, index) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-red-600 text-white">{item.category}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                    <DialogDescription className="text-lg">{item.description}</DialogDescription>
                  </DialogHeader>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="h-4 w-4 text-red-600" />
                            <span className="font-semibold">Duration</span>
                          </div>
                          <p className="text-gray-600">{item.details.duration}</p>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Shield className="h-4 w-4 text-red-600" />
                            <span className="font-semibold">Warranty</span>
                          </div>
                          <p className="text-gray-600">{item.details.warranty}</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-4 w-4 text-red-600" />
                          <span className="font-semibold">Certification</span>
                        </div>
                        <p className="text-gray-600">{item.details.certification}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-2">
                          {item.details.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-red-600" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-red-600 hover:bg-red-700">Request Quote for This Service</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600">Choose the right installation package for your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicePackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-shadow ${pkg.popular ? "border-red-600 border-2" : ""}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  {/* <div className="text-3xl font-bold text-red-600">{pkg.price}</div> */}
                  <CardDescription>Starting from • {pkg.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      pkg.popular ? "bg-red-600 hover:bg-red-700" : "bg-gray-900 hover:bg-black text-white"
                    }`}
                  >
                    Choose This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-black to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our expert team for a free consultation and customized installation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +251 911 464023
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
