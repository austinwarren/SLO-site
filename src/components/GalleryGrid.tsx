export default function GalleryGrid() {
  const photos = [
    'highEnergy.jpg',
    'shelleyHilton.jpg',
    'vancouver.jpg',
    'calDisco.jpg',
    'calMat.jpg',
    'country.jpg',
    'drums.jpg',
    'emeraldPark.jpg',
    'fly.jpg',
    'joe.jpg',
    'keys.jpg',
    'new years.jpg',
    'horns.jpg',
    'newyears2.jpg',
    'percussion.jpg',
    'ymcaFinale.jpg',
    'ross.jpg',
    'singers.jpg',
    'tacobell.jpg',
    'together.jpg',
    'valleyriverInn.jpg',
    'redTie.jpg',
  ];

  const photoBasePath = `${import.meta.env.BASE_URL}images/gallery/`;

  return (
    <div>
      <section>
        <h2 className="font-display text-4xl text-white mb-16 text-center font-black tracking-tighter uppercase">PHOTO GALLERY</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((filename, i) => (
            <div key={i} className="relative group overflow-hidden rounded-3xl shadow-2xl border border-white/10">
              <img
                src={`${photoBasePath}${filename.replace(/ /g, '%20')}`}
                alt={`Satin Love Orchestra gallery photo ${i + 1}`}
                className="gallery-image w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
