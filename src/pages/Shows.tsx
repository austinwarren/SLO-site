import { motion } from 'motion/react';
import BookingForm from '../components/BookingForm';

export default function Booking() {
  return (
    <div className="py-20 bg-retro-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-6xl text-retro-purple mb-6 uppercase tracking-tight">BOOKING & PRESS</h1>
          <p className="font-sans text-xl text-retro-purple/60 max-w-2xl mx-auto">
            Everything you need to bring the Orchestra to your stage. From high-res assets to our booking request form.
          </p>
        </motion.div>

        {/* Booking Section */}
        <section id="booking" className="max-w-4xl mx-auto space-y-20">
          {/* Press Kit at the Top */}
          <div className="glass-card rounded-[3rem] p-8 sm:p-12 shadow-xl border-2 border-retro-orange/20 text-center">
            <h2 className="font-display text-4xl text-retro-purple mb-4 uppercase">ELECTRONIC PRESS KIT</h2>
            <p className="font-sans text-retro-purple/70 mb-8 max-w-xl mx-auto">
              Need high-res photos, stage plots, or band bios for your event? Download our full Electronic Press Kit below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-10 py-5 bg-retro-purple text-white font-accent text-sm rounded-full hover:bg-retro-pink transition-all shadow-lg flex items-center justify-center gap-3 group">
                DOWNLOAD FULL EPK (ZIP)
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </button>
            </div>
            
            <div className="mt-12 pt-12 border-t border-retro-purple/10">
              <h3 className="font-accent text-[10px] tracking-[0.3em] text-retro-pink mb-8">INDIVIDUAL PRESS ASSETS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Stage Plot', 'Band Bio', 'Hi-Res Logo', 'Promo Photo'].map((asset) => (
                  <button key={asset} className="p-4 bg-white rounded-2xl border border-retro-purple/10 hover:border-retro-pink hover:text-retro-pink transition-all font-sans font-bold text-xs text-retro-purple flex flex-col items-center gap-2">
                    <svg className="w-6 h-6 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    {asset}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <BookingForm />
        </section>
      </div>
    </div>
  );
}
