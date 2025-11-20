import { Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import pricingHero from "@assets/generated_images/Success_results_pricing_hero_cb1dec48.png";
import { Link } from "wouter";

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "₹3,000",
      period: "per project",
      description: "Perfect for small businesses and startups looking to establish their digital presence.",
      features: [
        "Custom website design (up to 5 pages)",
        "Responsive mobile optimization",
        "Basic SEO setup",
        "Contact form integration",
        "2 rounds of revisions",
        "30 days of support",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Professional",
      price: "₹6,000",
      period: "per project",
      description: "Ideal for growing businesses that need comprehensive digital solutions.",
      features: [
        "Everything in Starter, plus:",
        "Custom website (up to 15 pages)",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "Analytics setup",
        "4 rounds of revisions",
        "90 days of support",
        "Priority support",
      ],
      cta: "Get Started",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "Comprehensive solutions for large organizations with complex requirements.",
      features: [
        "Everything in Professional, plus:",
        "Unlimited pages",
        "Custom integrations",
        "API development",
        "Dedicated project manager",
        "Unlimited revisions",
        "12 months of support",
        "24/7 priority support",
        "Monthly consultations",
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  const faqs = [
    {
      question: "What is included in the project price?",
      answer: "Each pricing tier includes design, development, and support as outlined in the features list. All projects include responsive design, browser testing, and initial content integration.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. Starter projects typically take 3-4 weeks, Professional projects 6-8 weeks, and Enterprise projects are scheduled based on specific requirements.",
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! We offer flexible payment plans with a 50% deposit to start and the remaining 50% upon project completion. Enterprise clients can arrange custom payment schedules.",
    },
    {
      question: "What happens after the support period ends?",
      answer: "After your included support period, we offer maintenance packages starting at $299/month for ongoing updates, security patches, and technical support.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade your plan at any time during the project. We'll apply your initial payment toward the upgraded tier.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 100% money-back guarantee if you're not satisfied after the initial discovery phase. Once development begins, refunds are evaluated on a case-by-case basis.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={pricingHero}
            alt="Success and growth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            Simple, <span className="text-primary">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  tier.featured ? "border-primary border-2 shadow-lg" : ""
                }`}
                data-testid={`card-pricing-${index}`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-3">
                    <span className="text-5xl font-bold font-display">{tier.price}</span>
                    <span className="text-muted-foreground ml-2">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <a className="block">
                    <Button
                      variant={tier.featured ? "default" : "outline"}
                      className="w-full"
                      size="lg"
                      data-testid={`button-pricing-cta-${index}`}
                    >
                      {tier.cta}
                    </Button>
                  </a>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Not sure which plan is right for you? We're here to help!
            </p>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing and services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-md px-6">
                <AccordionTrigger
                  className="text-left hover:no-underline"
                  data-testid={`accordion-faq-${index}`}
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-semibold">{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">100% Money-Back Guarantee</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're confident in our work. If you're not satisfied after the initial discovery phase,
              we'll refund your deposit in full. Your success is our priority.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Check className="h-5 w-5 text-primary" />
              <span>No questions asked</span>
              <span className="mx-2">•</span>
              <Check className="h-5 w-5 text-primary" />
              <span>Full refund available</span>
              <span className="mx-2">•</span>
              <Check className="h-5 w-5 text-primary" />
              <span>Your satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
