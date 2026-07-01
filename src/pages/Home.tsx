import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ShowCard from '../components/ShowCard';

export default function Home() {
  const coverImage = `${import.meta.env.BASE_URL}images/home%20page/cover.jpg`;
  const julyFourthFlyer = `${import.meta.env.BASE_URL}images/SLO%20JULY%204%202026%20POSTER.jpg`;
  const audioTrack = `${import.meta.env.BASE_URL}audio/Love%20O'Clock.mp3`;

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
      <section id="catch-the-love-live" className="py-20 sm:py-32 bg-neutral-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-16 text-center">
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
              ticketLabel="View Event"
            />
            <ShowCard
              date="JULY 10"
              city="Oregon Zoo, Portland, OR"
              venue="Zoo Nights"
              time="6:30-8:30 PM"
              details="Summer evening set at the Oregon Zoo as part of the Zoo Nights concert series."
              ticketUrl="https://shop.oregonzoo.org/events/55b2c755-d155-a0b2-5b72-51cea39df45e"
              ticketLabel="View Event"
            />
            <ShowCard
              date="AUG 09"
              city="Emerald Park, Eugene, OR"
              venue="Emerald Park Concert"
              time="4:00-7:00 PM"
              badgeLabel="Free Show"
              details="Free outdoor show in Eugene with three full hours of Satin Love Orchestra disco and funk in the park."
              ticketUrl="https://www.rrpark.org/2026-08-09-satin-love-orchestra"
              ticketLabel="View Event"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4 font-black tracking-tighter">
            HEAR SATIN LOVE ORCHESTRA
          </h2>
          <p className="font-sans text-white/50 text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
            Experience the sound of Satin Love through one of our original songs.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-[2rem] px-6 pt-4 pb-6 sm:px-8 sm:pt-5 sm:pb-8 shadow-2xl">
            <p className="font-sans text-white font-bold text-lg mb-4">Love O&apos;Clock</p>
            <audio controls className="w-full" preload="none">
              <source src={audioTrack} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </section>
    </div>
  );
}
