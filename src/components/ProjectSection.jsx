import content from "../content.json";
import ProjectCard from './ProjectCard';
import Section from "./Section";
import Title from "./Title";

function ProjectSection() {

    const {projects} = content;

    return (
        <Section id="projects">
            <Title bgTitle="Projects" mainTitle="Work"></Title>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => {
                    
                    return(
                        <ProjectCard 
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            github={project.github}
                            demo={project.demo}>
                        </ProjectCard>
                    )
                })}
                
            </div>
        </Section>
    )
}

export default ProjectSection