import Heading from "./components/Heading/Heading"
import Linkers from "./components/Linkers/Linkers"
import Process from "./components/Process/Process"
import ProjectMarquee from "./components/ProjectMarquee/ProjectMarquee"
import Services from "./components/Services/Services"
import Tools from "./components/Tools/Tools"
import Projects from "./components/Works/Projects"

export default function Home() {
  return (
    <div>
      <Heading headingLineOne="product designer" headingLineTwo="& web designer" headingDescription="Easily track, analyze, and optimize your investments in real-time. Our intuitive portfolio management tools provide personalized insights, helping you make data-driven decisions to grow your assets." mouseText="Scroll" scrollToLocation="#tools" />
      <Tools />
      <Services />
      <Projects />
      <Process />
      <ProjectMarquee />
      <Linkers />

    </div>
  )
}