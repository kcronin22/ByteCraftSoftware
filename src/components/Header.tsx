import React from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-slate-100/85 border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-[rgba(239,118,3,0.08)] border border-[rgba(239,118,3,0.32)] flex items-center justify-center shadow-sm overflow-hidden">
            {/* Use the logo from public/bytecraft-logo.png */}
            <img
              src="/bytecraft-logo.png"
              alt="Byte Craft Software logo"
              className="h-7 w-7 object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-slate-900 text-sm md:text-base">
              Byte Craft Software
            </span>
            <span className="text-[11px] md:text-xs text-slate-500">
              Making bad ideas ship-ready since 2025.
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-700">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-brand-orange transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-full bg-brand-orange text-white shadow-brand-soft hover:translate-y-[1px] transition-transform"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile: just a Contact pill */}
        <a
          href="#contact"
          className="md:hidden inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-full bg-brand-orange text-white shadow-brand-soft"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
