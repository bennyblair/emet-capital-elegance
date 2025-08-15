import { Link } from 'react-router-dom'
import { Calendar, TrendingUp, BarChart3, Eye } from 'lucide-react'

export function Insights() {
  const insights = [
    {
      title: "Commercial Lending Rates Hit New Highs: What Businesses Need to Know",
      excerpt: "Rising interest rates are impacting commercial lending across all sectors. We analyse the latest trends and provide strategies for businesses seeking finance in this challenging environment.",
      date: "March 10, 2024",
      readTime: "6 min",
      category: "Market Trends",
      featured: true
    },
    {
      title: "APRA's New Banking Rules: Impact on Commercial Development Finance",
      excerpt: "Recent regulatory changes are affecting how banks assess development finance applications. Understanding these changes is crucial for property developers seeking funding.",
      date: "March 5, 2024",
      readTime: "4 min",
      category: "Regulation"
    },
    {
      title: "Non-Bank Lenders Gaining Market Share in Commercial Lending",
      excerpt: "Alternative lenders are becoming increasingly competitive in commercial finance, offering faster approvals and more flexible terms than traditional banks.",
      date: "February 28, 2024",
      readTime: "5 min",
      category: "Industry Analysis"
    },
    {
      title: "Asset Finance Demand Surges as Businesses Upgrade Technology",
      excerpt: "Post-pandemic technology upgrades are driving increased demand for asset finance, with particular growth in IT equipment and automation systems.",
      date: "February 22, 2024",
      readTime: "3 min",
      category: "Asset Finance"
    },
    {
      title: "Construction Industry Finance: Navigating Supply Chain Challenges",
      excerpt: "Material shortages and cost increases are impacting development finance applications. We explore how builders and developers can adapt their funding strategies.",
      date: "February 15, 2024",
      readTime: "7 min",
      category: "Development Finance"
    },
    {
      title: "Working Capital Solutions Evolve for Post-COVID Business Growth",
      excerpt: "Businesses are seeking more flexible working capital solutions as they navigate uncertain cash flows and growth opportunities in the post-pandemic economy.",
      date: "February 8, 2024",
      readTime: "5 min",
      category: "Working Capital"
    },
    {
      title: "Green Finance Incentives Drive Sustainable Business Investment",
      excerpt: "Government and lender incentives for environmentally sustainable projects are creating new opportunities in commercial lending for green initiatives.",
      date: "February 1, 2024",
      readTime: "4 min",
      category: "Sustainability"
    },
    {
      title: "SME Lending Landscape: Opportunities Amid Economic Uncertainty",
      excerpt: "Despite economic headwinds, opportunities exist for small and medium enterprises seeking commercial finance, particularly through specialist lenders.",
      date: "January 25, 2024",
      readTime: "6 min",
      category: "SME Finance"
    }
  ]

  const categories = [...new Set(insights.map(insight => insight.category))]

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
            <span className="text-foreground">Market Insights</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Commercial Lending Market Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest trends, regulatory changes, and market analysis affecting 
              commercial lending in Australia. Expert insights to help you make informed financing decisions.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-card border border-border rounded-lg p-6 max-w-4xl mx-auto mb-12">
            <h2 className="text-lg font-semibold text-card-foreground mb-4">What You'll Find Here:</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
              <li>• Latest interest rate trends and market forecasts</li>
              <li>• Regulatory changes affecting commercial lending</li>
              <li>• Industry-specific financing insights and opportunities</li>
              <li>• Economic analysis and its impact on business finance</li>
            </ul>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
              All Insights
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

          {/* Featured Insight */}
          {insights.find(insight => insight.featured) && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Featured Insight</h2>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-lg p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {insights.find(insight => insight.featured)?.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {insights.find(insight => insight.featured)?.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {insights.find(insight => insight.featured)?.readTime} read
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {insights.find(insight => insight.featured)?.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {insights.find(insight => insight.featured)?.excerpt}
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Read Full Analysis
                  <TrendingUp className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* All Insights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.filter(insight => !insight.featured).map((insight, index) => (
              <article key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {insight.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {insight.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    {insight.readTime} read
                  </div>
                  <button className="text-primary hover:text-primary/80 font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Market Summary */}
          <div className="mt-16 bg-muted/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Current Market Summary
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground mb-2">Interest Rates</h4>
                <p className="text-2xl font-bold text-blue-600 mb-2">8.5-15%</p>
                <p className="text-sm text-muted-foreground">Commercial lending rates trending upward</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground mb-2">Market Activity</h4>
                <p className="text-2xl font-bold text-green-600 mb-2">Moderate</p>
                <p className="text-sm text-muted-foreground">Steady demand across most sectors</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Eye className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground mb-2">Lender Appetite</h4>
                <p className="text-2xl font-bold text-purple-600 mb-2">Selective</p>
                <p className="text-sm text-muted-foreground">Quality applications still getting approved</p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Market Insights
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get the latest commercial lending insights delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <button className="px-6 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>

          {/* Related Resources */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Related Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                to="/resources/guides"
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
              >
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Expert Guides
                </h4>
                <p className="text-muted-foreground">
                  In-depth guides on commercial lending strategies and processes.
                </p>
              </Link>
              <Link 
                to="/resources/tools"
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
              >
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Calculators
                </h4>
                <p className="text-muted-foreground">
                  Interactive tools to estimate costs and plan your financing.
                </p>
              </Link>
              <Link 
                to="/resources/case-studies"
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
              >
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Case Studies
                </h4>
                <p className="text-muted-foreground">
                  Real examples of successful commercial lending solutions.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}