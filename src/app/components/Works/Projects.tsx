"use client"

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
export type projectProps = {
    id: number,
    img: string,
    projectName: string,
    description: string,
    link: string,
    category?: string,
    client: string,
    date: string,
    role: string,
    website: string,
}


const Projects = () => {

    const [filteredProjects, setFilteredProjects] = useState<projectProps[]>(projects.filter(project => project.category === "web"))
    const [active, setActive] = useState<string>("web");

    const filterProjects = (category: string) => {
        if (category === "all") {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter((project) => project.category === category);
            setFilteredProjects(filtered);

        }
        setActive(category)

    }

    const activeButton = (category: string) => {
        return active === category ? " bg-[#DAC5A7] text-[#000]" : "bg-transparent"
    }

    return (
        <div className="py-[11.94rem]" id="work">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-[4rem] font-[300] leading-[4rem] tracking-[-0.08rem] uppercase ">Selected Works</h1>
                </div>
                <div>
                    <ul className="list-none text-[#DAC5A7] text-[1rem] leading-[1.5rem] font-[200] flex gap-[1.75rem]">
                        <li className=" px-[0.75rem] py-[0.5rem]"><button onClick={() => filterProjects("web")} className={`${activeButton("web")} border border-[#DAC5A7] py-[1rem] px-[0.875rem] rounded hover:bg-[#DAC5A7] hover:text-[#000]`}>Web Design</button></li>
                        <li className=" px-[0.75rem] py-[0.5rem]"><button onClick={() => filterProjects("mobile")} className={`${activeButton("mobile")} border border-[#DAC5A7] py-[1rem] px-[0.875rem] rounded hover:bg-[#DAC5A7] hover:text-[#000]`}>Mobile App Design</button></li>
                        <li className=" px-[0.75rem] py-[0.5rem]"><button onClick={() => filterProjects("case")} className={`${activeButton("case")} border border-[#DAC5A7] py-[1rem] px-[0.875rem] rounded hover:bg-[#DAC5A7] hover:text-[#000]`}>Case Studies</button></li>
                    </ul>
                </div>
            </div>
            <div className="columns-1 gap-[3rem] md:columns-2 py-[6.25rem]">
                {filteredProjects.map((project) => {
                    return (

                        <ProjectCard key={project.id} project={project} />

                    )
                })}


            </div>
        </div>
    )
}
export default Projects;

export const projects: projectProps[] = [
    {
        id: 1,
        img: "/img/work1.png",
        projectName: "begreat finance",
        description: "Web design, Mobile App, Dashboard Design",
        link: "#",
        category: "web",
        client: "Rey Idowu",
        date: "March 2023",
        role: "Product Designer",
        website: "Betreat Finance"

    },
    {
        id: 2,
        img: "/img/work3.png",
        projectName: " Everyone's Active App Design",
        description: "The country's number one activity destination",
        link: "#",
        category: "web",
        client: "Oladosu Kunle",
        date: "March 2024",
        role: "Product Designer",
        website: "Everyone Active"
    },
    {
        id: 3,
        img: "/img/work2.png",
        projectName: "Nonkpay Ai Banking Experience",
        description: " A New AI customisable banking experience",
        link: "#",
        category: "web",
        client: "Bash Alli",
        date: "April 2023",
        role: "Product Designer",
        website: "Nonkpay AI"
    },
    {
        id: 4,
        img: "/img/work4.png",
        projectName: "Locale travelling App Design",
        description: "A complex travelling app designed for everyone",
        link: "#",
        category: "web",
        client: "Mike Tyson",
        date: "May 2023",
        role: "Product Designer",
        website: "Locale Travel"
    },
    {
        id: 5,
        img: "/img/work4.png",
        projectName: "Locale travelling App Design",
        description: "A complex travelling app designed for everyone",
        link: "#",
        category: "mobile",
        client: "Dj Chicken",
        date: "December 2021",
        role: "Product Designer",
        website: "Locale Travel"
    },
    {
        id: 6,
        img: "/img/work1.png",
        projectName: "Locale travelling App Design",
        description: "A complex travelling app designed for everyone",
        link: "#",
        category: "mobile",
        client: "Chris Morgan",
        date: "January 2024",
        role: "Product Designer",
        website: "Locale Travel"
    },

]