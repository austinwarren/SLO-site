import { Play } from 'lucide-react';

export default function GalleryGrid() {
  const photos = [
    'https://picsum.photos/seed/disco1/800/800',
    'https://picsum.photos/seed/disco2/800/1000',
    'https://picsum.photos/seed/disco3/1000/800',
    'https://picsum.photos/seed/disco4/800/800',
    'https://picsum.photos/seed/disco5/800/1200',
    'https://picsum.photos/seed/disco6/1200/800',
    'https://picsum.photos/seed/disco7/800/1000',
    'https://picsum.photos/seed/disco8/1000/1000',
    'https://picsum.photos/seed/disco9/800/600',
    'https://picsum.photos/seed/disco10/600/800',
    'https://picsum.photos/seed/disco11/1200/900',
    'https://picsum.photos/seed/disco12/900/1200',
    'https://picsum.photos/seed/disco13/800/800',
    'https://picsum.photos/seed/disco14/1000/1200',
    'https://picsum.photos/seed/disco15/1200/800',
    'https://picsum.photos/seed/disco16/800/1000',
    'https://picsum.photos/seed/disco17/1000/1000',
    'https://picsum.photos/seed/disco18/800/1200',
    'https://picsum.photos/seed/disco19/1200/900',
    'https://picsum.photos/seed/disco20/900/1200',
    'https://picsum.photos/seed/disco21/800/800',
  ];

  const videos = [
    { id: '1', title: 'Live at The Crystal Ballroom', thumbnail: 'https://picsum.photos/seed/vid1/800/450' },
    { id: '2', title: 'Funk Medley 2025', thumbnail: 'https://picsum.photos/seed/vid2/800/450' },
    { id: '3', title: 'Disco Inferno Cover', thumbnail: 'https://picsum.photos/seed/vid3/800/450' },
  ];

  return (
    <div className="space-y-32">
      <section>
        <h2 className="font-display text-4xl text-white mb-16 text-center font-black tracking-tighter uppercase">PHOTO GALLERY</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((src, i) => (
            <div key={i} className="relative group overflow-hidden rounded-3xl shadow-2xl border border-white/10">
              <img 
                src={src} 
                alt={`Gallery ${i}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-4xl text-white mb-16 text-center font-black tracking-tighter uppercase">VIDEO PERFORMANCES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-6 border border-white/10">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <Play className="text-black ml-1" fill="currentColor" size={28} />
                  </div>
                </div>
              </div>
              <h3 className="font-sans font-bold text-lg text-white/80 text-center group-hover:text-white transition-colors uppercase tracking-tight">{video.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
