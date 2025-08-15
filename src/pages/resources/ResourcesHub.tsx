import { Link } from 'react-router-dom'
import { BookOpen, TrendingUp, Calculator, Search, HelpCircle, FileText } from 'lucide-react'

export function ResourcesHub() {
  const resourceSections = [
    {
      title: "Guides",
      description: "In-depth guides covering commercial lending processes, requirements, and strategies",
      icon: BookOpen,
      link: "/resources/guides",
      color: "text-blue-600"
    },
    {
      title: "Case Studies",
      description: "Real-world examples of successful commercial lending deals and solutions",
      icon: FileText,
      link: "/resources/case-studies",
      color: "text-green-600"
    },
    {
      title: "Tools & Calculators",
      description: "Interactive calculators to help estimate costs, payments, and funding requirements",
      icon: Calculator,
      link: "/resources/tools",
      color: "text-purple-600"
    },
    {
      title: "Glossary",
      description: "Comprehensive definitions of commercial lending terms and concepts",
      icon: Search,
      link: "/resources/glossary",
      color: "text-orange-600"
    },
    {
      title: "FAQs",
      description: "Frequently asked questions about commercial lending and our services",
      icon: HelpCircle,
      link: "/resources/faqs",
      color: "text-red-600"
    },
    {
      title: "Market Insights",
      description: "Latest market trends, rates, and analysis in commercial lending",
      icon: TrendingUp,
      link: "/resources/insights",
      color: "text-indigo-600"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Resources</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Commercial Lending Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Everything you need to understand commercial lending in Australia. From comprehensive guides 
            to interactive tools, we've got your business funding questions covered.
          </p>
          
          {/* Key Takeaways */}
          <div className="bg-card border border-border rounded-lg p-6 max-w-4xl mx-auto text-left">
            <h2 className="text-lg font-semibold text-card-foreground mb-4">Key Takeaways:</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Access expert guides covering all types of commercial lending</li>
              <li>• Use our calculators to estimate costs and plan your funding strategy</li>
              <li>• Learn from real case studies of successful funding arrangements</li>
              <li>• Stay updated with the latest market insights and lending trends</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceSections.map((section, index) => {
              const Icon = section.icon
              return (
                <Link
                  key={index}
                  to={section.link}
                  className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:border-primary/20"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-secondary ${section.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground ml-4 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Popular Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Bridging Finance Complete Guide
              </h3>
              <p className="text-muted-foreground mb-4">
                Everything you need to know about bridging loans for property and business.
              </p>
              <Link to="/resources/guides/bridging-finance-complete-guide" className="text-primary hover:underline">
                Read Guide →
              </Link>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Bridging Loan Calculator
              </h3>
              <p className="text-muted-foreground mb-4">
                Calculate your potential bridging loan costs and repayments.
              </p>
              <Link to="/resources/tools" className="text-primary hover:underline">
                Use Calculator →
              </Link>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Asset Finance FAQ
              </h3>
              <p className="text-muted-foreground mb-4">
                Common questions about equipment and vehicle financing.
              </p>
              <Link to="/resources/faqs" className="text-primary hover:underline">
                View FAQ →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}