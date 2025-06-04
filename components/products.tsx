import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, BookOpen, Cpu, Settings, Star } from "lucide-react"
import Link from "next/link"

export default function Products() {
  const productCategories = [
    {
      icon: <Zap className="h-12 w-12 text-red-600" />,
      title: "EV Chargers & Power Backup",
      description: "Complete power solutions for modern energy needs",
      products: [
        "EV Chargers – Fast, efficient charging solutions for electric vehicles",
        "UPS Systems – Protect your operations from power interruptions",
        "Inverters – Ensure efficient power conversion for backup",
        "Generators – Reliable energy solutions for industrial use",
        "Stabilizers – Voltage regulation for sensitive equipment",
        "Power Supply Units – Consistent and stable power for machinery",
        "Batteries – Durable and long-lasting energy sources",
      ],
      link: "/products/ev-chargers",
      featured: true,
      rating: 4.9,
    },
    {
      icon: <BookOpen className="h-12 w-12 text-red-600" />,
      title: "Industrial Trainers & Automation",
      description: "Advanced training equipment for technical education",
      products: [
        "Electrical & Electronics Trainer – Hands-on learning for circuitry",
        "Logic Gate Trainer – Teaching digital logic fundamentals",
        "Process Control Trainer – Simulating industrial automation",
        "Instrumentation Trainer – Precision training for measurement",
        "Encode & Decode Trainer – Advanced data processing methods",
      ],
      link: "/products/trainers",
      featured: false,
      rating: 4.8,
    },
    {
      icon: <Settings className="h-12 w-12 text-red-600" />,
      title: "Pumps & Fluid Systems",
      description: "Efficient solutions for fluid control and management",
      products: [
        "Industrial Pumps – Efficient solutions for fluid control",
        "Pneumatics Trainer – Comprehensive training on air-powered automation",
        "Hydraulics Trainer – Practical experience with hydraulic systems",
      ],
      link: "/products/pumps",
      featured: false,
      rating: 4.7,
    },
    {
      icon: <Cpu className="h-12 w-12 text-red-600" />,
      title: "Electrical Components & Equipment",
      description: "Essential components for electronics and automation",
      products: [
        "Capacitors, Transistors, Diodes, ICs – Essential components",
        "Crystal Oscillators & Resistors – Precision circuit stability",
        "Motors, Switches, Fuses, Relays – Reliable control mechanisms",
        "Sensors & Seven-Segment Displays – Automation and visualization",
      ],
      link: "/products/components",
      featured: false,
      rating: 4.8,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-wider">Our Products</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-2">High-Quality Solutions for Every Need</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each product category features high-quality solutions with detailed specifications and benefits for all your
            project needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg relative overflow-hidden ${
                category.featured ? "ring-2 ring-red-500 ring-offset-2" : ""
              }`}
            >
              {category.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-6 translate-y-3">
                    FEATURED
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-0">
                <div className="mx-auto mb-4 p-4 bg-red-50 rounded-full w-fit">{category.icon}</div>
                <CardTitle className="text-lg mb-2">{category.title}</CardTitle>
              </CardHeader>

              <CardContent className="text-center pt-2">
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>

                <div className="flex items-center justify-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(category.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">{category.rating}</span>
                </div>

                <div className="space-y-2 mb-6 text-left">
                  {category.products.slice(0, 3).map((product, idx) => (
                    <div key={idx} className="text-xs text-gray-700 flex items-start">
                      <span className="text-red-600 mr-2 font-bold">✓</span>
                      <span>{product.split(" – ")[0]}</span>
                    </div>
                  ))}
                  {category.products.length > 3 && (
                    <div className="text-xs text-red-600 font-medium">
                      +{category.products.length - 3} more products
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Link href={category.link} className="w-full">
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full group">
                    <span>View Products</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Featured Products Carousel */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Featured Products</h3>
            <Link href="/products">
              <Button variant="ghost" className="text-red-600 hover:text-red-700">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Featured Product 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/ev.jpg?height=300&width=400"
                  alt="ABLY Fast DC Charger"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-red-600">EV Chargers</Badge>
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-medium flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                  <span>4.9</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">
                  ABLY Fast DC Charger 60kW
                </h4>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  Fast, efficient charging solutions for electric vehicles with Level 2 & DC fast charging options
                </p>
                <div className="flex justify-between items-center">
                  {/* <span className="text-lg font-bold text-red-600">₹4,50,000</span> */}
                  <Button size="sm" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Product 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/ups.webp?height=300&width=400"
                  alt="ABLY UPS System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-red-600">UPS Systems</Badge>
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-medium flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                  <span>4.8</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">
                  ABLY Industrial UPS 10kVA
                </h4>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  Reliable power backup solution for industrial applications with advanced monitoring
                </p>
                <div className="flex justify-between items-center">
                  {/* <span className="text-lg font-bold text-red-600">₹2,25,000</span> */}
                  <Button size="sm" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Product 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/traning.jpg?height=300&width=400"
                  alt="ABLY Electrical Trainer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-red-600">Training Equipment</Badge>
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-medium flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                  <span>4.9</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">
                  ABLY Advanced Electrical Trainer
                </h4>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  Comprehensive training system for electrical engineering education with practical experiments
                </p>
                <div className="flex justify-between items-center">
                  {/* <span className="text-lg font-bold text-red-600">₹1,75,000</span> */}
                  <Button size="sm" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
            </div>

            <h3 className="text-2xl font-bold mb-4 relative">Need High-Quality Electrical Components?</h3>
            <p className="text-gray-300 mb-6 relative max-w-2xl mx-auto">
              Browse our comprehensive catalog of electrical and electronic components for all your project needs. Get
              expert advice and competitive pricing on all our products.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white relative group"
            >
              <span>Browse Our Catalog</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
