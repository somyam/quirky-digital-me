import { MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PersonalHero = () => {
  const name = "Somya Mohindra";
  const location = "San Francisco";

  const linkGroups: { title: string; url?: string; isInternal?: boolean; links: { name: string; url: string; isInternal?: boolean }[] }[] = [
    {
      title: "Clinical Research (Google Scholar)",
      url: "https://scholar.google.com/citations?user=Hx7nEfkAAAAJ&hl=en",
      links: [],
    },
    {
      title: "Engineering (GitHub)",
      url: "https://github.com/somyam",
      links: [],
    },
    {
      title: "Writing",
      url: "https://substack.com/@inthisskin",
      links: [
        { name: "Architecture of Invisibility: Topical Steroid Withdrawal in the FAERS Database", url: "https://substack.com/home/post/p-202689171" },
        { name: "Medicaid Provider Spending Dataset and the Trump Administration", url: "https://substack.com/home/post/p-191308941" },
        { name: "How GPT supported me through Topical Steroid Withdrawal", url: "https://substack.com/home/post/p-188758463" },
        { name: "Topical Steroids in the 2020s", url: "https://substack.com/home/post/p-174214583" },
        { name: "Post 2000s Topical Steroids", url: "https://substack.com/home/post/p-162510124" },
        { name: "The Uneven Histories of Oral and Topical Steroids", url: "https://substack.com/home/post/p-162236531" },
        { name: "CalPERS & CalSTRS Fossil Fuel Divestment Bill Policy Memo", url: "https://docs.google.com/document/d/1C89XV4XzcNxcmakv8P9ARSaB9tfGEeXWOn58K-bf3zI/edit?usp=sharing" },
        { name: "Successful Partnerships Between Human Service Nonprofits and Healthcare Organizations", url: "https://insights.theberkeleygroup.org/successful-partnerships-between-human-service-nonprofits-and-healthcare-organizations-619490f90593" },
        { name: "Racial Gaps in Classroom Disability Identification", url: "https://drive.google.com/file/d/1YyodN3MGN-mq2MWmPXvTXM8jgF1BVCJP/view?usp=sharing" },
        { name: "The Pitfalls of Housing First and the Pay-For-Success Model", url: "https://drive.google.com/file/d/1DDqhQKQzRKzfRuB0swJNclZLRqRStrXM/view?usp=sharing" },
      ],
    },
    {
      title: "Art",
      url: "/artwork",
      isInternal: true,
      links: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-12 relative">
      {/* PLAY button in upper right */}
      <Link to="/play" className="absolute top-8 right-8">
        <Button
          variant="outline"
          size="lg"
          className="font-bold text-lg hover:bg-accent/20 hover:scale-105 transition-all duration-300"
        >
          MINE MY DATA
        </Button>
      </Link>

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
            <div className="flex items-center justify-center gap-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                {name}
              </h1>
              <a
                href="https://www.linkedin.com/in/somya-mohindra/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-7 h-7" />
              </a>
            </div>

            {/* Prevent Google from using this as a search snippet */}
            <p
              data-nosnippet
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{location}</span>
          </div>

          {/* Additional links grouped by category */}
          <div className="pt-8 space-y-6 max-w-2xl mx-auto text-left">
            {linkGroups.map((group) => (
              <div key={group.title}>
                {group.url ? (
                  group.isInternal ? (
                    <Link
                      to={group.url}
                      className="block text-sm font-semibold uppercase tracking-wide text-muted-foreground/70 underline hover:text-accent mb-2 transition-colors"
                    >
                      {group.title}
                    </Link>
                  ) : (
                    <a
                      href={group.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-semibold uppercase tracking-wide text-muted-foreground/70 underline hover:text-accent mb-2 transition-colors"
                    >
                      {group.title}
                    </a>
                  )
                ) : (
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground/70 mb-2">
                    {group.title}
                  </h2>
                )}
                <ul className="space-y-2 pl-6">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      {link.isInternal ? (
                        <Link
                          to={link.url}
                          className="text-muted-foreground hover:text-accent transition-colors text-lg"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors text-lg"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalHero;
