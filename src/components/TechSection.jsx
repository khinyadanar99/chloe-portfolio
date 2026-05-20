import content from "../content.json";
import Section from "./Section";
import TechCard from "./TechCard";
import Title from "./Title";

function TechSection() {

  const {skills} = content;

  return (
    
      <Section>
        <Title bgTitle="Techstack" mainTitle="Tools & Technologies"></Title>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => {
            return (
              <TechCard
              name = {skill.name}
              icon = {skill.icon}
              progress={skill.progress}></TechCard>
            )
          }
            
          )}
        </div>
      </Section>
  );
}

export default TechSection
