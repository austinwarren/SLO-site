import { Link } from 'react-router-dom';
import { Music, Calendar, Image as ImageIcon, History, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Playlist', path: '/playlist', icon: Music },
    { name: 'Booking', path: '/booking', icon: Calendar },
    { name: 'Gallery', path: '/gallery', icon: ImageIcon },
    { name: 'History', path: '/history', icon: History },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl sm:text-3xl text-white tracking-tighter font-black">
              SATIN LOVE<span className="text-neutral-500"> ORCHESTRA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-sans font-bold text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <link.icon size={16} />
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12, ease: 'linear' }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-20 z-40 bg-black/50 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full z-50 border-b border-white/10 bg-black/95 shadow-2xl md:hidden"
            >
              <div className="max-w-7xl mx-auto px-4 pt-2 pb-6 sm:px-6 lg:px-8">
                <div className="space-y-2 rounded-b-2xl">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-4 rounded-xl font-sans font-bold text-white/70 hover:text-white hover:bg-white/5 flex items-center gap-3 uppercase tracking-widest text-sm"
                    >
                      <link.icon size={20} />
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
