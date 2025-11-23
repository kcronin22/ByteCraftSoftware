import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/70 mt-10">
      <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} Byte Craft Software. All rights reserved.
        </p>
        <p className="text-[11px] text-slate-400">
          Built with React, TypeScript, and an unhealthy appreciation for clever
          error messages.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
