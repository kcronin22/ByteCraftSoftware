import React, { useState } from "react";
import Section from "./Section";

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // For now, just fake it. You can later wire this up to Resend / a Worker / API.
    setSent(true);
  };

  return (
    <Section
      id="contact"
      eyebrow="Let’s talk"
      title="Tell us what you’re trying to build."
    >
      <p className="mb-4">
        Give us the short version of your project, timeline, and where things
        are right now. We&apos;ll follow up with honest thoughts and a clear
        next step—no sales call ambush.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 border border-slate-200 rounded-2xl p-4 md:p-5 shadow-sm space-y-3"
      >
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-1 text-xs">
            <label htmlFor="name" className="font-medium text-slate-800">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-brand-orange/60 focus:border-brand-orange"
            />
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <label htmlFor="email" className="font-medium text-slate-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-brand-orange/60 focus:border-brand-orange"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 text-xs">
          <label htmlFor="project" className="font-medium text-slate-800">
            What are you trying to build?
          </label>
          <textarea
            id="project"
            name="project"
            rows={4}
            required
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-brand-orange/60 focus:border-brand-orange resize-y"
            placeholder="MVP, refactor, rescue mission, AI thing you’re not sure is possible..."
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-1">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold rounded-full bg-brand-orange text-white shadow-brand-soft hover:translate-y-[1px] transition-transform"
          >
            Send message
          </button>
          <p className="text-[11px] text-slate-500">
            For now, this doesn&apos;t actually send anywhere. Wire it up to
            your email / API when you&apos;re ready.
          </p>
        </div>

        {sent && (
          <p className="text-[11px] text-emerald-600">
            Message &quot;sent&quot; (locally). Hook this up to Resend,
            Supabase, or your backend to make it real.
          </p>
        )}
      </form>
    </Section>
  );
};

export default Contact;
