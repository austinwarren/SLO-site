import { Instagram, Facebook, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <h3 className="font-display text-2xl mb-6 font-black tracking-tighter">SATIN LOVE ORCHESTRA</h3>
            <p className="font-sans text-white/50 leading-relaxed text-sm">
              Bringing the heat of the 70s to your stage. Disco, Funk, and everything in between.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-[10px] font-bold mb-8 tracking-[0.2em] uppercase text-white/40">STAY CONNECTED</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-bold mb-8 tracking-[0.2em] uppercase text-white/40">BOOKING</h4>
            <a href="mailto:booking@satinloveorchestra.com" className="flex items-center gap-3 text-sm font-bold hover:text-neutral-400 transition-colors">
              <Mail size={18} className="text-white/40" />
              booking@satinloveorchestra.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/30">
          <p>© {new Date().getFullYear()} Satin Love Orchestra. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
