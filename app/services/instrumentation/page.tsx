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
import { Settings, CheckCircle, Clock, Shield, Wrench, Zap, Phone, Calendar, Sliders, Activity, TrendingUp, Database } from "lucide-react"

export default function InstrumentationProcessControlPage() {
    const [selectedImage, setSelectedImage] = useState<any>(null)

    const serviceImages = [
        {
            id: 1,
            title: "Sensor Installation & Calibration",
            category: "Sensors",
            image: "/services/instrumentation/sensor.jpg?height=300&width=400",
            description: "Precision installation and calibration of process sensors for accurate measurement and control.",
            details: {
                duration: "1-3 days",
                warranty: "1 year",
                certification: "NABL Calibrated",
                features: [
                    "Temperature, pressure, flow, and level sensors",
                    "On-site calibration",
                    "Traceable certificates",
                    "Integration with PLC/SCADA",
                    "Documentation & training",
                ],
            },
        },
        {
            id: 2,
            title: "PLC & DCS Programming",
            category: "Automation",
            image: "/services/instrumentation/pcl.webp?height=300&width=400",
            description: "Custom PLC and DCS programming for automated process control and monitoring.",
            details: {
                duration: "2-5 days",
                warranty: "1 year",
                certification: "Certified Engineers",
                features: [
                    "Logic development",
                    "HMI/SCADA integration",
                    "Remote diagnostics",
                    "Alarm & event management",
                    "System validation",
                ],
            },
        },
        {
            id: 3,
            title: "Control Panel Fabrication",
            category: "Control Panels",
            image: "/services/instrumentation/control.jpg?height=300&width=400",
            description: "Design, fabrication, and installation of custom control panels for process industries.",
            details: {
                duration: "3-7 days",
                warranty: "2 years",
                certification: "CE Marked",
                features: [
                    "Panel wiring & assembly",
                    "Component selection",
                    "Functional testing",
                    "Safety compliance",
                    "Documentation",
                ],
            },
        },
        {
            id: 4,
            title: "Data Acquisition Systems",
            category: "Data Logging",
            image: "/services/instrumentation/data.webp?height=300&width=400",
            description: "Implementation of data acquisition and logging systems for process analysis and reporting.",
            details: {
                duration: "2-4 days",
                warranty: "1 year",
                certification: "ISO Certified",
                features: [
                    "Multi-channel data loggers",
                    "Real-time monitoring",
                    "Cloud integration",
                    "Custom dashboards",
                    "Alarm notifications",
                ],
            },
        },
        {
            id: 5,
            title: "Process Analyzer Integration",
            category: "Analyzers",
            image: "/services/instrumentation/process.jpg?height=300&width=400",
            description: "Installation and integration of process analyzers for quality and compliance monitoring.",
            details: {
                duration: "2-5 days",
                warranty: "1 year",
                certification: "OEM Supported",
                features: [
                    "Gas/liquid analyzers",
                    "Sampling systems",
                    "Calibration & validation",
                    "Reporting tools",
                    "Maintenance contracts",
                ],
            },
        },
        {
            id: 6,
            title: "Instrumentation Maintenance",
            category: "Maintenance",
            image: "/services/instrumentation/maintenance.avif?height=300&width=400",
            description: "Preventive and corrective maintenance for all instrumentation and control systems.",
            details: {
                duration: "Ongoing",
                warranty: "Service guarantee",
                certification: "Certified Technicians",
                features: [
                    "Routine inspection",
                    "Breakdown support",
                    "Calibration services",
                    "Spare management",
                    "Performance optimization",
                ],
            },
        },
    ]

    const servicePackages = [
        {
            name: "Basic Instrumentation",
            // price: "₹30,000",
            duration: "1-2 days",
            features: [
                "Sensor installation",
                "Basic calibration",
                "Wiring & testing",
                "3 months warranty",
                "Phone support",
            ],
        },
        {
            name: "Advanced Automation",
            // price: "₹60,000",
            duration: "2-4 days",
            features: [
                "PLC programming",
                "HMI/SCADA setup",
                "System integration",
                "1 year warranty",
                "On-site support",
                "Documentation",
            ],
            popular: true,
        },
        {
            name: "Complete Process Control",
            // price: "₹1,20,000",
            duration: "4-7 days",
            features: [
                "Full system design",
                "Advanced analytics",
                "Remote monitoring",
                "2 years warranty",
                "24/7 support",
                "Maintenance plan",
                "Training & handover",
            ],
        },
    ]

    const processSteps = [
        {
            step: 1,
            title: "Requirement Analysis",
            description: "Detailed study of process requirements and instrumentation needs.",
            icon: <Sliders className="h-8 w-8 text-red-600" />,
        },
        {
            step: 2,
            title: "System Design",
            description: "Custom design of instrumentation and control architecture.",
            icon: <Activity className="h-8 w-8 text-red-600" />,
        },
        {
            step: 3,
            title: "Implementation",
            description: "Installation, wiring, and programming by certified engineers.",
            icon: <Wrench className="h-8 w-8 text-red-600" />,
        },
        {
            step: 4,
            title: "Testing & Commissioning",
            description: "Comprehensive testing, calibration, and system handover.",
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
                        <Badge className="bg-red-600 text-white mb-4">Instrumentation & Process Control</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Instrumentation & Process Control Solutions</h1>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Expert solutions for industrial instrumentation, automation, and process control—ensuring accuracy, reliability, and compliance.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Certified Engineers</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Turnkey Solutions</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Calibration Services</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Comprehensive Instrumentation Services</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Our team delivers end-to-end instrumentation and process control services, from sensor installation to advanced automation. We ensure precise measurement, seamless integration, and regulatory compliance for your industrial processes.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-red-600" />
                                    <span className="text-sm">Certified Engineers</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-red-600" />
                                    <span className="text-sm">Calibration & Validation</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-red-600" />
                                    <span className="text-sm">Automation Expertise</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-red-600" />
                                    <span className="text-sm">Regulatory Compliance</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="text-center p-6 border-red-200">
                                <CardContent className="p-0">
                                    <div className="text-3xl font-bold text-red-600 mb-2">300+</div>
                                    <div className="text-sm text-gray-600">Projects Delivered</div>
                                </CardContent>
                            </Card>
                            <Card className="text-center p-6 border-red-200">
                                <CardContent className="p-0">
                                    <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                                    <div className="text-sm text-gray-600">Calibration Accuracy</div>
                                </CardContent>
                            </Card>
                            <Card className="text-center p-6 border-red-200">
                                <CardContent className="p-0">
                                    <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
                                    <div className="text-sm text-gray-600">Industries Served</div>
                                </CardContent>
                            </Card>
                            <Card className="text-center p-6 border-red-200">
                                <CardContent className="p-0">
                                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                                    <div className="text-sm text-gray-600">Support & Maintenance</div>
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Our Process Control Approach</h2>
                        <p className="text-xl text-gray-600">Structured methodology for reliable results</p>
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Instrumentation Projects</h2>
                        <p className="text-xl text-gray-600">Explore our completed instrumentation and process control solutions</p>
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Instrumentation Packages</h2>
                        <p className="text-xl text-gray-600">Select the right package for your process control needs</p>
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
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Optimize Your Process?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact our instrumentation experts for a free consultation and tailored process control solution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                            <Phone className="mr-2 h-5 w-5" />
                            Call Now: +251 911 464023
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black">
                            <Calendar className="mr-2 h-5 w-5" />
                            Schedule Consultation
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
