function TechCard({name, icon, progress}) {
  return (
    
        
          <div
            className="py-8 rounded-3xl glass_card border border-white/10 
            bg-[]/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]
            flex flex-col items-center justify-center transition-all duration-300
            hover:scale-105 hover:border-cyan-400/40"
          >
            <img src={icon} alt={name} className="w-15 mb-8" />
            <h2 className="text-black text-lg tracking-wide mb-8">
              {name}
            </h2>
            <div className="w-2/3 h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-2 rounded-full bg-linear-to-r from-yellow-400 via-cyan-300 to-cyan-400"
                style={{ width: progress }}
              ></div>
            </div>
          </div>
    
  );
}

export default TechCard