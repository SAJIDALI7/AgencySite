import { Link } from "wouter";
import { ArrowRight, Palette, Code, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance.",
    },
    {
      icon: Palette,
      title: "Brand Design",
      description: "Comprehensive branding solutions that capture your unique identity and resonate with your audience.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that increase visibility, engagement, and drive measurable results.",
    },
  ];

  const featuredProjects = [
    {
      image: "./Portfolio_project_1_ecommerce_285ec30e.png",
      title: "E-Commerce Platform",
      category: "Web Design",
      description: "Modern shopping experience with seamless checkout",
    },
    {
      image: "./Portfolio_project_2_mobile_4944696b.png",
      title: "Food Delivery App",
      category: "Mobile App",
      description: "Intuitive app connecting restaurants with customers",
    },
    {
      image: "./Portfolio_project_3_branding_c6426fe0.png",
      title: "Brand Identity",
      category: "Branding",
      description: "Complete visual identity system for tech startup",
    },
    {
      image: "./Portfolio_project_4_corporate_a72c441e.png",
      title: "Corporate Website",
      category: "Web Design",
      description: "Professional site showcasing services and expertise",
    },
  ];

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./Agency_workspace_hero_image_d8728eac.png"
            alt="Creative agency workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Badge className="mb-6" data-testid="badge-hero-tagline">
            Digital Solutions That Drive Results
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Transform Your
            <span className="text-primary"> Digital Presence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We craft exceptional digital experiences that captivate audiences and deliver measurable business growth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/portfolio">
              <a>
                <Button size="lg" className="gap-2" data-testid="button-view-work">
                  View Our Work
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </Link>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-4xl font-bold font-display text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped businesses succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
                data-testid={`card-project-${index}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge className="mb-2">{project.category}</Badge>
                      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <a>
                <Button variant="outline" size="lg" data-testid="button-view-portfolio">
                  View Full Portfolio
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 hover-elevate active-elevate-2" data-testid={`card-service-${index}`}>
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <a>
                <Button size="lg" data-testid="button-view-services">
                  Explore All Services
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your digital presence and achieve your business goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <a>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  data-testid="button-get-started"
                >
                  Get Started
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
