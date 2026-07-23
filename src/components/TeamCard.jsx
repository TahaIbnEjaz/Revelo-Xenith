// Team member card: photo, name, designation, bio — per the Home page spec.
function TeamCard({ member }) {
  return (
    <div className="group rounded-2xl glass-panel p-6 text-center transition-all hover:-translate-y-1.5 hover:shadow-rx-glow">
      <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-rx-cyan/30">
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="mt-4 font-semibold text-white">{member.name}</h3>
      <p className="text-sm text-rx-cyan">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/80">{member.bio}</p>
    </div>
  );
}

export default TeamCard;
