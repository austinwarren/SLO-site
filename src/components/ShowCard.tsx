import { Calendar, MapPin, Ticket } from 'lucide-react';

interface ShowCardProps {
  date: string;
  city: string;
  venue: string;
}

export default function ShowCard({ date, city, venue }: ShowCardProps) {
  return (
    <div className="bg-white/5 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 border border-white/10 hover:border-white/30 transition-all duration-500 group">
      <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
        <div className="bg-white text-black rounded-2xl p-4 min-w-[100px] flex flex-col items-center justify-center shadow-2xl">
          <Calendar className="mb-1" size={20} />
          <span className="font-sans font-black text-[10px] uppercase tracking-widest leading-none mb-1">{date.split(' ')[0]}</span>
          <span className="font-sans font-black text-2xl leading-none">{date.split(' ')[1].replace(',', '')}</span>
        </div>
        
        <div>
          <h3 className="font-display text-2xl text-white mb-2 font-black tracking-tighter uppercase">{venue}</h3>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-white/40">
            <MapPin size={16} />
            <span className="font-sans font-bold text-xs uppercase tracking-widest">{city}</span>
          </div>
        </div>
      </div>
      
      <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
        <Ticket size={18} />
        GET TICKETS
      </button>
    </div>
  );
}
