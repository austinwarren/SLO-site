import { motion } from 'motion/react';
import { History, Users } from 'lucide-react';
import MemberCard from '../components/MemberCard';

export default function HistoryPage() {
  const coverImage = `${import.meta.env.BASE_URL}images/home%20page/cover4.jpg`;

  const getMemberImage = (name: string) => {
    const firstName = name.split(' ')[0].toLowerCase();
    return `${import.meta.env.BASE_URL}images/orchestra%20members/${firstName}.jpg`;
  };

  const members = [
    {
      name: "Matthew Love",
      role: "Lead Vocals",
      //bio: "A veteran of the Portland funk scene, Marcus founded the band with a single mission: to make everyone dance.",
      image: getMemberImage("Matthew Love")
    },
    {
      name: "Shelley James",
      role: "Vocals",
      //bio: "With a voice that can reach the stratosphere, Sarah brings the disco diva energy to every single performance.",
      image: getMemberImage("Shelley James")
    },
    {
      name: "Rica Wright",
      role: "Vocals",
      //bio: "Leo's wah-wah pedal is his best friend. He's been studying the riffs of Nile Rodgers since he was ten.",
      image: getMemberImage("Rica Wright")
    },
    {
      name: "Joe Webber",
      role: "Lead Guitar",
      //bio: "The heartbeat of the Orchestra. Benny's four-on-the-floor beat is the foundation of our disco sound.",
      image: getMemberImage("Joe Webber")
    },
    {
      name: "Cal Coleman",
      role: "Bass",
      //bio: "The sharpest horn in the Northwest. Rick's high notes are the signature of our brass section.",
      image: getMemberImage("Cal Coleman")
    },
    {
      name: "Owen Wright",
      role: "Keys",
      //bio: "Whether it's a smooth solo or a funky riff, Mike's sax brings the soul to the Satin Love sound.",
      image: getMemberImage("Owen Wright")
    },
    {
      name: "Darren K",
      role: "Percussion",
      //bio: "The deep, brassy foundation of our horn section. Chris keeps the low end funky and tight.",
      image: getMemberImage("Darren K")
    },
    {
      name: "Jason Palmer",
      role: "Drums",
      //bio: "Master of the ivory. Kevin's rhythmic comping and soulful solos are the glue of the band.",
      image: getMemberImage("Jason Palmer")
    },
    {
      name: "Ross Warren",
      role: "Saxophone",
      //bio: "Bringing the cosmic disco sounds of the late 70s. Sylvia's textures take our music to another dimension.",
      image: getMemberImage("Ross Warren")
    },
    {
      name: "Dana Heitman",
      role: "Trumpet",
      //bio: "Adding that essential Latin-funk flavor. Paul's polyrhythms keep the dance floor moving.",
      image: getMemberImage("Dana Heitman")
    },
    {
      name: "Ryan Warren",
      role: "Trumpet",
      //bio: "One half of our powerhouse vocal duo. Heather's harmonies add that lush, polished disco sheen.",
      image: getMemberImage("Ryan Warren")
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
          <h1 className="font-display text-4xl sm:text-7xl text-white mb-6 font-black tracking-tighter uppercase">OUR STORY</h1>
          <p className="font-sans text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
            Three decades of music, memories, and keeping the dance floor full.
          </p>
        </motion.div>

        {/* The Story */}
        <section className="mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-white/40 font-sans text-[10px] font-black tracking-[0.3em] mb-4 uppercase">
                <History size={16} /> THE EARLY YEARS
              </div>
              <h2 className="font-display text-5xl text-white font-black tracking-tighter uppercase">BORN IN THE LOVE</h2>
              <p className="font-sans text-lg text-white/60 leading-relaxed">
                Since 1997, SATIN LOVE ORCHESTRA has been delivering an electrifying
                celebration of music, dance, and pure 70s-inspired fun up and down the west coast.
                This powerhouse 11-piece band ignites every stage with soaring vocals, blazing horns,
                infectious grooves, and a high-octane show packed with the decade’s biggest hits.
                From disco classics to rock anthems and soulful favorites,
                Satin Love Orchestra keeps crowds dancing all night long.
              </p>
              <p className="font-sans text-lg text-white/60 leading-relaxed">
                On July 4, they bring their “discolicious” sensation to Lights of Liberty at
                Island Park to celebrate 250 years of the USA. Come celebrate, dance, and Catch the Love!
              </p>
            </div>
            <div>
              <img
                src={coverImage}
                alt="Satin Love Orchestra"
                className="w-full rounded-[2.5rem] shadow-2xl border border-white/10 object-cover"
                referrerPolicy="no-referrer"
              />
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
      </div>
    </div>
  );
}
