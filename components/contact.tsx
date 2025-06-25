import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect with Ease</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our expert team for personalized solutions, technical support, or any questions about our
            electrical and mechanical products and services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <span>Phone Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-gray-900">Sales & Inquiries</div>
                    <div className="text-blue-600 font-medium">+251 911 464023 <span className='mx-2 text-gray-400'>|</span> +251 912 286121 <span className='mx-2 text-gray-400'>|</span> +251 969 613131</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 text-green-700">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">Live Call Support Available</span>
                    </div>
                  </div>
                  {/* Quick Contact Options */}
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="font-medium">Quick Contact:</span>
                    <span className="text-blue-600 font-medium">+251 969 613131</span>
                    <span className="text-xs text-gray-500">(Telegram & WhatsApp)</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="inline-block bg-blue-500 text-white rounded px-2 py-1 text-xs font-semibold">Telegram Channel</span>
                    <span className="text-xs text-gray-700">Ably Electric - You're Backup for Uninterrupted Life</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-green-600" />
                  <span>Email Contact</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-gray-900">General Inquiries</div>
                    <div className="text-green-600 font-medium">info@ablyelectric.com</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Technical Support</div>
                    <div className="text-green-600 font-medium">support@ablyelectric.com</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sales Team</div>
                    <div className="text-green-600 font-medium">sales@ablyelectric.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-purple-600" />
                  <span>📍 Visit Our Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-gray-900">Head Office</div>
                    <div className="text-gray-600">
                      Conveniently located near Semien Hotel, in Darule Tower—8th Floor, Office No. 806, Addis Ababa, Ethiopia. Visit us for expert service and seamless accessibility.
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Mon-Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                    LinkedIn
                  </Button>
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                    Facebook
                  </Button>
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                    Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Get a Personalized Solution</CardTitle>
                <p className="text-center text-gray-600">
                  Fill out the form below and our experts will get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <Input placeholder="Enter your company name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service/Product Interest</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Select your interest</option>
                    <option>EV Chargers</option>
                    <option>UPS Systems</option>
                    <option>Industrial Trainers</option>
                    <option>Process Control</option>
                    <option>Electrical Components</option>
                    <option>Installation Services</option>
                    <option>Maintenance Services</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details / Message *</label>
                  <Textarea
                    placeholder="Please describe your requirements, project details, or any specific questions you have..."
                    rows={5}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded" />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    Subscribe to our newsletter for industry updates and expert tips
                  </label>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-3">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>

                <div className="text-center text-sm text-gray-500">
                  <p>🚀 Need immediate assistance? Call us at +251 911 464023</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Emergency Technical Support</h3>
            <p className=" from-red-600 to-red-700 mb-6">
              For urgent technical issues or emergency repairs, our 24/7 support team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: +251 911 464023
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
