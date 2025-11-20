import { Code, Palette, TrendingUp, Smartphone, ShoppingCart, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import servicesHero from "@assets/generated_images/Team_collaboration_services_hero_3fef775d.png";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications that deliver exceptional user experiences and drive business growth.",
      features: [
        "Responsive design for all devices",
        "Performance optimization",
        "SEO-friendly architecture",
        "Modern tech stack implementation",
        "E-commerce solutions",
      ],
    },
    {
      icon: Palette,
      title: "Brand Design",
      description: "Comprehensive branding that captures your unique identity and creates lasting impressions with your audience.",
      features: [
        "Logo design and brand identity",
        "Brand guidelines and strategy",
        "Marketing collateral design",
        "Packaging and print design",
        "Brand refresh and evolution",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that increase visibility, engagement, and deliver measurable ROI.",
      features: [
        "Social media management",
        "Content marketing strategy",
        "Email marketing campaigns",
        "Analytics and reporting",
        "Conversion optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Intuitive mobile applications that provide seamless experiences across iOS and Android platforms.",
      features: [
        "Native and cross-platform apps",
        "UI/UX design excellence",
        "App store optimization",
        "Push notification integration",
        "Performance monitoring",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete online store development with secure payment processing and inventory management.",
      features: [
        "Custom shopping experiences",
        "Payment gateway integration",
        "Inventory management systems",
        "Order tracking and fulfillment",
        "Customer analytics",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into understanding your business, goals, and target audience.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive plan tailored to your specific needs and objectives.",
    },
    {
      step: "03",
      title: "Design & Build",
      description: "Create stunning designs and develop robust solutions with attention to detail.",
    },
    {
      step: "04",
      title: "Launch & Grow",
      description: "Deploy your project and provide ongoing support to ensure continued success.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHero}
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to help your business thrive in the modern digital landscape.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 hover-elevate active-elevate-2" data-testid={`card-service-${index}`}>
                  <div className="h-16 w-16 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" data-testid={`button-quote-${index}`}>
                    Get a Quote
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven approach that delivers exceptional results every time
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center" data-testid={`process-step-${index}`}>
                <div className="inline-flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-4">
                  <span className="text-2xl font-bold font-display text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and create a custom solution that meets your needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <a>
                <Button size="lg" data-testid="button-contact-us">
                  Contact Us
                </Button>
              </a>
            </Link>
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </div>
  );
}
