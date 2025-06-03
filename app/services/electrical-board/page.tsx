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

export default function ElectricalBoardMaintenancePage() {
    const [selectedImage, setSelectedImage] = useState<any>(null)

    const serviceImages = [
        {
            id: 1,
            title: "Routine Board Inspection",
            category: "Preventive Maintenance",
            image: "/placeholder.svg?height=300&width=400",
            description: "Scheduled inspections to identify wear, loose connections, and overheating in electrical boards.",
            details: {
                duration: "1-2 hours",
                warranty: "Service guarantee",
                certification: "Certified Technicians",
                features: [
                    "Visual and thermal inspection",
                    "Tightening of connections",
                    "Component health check",
                    "Dust and debris removal",
                    "Detailed inspection report",
                ],
            },
        },
        {
            id: 2,
            title: "Board Cleaning & Servicing",
            category: "Cleaning",
            image: "/placeholder.svg?height=300&width=400",
            description: "Comprehensive cleaning and servicing of electrical boards to prevent faults and improve reliability.",
            details: {
                duration: "2-3 hours",
                warranty: "Service guarantee",
                certification: "ISO Certified",
                features: [
                    "Removal of dust and contaminants",
                    "Contact cleaning",
                    "Lubrication of moving parts",
                    "Corrosion prevention",
                    "Component re-seating",
                ],
            },
        },
        {
            id: 3,
            title: "Thermal Imaging Analysis",
            category: "Diagnostics",
            image: "/placeholder.svg?height=300&width=400",
            description: "Thermal imaging to detect hotspots and prevent electrical failures in boards.",
            details: {
                duration: "1 hour",
                warranty: "Service guarantee",
                certification: "Calibrated Equipment",
                features: [
                    "Thermal scan of all connections",
                    "Hotspot identification",
                    "Load imbalance detection",
                    "Preventive recommendations",
                    "Thermal report",
                ],
            },
        },
        {
            id: 4,
            title: "Board Component Replacement",
            category: "Corrective Maintenance",
            image: "/placeholder.svg?height=300&width=400",
            description: "Replacement of faulty breakers, relays, and other board components for safe operation.",
            details: {
                duration: "1-4 hours",
                warranty: "1 year on replaced parts",
                certification: "OEM Parts",
                features: [
                    "Breaker replacement",
                    "Relay and fuse replacement",
                    "Wiring repairs",
                    "Testing after replacement",
                    "Compliance check",
                ],
            },
        },
        {
            id: 5,
            title: "Insulation Resistance Testing",
            category: "Testing",
            image: "/placeholder.svg?height=300&width=400",
            description: "Testing insulation resistance to ensure safety and prevent electrical leakage.",
            details: {
                duration: "1 hour",
                warranty: "Service guarantee",
                certification: "Certified Technicians",
                features: [
                    "Insulation resistance measurement",
                    "Leakage current detection",
                    "Test report",
                    "Recommendations",
                    "Safety compliance",
                ],
            },
        },
        {
            id: 6,
            title: "Emergency Board Repair",
            category: "Emergency Service",
            image: "/placeholder.svg?height=300&width=400",
            description: "Rapid response for electrical board failures and urgent repairs.",
            details: {
                duration: "As needed",
                warranty: "Service guarantee",
                certification: "Certified Technicians",
                features: [
                    "24/7 emergency support",
                    "Fault diagnosis",
                    "Immediate repairs",
                    "Temporary solutions",
                    "Root cause analysis",
                ],
            },
        },
    ]

    const servicePackages = [
        {
            name: "Basic Maintenance",
            // price: "₹5,000",
            duration: "Single Visit",
            features: [
                "Visual inspection",
                "Tightening of connections",
                "Basic cleaning",
                "Inspection report",
                "Phone support",
            ],
        },
        {
            name: "Comprehensive Maintenance",
            // price: "₹12,000",
            duration: "Quarterly",
            features: [
                "Full inspection & cleaning",
                "Thermal imaging",
                "Component testing",
                "Detailed report",
                "On-site support",
                "Minor repairs",
            ],
            popular: true,
        },
        {
            name: "Annual Maintenance Contract",
            // price: "₹30,000",
            duration: "Yearly",
            features: [
                "All-inclusive maintenance",
                "Unlimited emergency visits",
                "Priority support",
                "Component replacement (labor only)",
                "Compliance testing",
                "Performance optimization",
                "Annual audit report",
            ],
        },
    ]

    const processSteps = [
        {
            step: 1,
            title: "Assessment & Diagnosis",
            description: "Evaluate board condition and identify maintenance needs",
            icon: <Settings className="h-8 w-8 text-red-600" />,
        },
        {
            step: 2,
            title: "Cleaning & Servicing",
            description: "Remove dust, tighten connections, and service components",
            icon: <Wrench className="h-8 w-8 text-red-600" />,
        },
        {
            step: 3,
            title: "Testing & Verification",
            description: "Perform electrical and thermal tests to ensure safety",
            icon: <Zap className="h-8 w-8 text-red-600" />,
        },
        {
            step: 4,
            title: "Reporting & Recommendations",
            description: "Provide detailed report and suggest preventive actions",
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
                        <Badge className="bg-red-600 text-white mb-4">Electrical Board Maintenance</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Electrical Board Maintenance Services</h1>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Ensure the safety, reliability, and longevity of your electrical boards with our expert maintenance solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">Certified Technicians</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">24/7 Emergency Support</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Comprehensive Reports</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Why Maintain Your Electrical Boards?</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Regular maintenance of electrical boards prevents unexpected failures, reduces downtime, and ensures safety compliance. Our team uses advanced diagnostics and proven methods to keep your systems running smoothly.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-red-600" />
                                    <span className="text-sm">Prevent Breakdowns</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-red-600" />
                                    <span className="text-sm">Enhance Safety</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-red-600" />
                                    <span className="text-sm">Extend Equipment Life</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-red-600" />
                                    <span className="text-sm">Compliance Assurance</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="text-center p-6 border-red-200">
                                <CardContent className="p-0">
                                    <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
                                    <div className="text-sm text-gray-600">Boards Maintained</div>
                                </CardContent>
                            </Card>
                            <Card className="text-center p-6 border-red-200">
                                <CardContent className="p-0">
                                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                                    <div className="text-sm text-gray-600">Emergency Response</div>
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
                                    <div className="text-3xl font-bold text-red-600 mb-2">99%</div>
                                    <div className="text-sm text-gray-600">Uptime Achieved</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maintenance Process */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Our Maintenance Process</h2>
                        <p className="text-xl text-gray-600">Systematic approach for reliable electrical boards</p>
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Maintenance Projects</h2>
                        <p className="text-xl text-gray-600">See how we keep electrical boards safe and reliable</p>
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
                                            <Button className="w-full bg-red-600 hover:bg-red-700">Request Maintenance for This Board</Button>
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Maintenance Packages</h2>
                        <p className="text-xl text-gray-600">Choose the right maintenance plan for your boards</p>
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
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Electrical Board Maintenance?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact our specialists for a free assessment and keep your electrical boards in top condition.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                            <Phone className="mr-2 h-5 w-5" />
                            Call Now: +251 911 464023
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                            <Calendar className="mr-2 h-5 w-5" />
                            Schedule Maintenance Visit
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
