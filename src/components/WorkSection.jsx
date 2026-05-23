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
                },
            }}>
                {experience.map((work, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent color="textSecondary" className='hidden md:inline-block'>
                            {work.period}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector  className='bg-linear-to-r from-purple-500 via-pink-400 to-blue-400 w-2'/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="glass_card border border-purple-500/20 rounded-3xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                                <span className='inline-block md:hidden px-3 border border-purple-800 rounded-lg mb-5'>{work.period}</span>
                                <h3 className="text-lg font-bold text-black">{work.role}</h3>
                                <p className='pb-5'>{work.company}</p>
                                <ul>
                                    {work.responsibilities?.map((responsibility, index) => {
                                        return (
                                            <li key={index}>{responsibility}</li>
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
