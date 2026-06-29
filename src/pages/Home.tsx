import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users } from 'lucide-react';
import ShowCard from '../components/ShowCard';

export default function Home() {
  const coverImage = `${import.meta.env.BASE_URL}images/home%20page/cover.jpg`;
  const coverImageSecondary = `${import.meta.env.BASE_URL}images/home%20page/cover2.jpg`;
  const julyFourthFlyer = `${import.meta.env.BASE_URL}images/SLO%20JULY%204%202026%20POSTER.jpg`;

  return (
    <div className="flex flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-black disco-ball-bg pt-5 lg:pt-6 pb-5 lg:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20">
                <Star className="text-white" size={16} fill="currentColor" />
                <span className="font-sans text-[10px] text-white tracking-widest uppercase font-bold">EST. 1997 • Eugene, OR</span>
              </div>

              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-white mb-4 leading-none font-black tracking-tighter">
                SATIN LOVE <br />
                <span className="text-neutral-400">ORCHESTRA</span>
              </h1>

              <p className="font-sans text-lg md:text-xl text-white/70 mb-8 max-w-xl font-medium leading-relaxed">
                Discolicious 70s-inspired sensational band, we will belt out the disco-funk in you all.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="px-8 py-4 bg-white text-black font-bold text-sm rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                  BOOK THE BAND
                  <ArrowRight size={18} />
                </Link>
                <Link to="/gallery" className="px-8 py-4 border border-white/30 text-white font-bold text-sm rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  VIEW GALLERY
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-white/5 rounded-[3rem] blur-2xl -z-10" />
              <img
                src={coverImage}
                alt="Satin Love Orchestra Band"
                className="rounded-[2.5rem] shadow-2xl border border-white/10 w-full aspect-square object-cover object-left"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Show Section */}
      <section className="py-32 bg-neutral-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl sm:text-6xl text-white mb-4 font-black tracking-tighter">CATCH THE LOVE LIVE</h2>
            <p className="font-sans text-white/40 max-w-md mx-auto">Experience the Orchestra magic at these upcoming public performances.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
            <ShowCard
              date="JULY 04"
              city="Island Park, Springfield, OR"
              venue="Lights of Liberty"
              time="7:00-9:30 PM"
              details="Satin Love Orchestra headlines the Lights of Liberty celebration, with fireworks immediately afterward. Shelley James & Agents of Unity open the evening from 5:00-6:00 PM."
              flyerImage={julyFourthFlyer}
              flyerAlt="Lights of Liberty July 4, 2026 flyer featuring Satin Love Orchestra and Agents of Unity"
              ticketUrl="https://www.subutil.com/light-of-liberty-tickets/"
            />
            <ShowCard
              date="JULY 10"
              city="Oregon Zoo, Portland, OR"
              venue="Zoo Nights"
              time="6:30-8:30 PM"
              details="Summer evening set at the Oregon Zoo as part of the Zoo Nights concert series."
            />
            <ShowCard
              date="AUG 09"
              city="Emerald Park, Eugene, OR"
              venue="Emerald Park Concert"
              time="4:00-7:00 PM"
              badgeLabel="Free Show"
              details="Free outdoor show in Eugene with three full hours of Satin Love Orchestra disco and funk in the park."
            />
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div className="relative order-2 lg:order-1 min-h-[340px] lg:min-h-0">
              <img
                src={coverImageSecondary}
                alt="Band Performance"
                className="h-full w-full rounded-[2.5rem] border border-white/10 bg-neutral-950/60 object-contain p-4 shadow-2xl aspect-square lg:aspect-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="font-display text-5xl sm:text-6xl text-white leading-tight font-black tracking-tighter">
                MORE THAN JUST A <br />
                <span className="text-neutral-500">COVER BAND</span>
              </h2>
              <Link to="/history" className="mt-8 inline-flex items-center gap-2 font-bold text-sm text-white hover:text-neutral-400 transition-colors uppercase tracking-widest">
                MEET THE BAND <Users size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
