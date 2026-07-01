import { motion } from 'motion/react';
import { Music as MusicIcon, Youtube, Disc } from 'lucide-react';
import { Link } from 'react-router';

export default function PlaylistPage() {
  const playlists = [
    {
      era: "FUNK & GROOVE",
      description: "The deep-pocket funk and soul songs that set the tone for the whole night.",
      videoTitle: "Play That Funky Music (Live Performance)",
      videoEmbedUrl: "https://www.youtube.com/embed/qSQpJJAYmLM",
      videoWatchUrl: "https://www.youtube.com/watch?v=qSQpJJAYmLM",
      songs: [
        "Play That Funky Music - Wild Cherry",
        "Superstition - Stevie Wonder",
        "Brick House - Commodores",
        "Jungle Boogie - Kool & The Gang",
        "Fire - Ohio Players"
      ]
    },
    {
      era: "DISCO CLASSICS",
      description: "The glitter, the lights, and the timeless disco anthems everyone knows.",
      videoTitle: "Disco Inferno (Concert Clip)",
      videoEmbedUrl: "https://www.youtube.com/embed/9VTX9GWXK8Y",
      videoWatchUrl: "https://www.youtube.com/watch?v=9VTX9GWXK8Y",
      songs: [
        "Disco Inferno - The Trammps",
        "September - Earth, Wind & Fire",
        "Boogie Oogie Oogie - A Taste of Honey",
        "Le Freak - Chic",
        "Get Down Tonight - KC & The Sunshine Band"
      ]
    },
    {
      era: "DANCE FLOOR FAVORITES",
      description: "Big singalong party songs that keep the dance floor packed all night.",
      videoTitle: "Billie Jean (Live Performance)",
      videoEmbedUrl: "https://www.youtube.com/embed/dc-kK_5D4xk",
      videoWatchUrl: "https://www.youtube.com/watch?v=dc-kK_5D4xk",
      songs: [
        "Billie Jean - Michael Jackson",
        "We Are Family - Sister Sledge",
        "I Will Survive - Gloria Gaynor",
        "Ladies' Night - Kool & The Gang",
        "YMCA - Village People"
      ]
    }
  ];

  return (
    <div className="py-20 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="font-display text-4xl sm:text-7xl text-white mb-6 font-black tracking-tighter uppercase">THE PLAYLIST</h1>
          <p className="font-sans text-lg sm:text-xl text-white/50 max-w-3xl mx-auto">
            Explore the music that keeps audiences dancing. From funk and disco to unforgettable dance-floor classics, these are the songs that define Satin Love Orchestra.
          </p>
        </motion.div>

        <div className="space-y-48">
          {playlists.map((section, index) => (
            <section key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
              <div className="lg:w-1/2 space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center shadow-2xl">
                    <Disc className="animate-spin-slow" size={28} />
                  </div>
                  <h2 className="font-display text-3xl text-white font-black tracking-tighter uppercase">{section.era}</h2>
                </div>

                <p className="font-sans text-lg text-white/60 leading-relaxed italic border-l-4 border-white/10 pl-6">
                  "{section.description}"
                </p>

                <div className="bg-white/5 rounded-[2.5rem] p-10 shadow-xl border border-white/10">
                  <h3 className="font-sans text-[10px] font-black tracking-[0.3em] text-white/40 mb-8 flex items-center gap-3 uppercase">
                    <MusicIcon size={14} /> SETLIST HIGHLIGHTS
                  </h3>
                  <div className="space-y-5">
                    {section.songs.map((song, i) => (
                      <div key={i} className="flex items-center gap-6 group cursor-default">
                        <span className="font-sans font-black text-[10px] text-white/20 uppercase tracking-widest">{(i + 1).toString().padStart(2, '0')}</span>
                        <span className="font-sans font-bold text-white/80 group-hover:text-white transition-colors">{song}</span>
                        <div className="flex-grow border-b border-dashed border-white/5" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                {section.videoEmbedUrl ? (
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-black">
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={section.videoEmbedUrl}
                        title={section.videoTitle}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 px-6 py-5 bg-white/5 border-t border-white/10">
                      <p className="font-sans font-bold text-white/85 uppercase tracking-tight">{section.videoTitle}</p>
                      <a
                        href={section.videoWatchUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors"
                      >
                        <Youtube size={16} />
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-48 p-16 bg-white/5 border border-white/10 rounded-[4rem] text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <h2 className="font-display text-4xl sm:text-6xl mb-8 relative z-10 font-black tracking-tighter uppercase">WANT TO HEAR MORE?</h2>
          <p className="font-sans text-white/50 mb-12 max-w-xl mx-auto relative z-10 text-lg">
            We're constantly adding new classics to our repertoire. Come see us live to experience the full Orchestra sound.
          </p>
          <div className="flex justify-center gap-6 relative z-10">
            <a href={`${import.meta.env.BASE_URL}#catch-the-love-live`} className="px-12 py-5 bg-white text-black font-black text-xs tracking-widest uppercase rounded-full hover:bg-neutral-200 transition-all">
              VIEW SHOW DATES
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
