function TechCard({name, icon, progress}) {
  return (
    
        
    <div className="py-8 rounded-3xl glass_card flex flex-col items-center justify-center hover:scale-105">
		<div className="flex flex-row md:flex-col gap-2 items-center">
			<img src={icon} alt={name} className="w-10 md:w-15 mb-8" />   
			<p className="text-secondary text-lg tracking-wide mb-8">{name}</p>
		</div>
		
		<div className="w-2/3 h-2 bg-white rounded-full overflow-hidden">
			<div
			className="h-2 rounded-full bg-linear-to-r from-purple-500 via-pink-400 to-blue-400"
			style={{ width: progress }}
			></div>
		</div>
      
    </div>
    
  );
}

export default TechCard