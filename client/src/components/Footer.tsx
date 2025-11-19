import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function Footer() {
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes("@")) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setNewsletterEmail("");
    } else {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold font-display mb-4">
              <span className="text-primary">Creative</span>
              <span className="text-foreground">Agency</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Transforming ideas into stunning digital experiences. Your success is our mission.
            </p>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="secondary"
                onClick={() => window.open("https://facebook.com", "_blank", "noopener,noreferrer")}
                data-testid="button-social-facebook"
              >
                <span className="text-xs font-medium">FB</span>
              </Button>
              <Button
                size="icon"
                variant="secondary"
                onClick={() => window.open("https://twitter.com", "_blank", "noopener,noreferrer")}
                data-testid="button-social-twitter"
              >
                <span className="text-xs font-medium">TW</span>
              </Button>
              <Button
                size="icon"
                variant="secondary"
                onClick={() => window.open("https://instagram.com", "_blank", "noopener,noreferrer")}
                data-testid="button-social-instagram"
              >
                <span className="text-xs font-medium">IN</span>
              </Button>
              <Button
                size="icon"
                variant="secondary"
                onClick={() => window.open("https://linkedin.com", "_blank", "noopener,noreferrer")}
                data-testid="button-social-linkedin"
              >
                <span className="text-xs font-medium">LI</span>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Design", "Branding", "Digital Marketing", "UI/UX Design"].map((service, index) => (
                <li key={service}>
                  <Link href="/services">
                    <a
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-footer-service-${index}`}
                    >
                      {service}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Portfolio", path: "/portfolio" },
                { label: "Pricing", path: "/pricing" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Creative Street, Design City, DC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>hello@creativeagency.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">Newsletter</h5>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="text-sm"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  data-testid="input-newsletter-email"
                />
                <Button type="submit" size="sm" data-testid="button-newsletter-subscribe">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CreativeAgency. All rights reserved. |{" "}
            <span data-testid="text-footer-privacy">Privacy Policy</span> |{" "}
            <span data-testid="text-footer-terms">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
