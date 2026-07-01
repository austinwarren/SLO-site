import { motion } from 'motion/react';
import BookingForm from '../components/BookingForm';

export default function Booking() {
  return (
    <div className="py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-4xl sm:text-6xl text-white mb-6 uppercase tracking-tight">BOOKING & PRESS</h1>
          <p className="font-sans text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            Book Satin Love Orchestra for your next event or get in touch with our team. Press resources will be available soon.
          </p>
        </motion.div>

        {/* Booking & EPK Section */}
        <section id="booking" className="max-w-4xl mx-auto space-y-20">
          {/* Booking Form First */}
          <BookingForm />

          {/* Press Kit Below */}
          <div className="glass-card rounded-[3rem] p-8 sm:p-12 shadow-xl border-2 border-white/10 text-center">
            <h2 className="font-display text-4xl text-white mb-4 uppercase">ELECTRONIC PRESS KIT</h2>
            <p className="font-sans text-white/70 mb-8 max-w-xl mx-auto">
              Coming soon. Use the booking form above or contact us for media assets and press inquiries.
            </p>
            <a
              href="mailto:sj@shelleyjames.com"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-sans text-xs font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Email Shelley James
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
