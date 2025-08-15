import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { useState } from 'react'

export function FAQs() {
  const [openCategory, setOpenCategory] = useState('General')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const faqCategories = [
    {
      name: "General",
      faqs: [
        {
          question: "What types of commercial lending does Emet Capital provide?",
          answer: "Emet Capital specialises in a comprehensive range of commercial lending solutions including asset finance, development finance, working capital facilities, bridging loans, debtor finance, trade finance, and private/non-bank lending. We don't provide retail lending or licensing-dependent products."
        },
        {
          question: "How quickly can I get approval for commercial finance?",
          answer: "Approval timeframes vary depending on the type of finance and complexity of the application. Simple asset finance can be approved within 24-48 hours, while development finance may take 1-2 weeks. We work with multiple lenders to expedite the process and keep you informed at every stage."
        },
        {
          question: "What documentation do I need for a commercial loan application?",
          answer: "Typical requirements include business financial statements (2-3 years), tax returns, bank statements, asset/equipment quotes or purchase contracts, business plan/cash flow projections, and director/guarantor financials. Specific requirements vary by loan type and lender."
        },
        {
          question: "Do you work with new businesses or only established companies?",
          answer: "We work with businesses at all stages, from startups to established enterprises. For newer businesses, we focus on lenders who assess applications based on business plans, industry experience, and projected cash flows rather than just historical trading performance."
        }
      ]
    },
    {
      name: "Asset Finance",
      faqs: [
        {
          question: "What assets can be financed through asset finance?",
          answer: "Asset finance can be used for virtually any business asset including commercial vehicles, plant and machinery, IT equipment, medical equipment, manufacturing equipment, office fit-outs, and specialised industry equipment. The asset serves as security for the loan."
        },
        {
          question: "What are the tax benefits of asset finance?",
          answer: "Asset finance offers several tax advantages including potential instant asset write-offs (for eligible assets under current thresholds), depreciation deductions, and interest deductibility. We recommend consulting your accountant to understand the specific benefits for your situation."
        },
        {
          question: "Can I finance 100% of the asset value?",
          answer: "Many lenders offer 100% asset finance, though this depends on the asset type, borrower strength, and lender policy. Some assets may require a small deposit (typically 10-20%). We work to maximise your borrowing capacity while securing competitive rates."
        },
        {
          question: "What's the difference between a hire purchase and lease?",
          answer: "Hire purchase means you own the asset from day one and can claim depreciation. With a lease, the financier owns the asset and you lease it back. At lease end, you may have options to purchase, upgrade, or return the asset. Tax treatment differs between structures."
        }
      ]
    },
    {
      name: "Development Finance",
      faqs: [
        {
          question: "What can development finance be used for?",
          answer: "Development finance covers residential and commercial property development projects including land acquisition, construction costs, professional fees, council contributions, and project contingencies. It's designed for projects from small renovations to large-scale developments."
        },
        {
          question: "How do progressive drawdowns work?",
          answer: "Development finance is typically drawn down in stages as construction progresses. Common stages include land settlement, foundation/slab, frame/roof, lock-up, fix-out, and practical completion. An independent quantity surveyor usually inspects and certifies each stage before funds are released."
        },
        {
          question: "Do I need pre-sales for development finance approval?",
          answer: "Pre-sales requirements vary by lender and project size. Smaller projects (under 10 units) may not require pre-sales, while larger developments typically need 30-70% pre-sold. Some lenders offer development finance based on end-value appraisals without pre-sales."
        },
        {
          question: "What happens if my project goes over budget or timeline?",
          answer: "Most development facilities include a contingency allowance (typically 5-10% of project cost). If additional funds are needed, you may need to inject more equity or arrange additional financing. We help structure facilities with appropriate buffers and maintain lender relationships throughout the project."
        }
      ]
    },
    {
      name: "Bridging Finance",
      faqs: [
        {
          question: "What is the maximum term for bridging finance?",
          answer: "Bridging finance terms typically range from 3-24 months, with 6-12 months being most common. The term should align with your exit strategy, whether that's property settlement, sale completion, or refinancing to a traditional mortgage."
        },
        {
          question: "What interest rates can I expect for bridging loans?",
          answer: "Bridging finance rates typically range from 8-15% per annum, depending on the lender, LVR, borrower strength, and exit strategy. While higher than traditional mortgages, the speed and flexibility often justify the premium for time-sensitive opportunities."
        },
        {
          question: "Can I get bridging finance without selling my existing property?",
          answer: "Yes, bridging finance can be used for various purposes beyond property chains, including business acquisitions, development funding, renovation projects, or accessing equity for investment opportunities. The key is having a viable exit strategy."
        },
        {
          question: "What LVR is available for bridging finance?",
          answer: "LVRs for bridging finance typically range from 65-80%, depending on the security property, borrower profile, and exit strategy. Some specialist lenders may go higher for strong applications. We work to maximise your borrowing capacity while maintaining competitive pricing."
        }
      ]
    },
    {
      name: "Working Capital",
      faqs: [
        {
          question: "What's the difference between debtor finance and invoice factoring?",
          answer: "These terms are often used interchangeably. Both involve using outstanding invoices as security for funding. The main differences are in notification (whether customers are told about the arrangement) and recourse (whether you remain liable if customers don't pay)."
        },
        {
          question: "How quickly can I access funds with debtor finance?",
          answer: "Once a debtor finance facility is established, funds can typically be accessed within 24 hours of submitting invoices. Initial facility setup usually takes 1-2 weeks, depending on the complexity of your business and debtor verification requirements."
        },
        {
          question: "What percentage of my invoices can I finance?",
          answer: "Most debtor finance facilities advance 70-90% of eligible invoice values immediately, with the balance (minus fees) paid when your customer settles. The exact percentage depends on your industry, customer credit quality, and invoice terms."
        },
        {
          question: "Are there restrictions on which invoices I can finance?",
          answer: "Yes, typical restrictions include invoice age (usually under 90 days), minimum invoice values, customer concentration limits, and industry exclusions. Government contracts and established corporate customers are usually preferred by lenders."
        }
      ]
    }
  ]

  const toggleFAQ = (question: string) => {
    setOpenFAQ(openFAQ === question ? null : question)
  }

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
            <span className="text-foreground">FAQs</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Get instant answers to common questions about commercial lending, our services, and the application process. 
              Can't find what you're looking for? Contact our team for personalised assistance.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {faqCategories.map(category => (
              <button
                key={category.name}
                onClick={() => setOpenCategory(category.name)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  openCategory === category.name
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="space-y-4">
            {faqCategories
              .find(cat => cat.name === openCategory)
              ?.faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-lg">
                  <button
                    onClick={() => toggleFAQ(faq.question)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent transition-colors"
                  >
                    <span className="font-semibold text-card-foreground pr-4">
                      {faq.question}
                    </span>
                    {openFAQ === faq.question ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === faq.question && (
                    <div className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* Schema Markup for FAQ */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage", 
              "mainEntity": faqCategories.flatMap(category => 
                category.faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              )
            })}
          </script>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                <HelpCircle className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our commercial lending experts are here to help. Get personalised answers 
              and guidance for your specific funding requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Contact Our Team
              </Link>
              <Link
                to="/resources/guides"
                className="inline-flex items-center px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Browse Guides
              </Link>
            </div>
          </div>

          {/* Popular Questions */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Popular Questions Across All Categories
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-card-foreground mb-2">
                  How quickly can I get approval?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Timeframes vary by loan type - from 24 hours for simple asset finance to 1-2 weeks for complex development projects.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-card-foreground mb-2">
                  What documentation do I need?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Typically financial statements, tax returns, bank statements, and project/asset details. Requirements vary by loan type.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-card-foreground mb-2">
                  Do you work with new businesses?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Yes, we work with businesses at all stages, using lenders who assess based on business plans and industry experience.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-card-foreground mb-2">
                  What are typical interest rates?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Rates vary by loan type and risk profile. We work to secure the most competitive rates available in the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}