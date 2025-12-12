import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SocialLink {
  name: string;
  url: string;
  description: string;
}

const PersonalHero = () => {
  const name = "Somya Mohindra";
  const location = "San Francisco";

  const socialLinks: SocialLink[] = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/somya-mohindra/", description: "professional network" },
    { name: "GitHub", url: "https://github.com/somyam", description: "code & projects" },
    {
      name: "Research",
      url: "https://ascopubs.org/doi/abs/10.1200/JCO.2023.41.16_suppl.1561",
      description: "published research",
    },
    {
      name: "Insights",
      url: "https://insights.theberkeleygroup.org/successful-partnerships-between-human-service-nonprofits-and-healthcare-organizations-619490f90593",
      description: "nonprofit writing",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Floating decoration */}
        <div className="absolute top-20 left-1/4 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
        <div
          className="absolute bottom-32 right-1/4 w-16 h-16 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Main content */}
        <div className="space-y-8 relative z-10">
          {/* Name and tagline */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary">{name}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm a backend engineer with 3 years of experience shipping resilient, scalable systems. I enjoy experimenting with emerging AI tools and am interested in startups at the intersection of technology, healthcare, and community. Outside of work, I write, make art, and teach yoga.
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{location}</span>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto pt-8">
            {socialLinks.map((link) => (
              <Card key={link.name} className="group hover:shadow-glow transition-all duration-300 border-border/50">
                <Button
                  variant="ghost"
                  className="w-full h-full p-6 flex flex-col items-center gap-3 hover:bg-accent/10 transition-smooth"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-6 h-6 text-accent group-hover:scale-110 transition-bounce" />
                    <div className="text-center">
                      <div className="text-lg font-medium text-foreground group-hover:text-accent transition-smooth">
                        {link.name}
                      </div>
                      <div className="text-base text-muted-foreground mt-1">{link.description}</div>
                    </div>
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalHero;
