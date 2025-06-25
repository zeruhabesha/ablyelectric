"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Zap,
  CheckCircle,
  Users,
  Headphones,
  Globe,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="h-7 w-7 text-red-600" />,
      title: "Phone Support",
      subtitle: "Immediate assistance available",
      details: [
        { label: "Sales & Inquiries", value: "+251 911 464023", type: "primary" },
        { label: "Sales & Support", value: "+251 912 286121", type: "primary" },
        { label: "Sales & Support", value: "+251 969 613131", type: "primary" },
        { label: "Technical Support", value: "+251 911 464023", type: "secondary" },
        { label: "Emergency Hotline", value: "+251 911 464023", type: "emergency" },
      ],
      availability: "24/7 Emergency Support",
    },
    {
      icon: <Mail className="h-7 w-7 text-red-600" />,
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
      icon: <MapPin className="h-7 w-7 text-red-600" />,
      title: "📍 Visit Our Office",
      subtitle: "Meet our team in person",
      details: [
        {
          label: "Head Office",
          value:
            "Conveniently located near Semien Hotel, in Darule Tower—8th Floor, Office No. 806, Addis Ababa, Ethiopia. Visit us for expert service and seamless accessibility.",
          type: "address",
        },
      ],
      availability: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
  ];

  const supportFeatures = [
    {
      icon: <Headphones className="h-8 w-8 text-red-600" />,
      title: "24/7 Technical Support",
      description:
        "Round-the-clock assistance for emergency repairs and technical issues",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Dedicated Account Manager",
      description:
        "Personal point of contact for all your business needs and requirements",
    },
    {
      icon: <Globe className="h-8 w-8 text-red-600" />,
      title: "Remote Monitoring",
      description:
        "Advanced remote diagnostics and monitoring for installed systems",
    },
    {
      icon: <Calendar className="h-8 w-8 text-red-600" />,
      title: "Scheduled Maintenance",
      description:
        "Proactive maintenance programs to prevent downtime and extend equipment life",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-red-900 text-white py-20 lg:py-28 shadow-lg overflow-hidden">
        {/* Animated SVG or gradient background */}
        <div className="absolute inset-0 opacity-20 animate-pulse pointer-events-none select-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="hero-gradient" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#000" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-gradient)" />
            <circle cx="80%" cy="20%" r="120" fill="#ef4444" fillOpacity="0.12" />
            <circle cx="20%" cy="80%" r="80" fill="#fff" fillOpacity="0.06" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-2xl text-white relative">
              Contact Us
              <span className="block w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mx-auto mt-4 mb-2 animate-pulse" />
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-200 mb-10 font-light drop-shadow-lg">
              Reach out to our expert team for support, sales, or any questions
              about our products and services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-red-600 text-white px-5 py-2 text-base shadow-md">
                24/7 Support
              </Badge>
              <Badge className="bg-red-600 text-white px-5 py-2 text-base shadow-md">
                Expert Team
              </Badge>
              <Badge className="bg-red-600 text-white px-5 py-2 text-base shadow-md">
                Quick Response
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features & Quick Contact */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-red-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14">
        {/* Support Features */}
        <div>
          <h3 className="text-3xl font-extrabold text-black mb-8">
            Why Choose Our Support?
          </h3>
          <div className="space-y-7">
            {supportFeatures.map((feature, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-red-600 shadow-lg bg-white/95 rounded-xl"
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-5">
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h4 className="font-bold text-xl text-black mb-1">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-base">
                {feature.description}
              </p>
            </div>
              </div>
            </CardContent>
          </Card>
            ))}
          </div>
        </div>

        {/* Quick Contact */}
        <div className="flex items-stretch">
            <Card className="bg-gradient-to-r from-red-600 to-black text-white shadow-2xl rounded-2xl flex-grow">
            <CardContent className="p-8 flex flex-col justify-between">
              <div>
              <h4 className="text-2xl font-bold mb-6">Quick Contact Options</h4>
              <div className="space-y-4">
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start text-lg py-3 font-semibold shadow-md rounded-md">
                  <Link href="tel:+251911464023" className="flex items-center w-full">
                    <Phone className="mr-3 h-5 w-5" />
                    Call: +251 911 464023
                  </Link>
                </Button>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start text-lg py-3 font-semibold shadow-md rounded-md">
                  <Link href="tel:+251912286121" className="flex items-center w-full">
                    <Phone className="mr-3 h-5 w-5" />
                    Call: +251 912 286121
                  </Link>
                </Button>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start text-lg py-3 font-semibold shadow-md rounded-md">
                  <Link href="tel:+251969613131" className="flex items-center w-full">
                    <Phone className="mr-3 h-5 w-5" />
                    Call: +251 969 613131
                  </Link>
                </Button>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start text-lg py-3 font-semibold shadow-md rounded-md">
                  <Link href="https://wa.me/251969613131" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    WhatsApp: +251 969 613131
                  </Link>
                </Button>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start text-lg py-3 font-semibold shadow-md rounded-md">
                  <Link href="https://t.me/yourtelegramprofile" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Telegram: +251 969 613131
                  </Link>
                </Button>
                {/* Facebook Button */}
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start text-lg py-3 font-semibold shadow-md rounded-md">
                  <Link href="https://facebook.com/yourfacebookprofile" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.663 9.151 8.437 9.879v-7.028h-2.54v-2.851h2.54V9.584c0-2.542 1.564-3.945 3.875-3.945 1.094 0 2.238.191 2.551.274v2.966h-1.734c-1.226 0-1.475.613-1.475 1.512v1.925h2.94l-.475 3.028h-2.465v7.028A10.019 10.019 0 0022 12z" clipRule="evenodd" />
                    </svg>
                    Facebook
                  </Link>
                </Button>
                {/* LinkedIn Button */}
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start text-lg py-3 font-semibold shadow-md rounded-md">
                  <Link href="https://linkedin.com/yourlinkedinprofile" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                      <path d="M20.447 2.062h-3.167c-2.13 0-3.583 1.43-3.583 3.426v3.844h-3.166v-3.844c0-2.002-1.472-3.426-3.583-3.426h-3.167v19.876h3.167v-8.087c0-2.009 1.813-3.647 3.426-3.647 1.614 0 3.166 1.638 3.166 3.647v8.087h3.167v-4.141c0-2.576 2.352-4.667 4.353-4.667 2.002 0 3.583 2.091 3.583 4.667v4.141h3.166v-10.229c0-2.002-1.472-3.426-3.583-3.426z" />
                    </svg>
                    LinkedIn
                  </Link>
                </Button>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="inline-block bg-blue-500 text-white rounded px-2 py-1 text-xs font-semibold">Telegram Channel</span>
                  <span className="text-xs text-gray-100">Ably Electric - You're Backup for Uninterrupted Life</span>
                </div>
              </div>
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
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Emergency Technical Support
              </h3>
              <p className="text-red-100 mb-8 text-lg">
                For urgent technical issues or emergency repairs, our 24/7
                support team is ready to assist you immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 flex items-center"

                >
                  <Link href="tel:+251911464023" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency Hotline: +251 911 464023
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:text-red-100 flex items-center"
                >
                  <Link
                    href="https://wa.me/251911464023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    24/7 WhatsApp Support
                  </Link>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
            Conveniently located near Semien Hotel, in Darule Tower—8th Floor, Office No. 806, Addis Ababa, Ethiopia. Visit us for expert service and seamless accessibility.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="relative bg-gray-200 h-64 lg:h-96 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.9026704385424!2d38.782220290948075!3d8.999237103390112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850921741007%3A0x4f00e48587b0714!2sDat%20Tower!5e1!3m2!1sen!2set!4v1748950416344!5m2!1sen!2set"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "16rem" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ABLY ELECTRIC Head Office Location"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="relative z-10 bg-white/80 rounded-xl p-6 max-w-xs mx-auto shadow-lg flex flex-col items-center">
                    <MapPin className="h-10 w-10 text-red-600 mb-2" />
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      ABLY ELECTRIC Head Office
                    </h3>
                    <p className="text-gray-600 text-sm">
                    Conveniently located near Semien Hotel, in Darule Tower—8th Floor, Office No. 806, Addis Ababa, Ethiopia
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      Addis Ababa, Ethiopia
                    </p>
                    <Button className="mt-2 bg-red-600 hover:bg-red-700">
                      <Link
                        href="https://maps.app.goo.gl/PYCpM9FFxdsBD3Wo9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}