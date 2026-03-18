import { Send } from 'lucide-react';

export default function BookingForm() {
  return (
    <div className="glass-card rounded-[3rem] p-8 sm:p-12 shadow-2xl border-4 border-retro-yellow/20">
      <h2 className="font-display text-4xl text-retro-purple mb-2">BOOK THE ORCHESTRA</h2>
      <p className="font-sans text-retro-purple/70 mb-8">Ready to turn your event into a 70s extravaganza? Drop us a line!</p>
      
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-accent text-[10px] tracking-widest text-retro-purple ml-2">NAME</label>
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-retro-yellow/20 focus:border-retro-pink outline-none transition-colors font-sans"
            />
          </div>
          <div className="space-y-2">
            <label className="font-accent text-[10px] tracking-widest text-retro-purple ml-2">EMAIL</label>
            <input 
              type="email" 
              placeholder="your@email.com"
              className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-retro-yellow/20 focus:border-retro-pink outline-none transition-colors font-sans"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-accent text-[10px] tracking-widest text-retro-purple ml-2">VENUE / ORGANIZATION</label>
            <input 
              type="text" 
              placeholder="Where's the party?"
              className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-retro-yellow/20 focus:border-retro-pink outline-none transition-colors font-sans"
            />
          </div>
          <div className="space-y-2">
            <label className="font-accent text-[10px] tracking-widest text-retro-purple ml-2">EVENT DATE</label>
            <input 
              type="date" 
              className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-retro-yellow/20 focus:border-retro-pink outline-none transition-colors font-sans"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="font-accent text-[10px] tracking-widest text-retro-purple ml-2">MESSAGE</label>
          <textarea 
            rows={4}
            placeholder="Tell us about your event..."
            className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-retro-yellow/20 focus:border-retro-pink outline-none transition-colors font-sans resize-none"
          ></textarea>
        </div>
        
        <button className="w-full py-5 bg-retro-purple text-white font-accent text-sm rounded-2xl hover:bg-retro-pink transition-all shadow-lg flex items-center justify-center gap-3 group">
          SUBMIT BOOKING REQUEST
          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </div>
  );
}
