import { motion } from 'motion/react';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  return (
    <div className="py-20 bg-retro-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-6xl text-retro-purple mb-6 uppercase tracking-tight">THE VISUALS</h1>
          <p className="font-sans text-xl text-retro-purple/60 max-w-2xl mx-auto">
            A look back at our favorite moments on stage and behind the scenes.
          </p>
        </motion.div>

        <GalleryGrid />
      </div>
    </div>
  );
}
