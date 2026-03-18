import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Music, Users } from 'lucide-react';
import ShowCard from '../components/ShowCard';
import cover from '@/images/cover.jpg'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-retro-purple disco-ball-bg">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={cover}
            alt="Disco Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-retro-purple/80 via-transparent to-retro-purple" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-retro-yellow rounded-full mb-8 shadow-lg">
            <Star className="text-retro-purple" size={16} fill="currentColor" />
            <span className="font-accent text-[10px] text-retro-purple tracking-widest">EST. 1997 • Eugene, OR</span>
          </div>
          
          <h1 className="font-display text-7xl md:text-9xl text-white mb-6 leading-none drop-shadow-2xl">
            SATIN <span className="text-retro-yellow">LOVE</span> <br />
            <span className="text-retro-pink">ORCHESTRA</span>
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Discolicious 70s-inspired sensational band, we will belt out the disco-funk in you all
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/booking" className="px-10 py-5 bg-retro-yellow text-retro-purple font-accent text-sm rounded-full hover:bg-white hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2">
              PLANNING AN EVENT?
              <ArrowRight size={18} />
            </Link>
            <Link to="/gallery" className="px-10 py-5 border-2 border-white text-white font-accent text-sm rounded-full hover:bg-white hover:text-retro-purple transition-all flex items-center justify-center gap-2">
              VIEW GALLERY
            </Link>
          </div>
        </motion.div>

        {/* Floating Accents */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-retro-cream to-transparent" />
      </section>

      {/* Featured Show Section */}
      <section className="py-24 bg-retro-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-5xl text-retro-purple mb-4">CATCH THE LOVE LIVE</h2>
              <p className="font-sans text-retro-purple/60 max-w-md">Experience the Orchestra magic at these upcoming public performances.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <ShowCard 
              date="MAR 22, 2026" 
              city="Portland, OR" 
              venue="Crystal Ballroom" 
            />
            <ShowCard 
              date="MAY 14, 2026" 
              city="Seattle, WA" 
              venue="The Crocodile" 
            />
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-retro-yellow rounded-full -z-10 blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-retro-pink rounded-full -z-10 blur-3xl opacity-30" />
              <img 
                src="https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&q=80&w=1000" 
                alt="Band Performance" 
                className="rounded-[3rem] shadow-2xl border-8 border-retro-cream"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="space-y-8">
              <div className="inline-block p-3 bg-retro-purple/5 rounded-2xl">
                <Music className="text-retro-purple" size={32} />
              </div>
              <h2 className="font-display text-5xl text-retro-purple leading-tight">
                MORE THAN JUST A <br />
                <span className="text-retro-orange italic">COVER BAND</span>
              </h2>
              <p className="font-sans text-lg text-retro-purple/80 leading-relaxed">
                We're a collective of musicians dedicated to the authentic preservation of the 70s sound. 
                From the deep bass grooves of Parliament-Funkadelic to the soaring harmonies of The Bee Gees, 
                we bring a high-energy, immersive experience that transcends a typical concert.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="font-accent text-2xl text-retro-pink">500+</h4>
                  <p className="font-sans text-sm text-retro-purple/60">Shows Performed</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-accent text-2xl text-retro-teal">100%</h4>
                  <p className="font-sans text-sm text-retro-purple/60">Authentic Vibe</p>
                </div>
              </div>
              <Link to="/history" className="inline-flex items-center gap-2 font-accent text-sm text-retro-purple hover:text-retro-pink transition-colors">
                MEET THE BAND <Users size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
