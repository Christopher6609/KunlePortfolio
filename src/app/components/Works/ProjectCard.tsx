import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { projectProps } from "./Work";

type projectCardProps = {
    project: projectProps
}

const ProjectCard = ({ project }: projectCardProps) => {

    const { img, description, link, projectName } = project
    return (
        <div className="space-y-[1.5rem]">
            <div className="w-[37.25] h-[39.5rem] linerred">
                <Image src="/img/work1.png" width={3725} height={395} alt="project1" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-[0.5rem]">
                <h4 className="text-[1.5rem] font-[400] leading-[2.1rem] uppercase">Begreat finance</h4>
                <p className="text-[1rem] font-[100] leading-[1.5rem]">Web-design, Mobile App, Dashboard design</p>
                <div className="py-[1.5rem]">
                    <p className="text-[1rem] font-[500] leading-[1.5rem] "><Link href="#" className="flex items-center">View Project <FontAwesomeIcon className="w-[1.25rem] h-[1.25rem] px-[0.5rem]" icon={faArrowRight} /></Link></p>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard;