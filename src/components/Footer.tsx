import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="font-display text-2xl mb-6 font-black tracking-tighter">SATIN LOVE ORCHESTRA</h3>
            <p className="font-sans text-white/50 leading-relaxed text-sm">
              Bringing the heat of the 70s to your stage. Disco, Funk, and everything in between.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-bold mb-8 tracking-[0.2em] uppercase text-white/40">Connect</h4>
            <a href="mailto:sj@shelleyjames.com" className="flex items-center gap-3 text-sm font-bold hover:text-neutral-400 transition-colors">
              <Mail size={18} className="text-white/40" />
              sj@shelleyjames.com
            </a>
            <a
              href="https://www.facebook.com/satinloveorchestra"
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center gap-3 text-sm font-bold hover:text-neutral-400 transition-colors"
            >
              <Facebook size={18} className="text-white/40" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/satinlove.orchestra/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center gap-3 text-sm font-bold hover:text-neutral-400 transition-colors"
            >
              <Instagram size={18} className="text-white/40" />
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex justify-center md:justify-start text-[10px] font-bold uppercase tracking-widest text-white/30">
          <p>&copy; {new Date().getFullYear()} Satin Love Orchestra. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
