import { motion } from 'motion/react';
import { History, Users, Heart, Zap } from 'lucide-react';
import MemberCard from '../components/MemberCard';

export default function HistoryPage() {
  const members = [
    {
      name: "Marcus 'Grooooove' Jones",
      role: "Lead Vocals & Bass",
      bio: "A veteran of the Portland funk scene, Marcus founded the band with a single mission: to make everyone dance.",
      image: "https://picsum.photos/seed/member1/800/1000"
    },
    {
      name: "Sarah 'Soul' Smith",
      role: "Vocals & Percussion",
      bio: "With a voice that can reach the stratosphere, Sarah brings the disco diva energy to every single performance.",
      image: "https://picsum.photos/seed/member2/800/1000"
    },
    {
      name: "Leo 'Lightning' Lee",
      role: "Lead Guitar",
      bio: "Leo's wah-wah pedal is his best friend. He's been studying the riffs of Nile Rodgers since he was ten.",
      image: "https://picsum.photos/seed/member3/800/1000"
    },
    {
      name: "Benny 'Beats' Brown",
      role: "Drums",
      bio: "The heartbeat of the Orchestra. Benny's four-on-the-floor beat is the foundation of our disco sound.",
      image: "https://picsum.photos/seed/member4/800/1000"
    }
  ];

  const timeline = [
    { year: "2020", event: "The Orchestra is formed in a basement in Portland." },
    { year: "2021", event: "First sold-out show at The Doug Fir Lounge." },
    { year: "2022", event: "West Coast 'Funk Train' Tour across 12 cities." },
    { year: "2024", event: "Released first studio album 'Night at the Disco'." },
    { year: "2025", event: "Voted 'Best Live Band' by Portland Music Weekly." }
  ];

  return (
    <div className="py-20 bg-retro-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-6xl text-retro-purple mb-6 uppercase tracking-tight">OUR STORY</h1>
          <p className="font-sans text-xl text-retro-purple/60 max-w-2xl mx-auto">
            From humble beginnings to the biggest stages in the Northwest.
          </p>
        </motion.div>

        {/* The Story */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-retro-pink font-accent text-xs tracking-widest mb-2">
                <History size={16} /> THE BEGINNING
              </div>
              <h2 className="font-display text-4xl text-retro-purple">BORN IN THE LOVE</h2>
              <p className="font-sans text-lg text-retro-purple/80 leading-relaxed">
                Satin Love Orchestra started as a weekly jam session between four friends who shared a deep, 
                unapologetic love for 1970s funk and disco. What began as a way to blow off steam quickly 
                turned into a mission: to bring the authentic, high-fidelity sound of the disco era back to live audiences.
              </p>
              <p className="font-sans text-lg text-retro-purple/80 leading-relaxed">
                We don't just play the songs; we study the arrangements, the gear, and the vibe. 
                Every show is a time machine.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/hist1/600/800" alt="History 1" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/hist2/600/800" alt="History 2" className="rounded-3xl shadow-lg mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* Members */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Users className="text-retro-orange" size={32} />
            <h2 className="font-display text-4xl text-retro-purple uppercase">THE ORCHESTRA</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <MemberCard {...member} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline & Influences */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="glass-card rounded-[3rem] p-10 shadow-xl border-2 border-retro-teal/20">
            <h3 className="font-display text-3xl text-retro-purple mb-8 flex items-center gap-3">
              <Zap className="text-retro-teal" /> MILESTONES
            </h3>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="font-accent text-retro-pink text-lg">{item.year}</span>
                  <div className="space-y-1">
                    <div className="w-full h-px bg-retro-purple/10 mb-2" />
                    <p className="font-sans font-medium text-retro-purple/80">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card rounded-[3rem] p-10 shadow-xl border-2 border-retro-pink/20">
            <h3 className="font-display text-3xl text-retro-purple mb-8 flex items-center gap-3">
              <Heart className="text-retro-pink" /> INFLUENCES
            </h3>
            <div className="space-y-6">
              <p className="font-sans text-lg text-retro-purple/80 italic leading-relaxed">
                "Our sound is a cocktail of the greatest legends to ever touch a stage."
              </p>
              <div className="flex flex-wrap gap-3">
                {['Chic', 'Earth, Wind & Fire', 'The Bee Gees', 'Parliament-Funkadelic', 'Donna Summer', 'Stevie Wonder', 'The Commodores', 'Sister Sledge'].map((artist) => (
                  <span key={artist} className="px-4 py-2 bg-white rounded-full font-accent text-[10px] text-retro-purple shadow-sm border border-retro-purple/5">
                    {artist}
                  </span>
                ))}
              </div>
              <div className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800" 
                  alt="Microphone" 
                  className="rounded-2xl shadow-inner grayscale opacity-40"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
