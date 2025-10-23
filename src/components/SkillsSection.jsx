import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "Javascript", level: 50, category: "Frontend" },
  { name: "Python", level: 65, category: "Backend" },
  { name: "Git/GitHub", level: 80, category: "Tools" },
  { name: "Docker", level: 60, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Express", level: 40, category: "Backend" },
  { name: "Tailwind CSS", level: 50, category: "Frontend" },
  { name: "PostgreSQL", level: 60, category: "Backend" },
];

export const SkillSection = () => {
  const category = ["All","Frontend", "Backend", "Tools"];
  const [activeCategory, setActiveCategory] = useState("All");
  const filterdSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-4 px-4 relative bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12"></div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {category.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn("px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterdSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{
                    width: skill.level + "%",
                  }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
