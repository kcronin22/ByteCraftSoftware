import React from "react";
import Section from "./Section";

const services = [
  {
    title: "Product & app development",
    body: "From first whiteboard sketch to production deploy. React frontends, .NET and Node backends, Postgres, and cloud infrastructure that won’t crumble when real users show up.",
    tags: [
      "React + TypeScript",
      "Vue3 + TypeScript",
      "Razer",
      ".NET Core",
      ".NET APIs",
      "SQL Server",
      "Postgres",
      "Cloud",
    ],
  },
  // {
  //   title: "AI & LLM integration",
  //   body: "We design practical AI features—agents, assistants, and workflows that improve your product instead of bloating it. Not every button needs “AI” slapped on it.",
  //   tags: ["OpenAI / LLMs", "Agents & tools", "Content workflows"],
  // },
  {
    title: "Architecture & technical leadership",
    body: "Need a second brain on your system design, roadmap, or hiring? We can review, advise, and help you avoid “we need to rewrite everything” in 18 months.",
    tags: [
      "System architecture & design",
      "Database architecture & design",
      "Codebase audits",
      "Fractional leadership",
    ],
  },
  {
    title: "Rescue missions",
    body: "Inherited a mystery codebase? Deadlines looming? We dive into existing systems, untangle the mess, and carve out a path that doesn’t involve setting everything on fire.",
    tags: ["Legacy rescue", "Refactors", "Stabilization"],
  },
];

const Services: React.FC = () => {
  return (
    <Section
      id="services"
      eyebrow="What we do"
      title="Services that keep shipping."
    >
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {services.map((service) => (
          <article
            key={service.title}
            className="bg-white/80 rounded-2xl border border-slate-200/70 p-4 md:p-5 shadow-sm flex flex-col gap-3"
          >
            <h3 className="font-semibold text-sm md:text-base text-slate-900">
              {service.title}
            </h3>
            <p className="text-xs md:text-sm text-slate-700">{service.body}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 rounded-full border border-slate-200 bg-slate-50 text-[11px] text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Services;
