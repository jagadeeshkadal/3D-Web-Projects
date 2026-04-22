import React from "react";
import { Zap, Instagram, Twitter, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-orange-500 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter">
                Nano Banana
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Redefining fresh. Cold-pressed, never heated, and delivered with love to your doorstep.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 bg-gray-900 rounded-lg hover:bg-orange-500 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-orange-500">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Juice Cleanses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Single Juices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Subscrptions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Merchandise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-orange-500">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-orange-500">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Stay fresh with updates and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address"
                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="bg-white text-black p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-900 flex flex-col md:row justify-between items-center gap-6 text-xs text-gray-500 font-medium">
          <p>© 2026 NANO BANANA INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
