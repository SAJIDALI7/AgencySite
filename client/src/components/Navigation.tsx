import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./WhatsAppButton";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center gap-2" data-testid="link-home-logo">
              <div className="text-2xl font-bold font-display tracking-tight">
                <span className="text-primary">Creative</span>
                <span className="text-foreground">Agency</span>
              </div>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <WhatsAppButton />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`block py-2 text-base font-medium transition-colors hover:text-primary ${
                    location === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="pt-2">
              <WhatsAppButton className="w-full" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
