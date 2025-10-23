import { BookOpen, Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Web Developer & Learner
            </h3>
            <p className="text-muted-foreground">
              I am a beginner web developer with hands-on experience in Python,
              React, CSS, and a bit of Django. I enjoy building simple,
              responsive, and functional web applications while learning new
              technologies.
            </p>
            <p className="text-muted-foreground">
              I’m passionate about exploring the world of web development,
              improving my skills, and creating projects that help me understand
              programming concepts better. I love experimenting and learning by
              doing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Skill Cards */}

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Python</h4>
                  <p className="text-muted-foreground">
                    Completed the CS50 Introduction to Python course and its
                    practical tasks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">React & Frontend</h4>
                  <p className="text-muted-foreground">
                    Learning to build responsive web pages and interactive user
                    interfaces using React and CSS.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Python & Django</h4>
                  <p className="text-muted-foreground">
                    Familiar with Python basics and small Django projects for
                    backend development and simple web apps.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Learning & Projects</h4>
                  <p className="text-muted-foreground">
                    Working on small web projects to practice HTML, CSS,
                    JavaScript, and integrate what I learn in Python and React.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
