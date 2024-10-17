import Heading from "./components/Heading/Heading"
import Linkers from "./components/Linkers/Linkers"
import Process from "./components/Process/Process"
import ProjectMarquee from "./components/ProjectMarquee/ProjectMarquee"
import Services from "./components/Services/Services"
import Tools from "./components/Tools/Tools"
import SelectedWorks from "./components/Works/Work"

export default function Home() {
  return (
    <div>
      <Heading />
      <Tools />
      <Services />
      <SelectedWorks />
      <Process />
      <ProjectMarquee />
      <Linkers />

    </div>
  )
}