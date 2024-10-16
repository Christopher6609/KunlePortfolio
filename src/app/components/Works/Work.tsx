
import ProjectCard from "./ProjectCard";

export type projectProps = {
    id: string,
    img: string,
    projectName: string,
    description: string,
    link: string,
}

const SelectedWorks = () => {
    return (
        <div className="py-[11.94rem]" id="work">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-[4rem] font-[300] leading-[4rem] tracking-[-0.08rem] uppercase ">Selected Works</h1>
                </div>
                <div>
                    <ul className="list-none text-[#DAC5A7] text-[1rem] leading-[1.5rem] font-[200] flex gap-[1.75rem]">
                        <li className=" px-[0.75rem] py-[0.5rem]"><button>Web Design</button></li>
                        <li className=" px-[0.75rem] py-[0.5rem]"><button>Mobile App Design</button></li>
                        <li className=" px-[0.75rem] py-[0.5rem]"><button>Case Studies</button></li>
                    </ul>
                </div>
            </div>
            <div>
                {projects.map((project) => <ProjectCard key={project.id} project={project} />)}

            </div>
        </div>
    )
}
export default SelectedWorks;

const projects:projectProps[] = [
    {
        id: "1",
        img: "/img/work1.png",
        projectName: "begreat finance",
        description: "Web design, Mobile App, Dashboard Design",
        link: "#"
    },
    {
        id: "2",
        img: "/img/work2.png",
        projectName: "Nonkpay Ai Banking Experience",
        description: "A New AI customisable banking experience",
        link: "#"
    },
    {
        id: "3",
        img: "/img/work3.png",
        projectName: "Everyone's Active App Design",
        description: "The country's number one activity destination",
        link: "#"
    },
    {
        id: "4",
        img: "/img/work4.png",
        projectName: "Locale travelling App Design",
        description: "A complex travelling app designed for everyone",
        link: "#"
    }
]