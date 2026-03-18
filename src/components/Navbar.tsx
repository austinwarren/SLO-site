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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-retro-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl sm:text-3xl text-retro-purple tracking-tighter">
              SATIN LOVE<span className="text-retro-pink"> ORCHESTRA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-sans font-semibold text-retro-purple hover:text-retro-pink transition-colors duration-200 flex items-center gap-1"
              >
                <link.icon size={18} />
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-retro-purple p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-retro-orange/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 rounded-xl font-sans font-bold text-retro-purple hover:bg-retro-yellow/20 flex items-center gap-3"
                >
                  <link.icon size={20} />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
