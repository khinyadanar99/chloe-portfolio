
import HeroSection from './components/HeroSection'
import TechSection from './components/TechSection'
import JourneySection from './components/JourneySection'
import ProjectSection from './components/ProjectSection'
import AboutSection from './components/AboutSection'

function App() {

  return (

    <div className='bg-[radial-gradient(circle_at_15%_20%,rgba(196,181,253,0.45),transparent_25%),radial-gradient(circle_at_85%_15%,rgba(253,186,116,0.25),transparent_20%),radial-gradient(circle_at_10%_80%,rgba(125,211,252,0.25),transparent_25%),radial-gradient(circle_at_90%_85%,rgba(196,181,253,0.3),transparent_25%),linear-gradient(180deg,#f5f3ff_0%,#fdf2f8_50%,#f5f3ff_100%)]'>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <TechSection></TechSection>
        <JourneySection></JourneySection>
        <ProjectSection></ProjectSection>
    </div>
       
    
  )
}

export default App
