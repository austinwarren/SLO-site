import { motion } from 'motion/react';
import { Music as MusicIcon, Play, Youtube, Disc } from 'lucide-react';

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
    <div className="py-20 bg-retro-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-6xl text-retro-purple mb-6 uppercase tracking-tight">THE PLAYLIST</h1>
          <p className="font-sans text-xl text-retro-purple/60 max-w-2xl mx-auto">
            Explore the evolution of the groove. From raw funk to polished disco, this is the soundtrack of the Orchestra.
          </p>
        </motion.div>

        <div className="space-y-32">
          {playlists.map((section, index) => (
            <section key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-retro-pink rounded-2xl flex items-center justify-center shadow-lg">
                    <Disc className="text-white animate-spin-slow" size={24} />
                  </div>
                  <h2 className="font-display text-3xl text-retro-purple">{section.era}</h2>
                </div>
                
                <p className="font-sans text-lg text-retro-purple/70 leading-relaxed italic">
                  "{section.description}"
                </p>

                <div className="bg-white rounded-[2rem] p-8 shadow-xl border-2 border-retro-yellow/20">
                  <h3 className="font-accent text-[10px] tracking-widest text-retro-pink mb-6 flex items-center gap-2">
                    <MusicIcon size={14} /> SETLIST HIGHLIGHTS
                  </h3>
                  <div className="space-y-4">
                    {section.songs.map((song, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-default">
                        <span className="font-mono text-xs text-retro-purple/40">{(i + 1).toString().padStart(2, '0')}</span>
                        <span className="font-sans font-bold text-retro-purple group-hover:text-retro-pink transition-colors">{song}</span>
                        <div className="flex-grow border-b border-dotted border-retro-purple/10" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="group relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src={`https://picsum.photos/seed/era${index}/1200/675`} 
                    alt={section.videoTitle} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-retro-purple/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl mb-4 transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="text-retro-pink ml-1" fill="currentColor" size={32} />
                    </div>
                    <p className="text-white font-display text-xl">{section.videoTitle}</p>
                  </div>
                  <div className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-full">
                    <Youtube className="text-white" size={20} />
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
          className="mt-32 p-12 bg-retro-purple rounded-[3rem] text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-retro-pink rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
          <h2 className="font-display text-4xl mb-6 relative z-10">WANT TO HEAR MORE?</h2>
          <p className="font-sans text-white/70 mb-10 max-w-xl mx-auto relative z-10">
            We're constantly adding new classics to our repertoire. Come see us live to experience the full Orchestra sound.
          </p>
          <div className="flex justify-center gap-4 relative z-10">
            <button className="px-10 py-4 bg-retro-yellow text-retro-purple font-accent text-xs tracking-widest rounded-full hover:bg-white transition-all">
              VIEW SHOW DATES
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
