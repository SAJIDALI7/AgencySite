import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import portfolioImage1 from "@assets/generated_images/Portfolio_project_1_ecommerce_285ec30e.png";
import portfolioImage2 from "@assets/generated_images/Portfolio_project_2_mobile_4944696b.png";
import portfolioImage3 from "@assets/generated_images/Portfolio_project_3_branding_c6426fe0.png";
import portfolioImage4 from "@assets/generated_images/Portfolio_project_4_corporate_a72c441e.png";
import portfolioImage5 from "@assets/generated_images/Portfolio_project_5_social_a59f9265.png";
import portfolioImage6 from "@assets/generated_images/Portfolio_project_6_dashboard_2875062d.png";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      image: portfolioImage1,
      title: "Luxe E-Commerce Platform",
      client: "Fashion Retail Co.",
      category: "Web Design",
      tags: ["E-Commerce", "UI/UX"],
      description: "Modern shopping experience with seamless checkout flow and personalized recommendations.",
      results: "120% increase in conversion rate",
    },
    {
      image: portfolioImage2,
      title: "QuickBite Delivery App",
      client: "Food Tech Startup",
      category: "Mobile App",
      tags: ["Mobile", "UI/UX"],
      description: "Intuitive food delivery app connecting restaurants with hungry customers in real-time.",
      results: "50K+ downloads in first month",
    },
    {
      image: portfolioImage3,
      title: "TechFlow Brand Identity",
      client: "Software Company",
      category: "Branding",
      tags: ["Branding", "Design"],
      description: "Complete visual identity system including logo, colors, typography, and brand guidelines.",
      results: "40% increase in brand recognition",
    },
    {
      image: portfolioImage4,
      title: "Enterprise Solutions Hub",
      client: "Consulting Firm",
      category: "Web Design",
      tags: ["Web Design", "Corporate"],
      description: "Professional corporate website showcasing services, case studies, and thought leadership.",
      results: "200% increase in qualified leads",
    },
    {
      image: portfolioImage5,
      title: "Social Impact Campaign",
      client: "Non-Profit Organization",
      category: "Marketing",
      tags: ["Social Media", "Marketing"],
      description: "Comprehensive social media strategy driving awareness and engagement for social cause.",
      results: "2M+ impressions, 85K engagements",
    },
    {
      image: portfolioImage6,
      title: "Analytics Dashboard Pro",
      client: "SaaS Platform",
      category: "Web Design",
      tags: ["Dashboard", "UI/UX"],
      description: "Modern SaaS dashboard with real-time analytics, data visualization, and reporting tools.",
      results: "95% user satisfaction score",
    },
  ];

  const filters = ["All", "Web Design", "Mobile App", "Branding", "Marketing"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped businesses achieve exceptional results.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              data-testid={`button-filter-${filter.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2 group cursor-pointer"
              data-testid={`card-portfolio-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 bg-background/80 backdrop-blur"
                      data-testid={`button-view-case-${index}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.client}</p>
                <p className="text-sm leading-relaxed mb-3">{project.description}</p>
                <div className="pt-3 border-t">
                  <p className="text-sm font-medium text-primary">{project.results}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No projects found in this category. Please try another filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
