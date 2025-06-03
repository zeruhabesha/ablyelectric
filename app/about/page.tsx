"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Award,
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  Phone,
  Mail,
  Zap,
  Shield,
  TrendingUp,
  Building,
  Globe,
  Heart,
} from "lucide-react"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story")

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Started as a small electrical components distributor with a vision to transform the industry",
      icon: <Building className="h-6 w-6" />,
    },
    {
      year: "2012",
      title: "First Major Contract",
      description: "Secured contract with leading industrial manufacturer, establishing our reputation",
      icon: <Award className="h-6 w-6" />,
    },
    {
      year: "2015",
      title: "EV Division Launch",
      description: "Expanded into electric vehicle charging solutions, pioneering sustainable energy",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      year: "2018",
      title: "Training Center",
      description: "Opened state-of-the-art industrial training facility for skill development",
      icon: <Users className="h-6 w-6" />,
    },
    {
      year: "2021",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 quality certification, reinforcing our commitment to excellence",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      year: "2024",
      title: "500+ Projects",
      description: "Completed over 500 successful installations across India, serving diverse industries",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ]

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      experience: "20+ years",
      specialization: "Electrical Engineering & Business Strategy",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Visionary leader with extensive experience in electrical engineering and business development. Passionate about sustainable energy solutions.",
      achievements: ["B.Tech Electrical Engineering", "MBA Operations", "Industry Pioneer Award 2023"],
      linkedin: "#",
      email: "rajesh@ablyelectric.com",
    },
    {
      name: "Priya Sharma",
      position: "Technical Director",
      experience: "15+ years",
      specialization: "Industrial Automation & Process Control",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in industrial automation with a track record of implementing cutting-edge control systems across various industries.",
      achievements: ["M.Tech Automation", "Certified PMP", "Excellence in Engineering Award"],
      linkedin: "#",
      email: "priya@ablyelectric.com",
    },
    {
      name: "Amit Patel",
      position: "Sales Manager",
      experience: "12+ years",
      specialization: "Business Development & Client Relations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dynamic sales professional with expertise in building long-term client relationships and driving business growth.",
      achievements: ["MBA Marketing", "Sales Excellence Award", "Top Performer 2023"],
      linkedin: "#",
      email: "amit@ablyelectric.com",
    },
    {
      name: "Dr. Sunita Rao",
      position: "Training Head",
      experience: "18+ years",
      specialization: "Technical Education & Curriculum Development",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Renowned educator and researcher dedicated to advancing technical education and developing industry-ready professionals.",
      achievements: ["Ph.D. Electrical Engineering", "Published 50+ Papers", "Best Educator Award"],
      linkedin: "#",
      email: "sunita@ablyelectric.com",
    },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Innovation First",
      description:
        "We continuously innovate to provide cutting-edge solutions that meet evolving industry needs and drive technological advancement.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in all our products and services, backed by rigorous testing and industry certifications.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Customer Success",
      description:
        "Our customers' success is our priority. We build lasting partnerships through exceptional service and reliable solutions.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Sustainability",
      description:
        "We're committed to environmental responsibility, promoting sustainable energy solutions and eco-friendly practices.",
      color: "bg-emerald-50 border-emerald-200",
    },
  ]

  const certifications = [
    { name: "ISO 9001:2015 Quality Management", icon: <Award className="h-5 w-5" />, year: "2021" },
    { name: "BIS Approved Products", icon: <Shield className="h-5 w-5" />, year: "2020" },
    { name: "CE Marked Equipment", icon: <CheckCircle className="h-5 w-5" />, year: "2019" },
    { name: "Authorized Distributor Certificates", icon: <Globe className="h-5 w-5" />, year: "2018" },
    { name: "Electrical Safety Compliance", icon: <Zap className="h-5 w-5" />, year: "2022" },
    { name: "Environmental Management ISO 14001", icon: <Target className="h-5 w-5" />, year: "2023" },
  ]

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "15+", label: "Years Experience", icon: <Calendar className="h-6 w-6" /> },
    { number: "100+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="h-6 w-6" /> },
    { number: "50+", label: "Team Members", icon: <Users className="h-6 w-6" /> },
    { number: "99%", label: "Customer Satisfaction", icon: <Star className="h-6 w-6" /> },
  ]

  const testimonials = [
    {
      text: "ABLY ELECTRIC has been our trusted partner for over 5 years. Their technical expertise and commitment to quality have helped us achieve operational excellence.",
      author: "Rajesh Mehta",
      position: "Operations Director",
      company: "Tata Steel",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      text: "The EV charging infrastructure provided by ABLY transformed our facility. Their team's professionalism and ongoing support have been exceptional.",
      author: "Priya Sharma",
      position: "Facility Manager",
      company: "Tech Park Bangalore",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      text: "As an educational institution, we rely on ABLY's training equipment. The quality and relevance of their products prepare our students for industry success.",
      author: "Dr. Anand Kumar",
      position: "Dean of Engineering",
      company: "Institute of Technology",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const tabs = [
    { id: "story", label: "Our Story", icon: <Building className="h-4 w-4" /> },
    { id: "team", label: "Leadership Team", icon: <Users className="h-4 w-4" /> },
    { id: "values", label: "Values & Mission", icon: <Target className="h-4 w-4" /> },
    { id: "certifications", label: "Certifications", icon: <Award className="h-4 w-4" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-about" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30 H25 M35 30 H60 M30 0 V25 M30 35 V60" stroke="white" strokeWidth="1" fill="none" />
                <circle cx="30" cy="30" r="3" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-about)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Building className="h-8 w-8 text-red-400" />
              <Badge className="bg-red-600 text-white px-4 py-2">About ABLY ELECTRIC</Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Powering Innovation for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">15+ Years</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From a small electrical components distributor to India's trusted partner for comprehensive energy and
              technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-red-600/20 text-red-400 border border-red-500/30 px-4 py-2">Trusted Partner</Badge>
              <Badge className="bg-red-600/20 text-red-400 border border-red-500/30 px-4 py-2">ISO Certified</Badge>
              <Badge className="bg-red-600/20 text-red-400 border border-red-500/30 px-4 py-2">500+ Projects</Badge>
              <Badge className="bg-red-600/20 text-red-400 border border-red-500/30 px-4 py-2">24/7 Support</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-3 p-3 bg-red-50 rounded-full w-fit">
                    <div className="text-red-600">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-red-600 text-red-600 hover:bg-red-50"
                } flex items-center space-x-2`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {/* Our Story Tab */}
            {activeTab === "story" && (
              <div className="space-y-16">
                {/* Company Story */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Our Journey</h2>
                      <div className="w-20 h-1 bg-red-600 mb-6 rounded-full"></div>
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                          Founded in 2009, ABLY ELECTRIC began as a vision to bridge the gap between cutting-edge
                          technology and practical industrial applications. What started as a small electrical
                          components distributor has evolved into a comprehensive solution provider for homes,
                          businesses, and industries across India.
                        </p>
                        <p>
                          Our journey has been marked by continuous innovation, strategic partnerships, and an
                          unwavering commitment to quality. We specialize in importing and distributing high-quality
                          electrical and mechanical products while providing comprehensive services to support our
                          clients' operational needs.
                        </p>
                        <p>
                          Today, we stand as a trusted partner for energy and technology solutions, with over 500
                          successful projects and a team of dedicated professionals who bring expertise, reliability,
                          and innovation to every engagement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=500&width=600"
                      alt="ABLY ELECTRIC Journey"
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm">Years of Excellence</div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-3xl font-bold text-center text-black mb-12">Our Milestones</h3>
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200 hidden lg:block"></div>

                    <div className="space-y-12">
                      {milestones.map((milestone, index) => (
                        <div
                          key={index}
                          className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:space-x-8`}
                        >
                          <div
                            className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"} mb-4 lg:mb-0`}
                          >
                            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                              <CardContent className="p-6">
                                <div className="flex items-center space-x-3 mb-3">
                                  <div className="p-2 bg-red-100 rounded-full text-red-600">{milestone.icon}</div>
                                  <div className="text-2xl font-bold text-red-600">{milestone.year}</div>
                                </div>
                                <h4 className="text-xl font-bold text-black mb-2">{milestone.title}</h4>
                                <p className="text-gray-600">{milestone.description}</p>
                              </CardContent>
                            </Card>
                          </div>

                          {/* Timeline Node */}
                          <div className="hidden lg:flex w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                          <div className="lg:w-1/2"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Leadership Team Tab */}
            {activeTab === "team" && (
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Meet Our Leadership Team</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Experienced professionals driving innovation and excellence across all aspects of our business.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {teamMembers.map((member, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                          <p className="text-red-400 font-medium">{member.position}</p>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="bg-red-100 text-red-800">
                              {member.experience}
                            </Badge>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="ghost" className="p-2">
                                <Mail className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="p-2">
                                <Globe className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Specialization</h4>
                            <p className="text-sm text-gray-600">{member.specialization}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                            <div className="space-y-1">
                              {member.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="h-3 w-3 text-red-600 mr-2 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Values & Mission Tab */}
            {activeTab === "values" && (
              <div className="space-y-16">
                {/* Mission Statement */}
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Our Mission & Vision</h2>
                  <div className="max-w-4xl mx-auto">
                    <Card className="border-0 shadow-xl bg-gradient-to-r from-red-600 to-black text-white">
                      <CardContent className="p-8 lg:p-12">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                              <Target className="h-6 w-6 mr-2" />
                              Our Mission
                            </h3>
                            <p className="text-red-100 leading-relaxed">
                              To provide innovative electrical and mechanical solutions that empower businesses to
                              operate efficiently and sustainably, while fostering technological advancement and
                              environmental responsibility.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                              <Globe className="h-6 w-6 mr-2" />
                              Our Vision
                            </h3>
                            <p className="text-red-100 leading-relaxed">
                              To be India's leading provider of comprehensive energy and technology solutions,
                              recognized for innovation, quality, and commitment to sustainable development.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Core Values */}
                <div>
                  <h3 className="text-3xl font-bold text-center text-black mb-12">Our Core Values</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                      <Card
                        key={index}
                        className={`border-2 ${value.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                      >
                        <CardContent className="p-8">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-red-100 rounded-full flex-shrink-0">{value.icon}</div>
                            <div>
                              <h4 className="text-xl font-bold text-black mb-3">{value.title}</h4>
                              <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                <div>
                  <h3 className="text-3xl font-bold text-center text-black mb-12">What Our Clients Say</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                      <Card
                        key={index}
                        className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.author}
                              className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                              <div className="font-semibold text-gray-900">{testimonial.author}</div>
                              <div className="text-sm text-gray-600">{testimonial.position}</div>
                              <div className="text-xs text-red-600 font-medium">{testimonial.company}</div>
                            </div>
                          </div>

                          <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                              />
                            ))}
                          </div>

                          <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === "certifications" && (
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Certifications & Standards</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our commitment to quality and compliance is demonstrated through our comprehensive certifications
                    and adherence to international standards.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-red-100 rounded-full text-red-600 flex-shrink-0">{cert.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg text-black mb-2">{cert.name}</h4>
                            <div className="flex items-center justify-between">
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                Certified {cert.year}
                              </Badge>
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quality Commitment */}
                <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                  <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-black mb-6">Our Quality Commitment</h3>
                    <p className="text-gray-700 leading-relaxed mb-8">
                      At ABLY ELECTRIC, quality isn't just a goal—it's our foundation. Every product we distribute and
                      every service we provide undergoes rigorous quality checks to ensure it meets the highest
                      international standards. Our certifications reflect our unwavering commitment to excellence and
                      continuous improvement.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-3">
                          <Shield className="h-8 w-8 text-red-600" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Quality Assurance</h4>
                        <p className="text-sm text-gray-600">Rigorous testing and quality control processes</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-3">
                          <Award className="h-8 w-8 text-red-600" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Compliance</h4>
                        <p className="text-sm text-gray-600">Adherence to international standards and regulations</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-3">
                          <TrendingUp className="h-8 w-8 text-red-600" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Continuous Improvement</h4>
                        <p className="text-sm text-gray-600">Regular audits and process optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-black to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Work with Industry Leaders?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust ABLY ELECTRIC for their energy and technology needs. Let's
            build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white group">
              <Phone className="mr-2 h-5 w-5" />
              <span>Get Started Today</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-red-600 hover:text-red-600 group"
            >
              <Mail className="mr-2 h-5 w-5" />
              <span>Contact Our Team</span>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
