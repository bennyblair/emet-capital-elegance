import { Link } from 'react-router-dom'
import { Calculator, DollarSign, TrendingUp, Calendar, PieChart, BarChart3 } from 'lucide-react'
import { useState } from 'react'

export function ToolsCalculators() {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [interestRate, setInterestRate] = useState(10.5)
  const [loanTerm, setLoanTerm] = useState(12)

  const monthlyInterest = (loanAmount * (interestRate / 100)) / 12
  const totalInterest = monthlyInterest * loanTerm
  const totalRepayment = loanAmount + totalInterest

  const tools = [
    {
      title: "Bridging Loan Calculator",
      description: "Calculate monthly interest payments and total costs for bridging finance",
      icon: Calculator,
      available: true,
      features: ["Interest-only payments", "Total cost calculation", "Comparison scenarios"]
    },
    {
      title: "Asset Finance Calculator",
      description: "Estimate monthly repayments for equipment and vehicle finance",
      icon: TrendingUp,
      available: false,
      features: ["Monthly repayments", "Balloon payments", "Tax benefits"]
    },
    {
      title: "Development Finance Calculator",
      description: "Calculate progressive drawdowns and interest for development projects",
      icon: BarChart3,
      available: false,
      features: ["Stage-based drawdowns", "Interest capitalisation", "Project timeline"]
    },
    {
      title: "Working Capital Calculator",
      description: "Assess your working capital needs and financing options",
      icon: PieChart,
      available: false,
      features: ["Cash flow analysis", "Facility requirements", "Cost comparison"]
    },
    {
      title: "Loan Comparison Tool",
      description: "Compare different loan options side by side",
      icon: BarChart3,
      available: false,
      features: ["Side-by-side comparison", "Total cost analysis", "ROI calculations"]
    },
    {
      title: "Affordability Calculator",
      description: "Determine how much you can borrow based on your financials",
      icon: DollarSign,
      available: false,
      features: ["Income assessment", "Serviceability ratios", "Borrowing capacity"]
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
            <Link to="/resources" className="text-muted-foreground hover:text-foreground">Resources</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Tools & Calculators</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Commercial Lending Tools & Calculators
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interactive tools to help you estimate costs, compare options, and plan your commercial lending strategy. 
              Get instant calculations for various types of business finance.
            </p>
          </div>

          {/* Featured Calculator - Bridging Loan */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-lg p-8 mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Bridging Loan Calculator</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Calculate your monthly interest payments and total costs for bridging finance. 
                  Perfect for property purchases, development projects, and business acquisitions.
                </p>

                {/* Calculator Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Loan Amount ($)
                    </label>
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="500,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Interest Rate (% p.a.)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="10.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Loan Term (months)
                    </label>
                    <input
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="12"
                    />
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-6">Calculation Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Monthly Interest Payment</span>
                    <span className="text-lg font-semibold text-foreground">
                      ${monthlyInterest.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Total Interest Cost</span>
                    <span className="text-lg font-semibold text-foreground">
                      ${totalInterest.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground">Total Repayment</span>
                    <span className="text-xl font-bold text-primary">
                      ${totalRepayment.toLocaleString('en-AU', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This calculation is for interest-only payments typical of bridging loans. 
                    Actual rates and fees may vary. Contact us for a detailed quote.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* All Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-secondary rounded-lg">
                      <Icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {tool.title}
                      </h3>
                      {!tool.available && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {tool.description}
                  </p>
                  <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                    {tool.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                  {tool.available ? (
                    <span className="text-green-600 font-medium">Available Above ↑</span>
                  ) : (
                    <span className="text-muted-foreground">Coming Soon</span>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Need Personalised Calculations?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our finance experts can provide detailed calculations and quotes tailored to your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-semibold"
            >
              Get Expert Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}