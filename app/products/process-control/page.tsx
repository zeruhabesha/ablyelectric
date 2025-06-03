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
import { Cpu, Settings, Activity, BarChart2, CheckCircle, Phone, ShoppingCart, Star, Server, Clock, Plug } from "lucide-react"

export default function ProcessControlPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Programmable Logic Controller (PLC)",
            category: "Controllers",
            image: "/placeholder.svg?height=300&width=400",
            rating: 4.8,
            description: "Robust PLCs for reliable automation and process control.",
            specifications: {
                cpu: "32-bit ARM Cortex",
                io: "16 DI / 16 DO / 8 AI",
                communication: "Ethernet, RS485, Modbus",
                power: "24V DC",
                programming: "IEC 61131-3",
                warranty: "2 years",
            },
            features: [
                "High-speed processing",
                "Modular expansion",
                "Real-time monitoring",
                "User-friendly programming",
                "Industrial-grade durability",
                "Remote diagnostics",
                "Wide temperature range",
                "DIN rail mounting",
            ],
            benefits: [
                "Improved process reliability",
                "Easy integration with SCADA",
                "Flexible for future upgrades",
            ],
            applications: [
                "Manufacturing lines",
                "Water treatment",
                "HVAC systems",
                "Packaging machines",
            ],
        },
        {
            id: 2,
            name: "Human Machine Interface (HMI)",
            category: "Interfaces",
            image: "/placeholder.svg?height=300&width=400",
            rating: 4.7,
            description: "Touchscreen HMIs for intuitive process visualization and control.",
            specifications: {
                display: "7\"/10\"/15\" TFT LCD",
                resolution: "1024x600 / 1280x800",
                connectivity: "Ethernet, USB, Serial",
                os: "Embedded Linux",
                storage: "8GB Flash",
                warranty: "2 years",
            },
            features: [
                "Multi-touch support",
                "Customizable dashboards",
                "Alarm management",
                "Data logging",
                "Remote access",
                "IP65 front panel",
                "Easy integration",
                "Energy efficient",
            ],
            benefits: [
                "Enhanced operator efficiency",
                "Real-time process feedback",
                "Reduced downtime",
            ],
            applications: [
                "Factory automation",
                "Building management",
                "Energy monitoring",
                "Food processing",
            ],
        },
        {
            id: 3,
            name: "SCADA Software Suite",
            category: "Software",
            image: "/placeholder.svg?height=300&width=400",
            rating: 4.9,
            description: "Comprehensive SCADA for centralized monitoring and control.",
            specifications: {
                platform: "Windows/Linux",
                protocols: "Modbus, OPC, MQTT",
                users: "Unlimited",
                historian: "Integrated",
                visualization: "Web-based",
                warranty: "1 year",
            },
            features: [
                "Real-time data acquisition",
                "Custom reporting",
                "Alarm & event management",
                "Role-based access",
                "Mobile access",
                "Scalable architecture",
                "Third-party integration",
                "Secure communications",
            ],
            benefits: [
                "Centralized process control",
                "Improved decision making",
                "Scalable for any plant size",
            ],
            applications: [
                "Utilities",
                "Oil & gas",
                "Pharmaceuticals",
                "Smart buildings",
            ],
        },
        {
            id: 4,
            name: "Industrial Sensors",
            category: "Sensors",
            image: "/placeholder.svg?height=300&width=400",
            rating: 4.5,
            description: "Precision sensors for accurate process measurement.",
            specifications: {
                types: "Temperature, Pressure, Flow, Level",
                output: "4-20mA, 0-10V, Modbus",
                accuracy: "±0.2%",
                enclosure: "IP67",
                power: "12-36V DC",
                warranty: "1 year",
            },
            features: [
                "High accuracy",
                "Wide measurement range",
                "Rugged construction",
                "Fast response time",
                "Easy installation",
                "Digital & analog outputs",
                "Self-diagnostics",
                "Maintenance-free",
            ],
            benefits: [
                "Reliable process data",
                "Reduced maintenance",
                "Supports automation",
            ],
            applications: [
                "Process industries",
                "Water management",
                "HVAC",
                "Energy plants",
            ],
        },
    ]

    const categories = ["All", "Controllers", "Interfaces", "Software", "Sensors"]

    const filteredProducts = products.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory,
    )

    const productBenefits = [
        {
            icon: <Cpu className="h-8 w-8 text-red-600" />,
            title: "Advanced Automation",
            description: "Streamline operations with intelligent process control solutions",
        },
        {
            icon: <Settings className="h-8 w-8 text-red-600" />,
            title: "Flexible Integration",
            description: "Seamlessly connect with existing equipment and protocols",
        },
        {
            icon: <Activity className="h-8 w-8 text-red-600" />,
            title: "Real-Time Monitoring",
            description: "Instant feedback and alarms for critical processes",
        },
        {
            icon: <BarChart2 className="h-8 w-8 text-red-600" />,
            title: "Data-Driven Insights",
            description: "Analyze trends and optimize performance with powerful analytics",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-red-600 text-white mb-4">Process Control</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Precision Process Control Solutions</h1>
                        <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
                            Automate, Monitor, and Optimize Your Operations
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Discover our range of process control products for industrial automation and efficiency.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">PLCs & HMIs</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">SCADA & Sensors</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Reliable & Scalable</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
                        <p className="text-xl text-gray-600">Empowering your business with smart process control</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {productBenefits.map((benefit, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="mx-auto mb-4 p-4 bg-red-50 rounded-full w-fit">{benefit.icon}</div>
                                    <h3 className="font-bold text-lg text-black mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category, index) => (
                            <Button
                                key={index}
                                variant={selectedCategory === category ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCategory(category)}
                                className={
                                    selectedCategory === category
                                        ? "bg-red-600 hover:bg-red-700"
                                        : "border-red-600 text-red-600 hover:bg-red-50"
                                }
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <Dialog key={product.id}>
                                <DialogTrigger asChild>
                                    <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <img
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.name}
                                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                            <Badge className="absolute top-4 left-4 bg-red-600 text-white">{product.category}</Badge>
                                            <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                                                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                                <span className="text-xs font-medium">{product.rating}</span>
                                            </div>
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-lg">{product.name}</CardTitle>
                                            <CardDescription>{product.description}</CardDescription>
                                            <div className="flex items-center justify-between">
                                                <Badge variant="secondary">
                                                    {product.specifications.cpu || product.specifications.display || product.specifications.platform || product.specifications.types}
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl">{product.name}</DialogTitle>
                                        <DialogDescription className="text-lg">{product.description}</DialogDescription>
                                    </DialogHeader>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div>
                                            <img
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.name}
                                                className="w-full h-64 object-cover rounded-lg mb-4"
                                            />
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-1">
                                                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                                    <span className="font-medium">{product.rating}</span>
                                                    <span className="text-gray-500">(124 reviews)</span>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                                                    <Phone className="mr-2 h-4 w-4" />
                                                    Call for Pricing
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            {/* Features */}
                                            <div>
                                                <h4 className="font-bold text-lg mb-3">Features</h4>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {product.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-center space-x-2">
                                                            <CheckCircle className="h-4 w-4 text-red-600" />
                                                            <span className="text-sm">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Benefits */}
                                            <div>
                                                <h4 className="font-bold text-lg mb-3">Benefits</h4>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {product.benefits.map((benefit, idx) => (
                                                        <div key={idx} className="flex items-center space-x-2">
                                                            <CheckCircle className="h-4 w-4 text-red-600" />
                                                            <span className="text-sm">{benefit}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Specifications */}
                                            <div>
                                                <h4 className="font-bold text-lg mb-3">Technical Specifications</h4>
                                                <div className="grid grid-cols-2 gap-3 text-sm">
                                                    {Object.entries(product.specifications).map(([key, value]) => (
                                                        <div key={key} className="flex justify-between border-b pb-1">
                                                            <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                                                            <span>{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Applications */}
                                            <div>
                                                <h4 className="font-bold text-lg mb-3">Ideal Applications</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {product.applications.map((app, idx) => (
                                                        <Badge key={idx} variant="secondary" className="bg-red-100 text-red-800">
                                                            {app}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Upgrade Your Process Control Today!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our team to find the right process control solution for your operations with expert support and fast delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                            <Phone className="mr-2 h-5 w-5" />
                            Explore Solutions
                        </Button>
                        <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Request Quote
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
