import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              {" "}
              Muhammed
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3 ">
              {" "}
              Sabik
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mx=auto opacity-0 animate-fade-in-delay-4">
            I’m a passionate software developer skilled in Python, Django, and
            React, with a focus on backend systems and real-time integrations. I
            enjoy building responsive web interfaces and developing interactive
            Slack bots — like mood-tracking bots that monitor user emotions at
            regular intervals.
          </p>
          <div>
            <a
              href="#projects"
              className="cosmic-button opacity-0 animate-fade-in-delay-4"
            >
              View My Works
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -transalate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muter-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
