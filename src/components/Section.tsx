import React from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, eyebrow, title, children }) => {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-[rgba(239,118,3,0.04)] border border-[rgba(239,118,3,0.18)] rounded-3xl shadow-brand-soft p-6 md:p-10">
          <header className="mb-6 md:mb-8">
            {eyebrow && (
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-orange mb-2">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {title}
            </h2>
          </header>
          <div className="space-y-4 text-sm md:text-base text-slate-700">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
