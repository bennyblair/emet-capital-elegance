import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, DollarSign, Calendar, TrendingUp, Building, CheckCircle, AlertTriangle } from 'lucide-react'

export function CaseStudy() {
  const { slug } = useParams()

  // This would typically come from a CMS or database
  const caseStudy = {
    title: "Property Developer Secures $2.5M Development Finance",
    summary: "Melbourne developer successfully secured development finance for a 12-unit townhouse project despite challenging market conditions.",
    loanAmount: "$2.5M",
    loanType: "Development Finance",
    industry: "Property Development",
    duration: "18 months",
    location: "Melbourne, VIC",
    settlementTime: "3 weeks",
    challenge: "The developer needed quick access to development finance in a tightening credit market to secure a time-sensitive land acquisition opportunity.",
    solution: "We structured a development facility with progressive drawdowns aligned to construction milestones, reducing risk for both borrower and lender.",
    outcome: "Project completed on time and budget, with all 12 townhouses pre-sold before completion, generating 18% profit margin.",
    details: {
      background: "A boutique property developer with 15 years experience had identified a prime development opportunity in Melbourne's inner east. The 1,200sqm site was zoned for medium density residential development and perfectly suited for their planned 12-unit townhouse project. However, they needed to act quickly as other developers were also interested in the site.",
      challenges: [
        "Tight timeline - only 2 weeks to secure finance approval",
        "Rising interest rates creating lender caution in development finance",
        "Need for 100% development finance including land acquisition",
        "Limited pre-sales due to timing constraints"
      ],
      solutionDetails: "We worked with the developer to structure a comprehensive development facility that addressed lender concerns while meeting the client's needs. The solution included: staged drawdowns aligned to construction milestones, independent quantity surveyor progress reports, retention of 10% of each drawdown until practical completion, and competitive interest rate with no early repayment penalties.",
      results: [
        "Finance approved within 10 business days",
        "Settlement on land acquisition completed on schedule",
        "Construction commenced 2 weeks after land settlement", 
        "All 12 units pre-sold during construction phase",
        "Project completed 2 weeks ahead of schedule",
        "18% profit margin achieved on total project cost"
      ]
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link to="/resources" className="text-muted-foreground hover:text-foreground">Resources</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link to="/resources/case-studies" className="text-muted-foreground hover:text-foreground">Case Studies</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Property Developer Development Finance</span>
          </nav>
        </div>
      </div>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link 
            to="/resources/case-studies"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {caseStudy.loanType}
              </span>
              <span className="text-sm text-muted-foreground">{caseStudy.industry}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {caseStudy.summary}
            </p>
          </header>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{caseStudy.loanAmount}</div>
              <div className="text-sm text-muted-foreground">Loan Amount</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{caseStudy.duration}</div>
              <div className="text-sm text-muted-foreground">Loan Term</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{caseStudy.settlementTime}</div>
              <div className="text-sm text-muted-foreground">Settlement Time</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Building className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{caseStudy.location}</div>
              <div className="text-sm text-muted-foreground">Location</div>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                <h3 className="font-semibold text-red-900">Challenge</h3>
              </div>
              <p className="text-red-800">{caseStudy.challenge}</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-blue-900">Solution</h3>
              </div>
              <p className="text-blue-800">{caseStudy.solution}</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-900">Outcome</h3>
              </div>
              <p className="text-green-800">{caseStudy.outcome}</p>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="space-y-12">
            {/* Background */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Background</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {caseStudy.details.background}
              </p>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Challenges</h2>
              <ul className="space-y-3">
                {caseStudy.details.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 mr-3 mt-0.5 text-red-600 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {caseStudy.details.solutionDetails}
              </p>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Results Achieved</h2>
              <ul className="space-y-3">
                {caseStudy.details.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600 flex-shrink-0" />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Schema Markup */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": caseStudy.title,
              "description": caseStudy.summary,
              "author": {
                "@type": "Organization",
                "name": "Emet Capital"
              },
              "publisher": {
                "@type": "Organization", 
                "name": "Emet Capital"
              },
              "about": {
                "@type": "FinancialService",
                "name": caseStudy.loanType
              }
            })}
          </script>

          {/* CTA Section */}
          <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Similar Development Finance Needs?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get expert guidance and competitive rates for your development project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-semibold"
            >
              Discuss Your Project
            </Link>
          </div>

          {/* Related Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Related Case Studies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                to="/resources/case-studies/bridging-loan-property-acquisition"
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Bridging Loan Enables Property Acquisition
                </h4>
                <p className="text-muted-foreground">
                  How an investor used bridging finance to secure a time-sensitive property opportunity.
                </p>
              </Link>
              <Link 
                to="/resources/case-studies/manufacturing-asset-finance-expansion"
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Manufacturing Business Asset Finance
                </h4>
                <p className="text-muted-foreground">
                  Brisbane manufacturer expands production with strategic asset finance.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}