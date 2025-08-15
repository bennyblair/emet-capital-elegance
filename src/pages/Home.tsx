import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Commercial Lending Solutions for Australian Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Emet Capital connects businesses with the right commercial lending solutions. 
              From asset finance to development funding, we make complex financing simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Funding Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Commercial Finance Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialise in connecting Australian businesses with tailored financing across all major commercial lending categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Asset Finance",
                description: "Equipment, vehicle, and machinery financing solutions for business growth."
              },
              {
                title: "Development Finance",
                description: "Construction and property development funding for residential and commercial projects."
              },
              {
                title: "Working Capital",
                description: "Cash flow solutions to support day-to-day business operations and growth."
              },
              {
                title: "Debtor Finance",
                description: "Invoice and debtor financing to improve cash flow and business liquidity."
              },
              {
                title: "Bridging Loans",
                description: "Short-term financing solutions for property purchases and business transitions."
              },
              {
                title: "Trade Finance",
                description: "Import, export, and supply chain financing for trading businesses."
              }
            ].map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Secure Your Business Funding?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance and competitive rates on your commercial lending needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-semibold"
          >
            Start Your Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}