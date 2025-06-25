import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock, Target, ArrowRight, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Our Mission",
      description:
        "To provide innovative electrical and mechanical solutions that empower businesses to operate efficiently and sustainably.",
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Quality Commitment",
      description:
        "We ensure the highest standards in all our products and services, backed by industry certifications and expertise.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Expert Team",
      description:
        "Our skilled professionals bring years of experience in electrical engineering, automation, and industrial solutions.",
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and maintenance services to keep your operations running smoothly.",
    },
  ]

  const expertise = [
    "Electrical Engineering",
    "Industrial Automation",
    "Power Systems",
    "EV Charging Technology",
    "Process Control",
    "Instrumentation",
    "Training & Education",
    "Import & Distribution",
  ]

  const testimonials = [
    {
      text: "ABLY ELECTRIC provided exceptional service for our industrial automation needs. Their team's expertise and attention to detail ensured our systems run efficiently.",
      author: "Abebe Kebede",
      position: "Operations Director, Ethio Steel",
      rating: 5,
    },
    {
      text: "The EV charging solutions from ABLY have transformed our commercial property. Installation was seamless and the ongoing support is outstanding.",
      author: "Fatuma Mohammed",
      position: "Facility Manager, Kazanchis Complex",
      rating: 5,
    },
    {
      text: "As an educational institution, we rely on ABLY's training equipment to prepare our students for industry. The quality and relevance of their products is unmatched.",
      author: "Dr. Lemma Tesfaye",
      position: "Dean, Addis Ababa Institute of Technology",
      rating: 4,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-2">Establish Authority & Trust</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 12 years of experience in the electrical and mechanical industry, ABLY ELECTRIC has established
            itself as a trusted partner for energy and technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Story */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h3>
              <div className="w-20 h-1 bg-red-600 mb-6 rounded-full"></div>
              <p className="text-gray-700 leading-relaxed mb-4">
                ABLY ELECTRIC was founded with a vision to bridge the gap between cutting-edge technology and practical
                industrial applications. We specialize in importing and distributing high-quality electrical and
                mechanical products while providing comprehensive services to support our clients' operational needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our journey began with a commitment to excellence and has evolved into a comprehensive solution provider
                for homes, businesses, and industries across Ethiopia. We pride ourselves on delivering reliable,
                efficient, and sustainable energy solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">12+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Our Expertise */}
          <div className="bg-white p-8 rounded-xl shadow-xl relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-red-600 text-white p-4 rounded-full shadow-lg">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h3>
            <p className="text-gray-700 mb-6">
              Our team brings extensive knowledge across multiple domains of electrical and mechanical engineering:
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {expertise.map((skill, index) => (
              <div
                key={index}
                className="flex items-center p-2 bg-red-50 rounded-lg border border-red-100 hover:bg-red-100 transition-colors"
              >
                <CheckCircle className="h-4 w-4 text-red-600 mr-2" />
                <span className="text-sm font-medium">{skill}</span>
              </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg">
              <p className="text-red-100 text-sm">
              We focus on providing top quality Electrical and Mechanical solutions.
              </p>
            </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values & Commitment</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md group hover:-translate-y-2"
              >
              <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-red-50 rounded-full w-fit group-hover:bg-red-100 transition-colors">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
                <CardContent className="p-6 pt-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="bg-red-100 text-red-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-xs text-gray-500">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_#fe0000_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">Meet Our Skilled Professionals</h3>
            <p className="text-gray-600 mb-6 relative">
              Our team consists of experienced engineers, technicians, and support staff dedicated to providing
              exceptional service and technical expertise to our clients.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm mb-6 relative">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold text-red-600 mb-1">Engineering Team</div>
                <div className="text-gray-600">Electrical & Mechanical Engineers</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold text-red-600 mb-1">Technical Support</div>
                <div className="text-gray-600">Installation & Maintenance Specialists</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold text-red-600 mb-1">Sales & Consulting</div>
                <div className="text-gray-600">Solution Architects & Advisors</div>
              </div>
            </div>
            <Link href="/about" className="relative">
              <Button className="bg-red-600 hover:bg-red-700 text-white group">
                <span>Learn More About Our Team</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
