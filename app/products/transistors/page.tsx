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

export default function TransistorsICsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "NPN Power Transistor",
            category: "Transistors",
            image: "/products/Electrical Components/transistors & Ics/npn.jpg?height=300&width=400",
            rating: 4.8,
            description: "High-performance NPN power transistor for switching and amplification.",
            specifications: {
                type: "NPN",
                maxVoltage: "80V",
                maxCurrent: "8A",
                package: "TO-220",
                gain: "hFE 40-160",
                powerDissipation: "75W",
                warranty: "1 year",
            },
            features: [
                "Low saturation voltage",
                "High current capability",
                "Fast switching speed",
                "Robust TO-220 package",
                "Reliable performance",
                "Thermal stability",
                "Wide operating temperature",
                "Easy PCB mounting",
            ],
            benefits: [
                "Efficient power management",
                "Suitable for motor drivers",
                "Ideal for audio amplifiers",
            ],
            applications: [
                "Power supplies",
                "Audio amplifiers",
                "Motor control",
                "Switching circuits",
            ],
        },
        {
            id: 2,
            name: "P-Channel MOSFET",
            category: "Transistors",
            image: "/products/Electrical Components/transistors & Ics/p-channel.webp?height=300&width=400",
            rating: 4.7,
            description: "Low RDS(on) P-Channel MOSFET for efficient load switching.",
            specifications: {
                type: "P-Channel",
                maxVoltage: "30V",
                maxCurrent: "12A",
                package: "DPAK",
                rdsOn: "0.035Ω",
                gateCharge: "12nC",
                warranty: "1 year",
            },
            features: [
                "Low on-resistance",
                "High-speed switching",
                "Logic level gate drive",
                "Compact DPAK package",
                "Enhanced ESD protection",
                "Low gate charge",
                "RoHS compliant",
                "Thermal pad for cooling",
            ],
            benefits: [
                "Reduces power loss",
                "Improves circuit efficiency",
                "Easy integration in compact designs",
            ],
            applications: [
                "DC-DC converters",
                "Battery management",
                "Load switches",
                "Reverse polarity protection",
            ],
        },
        {
            id: 3,
            name: "Quad Op-Amp IC (LM324)",
            category: "ICs",
            image: "/products/Electrical Components/transistors & Ics/quad.webp?height=300&width=400",
            rating: 4.9,
            description: "Versatile quad operational amplifier IC for analog signal processing.",
            specifications: {
                type: "Quad Op-Amp",
                supplyVoltage: "3V-32V",
                inputOffset: "2mV",
                slewRate: "0.5V/μs",
                package: "DIP-14/SOIC-14",
                bandwidth: "1MHz",
                warranty: "2 years",
            },
            features: [
                "Four op-amps in one package",
                "Wide supply voltage range",
                "Low input bias current",
                "Unity-gain stable",
                "Short-circuit protection",
                "Low power consumption",
                "Compatible with single supply",
                "Industry standard pinout",
            ],
            benefits: [
                "Reduces board space",
                "Cost-effective analog design",
                "Reliable for industrial use",
            ],
            applications: [
                "Signal conditioning",
                "Active filters",
                "Sensor interfaces",
                "Analog computation",
            ],
        },
        {
            id: 4,
            name: "555 Timer IC",
            category: "ICs",
            image: "/products/Electrical Components/transistors & Ics/timer.jpeg?height=300&width=400",
            rating: 4.6,
            description: "Classic 555 timer IC for precision timing and oscillator circuits.",
            specifications: {
                type: "Timer",
                supplyVoltage: "4.5V-16V",
                frequency: "Up to 500kHz",
                outputCurrent: "200mA",
                package: "DIP-8/SOIC-8",
                timingAccuracy: "±1%",
                warranty: "2 years",
            },
            features: [
                "Astable and monostable modes",
                "Adjustable duty cycle",
                "High output drive",
                "TTL compatible",
                "Temperature stability",
                "Low power consumption",
                "Easy to use",
                "Widely supported",
            ],
            benefits: [
                "Flexible timing solutions",
                "Reliable pulse generation",
                "Ideal for hobby and industrial use",
            ],
            applications: [
                "Oscillators",
                "Timers",
                "Pulse generators",
                "LED flashers",
            ],
        },
    ]

    const categories = ["All", "Transistors", "ICs"]

    const filteredProducts = products.filter(
        (product) => selectedCategory === "All" || product.category === selectedCategory,
    )

    const productBenefits = [
        {
            icon: <Cpu className="h-8 w-8 text-red-600" />,
            title: "High Performance",
            description: "Reliable transistors and ICs for demanding electronic applications",
        },
        {
            icon: <Settings className="h-8 w-8 text-red-600" />,
            title: "Versatile Selection",
            description: "Wide range of types and packages for every circuit need",
        },
        {
            icon: <Activity className="h-8 w-8 text-red-600" />,
            title: "Precision & Efficiency",
            description: "Low power loss and accurate signal processing",
        },
        {
            icon: <BarChart2 className="h-8 w-8 text-red-600" />,
            title: "Trusted Quality",
            description: "Industry-standard components with proven reliability",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-red-600 text-white mb-4">Transistors & ICs</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Transistors & Integrated Circuits</h1>
                        <h2 className="text-2xl lg:text-3xl text-red-400 font-semibold mb-4">
                            Power, Control, and Signal Processing Components
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                            Explore our selection of transistors and ICs for robust and efficient electronic designs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-red-600 text-white px-4 py-2">NPN & MOSFETs</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Op-Amps & Timers</Badge>
                            <Badge className="bg-red-600 text-white px-4 py-2">Reliable & Versatile</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Features & Benefits</h2>
                        <p className="text-xl text-gray-600">Empowering your electronics with quality components</p>
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
                                                    {product.specifications.type || product.specifications.package}
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
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Upgrade Your Electronics Today!</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our team to find the right transistor or IC for your project with expert support and fast delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                            <Phone className="mr-2 h-5 w-5" />
                            Explore Components
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
