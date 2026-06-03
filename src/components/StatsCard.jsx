import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function StatsCard({main, icon, statsColor, sub, col}) {
  
  return (
    <div className={`flex items-center gap-3 p-5 glass_card ${col}`}>
      
      <FontAwesomeIcon icon={icon} className={`p-5 w-5! h-5! object-contain rounded-full text-white ${statsColor[1]}`}/>
          
        
        
        <div>
            <p className={`font-bold text-3xl ${statsColor[0]}`}>{main}</p>
            <p className="text-secondary">{sub}</p>
        </div>
    </div>
  )
}

export default StatsCard