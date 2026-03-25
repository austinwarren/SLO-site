import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          setErrorMessage(result.errors.map((error: any) => error.message).join(", "));
        } else {
          setErrorMessage("Oops! There was a problem submitting your form.");
        }
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white/5 rounded-[3rem] p-8 sm:p-12 shadow-2xl border border-green-500/30 text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle2 size={64} className="text-green-500" />
        </div>
        <h2 className="font-display text-4xl text-white font-black tracking-tighter uppercase">THANK YOU!</h2>
        <p className="font-sans text-green-400 font-bold text-lg">Your booking request was submitted successfully.</p>
        <p className="font-sans text-white/50 text-sm">We'll get back to you as soon as possible to discuss the details of your event.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="px-8 py-4 bg-white/10 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white/20 transition-all"
        >
          SEND ANOTHER REQUEST
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white/5 rounded-[3rem] p-8 sm:p-12 shadow-2xl border transition-colors duration-500 ${status === 'error' ? 'border-orange-500/50' : 'border-white/10'}`}>
      <h2 className="font-display text-4xl text-white mb-2 font-black tracking-tighter uppercase">BOOK THE ORCHESTRA</h2>
      <p className="font-sans text-white/50 mb-8 text-sm">Ready to turn your event into a 70s extravaganza? Drop us a line!</p>
      
      {status === 'error' && (
        <div className="mb-8 p-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center gap-4 text-orange-500">
          <AlertCircle size={24} className="shrink-0" />
          <p className="font-sans text-sm font-bold">{errorMessage}</p>
        </div>
      )}

      <form 
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-sans text-[10px] font-bold tracking-widest text-white/40 ml-2 uppercase">NAME</label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-white outline-none transition-all font-sans text-white placeholder:text-white/20"
            />
          </div>
          <div className="space-y-2">
            <label className="font-sans text-[10px] font-bold tracking-widest text-white/40 ml-2 uppercase">EMAIL</label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-white outline-none transition-all font-sans text-white placeholder:text-white/20"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-sans text-[10px] font-bold tracking-widest text-white/40 ml-2 uppercase">VENUE / ORGANIZATION</label>
            <input 
              type="text" 
              name="venue"
              placeholder="Where's the party?"
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-white outline-none transition-all font-sans text-white placeholder:text-white/20"
            />
          </div>
          <div className="space-y-2">
            <label className="font-sans text-[10px] font-bold tracking-widest text-white/40 ml-2 uppercase">EVENT DATE</label>
            <input 
              type="date" 
              name="date"
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-white outline-none transition-all font-sans text-white"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="font-sans text-[10px] font-bold tracking-widest text-white/40 ml-2 uppercase">MESSAGE</label>
          <textarea 
            name="message"
            rows={4}
            required
            placeholder="Tell us about your event..."
            className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-white outline-none transition-all font-sans text-white placeholder:text-white/20 resize-none"
          ></textarea>
        </div>
        
        <button 
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full py-5 font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3 group ${
            status === 'submitting' 
              ? 'bg-neutral-400 text-black cursor-not-allowed' 
              : 'bg-white text-black hover:bg-neutral-200'
          }`}
        >
          {status === 'submitting' ? 'SENDING...' : 'SUBMIT BOOKING REQUEST'}
          <Send size={18} className={`${status === 'submitting' ? '' : 'group-hover:translate-x-1 group-hover:-translate-y-1'} transition-transform`} />
        </button>
      </form>
    </div>
  );
}
