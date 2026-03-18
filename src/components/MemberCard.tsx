interface MemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function MemberCard({ name, role, bio, image }: MemberCardProps) {
  return (
    <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-4 border-white">
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-retro-purple via-retro-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <p className="text-white/90 font-sans text-sm leading-relaxed mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {bio}
        </p>
      </div>
      
      <div className="p-6 bg-white group-hover:bg-retro-yellow transition-colors duration-500">
        <h3 className="font-display text-2xl text-retro-purple">{name}</h3>
        <p className="font-accent text-xs text-retro-pink tracking-widest uppercase">{role}</p>
      </div>
    </div>
  );
}
