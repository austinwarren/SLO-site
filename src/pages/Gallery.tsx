import { motion } from 'motion/react';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  return (
    <div className="py-20 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="font-display text-4xl sm:text-7xl text-white mb-6 font-black tracking-tighter uppercase">THE VISUALS</h1>
          <p className="font-sans text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
            A look back at our favorite moments on stage and behind the scenes.
          </p>
        </motion.div>

        <GalleryGrid />
      </div>
    </div>
  );
}
