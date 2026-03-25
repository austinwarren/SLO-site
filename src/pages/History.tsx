import { motion } from 'motion/react';
import { History, Users, Heart, Zap } from 'lucide-react';
import MemberCard from '../components/MemberCard';

export default function HistoryPage() {
  const members = [
    {
      name: "Matthew Love",
      role: "Lead Vocals",
      //bio: "A veteran of the Portland funk scene, Marcus founded the band with a single mission: to make everyone dance.",
      image: "https://picsum.photos/seed/member1/800/1000"
    },
    {
      name: "Shelley James",
      role: "Vocals",
      //bio: "With a voice that can reach the stratosphere, Sarah brings the disco diva energy to every single performance.",
      image: "https://picsum.photos/seed/member2/800/1000"
    },
    {
      name: "Rica Wright",
      role: "Vocals",
      //bio: "Leo's wah-wah pedal is his best friend. He's been studying the riffs of Nile Rodgers since he was ten.",
      image: "https://picsum.photos/seed/member3/800/1000"
    },
    {
      name: "Joe Webber",
      role: "Lead Guitar",
      //bio: "The heartbeat of the Orchestra. Benny's four-on-the-floor beat is the foundation of our disco sound.",
      image: "https://picsum.photos/seed/member4/800/1000"
    },
    {
      name: "Cal Coleman",
      role: "Bass",
      //bio: "The sharpest horn in the Northwest. Rick's high notes are the signature of our brass section.",
      image: "https://picsum.photos/seed/member5/800/1000"
    },
    {
      name: "Owen Wright",
      role: "Keys",
      //bio: "Whether it's a smooth solo or a funky riff, Mike's sax brings the soul to the Satin Love sound.",
      image: "https://picsum.photos/seed/member6/800/1000"
    },
    {
      name: "Darren K",
      role: "Percussion",
      //bio: "The deep, brassy foundation of our horn section. Chris keeps the low end funky and tight.",
      image: "https://picsum.photos/seed/member7/800/1000"
    },
    {
      name: "Jason Palmer",
      role: "Drums",
      //bio: "Master of the ivory. Kevin's rhythmic comping and soulful solos are the glue of the band.",
      image: "https://picsum.photos/seed/member8/800/1000"
    },
    {
      name: "Ross Warren",
      role: "Saxophone",
      //bio: "Bringing the cosmic disco sounds of the late 70s. Sylvia's textures take our music to another dimension.",
      image: "https://picsum.photos/seed/member9/800/1000"
    },
    {
      name: "Dana Heitman",
      role: "Trumpet",
      //bio: "Adding that essential Latin-funk flavor. Paul's polyrhythms keep the dance floor moving.",
      image: "https://picsum.photos/seed/member10/800/1000"
    },
    {
      name: "Ryan Warren",
      role: "Trumpet",
      //bio: "One half of our powerhouse vocal duo. Heather's harmonies add that lush, polished disco sheen.",
      image: "https://picsum.photos/seed/member11/800/1000"
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
    <div className="py-20 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="font-display text-4xl sm:text-7xl text-white mb-6 font-black tracking-tighter uppercase">OUR STORY</h1>
          <p className="font-sans text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
            From humble beginnings to the biggest stages in the Northwest.
          </p>
        </motion.div>

        {/* The Story */}
        <section className="mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-white/40 font-sans text-[10px] font-black tracking-[0.3em] mb-4 uppercase">
                <History size={16} /> THE BEGINNING
              </div>
              <h2 className="font-display text-5xl text-white font-black tracking-tighter uppercase">BORN IN THE LOVE</h2>
              <p className="font-sans text-lg text-white/60 leading-relaxed">
                Satin Love Orchestra started as a weekly jam session between four friends who shared a deep, 
                unapologetic love for 1970s funk and disco. What began as a way to blow off steam quickly 
                turned into a mission: to bring the authentic, high-fidelity sound of the disco era back to live audiences.
              </p>
              <p className="font-sans text-lg text-white/60 leading-relaxed">
                We don't just play the songs; we study the arrangements, the gear, and the vibe. 
                Every show is a time machine.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src="https://picsum.photos/seed/hist1/600/800" alt="History 1" className="rounded-[2.5rem] shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/hist2/600/800" alt="History 2" className="rounded-[2.5rem] shadow-2xl mt-12 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* Members */}
        <section className="mb-48">
          <div className="flex items-center gap-6 mb-16">
            <Users className="text-white" size={32} />
            <h2 className="font-display text-4xl text-white font-black tracking-tighter uppercase">THE ORCHESTRA</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/5 rounded-[3rem] p-12 shadow-xl border border-white/10">
            <h3 className="font-display text-3xl text-white mb-10 flex items-center gap-4 font-black tracking-tighter uppercase">
              <Zap className="text-white" /> MILESTONES
            </h3>
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8">
                  <span className="font-sans font-black text-white/20 text-xl tracking-tighter">{item.year}</span>
                  <div className="space-y-2 flex-grow">
                    <div className="w-full h-px bg-white/5 mb-4" />
                    <p className="font-sans font-bold text-white/70 text-lg tracking-tight">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 rounded-[3rem] p-12 shadow-xl border border-white/10">
            <h3 className="font-display text-3xl text-white mb-10 flex items-center gap-4 font-black tracking-tighter uppercase">
              <Heart className="text-white" /> INFLUENCES
            </h3>
            <div className="space-y-8">
              <p className="font-sans text-xl text-white/50 italic leading-relaxed border-l-4 border-white/10 pl-8">
                "Our sound is a cocktail of the greatest legends to ever touch a stage."
              </p>
              <div className="flex flex-wrap gap-3">
                {['Chic', 'Earth, Wind & Fire', 'The Bee Gees', 'Parliament-Funkadelic', 'Donna Summer', 'Stevie Wonder', 'The Commodores', 'Sister Sledge'].map((artist) => (
                  <span key={artist} className="px-5 py-2.5 bg-white/5 rounded-full font-sans font-bold text-[10px] text-white/60 shadow-sm border border-white/10 uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-default">
                    {artist}
                  </span>
                ))}
              </div>
              <div className="pt-10">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800" 
                  alt="Microphone" 
                  className="rounded-[2rem] shadow-2xl grayscale opacity-20 hover:opacity-40 transition-opacity duration-700"
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
