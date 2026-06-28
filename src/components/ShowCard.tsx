import { useState } from 'react';
import { Calendar, Clock, ExternalLink, MapPin, X } from 'lucide-react';

interface ShowCardProps {
  date: string;
  city: string;
  venue: string;
  time: string;
  details?: string;
  flyerImage?: string;
  flyerAlt?: string;
  badgeLabel?: string;
  ticketUrl?: string;
}

export default function ShowCard({
  date,
  city,
  venue,
  time,
  details,
  flyerImage,
  flyerAlt,
  badgeLabel,
  ticketUrl,
}: ShowCardProps) {
  const [month, day] = date.split(' ');
  const [isFlyerOpen, setIsFlyerOpen] = useState(false);
  const isFeatured = Boolean(flyerImage);

  return (
    <>
      <div
        className={`rounded-3xl border transition-all duration-500 group ${
          isFeatured
            ? 'border-red-500/30 bg-gradient-to-br from-red-500/10 via-white/5 to-blue-500/10 p-5 sm:p-6'
            : 'border-white/10 bg-white/5 p-6 sm:p-8 hover:border-white/30'
        }`}
      >
        <div
          className={`gap-6 ${
            isFeatured ? 'grid items-center lg:grid-cols-[minmax(0,1fr)_176px]' : 'flex flex-col sm:flex-row'
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
            <div className="h-fit self-center bg-white text-black rounded-2xl p-4 min-w-[100px] flex flex-col items-center justify-center shadow-2xl">
              <Calendar className="mb-1" size={20} />
              <span className="font-sans font-black text-[10px] uppercase tracking-widest leading-none mb-1">{month}</span>
              <span className="font-sans font-black text-2xl leading-none">{day.replace(',', '')}</span>
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                  {isFeatured ? (
                    <span className="rounded-full border border-red-400/40 bg-red-400/10 px-3 py-1 font-sans text-[10px] font-black uppercase tracking-[0.25em] text-red-200">
                      Featured Event
                    </span>
                  ) : null}
                  {badgeLabel ? (
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-sans text-[10px] font-black uppercase tracking-[0.25em] text-emerald-300">
                      {badgeLabel}
                    </span>
                  ) : null}
                </div>
                <h3 className="font-display text-2xl text-white font-black tracking-tighter uppercase">{venue}</h3>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 text-white/40">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span className="font-sans font-bold text-xs uppercase tracking-widest">{time}</span>
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

              {ticketUrl ? (
                <a
                  href={ticketUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-sans text-[11px] font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black sm:justify-start"
                >
                  Event Tickets <ExternalLink size={14} />
                </a>
              ) : null}
            </div>
          </div>

          {flyerImage ? (
            <button
              type="button"
              onClick={() => setIsFlyerOpen(true)}
              className="relative mx-auto w-full max-w-[176px] overflow-hidden rounded-[1.5rem] border border-white/15 bg-black/30 text-left transition-transform duration-300 hover:scale-[1.01] hover:border-white/30"
            >
              <img
                src={flyerImage}
                alt={flyerAlt ?? `${venue} flyer`}
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                <p className="font-sans text-[10px] font-black uppercase tracking-[0.25em] text-white/60">Event Flyer</p>
                <p className="mt-2 font-display text-lg font-black uppercase tracking-tight text-white">Tap To Enlarge</p>
              </div>
            </button>
          ) : null}
        </div>
      </div>

      {flyerImage && isFlyerOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsFlyerOpen(false)}
        >
          <button
            type="button"
            aria-label="Close flyer"
            onClick={() => setIsFlyerOpen(false)}
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <img
            src={flyerImage}
            alt={flyerAlt ?? `${venue} flyer`}
            className="max-h-[92vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
