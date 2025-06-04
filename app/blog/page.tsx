"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, ArrowRight, Search, Clock, Eye, MessageCircle, Share2, BookOpen, TrendingUp } from "lucide-react"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right EV Charger for Your Business",
      excerpt:
        "A comprehensive guide to selecting the perfect EV charging solution for commercial applications, covering power requirements, installation considerations, and ROI analysis.",
      content:
        "Electric vehicle adoption is accelerating rapidly, and businesses need to prepare for the charging infrastructure demands. This comprehensive guide covers everything from power requirements to installation costs and ROI calculations.",
      category: "EV Technology",
      date: "Dec 15, 2024",
      author: "Technical Team",
      authorImage: "/blogs/ev.jpg?height=40&width=40",
      readTime: "5 min read",
      views: "2.4k",
      comments: 18,
      featured: true,
      image: "/blogs/ev.jpg?height=400&width=600",
      tags: ["EV Chargers", "Business", "ROI", "Installation"],
      trending: true,
    },
    {
      id: 2,
      title: "Understanding Voltage Stabilizers for Business Efficiency",
      excerpt:
        "Learn how voltage stabilizers protect your equipment and improve operational efficiency in industrial and commercial settings.",
      content:
        "Voltage fluctuations can cause significant damage to sensitive electrical equipment and reduce operational efficiency. This article explores how voltage stabilizers work and their benefits for businesses.",
      category: "Power Systems",
      date: "Dec 10, 2024",
      author: "Engineering Team",
      authorImage: "/placeholder.svg?height=40&width=40",
      readTime: "4 min read",
      views: "1.8k",
      comments: 12,
      featured: false,
      image: "/blogs/voltage.jpg?height=400&width=600",
      tags: ["Voltage Stabilizers", "Power Quality", "Industrial"],
      trending: false,
    },
    {
      id: 3,
      title: "The Role of Electrical Trainers in Technical Education",
      excerpt:
        "Exploring how modern electrical training equipment enhances learning outcomes in engineering education and professional development.",
      content:
        "Technical education requires hands-on experience with real-world equipment to prepare students for industry challenges. Modern electrical trainers bridge the gap between theory and practice.",
      category: "Education",
      date: "Dec 5, 2024",
      author: "Training Specialists",
      authorImage: "/placeholder.svg?height=40&width=40",
      readTime: "6 min read",
      views: "1.2k",
      comments: 8,
      featured: false,
      image: "/blogs/traning.jpg?height=400&width=600",
      tags: ["Education", "Training", "Skills Development"],
      trending: true,
    },
    {
      id: 4,
      title: "Common Process Control Challenges & How to Solve Them",
      excerpt:
        "Identifying and addressing typical issues in industrial process control systems with practical solutions and best practices.",
      content:
        "Industrial process control systems are complex networks that require careful monitoring and maintenance. This guide identifies common challenges and provides practical solutions.",
      category: "Automation",
      date: "Nov 28, 2024",
      author: "Process Engineers",
      authorImage: "/placeholder.svg?height=40&width=40",
      readTime: "7 min read",
      views: "3.1k",
      comments: 24,
      featured: false,
      image: "/blogs/fix.png?height=400&width=600",
      tags: ["Process Control", "Automation", "Troubleshooting"],
      trending: false,
    },
    {
      id: 5,
      title: "Optimizing Industrial Automation with Pneumatics & Hydraulics",
      excerpt:
        "Best practices for implementing pneumatic and hydraulic systems in industrial automation for maximum efficiency and reliability.",
      content:
        "Pneumatic and hydraulic systems form the backbone of many industrial automation applications. Learn optimization strategies for maximum efficiency.",
      category: "Industrial",
      date: "Nov 20, 2024",
      author: "Automation Team",
      authorImage: "/placeholder.svg?height=40&width=40",
      readTime: "5 min read",
      views: "2.7k",
      comments: 16,
      featured: false,
      image: "/blogs/optimise.jpeg?height=400&width=600",
      tags: ["Pneumatics", "Hydraulics", "Optimization"],
      trending: true,
    },
    {
      id: 6,
      title: "Why Electrical Board Maintenance is Critical for Safety",
      excerpt:
        "Understanding the importance of regular electrical board maintenance and how it prevents accidents and ensures operational continuity.",
      content:
        "Electrical boards are the nerve centers of any electrical system, distributing power safely and efficiently. Regular maintenance is crucial for safety and reliability.",
      category: "Safety",
      date: "Nov 15, 2024",
      author: "Safety Engineers",
      authorImage: "/placeholder.svg?height=40&width=40",
      readTime: "4 min read",
      views: "1.9k",
      comments: 14,
      featured: false,
      image: "/blogs/maintenance.jpg?height=400&width=600",
      tags: ["Safety", "Maintenance", "Electrical Boards"],
      trending: false,
    },
    {
      id: 7,
      title: "Future of Smart Grid Technology in Ethiopia",
      excerpt:
        "Exploring the potential of smart grid implementation and its impact on energy distribution and consumption patterns.",
      content:
        "Smart grid technology represents the next evolution in electrical power distribution systems. Discover its potential impact on Ethiopia's energy landscape.",
      category: "Technology",
      date: "Nov 10, 2024",
      author: "Research Team",
      authorImage: "/placeholder.svg?height=40&width=40",
      readTime: "8 min read",
      views: "4.2k",
      comments: 32,
      featured: false,
      image: "/blogs/smart.avif?height=400&width=600",
      tags: ["Smart Grid", "Technology", "Future"],
      trending: true,
    },
    {
      id: 8,
      title: "Maintenance Best Practices for Industrial UPS Systems",
      excerpt:
        "Essential maintenance procedures to ensure your UPS systems provide reliable backup power when you need it most.",
      content:
        "Uninterruptible Power Supply (UPS) systems are critical for maintaining business continuity. Learn essential maintenance practices for optimal performance.",
      category: "Power Systems",
      date: "Nov 5, 2024",
      author: "Maintenance Team",
      authorImage: "/placeholder.svg?height=40&width=40",
      readTime: "6 min read",
      views: "2.1k",
      comments: 19,
      featured: false,
      image: "/blogs/maintenance.png?height=400&width=600",
      tags: ["UPS", "Maintenance", "Best Practices"],
      trending: false,
    },
  ]

  const categories = [
    "All",
    "EV Technology",
    "Power Systems",
    "Education",
    "Automation",
    "Industrial",
    "Safety",
    "Technology",
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const trendingPosts = blogPosts.filter((post) => post.trending && !post.featured).slice(0, 3)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const popularTags = [
    "EV Chargers",
    "Industrial",
    "Automation",
    "Safety",
    "Power Systems",
    "Training",
    "Technology",
    "Maintenance",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-red-400" />
              <Badge className="bg-red-600 text-white">Industry Insights</Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Expert Knowledge Hub</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Stay updated with the latest trends, tips, and insights in electrical engineering, automation, and energy
              solutions. Expert knowledge to help you make informed decisions.
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-black text-lg rounded-full border-2 border-red-400 focus:border-red-500"
              />
              {searchTerm && (
                <Button
                  onClick={() => setSearchTerm("")}
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  Clear
                </Button>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{blogPosts.length}</div>
                <div className="text-sm text-gray-300">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{categories.length - 1}</div>
                <div className="text-sm text-gray-300">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">15k+</div>
                <div className="text-sm text-gray-300">Readers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
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
                {category !== "All" && (
                  <Badge variant="secondary" className="ml-2 bg-gray-200 text-gray-700">
                    {blogPosts.filter((post) => post.category === category).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && selectedCategory === "All" && !searchTerm && (
              <div className="mb-12">
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Featured Article</span>
                </div>
                <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-red-600 to-black text-white">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative">
                      <img
                        src={featuredPost.image || "/blogs/ev.jpg"}
                        alt={featuredPost.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-500 text-white">{featuredPost.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 lg:p-12">
                      <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">{featuredPost.title}</h2>
                      <p className="text-gray-200 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>

                      <div className="flex items-center space-x-6 text-sm text-gray-300 mb-6">
                        <div className="flex items-center space-x-2">
                          <img
                            src={featuredPost.authorImage || "/placeholder.svg"}
                            alt={featuredPost.author}
                            className="w-6 h-6 rounded-full"
                          />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Button className="bg-white text-red-600 hover:bg-gray-100">
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <div className="flex items-center space-x-4 text-sm text-gray-300">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{featuredPost.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{featuredPost.comments}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            )}

            {/* Blog Grid */}
            <div>
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria.</p>
                  <Button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("All")
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
                    </h2>
                    <span className="text-gray-600">{regularPosts.length} articles found</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {regularPosts.map((post, index) => (
                      <Card
                        key={post.id}
                        className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 group"
                      >
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4 flex items-center space-x-2">
                            <Badge variant="secondary" className="bg-red-100 text-red-800">
                              {post.category}
                            </Badge>
                            {post.trending && (
                              <Badge className="bg-orange-500 text-white">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                          </div>
                          <div className="absolute top-4 right-4">
                            <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg leading-tight hover:text-red-600 transition-colors line-clamp-2 group-hover:text-red-600">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-sm leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center space-x-2 mb-4">
                            <img
                              src={post.authorImage || "/placeholder.svg"}
                              alt={post.author}
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">{post.author}</div>
                              <div className="text-xs text-gray-500">{post.date}</div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.slice(0, 2).map((tag, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{post.readTime}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{post.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="h-3 w-3" />
                                <span>{post.comments}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="border-red-600 text-red-600 hover:bg-red-50">
                              Read More
                              <ArrowRight className="ml-2 h-3 w-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Trending Posts */}
            {trendingPosts.length > 0 && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-red-600" />
                    <span>Trending Now</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {trendingPosts.map((post, index) => (
                    <div key={post.id} className="flex space-x-3 group cursor-pointer">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-red-600 transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span>{post.views} views</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Popular Tags */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-red-50 hover:border-red-600 hover:text-red-600 transition-colors"
                      onClick={() => setSearchTerm(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Subscription */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-600 to-red-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Stay Updated!</h3>
                <p className="text-red-100 mb-4 text-sm">
                  Get the latest insights and expert tips delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input type="email" placeholder="Enter your email" className="bg-white text-black border-0" />
                  <Button className="w-full bg-white text-red-600 hover:bg-gray-100">Subscribe Now</Button>
                </div>
                <p className="text-xs text-red-200 mt-3">No spam, unsubscribe anytime. We respect your privacy.</p>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(1).map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span className="text-sm font-medium">{category}</span>
                      <Badge variant="secondary">{blogPosts.filter((post) => post.category === category).length}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
