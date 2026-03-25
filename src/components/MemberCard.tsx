interface MemberCardProps {
  name: string;
  role: string;
  bio?: string;
  image: string;
}

export default function MemberCard({ name, role, bio = "", image }: MemberCardProps) {
  return (
    <div className="group relative bg-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 border border-white/10">
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <p className="text-white/70 font-sans text-sm leading-relaxed mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {bio}
        </p>
      </div>
      
      <div className="p-8 bg-black group-hover:bg-white/5 transition-colors duration-500">
        <h3 className="font-display text-xl text-white font-black tracking-tighter uppercase mb-1">{name}</h3>
        <p className="font-sans text-[10px] font-black text-white/40 tracking-[0.2em] uppercase">{role}</p>
      </div>
    </div>
  );
}
