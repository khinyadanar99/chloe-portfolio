import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({image, title, description, technologies, github, demo}) {
  return (
    <div className="glass_card rounded-sm overflow-hidden flex flex-wrap content-between">
        <div>
            <img className="aspect-video object-cover" src={image} alt="img"></img>
            <div className='px-5'>
                <h3 className="py-8">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
            
        
        <div  className='px-5 pb-8 mt-10'>
            <div className="flex flex-wrap gap-2">
                {technologies.map((technology, index) => {
                    
                    return(
                        <p className="px-2 rounded-md border border-purple-800 text-purple-800">{technology}</p>
                    )
                })}
                
            </div>
            <div className='flex gap-2 mt-5'>
                <Link to={github} target="_blank" className="border bg-purple-800 text-white px-3 py-2 rounded-lg"><FontAwesomeIcon icon={faGithub} /> Github</Link>
                <Link to={demo} target="_blank" className="border bg-purple-800 text-white px-3 py-2 rounded-lg"><FontAwesomeIcon icon={faGlobe} /> Live Demo</Link>
            </div>
        </div>
           
        
    </div>
  )
}

export default ProjectCard