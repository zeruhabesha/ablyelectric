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

export default function EVChargerInstallationPage() {
    // Removed unused selectedImage state

    const serviceImages = [
        {
            id: 1,
            title: "Home EV Charger Installation",
            category: "Residential",
            image: "/placeholder.svg?height=300&width=400",
            description: "Safe and efficient installation of EV chargers at your home, including wiring and setup.",
            details: {
                duration: "1 day",
                warranty: "1 year",
                certification: "Certified Electricians",
                features: [
                    "Site assessment",
                    "Load calculation",
                    "Charger mounting",
                    "Wiring & circuit installation",
                    "Testing & demonstration",
                ],
            },
        },
        {
            id: 2,
            title: "Commercial EV Charging Stations",
            category: "Commercial",
            image: "/placeholder.svg?height=300&width=400",
            description: "Installation of multiple EV charging points for offices, malls, and parking lots.",
            details: {
                duration: "2-4 days",
                warranty: "2 years",
                certification: "ISO Certified",
                features: [
                    "Multiple charger setup",
                    "Load management system",
                    "User authentication",
                    "Billing integration",
                    "Remote monitoring",
                ],
            },
        },
        {
            id: 3,
            title: "Fast DC Charger Installation",
            category: "Fast Charging",
            image: "/placeholder.svg?height=300&width=400",
            description: "High-power DC fast charger installation for rapid EV charging at public or fleet locations.",
            details: {
                duration: "3-5 days",
                warranty: "2 years",
                certification: "CE Marked",
                features: [
                    "High-capacity wiring",
                    "Safety compliance",
                    "Charger commissioning",
                    "Network integration",
                    "24/7 support",
                ],
            },
        },
        {
            id: 4,
            title: "EV Charger Maintenance",
            category: "Maintenance",
            image: "/placeholder.svg?height=300&width=400",
            description: "Routine and emergency maintenance for all types of EV chargers.",
            details: {
                duration: "Ongoing",
                warranty: "Service guarantee",
                certification: "Certified Technicians",
                features: [
                    "Periodic inspection",
                    "Firmware updates",
                    "Component replacement",
                    "Performance optimization",
                    "Emergency repairs",
                ],
            },
        },
        {
            id: 5,
            title: "Fleet EV Charging Solutions",
            category: "Fleet",
            image: "/placeholder.svg?height=300&width=400",
            description: "Custom EV charging infrastructure for electric vehicle fleets.",
            details: {
                duration: "5-10 days",
                warranty: "2 years",
                certification: "Fleet Certified",
                features: [
                    "Centralized charging management",
                    "Load balancing",
                    "Energy monitoring",
                    "Access control",
                    "Scalable solutions",
                ],
            },
        },
        {
            id: 6,
            title: "Solar-integrated EV Charging",
            category: "Green Energy",
            image: "/placeholder.svg?height=300&width=400",
            description: "Eco-friendly EV charging stations powered by solar energy.",
            details: {
                duration: "3-7 days",
                warranty: "2 years",
                certification: "Solar Certified",
                features: [
                    "Solar panel integration",
                    "Hybrid power management",
                    "Energy storage setup",
                    "Monitoring dashboard",
                    "Sustainable charging",
                ],
            },
        },
    ]

    const servicePackages = [
        {
            name: "Basic EV Charger Installation",
            // price: "₹15,000",
            duration: "1 day",
            features: [
                "Single charger installation",
                "Basic wiring",
                "Safety check",
                "3 months warranty",
                "Phone support",
            ],
        },
        {
            name: "Professional EV Charger Installation",
            // price: "₹28,000",
            duration: "1-2 days",
            features: [
                "Charger & wiring installation",
                "Load calculation",
                "Testing & demonstration",
                "1 year warranty",
                "On-site support",
                "Documentation",
            ],
            popular: true,
        },
        {
            name: "Enterprise EV Charging Solution",
            // price: "₹60,000",
            duration: "2-4 days",
            features: [
                "Multiple charger setup",
                "Advanced load management",
                "User authentication",
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
            description: "Evaluate your location and electrical system for optimal charger placement.",
            icon: <Settings className="h-8 w-8 text-red-600" />,
        },
        {
            step: 2,
            title: "Planning & Design",
            description: "Customized installation plan based on your vehicle and charging needs.",
            icon: <Wrench className="h-8 w-8 text-red-600" />,
        },
        {
            step: 3,
            title: "Installation",
            description: "Certified technicians install and configure your EV charger safely.",
            icon: <Zap className="h-8 w-8 text-red-600" />,
        },
        {
            step: 4,
            title: "Testing & Handover",
            description: "Thorough testing and demonstration to ensure reliable operation.",
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
                        <Badge className="bg-red-600 text-white mb-4">EV Charging Solutions</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">EV Charger Installation Services</h1>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Professional installation and maintenance of electric vehicle charging stations for homes, businesses, and fleets.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Certified Installers</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Fast & Safe Setup</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Warranty Included</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Expert EV Charger Installation</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Our certified team provides end-to-end EV charger installation for residential, commercial, and fleet applications. We ensure safety, compliance, and optimal charging performance for your electric vehicle.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-red-600" />
                                    <span className="text-sm">Certified Installers</span>
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
                                    <div className="text-3xl font-bold text-red-600 mb-2">300+</div>
                                    <div className="text-sm text-gray-600">EV Chargers Installed</div>
                                </CardContent>
                            </Card>
                            <Card className="text-center p-6 border-red-200">
                                <CardContent className="p-0">
                                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                                    <div className="text-sm text-gray-600">Support Available</div>
                                </CardContent>
                            </Card>
                            <Card className="text-center p-6 border-red-200">
                                <CardContent className="p-0">
                                    <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Our EV Charger Installation Process</h2>
                        <p className="text-xl text-gray-600">A streamlined process for safe and reliable charging</p>
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">EV Charger Installation Projects</h2>
                        <p className="text-xl text-gray-600">See our recent EV charger installations and solutions</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceImages.map((item) => (
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">EV Charger Installation Packages</h2>
                        <p className="text-xl text-gray-600">Choose the right package for your EV charging needs</p>
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
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Charge Your EV?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact our expert team for a free consultation and customized EV charger installation quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                            <Phone className="mr-2 h-5 w-5" />
                            Call Now: +251 911 464023
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black">
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
