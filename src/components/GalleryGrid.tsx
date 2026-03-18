import { Play } from 'lucide-react';

export default function GalleryGrid() {
  const photos = [
    'https://picsum.photos/seed/disco1/800/800',
    'https://picsum.photos/seed/disco2/800/1000',
    'https://picsum.photos/seed/disco3/1000/800',
    'https://picsum.photos/seed/disco4/800/800',
    'https://picsum.photos/seed/disco5/800/1200',
    'https://picsum.photos/seed/disco6/1200/800',
  ];

  const videos = [
    { id: '1', title: 'Live at The Crystal Ballroom', thumbnail: 'https://picsum.photos/seed/vid1/800/450' },
    { id: '2', title: 'Funk Medley 2025', thumbnail: 'https://picsum.photos/seed/vid2/800/450' },
    { id: '3', title: 'Disco Inferno Cover', thumbnail: 'https://picsum.photos/seed/vid3/800/450' },
  ];

  return (
    <div className="space-y-20">
      <section>
        <h2 className="font-display text-4xl text-retro-purple mb-12 text-center">PHOTO GALLERY</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((src, i) => (
            <div key={i} className="relative group overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500">
              <img 
                src={src} 
                alt={`Gallery ${i}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-retro-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-4xl text-retro-purple mb-12 text-center">VIDEO PERFORMANCES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg mb-4">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-retro-pink/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play className="text-retro-pink ml-1" fill="currentColor" size={24} />
                  </div>
                </div>
              </div>
              <h3 className="font-display text-xl text-retro-purple text-center group-hover:text-retro-pink transition-colors">{video.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
