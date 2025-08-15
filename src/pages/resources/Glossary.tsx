import { Link } from 'react-router-dom'
import { Search, Book } from 'lucide-react'
import { useState } from 'react'

export function Glossary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLetter, setSelectedLetter] = useState('A')

  const glossaryTerms = [
    {
      term: "Asset Finance",
      definition: "A type of business lending where the purchased asset (equipment, vehicle, machinery) serves as security for the loan. Allows businesses to acquire assets without large upfront payments while preserving working capital.",
      category: "Finance Types",
      letter: "A"
    },
    {
      term: "Bridging Finance",
      definition: "Short-term financing typically used to 'bridge' the gap between the purchase of a new property and the sale of an existing one, or between immediate funding needs and longer-term financing arrangements.",
      category: "Finance Types", 
      letter: "B"
    },
    {
      term: "Caveat Loan",
      definition: "A form of short-term secured lending where a caveat is lodged against the title of a property to protect the lender's interest. Often used when quick access to funds is required.",
      category: "Finance Types",
      letter: "C"
    },
    {
      term: "Debtor Finance",
      definition: "A form of working capital finance where businesses can access funds against their outstanding invoices or debtors. Also known as invoice factoring or receivables financing.",
      category: "Finance Types",
      letter: "D"
    },
    {
      term: "Exit Strategy",
      definition: "A clearly defined plan for how a bridging loan or short-term facility will be repaid at the end of the loan term, typically through property sale or refinancing to a traditional mortgage.",
      category: "Loan Terms",
      letter: "E"
    },
    {
      term: "First Mortgage",
      definition: "The primary mortgage or security interest over a property, which takes priority over any subsequent mortgages or charges in the event of default.",
      category: "Security",
      letter: "F"
    },
    {
      term: "Guarantor",
      definition: "A person or entity who agrees to be responsible for loan repayments if the primary borrower defaults. Often required for higher-risk lending or when borrower's financial position is marginal.",
      category: "Loan Terms",
      letter: "G"
    },
    {
      term: "Interest Only",
      definition: "A loan repayment structure where the borrower pays only the interest component during the loan term, with the principal amount due at the end of the term or upon refinancing.",
      category: "Repayment Types",
      letter: "I"
    },
    {
      term: "LVR (Loan to Value Ratio)",
      definition: "The percentage of a property's value that is being borrowed. For example, a $400,000 loan on a $500,000 property has an 80% LVR. Lower LVRs generally attract better interest rates.",
      category: "Ratios",
      letter: "L"
    },
    {
      term: "Mezzanine Finance",
      definition: "A hybrid form of financing that combines debt and equity features, typically used in development projects where additional capital is required beyond senior debt limits.",
      category: "Finance Types",
      letter: "M"
    },
    {
      term: "Non-Bank Lender",
      definition: "Financial institutions other than traditional banks that provide commercial lending, often with more flexible lending criteria and faster approval processes.",
      category: "Lender Types",
      letter: "N"
    },
    {
      term: "Principal and Interest",
      definition: "A loan repayment structure where monthly payments include both interest charges and a portion of the principal loan amount, gradually reducing the outstanding balance over time.",
      category: "Repayment Types",
      letter: "P"
    },
    {
      term: "Second Mortgage",
      definition: "An additional mortgage or security interest over a property that ranks behind the first mortgage. Used when additional security is required or when accessing equity in property.",
      category: "Security",
      letter: "S"
    },
    {
      term: "Trade Finance",
      definition: "Financing solutions for businesses involved in importing, exporting, or trading goods, including letters of credit, trade facilities, and supply chain finance.",
      category: "Finance Types",
      letter: "T"
    },
    {
      term: "Valuation",
      definition: "An assessment of a property's market value conducted by a qualified valuer, used by lenders to determine maximum loan amounts and LVR calculations.",
      category: "Assessment",
      letter: "V"
    },
    {
      term: "Working Capital",
      definition: "The funds available for day-to-day business operations, calculated as current assets minus current liabilities. Working capital finance helps businesses maintain cash flow.",
      category: "Finance Types",
      letter: "W"
    }
  ]

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const categories = [...new Set(glossaryTerms.map(term => term.category))]

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLetter = !selectedLetter || term.letter === selectedLetter
    return matchesSearch && matchesLetter
  })

  const termsWithLetter = (letter: string) => {
    return glossaryTerms.filter(term => term.letter === letter).length > 0
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
            <span className="text-foreground">Glossary</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Commercial Lending Glossary
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive definitions of commercial lending terms and concepts. 
              Perfect for understanding finance jargon and making informed decisions about your business funding.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search terms and definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Alphabet Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedLetter('')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                !selectedLetter 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              All
            </button>
            {alphabet.map(letter => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                disabled={!termsWithLetter(letter)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedLetter === letter
                    ? 'bg-primary text-primary-foreground'
                    : termsWithLetter(letter)
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <span 
                key={category}
                className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Terms List */}
          <div className="space-y-6">
            {filteredTerms.length > 0 ? (
              filteredTerms.map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Book className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-card-foreground">
                          {item.term}
                        </h3>
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.definition}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <Book className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No terms found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or browse all terms.
                </p>
              </div>
            )}
          </div>

          {/* Schema Markup for FAQ */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": glossaryTerms.map(term => ({
                "@type": "Question",
                "name": `What is ${term.term}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": term.definition
                }
              }))
            })}
          </script>

          {/* CTA Section */}
          <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our finance experts are here to explain any commercial lending concepts and help you find the right solution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-semibold"
            >
              Ask Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}