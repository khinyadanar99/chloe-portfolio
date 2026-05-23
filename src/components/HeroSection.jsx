import React from 'react'
import HeroCard from './HeroCard'
import Section from './Section'

function HeroSection() {
  return (
    <Section id="home">
      
        <div className='flex items-center min-h-screen'>
          <HeroCard></HeroCard>
        </div>
    </Section>
  )
}

export default HeroSection