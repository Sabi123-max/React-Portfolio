import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "a Slack Bot",
    description: "A slack bot taht tarck user rection every 15 minute",
    image: "/projects/project1.png",
    tags: ["python"],
    demourl: "#",
    githuburl: "https://github.com/Xabium/Moodly",  
  },
  {
    id: 2,
    title: "A Portifolo website",
    description: "A website which shows my Portfolio",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind", "Expressjs"],
    demourl: "peaceful-begonia-72b326.netlify.app",
    githuburl: "https://github.com/Sabi123-max/React-Portfolio",
  },
  {
    id: 3,
    title: "Mailgun Fuction",
    description: "Give mailgun api usage build with express js ",
    image: "/projects/project3.png",
    tags: ["Express js"],
    demourl: "",
    githuburl: "https://github.com/Sabi123-max/Mailgun-backendExpressjs",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs fond-medium rounded-full border bg-secondary text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demourl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githuburl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="https://github.com/Sabi123-max" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">
                Check My Github <ArrowRight size={16}/>
            </a>
        </div>
      </div>
    </section>
  );
};
