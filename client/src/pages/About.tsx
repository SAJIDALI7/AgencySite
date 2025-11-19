import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aboutHero from "@assets/generated_images/Team_photo_about_page_191a7c70.png";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your success is our success. We prioritize understanding your unique needs and delivering solutions that exceed expectations.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We believe in the power of partnership. Our team works closely with you at every stage to ensure your vision becomes reality.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from initial concept to final delivery and ongoing support.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We stay ahead of industry trends and leverage cutting-edge technologies to give you a competitive advantage.",
    },
  ];

  const milestones = [
    { year: "2019", event: "Agency Founded", description: "Started with a vision to transform digital experiences" },
    { year: "2020", event: "50+ Projects", description: "Delivered exceptional results for diverse clients" },
    { year: "2022", event: "Award Recognition", description: "Received industry awards for design excellence" },
    { year: "2025", event: "150+ Projects", description: "Continuing to grow and innovate with our clients" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      bio: "15+ years crafting memorable brand experiences",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Full-stack expert passionate about clean code",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Strategist",
      bio: "Data-driven marketer with proven ROI results",
    },
    {
      name: "David Kim",
      role: "UX Designer",
      bio: "User-centered design advocate and innovator",
    },
    {
      name: "Lisa Anderson",
      role: "Project Manager",
      bio: "Ensuring seamless delivery and client satisfaction",
    },
    {
      name: "James Taylor",
      role: "Brand Specialist",
      bio: "Creating cohesive identities that resonate",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHero}
            alt="Our team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            About <span className="text-primary">Our Agency</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're a passionate team dedicated to creating exceptional digital experiences that drive real business results.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            We exist to empower businesses through innovative digital solutions. Our mission is to transform your
            ideas into compelling digital experiences that engage your audience, drive growth, and create lasting
            value. We combine creativity with technology to deliver results that exceed expectations.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Since 2019, we've partnered with startups, growing businesses, and established enterprises to craft
            digital solutions that make a difference. Our approach blends strategic thinking, creative excellence,
            and technical expertise to ensure every project achieves its full potential.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 text-center hover-elevate active-elevate-2" data-testid={`card-value-${index}`}>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center hover-elevate active-elevate-2" data-testid={`card-team-${index}`}>
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth and evolution
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  data-testid={`milestone-${index}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="p-6 inline-block">
                      <h3 className="text-2xl font-bold font-display text-primary mb-2">
                        {milestone.year}
                      </h3>
                      <h4 className="text-lg font-semibold mb-2">{milestone.event}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="h-4 w-4 rounded-full bg-primary border-4 border-background flex-shrink-0 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to start your next project? We'd love to hear from you and discuss how we can help achieve your goals.
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" data-testid="button-start-project">
                Start a Project
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
