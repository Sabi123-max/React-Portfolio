import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectsSection"
import { SkillSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/Themetoggle"

export const Home = () =>{
    return <div className="min-h-screen bg-background text-forground overflow-x-hidden">
        {/* <h1>home</h1> */}
        <ThemeToggle />
        {/*toggle light and black*/}
        {/*background effect */}
        <StarBackground/>
        {/* navbar */}
        <NavBar/>
        {/* maincontent */}
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>
        
        {/* footer */}
        <Footer/>
        

    </div>
}