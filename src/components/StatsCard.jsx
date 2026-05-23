import { faCalendar} from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function StatsCard({index, main, sub}) {
  const stats = [
      { id: 1, icon: faCalendar, color: "" },
      { id: 2, icon: faGraduationCap, color: "" },
      { id: 3, icon: faTrophy, color: "" },
    ];
  return (
    <div className='flex items-center gap-3 p-5 glass_card'>
      
      <FontAwesomeIcon icon={faCalendar} className='bg-amber-400 p-5 rounded-full text-amber-50'/>
          
        
        
        <div>
            <p className='font-bold text-3xl'>{main}</p>
            <p>{sub}</p>
        </div>
    </div>
  )
}

export default StatsCard