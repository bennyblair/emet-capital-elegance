import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:transition-all"
      >
        Skip to content
      </a>

      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                Emet Capital
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Contact & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <DarkModeToggle />
              <a 
                href="tel:0485952651" 
                className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center gap-2"
                onClick={() => {
                  // GA4 custom event
                  if (typeof window !== 'undefined' && 'gtag' in window) {
                    (window as any).gtag('event', 'call_now_click', {
                      event_category: 'engagement',
                      event_label: 'header_phone'
                    });
                  }
                }}
              >
                <span className="text-sm">📞</span>
                <span className="hidden xl:inline">0485 952 651</span>
                <span className="xl:hidden">Call Now</span>
              </a>
              <Button 
                variant="premium" 
                size="sm" 
                className="hover-lift"
                onClick={() => {
                  // GA4 custom event
                  if (typeof window !== 'undefined' && 'gtag' in window) {
                    (window as any).gtag('event', 'get_quote_click', {
                      event_category: 'conversion',
                      event_label: 'header_cta'
                    });
                  }
                }}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Contact & Menu */}
            <div className="md:hidden flex items-center space-x-3">
              <DarkModeToggle />
              <a href="tel:0485952651" className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200">
                📞
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="h-10 w-10"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-6 border-t border-border">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-3 border-t border-border">
                  <a href="tel:0485952651" className="block text-primary font-semibold text-center py-2 border border-primary/20 rounded-xl hover:bg-primary/10 transition-colors">
                    📞 0485 952 651
                  </a>
                  <Button variant="premium" size="sm" className="w-full hover-lift">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Sticky CTA Bar - Only on desktop */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40">
        <div className="flex items-center gap-3 p-4 glass rounded-2xl hover-lift">
          <span className="text-sm font-medium">Ready to get started?</span>
          <Button variant="premium" size="sm" className="hover-lift">
            Get Your Quote
          </Button>
        </div>
      </div>
    </>

  );
};

export default Navigation;