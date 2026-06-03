import React from 'react'
import content from "../content.json";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import Section from './Section';
import Title from './Title';

function WorkSection() {
    const {experience} = content;
    return (
        <Section id="experience">
            <Title bgTitle="Profession" mainTitle="Experience"></Title>
            <Timeline sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.5,
                }, paddingRight: 0
            }}>
                {experience.map((work, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent className='hidden md:inline-block text-purple-900' sx={{paddingLeft: 0}}>
                            {work.period}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot sx={{backgroundColor: "#ad46ff"}}/>
                        <TimelineConnector  className='bg-linear-to-r from-purple-500 via-pink-400 to-blue-400 w-2'/>
                        </TimelineSeparator>
                        <TimelineContent sx={{paddingRight: 0, paddingBottom: 10 }}>
                            <div className="glass_card border border-purple-500/20 rounded-3xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                                <span className='inline-block md:hidden px-3 border border-purple-800 rounded-lg mb-5'>{work.period}</span>
                                <h3>{work.role}</h3>
                                <h4 className='pb-5 text-blue-800'>{work.company}</h4>
                                <ul>
                                    {work.responsibilities?.map((responsibility, index) => {
                                        return (
                                            <li className='text-gray-600 pb-2' key={index}>{responsibility}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Section>
    )
}

export default WorkSection
