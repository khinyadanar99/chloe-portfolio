
import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import EducationSection from "../components/EducationSection"
import FooterSection from "../components/FooterSection"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ProjectSection from "../components/ProjectSection"
import TechSection from "../components/TechSection"
import WorkSection from "../components/WorkSection"

function Home() {

  return (
    <div className='bg-[url(/img_background.webp)] bg-repeat bg-contain'>
      <div className='bg-white/65'>
        <header>
          <Navbar></Navbar>
        </header>
        
        <main>
          <HeroSection></HeroSection>
          <AboutSection></AboutSection>
          <TechSection></TechSection>
          <WorkSection></WorkSection>
          <EducationSection></EducationSection>
          <ProjectSection></ProjectSection>
          <ContactSection></ContactSection>
        </main>

        <footer>
          <FooterSection></FooterSection>
        </footer>
        
      </div>
    </div>
       
    
  )
}

export default Home
