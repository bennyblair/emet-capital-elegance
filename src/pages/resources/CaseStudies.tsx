import { Link } from 'react-router-dom'
import { DollarSign, Calendar, TrendingUp, Building, Truck, Factory } from 'lucide-react'

export function CaseStudies() {
  const caseStudies = [
    {
      title: "Property Developer Secures $2.5M Development Finance",
      slug: "property-developer-development-finance",
      summary: "Melbourne developer successfully secured development finance for a 12-unit townhouse project despite challenging market conditions.",
      loanAmount: "$2.5M",
      loanType: "Development Finance",
      industry: "Property Development",
      duration: "18 months",
      icon: Building,
      featured: true
    },
    {
      title: "Manufacturing Business Expands with $800K Asset Finance",
      slug: "manufacturing-asset-finance-expansion",
      summary: "Brisbane manufacturer used asset finance to acquire new machinery and expand production capacity without impacting working capital.",
      loanAmount: "$800K",
      loanType: "Asset Finance",
      industry: "Manufacturing",
      duration: "5 years",
      icon: Factory
    },
    {
      title: "Transport Company Grows Fleet with $1.2M Vehicle Finance",
      slug: "transport-company-vehicle-finance",
      summary: "Sydney transport company financed 15 new commercial vehicles to meet increased demand and expand service areas.",
      loanAmount: "$1.2M",
      loanType: "Vehicle Finance",
      industry: "Transport & Logistics",
      duration: "3 years",
      icon: Truck
    },
    {
      title: "Bridging Loan Enables Quick Property Acquisition",
      slug: "bridging-loan-property-acquisition",
      summary: "Property investor secured bridging finance to purchase investment property before selling existing asset, maximising opportunity.",
      loanAmount: "$650K",
      loanType: "Bridging Finance",
      industry: "Property Investment",
      duration: "6 months",
      icon: Building
    },
    {
      title: "Working Capital Facility Supports Business Growth",
      slug: "working-capital-business-growth",
      summary: "Wholesale distributor established debtor finance facility to support rapid growth and improve cash flow management.",
      loanAmount: "$500K",
      loanType: "Debtor Finance",
      industry: "Wholesale Trade",
      duration: "Ongoing",
      icon: TrendingUp
    }
  ]

  const industries = [...new Set(caseStudies.map(study => study.industry))]

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
            <span className="text-foreground">Case Studies</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Commercial Lending Case Studies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real examples of successful commercial lending solutions across different industries and funding requirements. 
              Learn how businesses like yours have achieved their growth and acquisition goals.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-card border border-border rounded-lg p-6 max-w-4xl mx-auto mb-12">
            <h2 className="text-lg font-semibold text-card-foreground mb-4">What You'll Learn:</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
              <li>• How different businesses structure their commercial loans</li>
              <li>• Common challenges and how they were overcome</li>
              <li>• Typical timeframes from application to settlement</li>
              <li>• Key factors that contributed to successful applications</li>
            </ul>
          </div>

          {/* Industry Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
              All Industries
            </button>
            {industries.map(industry => (
              <button 
                key={industry}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Featured Case Study */}
          {caseStudies.find(study => study.featured) && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Featured Case Study</h2>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-lg p-8">
                {(() => {
                  const featured = caseStudies.find(study => study.featured)!
                  const Icon = featured.icon
                  return (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {featured.loanType}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        {featured.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {featured.summary}
                      </p>
                      <div className="grid md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
                          <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                          <div className="text-lg font-semibold text-foreground">{featured.loanAmount}</div>
                          <div className="text-sm text-muted-foreground">Loan Amount</div>
                        </div>
                        <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
                          <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-lg font-semibold text-foreground">{featured.duration}</div>
                          <div className="text-sm text-muted-foreground">Term</div>
                        </div>
                        <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
                          <TrendingUp className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                          <div className="text-lg font-semibold text-foreground">{featured.loanType}</div>
                          <div className="text-sm text-muted-foreground">Facility Type</div>
                        </div>
                        <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
                          <Building className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                          <div className="text-lg font-semibold text-foreground">{featured.industry}</div>
                          <div className="text-sm text-muted-foreground">Industry</div>
                        </div>
                      </div>
                      <Link
                        to={`/resources/case-studies/${featured.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Read Full Case Study
                      </Link>
                    </>
                  )
                })()}
              </div>
            </div>
          )}

          {/* All Case Studies */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => !study.featured).map((study, index) => {
              const Icon = study.icon
              return (
                <article key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-secondary rounded-lg">
                      <Icon className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {study.loanType}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {study.summary}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Amount:</span>
                      <div className="font-semibold text-foreground">{study.loanAmount}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Term:</span>
                      <div className="font-semibold text-foreground">{study.duration}</div>
                    </div>
                  </div>
                  <Link
                    to={`/resources/case-studies/${study.slug}`}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Read Case Study →
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}