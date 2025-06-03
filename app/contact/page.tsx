"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Zap,
  CheckCircle,
  Users,
  Headphones,
  Globe,
  Calendar,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    newsletter: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-red-600" />,
      title: "Phone Support",
      subtitle: "Immediate assistance available",
      details: [
        { label: "Sales & Inquiries", value: "+91 98765 43210", type: "primary" },
        { label: "Technical Support", value: "+91 98765 43211", type: "secondary" },
        { label: "Emergency Hotline", value: "+91 98765 43299", type: "emergency" },
      ],
      availability: "24/7 Emergency Support",
    },
    {
      icon: <Mail className="h-6 w-6 text-red-600" />,
      title: "Email Contact",
      subtitle: "Detailed inquiries welcome",
      details: [
        { label: "General Inquiries", value: "info@ablyelectric.com", type: "primary" },
        { label: "Technical Support", value: "support@ablyelectric.com", type: "secondary" },
        { label: "Sales Team", value: "sales@ablyelectric.com", type: "secondary" },
      ],
      availability: "Response within 24 hours",
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: "Visit Our Office",
      subtitle: "Meet our team in person",
      details: [
        {
          label: "Head Office",
          value: "123 Industrial Area, Sector 15\nMumbai, Maharashtra 400001\nIndia",
          type: "address",
        },
      ],
      availability: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
  ]

  const supportFeatures = [
    {
      icon: <Headphones className="h-8 w-8 text-red-600" />,
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance for emergency repairs and technical issues",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Dedicated Account Manager",
      description: "Personal point of contact for all your business needs and requirements",
    },
    {
      icon: <Globe className="h-8 w-8 text-red-600" />,
      title: "Remote Monitoring",
      description: "Advanced remote diagnostics and monitoring for installed systems",
    },
    {
      icon: <Calendar className="h-8 w-8 text-red-600" />,
      title: "Scheduled Maintenance",
      description: "Proactive maintenance programs to prevent downtime and extend equipment life",
    },
  ]

  const serviceOptions = [
    "EV Chargers",
    "UPS Systems",
    "Inverters",
    "Generators",
    "Industrial Trainers",
    "Process Control",
    "Electrical Components",
    "Installation Services",
    "Maintenance Services",
    "Technical Consulting",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Connect with our expert team for personalized solutions, technical support, or any questions about our
              electrical and mechanical products and services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-red-600 text-white px-4 py-2 text-sm">24/7 Support</Badge>
              <Badge className="bg-red-600 text-white px-4 py-2 text-sm">Expert Team</Badge>
              <Badge className="bg-red-600 text-white px-4 py-2 text-sm">Quick Response</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    {method.icon}
                    <div>
                      <div className="text-lg">{method.title}</div>
                      <div className="text-sm text-gray-600 font-normal">{method.subtitle}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {method.details.map((detail, idx) => (
                      <div key={idx}>
                        <div className="font-semibold text-gray-900 text-sm">{detail.label}</div>
                        <div
                          className={`font-medium ${
                            detail.type === "primary"
                              ? "text-red-600"
                              : detail.type === "emergency"
                                ? "text-red-700"
                                : detail.type === "address"
                                  ? "text-gray-700 whitespace-pre-line"
                                  : "text-green-600"
                          }`}
                        >
                          {detail.value}
                        </div>
                      </div>
                    ))}
                    <div className="bg-red-50 p-3 rounded-lg mt-4">
                      <div className="flex items-center space-x-2 text-red-700">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">{method.availability}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Support Features */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Get a Personalized Solution</CardTitle>
                  <p className="text-center text-gray-600">
                    Fill out the form below and our experts will get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service/Product Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Select your interest</option>
                        {serviceOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details / Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your requirements, project details, or any specific questions you have..."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="rounded"
                      />
                      <label htmlFor="newsletter" className="text-sm text-gray-600">
                        Subscribe to our newsletter for industry updates and expert tips
                      </label>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-red-600 to-black hover:from-red-700 hover:to-gray-900 text-lg py-3">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>

                    <div className="text-center text-sm text-gray-500">
                      <p>🚀 Need immediate assistance? Call us at +91 98765 43210</p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Support Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Why Choose Our Support?</h3>
                <div className="space-y-6">
                  {supportFeatures.map((feature, index) => (
                    <Card key={index} className="border-l-4 border-l-red-600 shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">{feature.icon}</div>
                          <div>
                            <h4 className="font-bold text-lg text-black mb-2">{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="bg-gradient-to-r from-red-600 to-black text-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4">Quick Contact Options</h4>
                  <div className="space-y-4">
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white justify-start">
                      <Phone className="mr-3 h-5 w-5" />
                      Call: +91 98765 43210
                    </Button>
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white justify-start">
                      <MessageCircle className="mr-3 h-5 w-5" />
                      WhatsApp Support
                    </Button>
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white justify-start">
                      <Mail className="mr-3 h-5 w-5" />
                      Email: info@ablyelectric.com
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 lg:p-12">
              <Zap className="h-16 w-16 mx-auto mb-6 text-white" />
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Emergency Technical Support</h3>
              <p className="text-red-100 mb-8 text-lg">
                For urgent technical issues or emergency repairs, our 24/7 support team is ready to assist you
                immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Hotline: +91 98765 43299
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-red-600 hover:text-red-600"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  24/7 WhatsApp Support
                </Button>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Immediate Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Expert Technicians</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>On-site Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of Mumbai's industrial district</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="bg-gray-200 h-64 lg:h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">ABLY ELECTRIC Head Office</h3>
                    <p className="text-gray-600">123 Industrial Area, Sector 15</p>
                    <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
                    <Button className="mt-4 bg-red-600 hover:bg-red-700">Get Directions</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
