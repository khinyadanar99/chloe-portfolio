import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({image, title, description, technologies, github, demo}) {
  return (
    <div className="glass_card rounded-sm overflow-hidden">
        <img className="aspect-video object-cover" src={image} alt="img"></img>
        <div className="flex flex-col justify-between  px-5 pt-5 pb-8">
            <div>
                <h3 className="py-8">{title}</h3>
                <p className="">{description}</p>
            </div>
            
            <div>
                <div className="flex flex-wrap gap-2 mt-20">
                    {technologies.map((technology, index) => {
                        
                        return(
                            <p className="px-2 rounded-md bg-amber-400">{technology}</p>
                        )
                    })}
                    
                </div>
                <div className='flex gap-2 mt-5'>
                    <Link to="https://github.com/khinyadanar99/hospital" target="_blank" className="border border-amber-400 px-3 py-2 rounded-sm"><FontAwesomeIcon icon={faGithub} />Github</Link>
                    
                    <a href={demo} className="border border-amber-400 px-3 py-2 rounded-sm"><FontAwesomeIcon icon={faGlobe} />Live Demo</a>
                </div>
            </div>
           
        </div> 
    </div>
  )
}

export default ProjectCard