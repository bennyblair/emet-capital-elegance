import { useParams, Link } from 'react-router-dom'
import { Clock, User, ArrowLeft, CheckCircle } from 'lucide-react'

export function GuideArticle() {
  const { slug } = useParams()

  // This would typically come from a CMS or database
  const article = {
    title: "Bridging Finance Complete Guide",
    metaDescription: "Complete guide to bridging finance in Australia. Learn about rates, terms, eligibility, and when bridging loans are the right financing solution for your property or business needs.",
    readTime: "15 min",
    author: "Emet Capital Team",
    category: "Property Finance",
    publishDate: "March 15, 2024",
    content: {
      keyTakeaways: [
        "Bridging finance provides short-term funding for property purchases and business transitions",
        "Typical terms range from 3-24 months with interest rates from 8-15% p.a.",
        "Exit strategy is crucial - most lenders require clear end-of-term refinancing plans",
        "Can be used for property chains, renovations, development, and business acquisitions"
      ],
      sections: [
        {
          heading: "What is Bridging Finance?",
          content: "Bridging finance is a short-term funding solution designed to 'bridge' the gap between buying a new property and selling an existing one, or between immediate funding needs and longer-term financing arrangements. In Australia, bridging loans are commonly used in property transactions, business acquisitions, and development projects where timing is critical."
        },
        {
          heading: "How Does Bridging Finance Work?",
          content: "Bridging loans work by providing immediate access to capital, typically secured against property or other assets. The borrower pays interest-only during the loan term, with the principal repaid either through the sale of an existing asset or by refinancing to a longer-term facility. Most bridging loans in Australia have terms ranging from 3 to 24 months."
        },
        {
          heading: "When Should You Consider Bridging Finance?",
          content: "Bridging finance is ideal when you need quick access to funds and have a clear exit strategy. Common scenarios include property chains where settlement dates don't align, property development projects requiring immediate funding, business acquisitions with time-sensitive opportunities, and renovation projects before refinancing to standard mortgages."
        },
        {
          heading: "Bridging Finance Rates and Costs",
          content: "Interest rates for bridging finance typically range from 8% to 15% per annum, depending on the lender, loan-to-value ratio, and risk profile. Additional costs include establishment fees (usually 1-3% of the loan amount), legal fees, valuation costs, and ongoing monthly fees. While more expensive than traditional mortgages, the speed and flexibility often justify the higher costs."
        },
        {
          heading: "Eligibility and Application Process",
          content: "Lenders assess bridging finance applications based on the security property value, borrower's ability to service interest payments, and most importantly, a viable exit strategy. The application process is typically faster than traditional mortgages, often completing within 1-2 weeks for straightforward cases."
        }
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
            <Link to="/resources/guides" className="text-muted-foreground hover:text-foreground">Guides</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Bridging Finance Complete Guide</span>
          </nav>
        </div>
      </div>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link 
            to="/resources/guides"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Guides
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                {article.category}
              </span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {article.author}
              </div>
              <span>{article.publishDate}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.metaDescription}
            </p>
          </header>

          {/* Key Takeaways */}
          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <h2 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
              Key Takeaways
            </h2>
            <ul className="space-y-3">
              {article.content.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {article.content.sections.map((section, index) => (
              <section key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* FAQ Schema Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": article.title,
              "description": article.metaDescription,
              "author": {
                "@type": "Organization",
                "name": article.author
              },
              "publisher": {
                "@type": "Organization",
                "name": "Emet Capital"
              },
              "datePublished": "2024-03-15"
            })}
          </script>

          {/* CTA Section */}
          <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Need Bridging Finance?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get expert guidance and competitive rates for your bridging finance needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-semibold"
            >
              Get Quote Now
            </Link>
          </div>

          {/* Related Guides */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Related Guides</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                to="/resources/guides/asset-finance-business-growth"
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Asset Finance for Business Growth
                </h4>
                <p className="text-muted-foreground">
                  Learn how asset finance can help your business acquire equipment while preserving cash flow.
                </p>
              </Link>
              <Link 
                to="/resources/guides/development-finance-guide"
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Development Finance Guide
                </h4>
                <p className="text-muted-foreground">
                  Comprehensive guide to development and construction finance options.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}