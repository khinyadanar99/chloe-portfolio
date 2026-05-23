import React from 'react'
import content from "../content.json";
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import Title from './Title'
import StatsCard from './StatsCard'
import Section from './Section';

function AboutSection() {

    const {stats} = content;
  return (
    <Section id="about">
        <Title bgTitle="About Me" mainTitle="About"></Title>
        <p></p>
        <div className='grid md:grid-cols-3 gap-8'>
            {stats.map((stat, index) => {
                    
                return(
                    <StatsCard 
                    key={index}
                    icon={stat.icon}
                    main={stat.main}
                    sub={stat.sub}>
                    </StatsCard>
                )
            })}
        </div>

        
    </Section>
  )
}

export default AboutSection