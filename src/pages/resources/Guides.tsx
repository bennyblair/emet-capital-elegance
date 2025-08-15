import { Link } from 'react-router-dom'
import { Clock, User, ArrowRight } from 'lucide-react'

export function Guides() {
  const guides = [
    {
      title: "Bridging Finance Complete Guide",
      slug: "bridging-finance-complete-guide",
      excerpt: "Everything you need to know about bridging loans, from application to settlement. Learn about rates, terms, and when bridging finance is the right solution.",
      readTime: "15 min",
      author: "Emet Capital Team",
      category: "Property Finance",
      featured: true
    },
    {
      title: "Asset Finance for Business Growth",
      slug: "asset-finance-business-growth",
      excerpt: "How to use asset finance to acquire equipment, vehicles, and machinery while preserving working capital. Includes tax benefits and structuring options.",
      readTime: "12 min",
      author: "Emet Capital Team", 
      category: "Asset Finance"
    },
    {
      title: "Development Finance: From Land to Completion",
      slug: "development-finance-guide",
      excerpt: "A comprehensive guide to development and construction finance, covering pre-approval, progress payments, and exit strategies.",
      readTime: "18 min",
      author: "Emet Capital Team",
      category: "Development Finance"
    },
    {
      title: "Working Capital Solutions for Cash Flow",
      slug: "working-capital-solutions",
      excerpt: "Explore debtor finance, invoice factoring, and other working capital solutions to improve business cash flow and growth opportunities.",
      readTime: "10 min",
      author: "Emet Capital Team",
      category: "Working Capital"
    },
    {
      title: "Commercial Property Investment Finance",
      slug: "commercial-property-investment-finance",
      excerpt: "Navigate commercial property investment loans, including LVR requirements, rental assessments, and portfolio lending strategies.",
      readTime: "14 min",
      author: "Emet Capital Team",
      category: "Property Finance"
    },
    {
      title: "Trade Finance for Import/Export Businesses",
      slug: "trade-finance-guide",
      excerpt: "Letters of credit, trade facilities, and supply chain finance solutions for businesses involved in international trade.",
      readTime: "11 min",
      author: "Emet Capital Team",
      category: "Trade Finance"
    }
  ]

  const categories = [...new Set(guides.map(guide => guide.category))]

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link to="/resources" className="text-muted-foreground hover:text-foreground">Resources</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Guides</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Commercial Lending Guides
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-depth guides covering every aspect of commercial lending. From basic concepts to 
              advanced strategies, our expert guides help you make informed financing decisions.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
              All Guides
            </button>
            {categories.map(category => (
              <button 
                key={category}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Guide */}
          {guides.find(guide => guide.featured) && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Featured Guide</h2>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-lg p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {guides.find(guide => guide.featured)?.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {guides.find(guide => guide.featured)?.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {guides.find(guide => guide.featured)?.author}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {guides.find(guide => guide.featured)?.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {guides.find(guide => guide.featured)?.excerpt}
                </p>
                <Link
                  to={`/resources/guides/${guides.find(guide => guide.featured)?.slug}`}
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Read Full Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          )}

          {/* All Guides */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.filter(guide => !guide.featured).map((guide, index) => (
              <article key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {guide.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {guide.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {guide.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    {guide.author}
                  </div>
                  <Link
                    to={`/resources/guides/${guide.slug}`}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}