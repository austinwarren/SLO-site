import { motion } from 'motion/react';
import { Music as MusicIcon, Play, Youtube, Disc } from 'lucide-react';
import { Link } from 'react-router';

export default function PlaylistPage() {
  const playlists = [
    {
      era: "EARLY FUNK & SOUL (1970-1973)",
      description: "The raw, gritty foundations of the groove. Deep basslines and tight horn sections.",
      videoTitle: "Superstition (Live Rehearsal)",
      songs: [
        "Superstition - Stevie Wonder",
        "Get Up (I Feel Like Being a) Sex Machine - James Brown",
        "Theme from Shaft - Isaac Hayes",
        "Express Yourself - Charles Wright",
        "Rock Steady - Aretha Franklin"
      ]
    },
    {
      era: "PEAK DISCO FEVER (1974-1977)",
      description: "The glitter, the lights, and the four-on-the-floor beat that defined a generation.",
      videoTitle: "Disco Inferno (Concert Clip)",
      songs: [
        "Stayin' Alive - Bee Gees",
        "Le Freak - Chic",
        "September - Earth, Wind & Fire",
        "Disco Inferno - The Trammps",
        "That's the Way (I Like It) - KC & The Sunshine Band"
      ]
    },
    {
      era: "LATE 70s DANCE GROOVE (1978-1979)",
      description: "Polished production and infectious melodies as disco met the dawn of the 80s.",
      videoTitle: "Good Times (Studio Session)",
      songs: [
        "Good Times - Chic",
        "Don't Stop 'Til You Get Enough - Michael Jackson",
        "We Are Family - Sister Sledge",
        "Boogie Wonderland - Earth, Wind & Fire",
        "I Will Survive - Gloria Gaynor"
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
          <p className="font-sans text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
            Explore the evolution of the groove. From raw funk to polished disco, this is the soundtrack of the Orchestra.
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
                <div className="group relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src={`https://picsum.photos/seed/era${index}/1200/675`} 
                    alt={section.videoTitle} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl mb-4 transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="text-black ml-1" fill="currentColor" size={32} />
                    </div>
                    <p className="text-white font-bold uppercase tracking-widest text-sm">{section.videoTitle}</p>
                  </div>
                  <div className="absolute top-8 right-8 p-4 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                    <Youtube className="text-white" size={24} />
                  </div>
                </div>
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
            <Link to="/booking" className="px-12 py-5 bg-white text-black font-black text-xs tracking-widest uppercase rounded-full hover:bg-neutral-200 transition-all">
              VIEW SHOW DATES
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
