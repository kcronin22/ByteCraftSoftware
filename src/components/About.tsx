import React from "react";
import Section from "./Section";

const About: React.FC = () => {
  return (
    <Section id="about" eyebrow="Who we are" title="Small team, big builds.">
      <p>
        Byte Craft Software is a boutique engineering shop focused on{" "}
        <strong>web applications</strong>, <strong>APIs</strong>, and{" "}
        <strong>AI-powered tools</strong>. We&apos;re obsessed with clear
        architecture, clean code, and shipping things that are actually
        maintainable six months from now.
      </p>
      <p>
        We&apos;ve worked across startups and established businesses, wearing
        hats from senior engineer to technical lead. We like solving messy,
        real-world problems—not just rearranging pixels on a landing page.
      </p>
      <p>
        If you want a partner who can design a system, build it, and explain it
        without corporate bingo buzzwords, you&apos;re in the right place.
      </p>
    </Section>
  );
};

export default About;
