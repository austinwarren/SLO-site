import { Calendar, MapPin, Ticket } from 'lucide-react';

interface ShowCardProps {
  date: string;
  city: string;
  venue: string;
}

export default function ShowCard({ date, city, venue }: ShowCardProps) {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 border-2 border-retro-yellow/30 hover:border-retro-pink/50 transition-all duration-300 shadow-lg hover:shadow-xl">
      <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div className="bg-retro-yellow rounded-2xl p-4 min-w-[100px] flex flex-col items-center justify-center shadow-inner">
          <Calendar className="text-retro-purple mb-1" size={20} />
          <span className="font-accent text-retro-purple text-xs tracking-tighter leading-none">{date.split(' ')[0]}</span>
          <span className="font-display text-retro-purple text-2xl leading-none">{date.split(' ')[1].replace(',', '')}</span>
        </div>
        
        <div>
          <h3 className="font-display text-2xl text-retro-purple mb-1">{venue}</h3>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-retro-purple/70">
            <MapPin size={16} />
            <span className="font-sans font-medium">{city}</span>
          </div>
        </div>
      </div>
      
      <button className="w-full sm:w-auto px-8 py-4 bg-retro-pink text-white font-accent text-sm rounded-full hover:bg-retro-purple hover:scale-105 transition-all shadow-md flex items-center justify-center gap-2">
        <Ticket size={18} />
        GET TICKETS
      </button>
    </div>
  );
}
