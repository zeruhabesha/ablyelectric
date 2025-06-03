import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, User } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      title: "How to Choose the Right EV Charger for Your Business",
      excerpt:
        "A comprehensive guide to selecting the perfect EV charging solution for commercial applications, covering power requirements, installation considerations, and ROI analysis.",
      category: "EV Technology",
      date: "Dec 15, 2024",
      author: "Technical Team",
      readTime: "5 min read",
      featured: true,
    },
    {
      title: "Understanding Voltage Stabilizers for Business Efficiency",
      excerpt:
        "Learn how voltage stabilizers protect your equipment and improve operational efficiency in industrial and commercial settings.",
      category: "Power Systems",
      date: "Dec 10, 2024",
      author: "Engineering Team",
      readTime: "4 min read",
      featured: false,
    },
    {
      title: "The Role of Electrical Trainers in Technical Education",
      excerpt:
        "Exploring how modern electrical training equipment enhances learning outcomes in engineering education and professional development.",
      category: "Education",
      date: "Dec 5, 2024",
      author: "Training Specialists",
      readTime: "6 min read",
      featured: false,
    },
    {
      title: "Common Process Control Challenges & How to Solve Them",
      excerpt:
        "Identifying and addressing typical issues in industrial process control systems with practical solutions and best practices.",
      category: "Automation",
      date: "Nov 28, 2024",
      author: "Process Engineers",
      readTime: "7 min read",
      featured: false,
    },
    {
      title: "Optimizing Industrial Automation with Pneumatics & Hydraulics",
      excerpt:
        "Best practices for implementing pneumatic and hydraulic systems in industrial automation for maximum efficiency and reliability.",
      category: "Industrial",
      date: "Nov 20, 2024",
      author: "Automation Team",
      readTime: "5 min read",
      featured: false,
    },
    {
      title: "Why Electrical Board Maintenance is Critical for Safety",
      excerpt:
        "Understanding the importance of regular electrical board maintenance and how it prevents accidents and ensures operational continuity.",
      category: "Safety",
      date: "Nov 15, 2024",
      author: "Safety Engineers",
      readTime: "4 min read",
      featured: false,
    },
  ]

  const categories = ["All", "EV Technology", "Power Systems", "Education", "Automation", "Industrial", "Safety"]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">SEO Optimization & Industry Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in electrical engineering, automation, and energy
            solutions. Expert knowledge to help you make informed decisions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-yellow-500 text-black mb-4">Featured Article</Badge>
                  <h3 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center space-x-6 text-sm text-blue-200 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <div className="text-lg font-semibold">EV Charging Guide</div>
                  <div className="text-blue-200 text-sm">Complete Business Solution</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want Expert Tips? Subscribe to Our Blog!</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights, technical guides, and industry updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-yellow-500"
              />
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
