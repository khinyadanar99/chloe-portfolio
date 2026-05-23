import React from 'react'
import content from "../content.json";
import Section from './Section'
import Title from './Title'
import EducationCard from './EducationCard';

function EducationSection() {

	const {education} = content;

  return (
    <Section id="education">
    	<Title bgTitle="Academic" mainTitle="Education"></Title>
		<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
			{education.map((edu, index) => {
				return (
					<EducationCard key={index}
						image={edu.image}
						degree={edu.degree}
						institution={edu.institution}
						graduation_year={edu.graduation_year}
						award={edu.award}
						modules={edu.modules}>
					</EducationCard>
				)
			}
			)}
		</div>
		
    </Section>
  )
}

export default EducationSection