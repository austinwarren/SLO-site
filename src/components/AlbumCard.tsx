import { Play, ListMusic } from 'lucide-react';

interface AlbumCardProps {
  title: string;
  year: string;
  cover: string;
  tracks: string[];
}

export default function AlbumCard({ title, year, cover, tracks }: AlbumCardProps) {
  return (
    <div className="glass-card rounded-[2.5rem] overflow-hidden border-2 border-retro-orange/20 shadow-xl flex flex-col lg:flex-row">
      <div className="lg:w-2/5 relative group">
        <img 
          src={cover} 
          alt={title} 
          className="w-full h-full object-cover aspect-square"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-retro-purple/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="p-6 bg-white rounded-full shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
            <Play className="text-retro-pink ml-1" fill="currentColor" size={32} />
          </button>
        </div>
      </div>
      
      <div className="lg:w-3/5 p-8 sm:p-12 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-display text-3xl text-retro-purple mb-1">{title}</h3>
              <p className="font-accent text-xs text-retro-orange tracking-widest">{year} • STUDIO ALBUM</p>
            </div>
            <ListMusic className="text-retro-purple/30" size={32} />
          </div>
          
          <div className="space-y-3 mb-8">
            {tracks.map((track, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <span className="font-mono text-xs text-retro-purple/40 w-4">{(i + 1).toString().padStart(2, '0')}</span>
                <span className="font-sans font-medium text-retro-purple group-hover:text-retro-pink transition-colors">{track}</span>
                <div className="flex-grow border-b border-dotted border-retro-purple/10" />
                <span className="font-mono text-xs text-retro-purple/40">3:45</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4">
          <button className="flex-1 py-3 bg-retro-purple text-white font-accent text-[10px] tracking-widest rounded-xl hover:bg-retro-pink transition-colors">
            LISTEN ON SPOTIFY
          </button>
          <button className="flex-1 py-3 border-2 border-retro-purple text-retro-purple font-accent text-[10px] tracking-widest rounded-xl hover:bg-retro-purple hover:text-white transition-all">
            BUY VINYL
          </button>
        </div>
      </div>
    </div>
  );
}
