import React from 'react'
import content from "../content.json";
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import Title from './Title'
import StatsCard from './StatsCard'
import Section from './Section';
import { faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons';

function AboutSection() {

    const {stats} = content;
    const statsDeco = [
        {icon: faCalendar, color: ["text-purple-500", "bg-purple-500"]},
        {icon: faGraduationCap, color: ["text-blue-500", "bg-blue-500"]},
        {icon: faTrophy, color: ["text-pink-500", "bg-pink-500"]}
    ];

    const isOdd = stats.length % 2 !== 0;
    const lastIndex = stats.length - 1;

  return (
    <Section id="about">
        <Title bgTitle="About Me" mainTitle="About"></Title>
        <div className='flex flex-col md:flex-row gap-5'>
            <div className='md:basis-1/2 glass_card p-8'>
                <p className='text-lg'>I am a Graduate Software Developer with a Master's degree in Information Technology, awarded Distinction, from the University of the West of England, Bristol. I enjoy building modern web applications and transforming complex problems into intuitive digital experiences. Combining experience in full-stack development, front-end technologies and user-centred design, I create solutions that balance technical excellence with exceptional user experiences. I am always exploring new technologies and opportunities to grow as a software engineer while contributing to meaningful projects.</p>
            </div>
            <div className='md:basis-1/2 grid gap-5'>
                {stats.map((stat, index) => {
                    const isLastOddItem = isOdd && index === lastIndex;
                    return(
                        <StatsCard 
                        key={index}
                        icon={statsDeco[index].icon}
                        statsColor = {statsDeco[index].color}
                        main={stat.main}
                        sub={stat.sub}
                        col={isLastOddItem ? "lg:col-span-2" : ""}>
                        </StatsCard>
                    )
                })}
            </div>
        </div>
        
    </Section>
  )
}

export default AboutSection