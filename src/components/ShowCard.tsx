import { Calendar, Clock, MapPin } from 'lucide-react';

interface ShowCardProps {
  date: string;
  city: string;
  venue: string;
  time: string;
  details?: string;
}

export default function ShowCard({
  date,
  city,
  venue,
  time,
  details,
}: ShowCardProps) {
  const [month, day] = date.split(' ');

  return (
    <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-500 group">
      <div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
        <div className="bg-white text-black rounded-2xl p-4 min-w-[100px] flex flex-col items-center justify-center shadow-2xl">
          <Calendar className="mb-1" size={20} />
          <span className="font-sans font-black text-[10px] uppercase tracking-widest leading-none mb-1">{month}</span>
          <span className="font-sans font-black text-2xl leading-none">{day.replace(',', '')}</span>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-2xl text-white font-black tracking-tighter uppercase">{venue}</h3>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 text-white/40">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="font-sans font-bold text-xs uppercase tracking-widest">{time}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-emerald-300">Free Show</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-white/40">
            <MapPin size={16} />
            <span className="font-sans font-bold text-xs uppercase tracking-widest">{city}</span>
          </div>

          {details ? (
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/65">{details}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
