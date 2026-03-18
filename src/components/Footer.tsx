import { Instagram, Facebook, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-retro-purple text-retro-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl mb-4">SATIN LOVE ORCHESTRA</h3>
            <p className="font-sans opacity-80 leading-relaxed">
              Bringing the heat of the 70s to your stage. Disco, Funk, and everything in between.
            </p>
          </div>
          
          <div>
            <h4 className="font-accent text-sm mb-6 tracking-widest">STAY CONNECTED</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-retro-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-retro-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-retro-pink transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-retro-pink transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-accent text-sm mb-6 tracking-widest">BOOKING</h4>
            <a href="mailto:booking@satinloveorchestra.com" className="flex items-center gap-2 hover:text-retro-yellow transition-colors">
              <Mail size={18} />
              booking@satinloveorchestra.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>© {new Date().getFullYear()} Satin Love Orchestra. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
