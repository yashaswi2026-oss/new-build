import { Mail, Phone, User, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--canvas)] py-12 md:py-16">
      <div className="wrap space-y-10">
        
        {/* Top Section: Brand & Contact Representative Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-3">
            <a href="#top" className="logo text-2xl font-serif italic text-[var(--ink)] block">
              new build<span className="text-[var(--accent)]">.</span>
            </a>
            <p className="text-xs text-[var(--ink-soft)] leading-relaxed max-w-xs">
              Crafting state-of-the-art interactive digital experiences, custom websites, and custom web design with bespoke aesthetics.
            </p>
          </div>

          {/* Representative info grid */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:pl-8">
            
            {/* Name Representation */}
            <div className="group p-5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--ink-faint)] mb-3">
                  <User className="w-3.5 h-3.5 text-[var(--accent)]" /> 
                  <span>Architect</span>
                </div>
                <div className="font-serif font-medium text-base text-[var(--ink)] group-hover:text-[var(--accent-2)] transition-colors duration-200">
                  Yashaswi Vasamsetti
                </div>
              </div>
              <div className="text-[10px] text-[var(--ink-soft)] mt-3">Design &amp; Development</div>
            </div>

            {/* Email Representation */}
            <a 
              href="mailto:yashaswi7030@gmail.com" 
              className="group p-5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-lg hover:shadow-neutral-900/[0.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--ink-faint)]">
                    <Mail className="w-3.5 h-3.5 text-[var(--accent)]" /> 
                    <span>Inquiries</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ink-faint)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <div className="font-sans font-medium text-xs text-[var(--ink)] break-all tracking-tight group-hover:text-[var(--accent-2)] transition-colors duration-200">
                  yashaswi7030@gmail.com
                </div>
              </div>
              <div className="text-[10px] text-[var(--accent)] mt-3 font-semibold group-hover:underline">Send an Email</div>
            </a>

            {/* Phone Representation */}
            <a 
              href="tel:+919032696061" 
              className="group p-5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-lg hover:shadow-neutral-900/[0.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--ink-faint)]">
                    <Phone className="w-3.5 h-3.5 text-[var(--accent)]" /> 
                    <span>Direct Call</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ink-faint)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <div className="font-sans font-medium text-sm text-[var(--ink)] tracking-wider group-hover:text-[var(--accent-2)] transition-colors duration-200">
                  +91 90326 96061
                </div>
              </div>
              <div className="text-[10px] text-[var(--accent)] mt-3 font-semibold group-hover:underline">Get in Touch</div>
            </a>

          </div>
        </div>

        {/* Separator Line */}
        <div className="h-[1px] bg-[var(--line)] w-full" />

        {/* Bottom Section: Links & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span className="text-[var(--ink-faint)] font-mono text-[10px] tracking-wider">
            © {currentYear} — YASHASWI VASAMSETTI. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#transform" className="text-[10px] text-[var(--ink-soft)] uppercase tracking-widest font-semibold hover:text-[var(--accent)] transition-colors duration-200">Compare</a>
            <a href="#process" className="text-[10px] text-[var(--ink-soft)] uppercase tracking-widest font-semibold hover:text-[var(--accent)] transition-colors duration-200">Process</a>
            <a href="#contact" className="text-[10px] text-[var(--ink-soft)] uppercase tracking-widest font-semibold hover:text-[var(--accent)] transition-colors duration-200">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

