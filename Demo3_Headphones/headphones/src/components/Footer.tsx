const footerLinks = {
  Products: ["WH-1000XM6", "WH-1000XM5", "WH-CH720N", "Earbuds", "Studio Monitors"],
  Technology: ["Noise Cancelling", "LDAC Audio", "360 Reality", "Multipoint", "App Control"],
  Support: ["User Guides", "Warranty", "Contact Us", "Repair Center", "FAQs"],
  Company: ["About Sony", "Sustainability", "Press Room", "Careers", "Investors"],
};

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black border-t border-white/8 px-6 md:px-12 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="md:w-1/4">
            <div className="text-white font-bold text-xl tracking-tight mb-4">SONY</div>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-6">
              Decades of audio innovation. One commitment: to make you hear things you've never heard before.
            </p>
            <div className="flex gap-4">
              {["IG", "TW", "YT", "FB"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/8 flex items-center justify-center text-white/40 text-xs hover:bg-white/10 hover:text-white transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {Object.entries(footerLinks).map(([cat, links]) => (
              <div key={cat}>
                <p className="text-white text-xs uppercase tracking-[0.3em] mb-5 font-semibold">{cat}</p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/40 text-sm hover:text-white transition-colors font-light">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8">
          <p className="text-white/25 text-xs">© 2026 Sony Electronics Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Settings", "Accessibility"].map((l) => (
              <a key={l} href="#" className="text-white/25 text-xs hover:text-white/60 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
