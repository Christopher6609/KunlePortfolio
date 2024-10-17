import Image from "next/image";
import Marquee from "react-fast-marquee";

const ProjectMarquee = () => {
    return (
        <div className="py-[5.75rem]">
            <Marquee gradient={false} speed={200} pauseOnHover={true}>
                <div className="flex overflow-hidden">
                    {projects.map((project) => {
                        return (
                            <div key={project.id} className="w-[38.5rem] h-[32.875rem] flex-shrink-0">
                                <Image src={project.src} width={3850} height={3287} alt={project.alt} className="w-full h-full object-contain" />
                            </div>
                        )
                    })}

                </div>
            </Marquee>
        </div>
    )
}
export default ProjectMarquee;

const projects = [
    {
        id: "1",
        src: "/img/Placeholder Image.png",
        alt: "placeholder1"
    },
    {
        id: "2",
        src: "/img/Placeholder Image2.png",
        alt: "placeholder2"
    },
    {
        id: "3",
        src: "/img/Placeholder Image3.png",
        alt: "placeholder3"
    },
    {
        id: "4",
        src: "/img/Placeholder Image4.png",
        alt: "placeholder4"
    },
    {
        id: "5",
        src: "/img/Placeholder Image5.png",
        alt: "placeholder5"
    },
    {
        id: "6",
        src: "/img/Placeholder Image6.png",
        alt: "placeholder6"
    },
    {
        id: "7",
        src: "/img/Placeholder Image7.png",
        alt: "placeholder7"
    },
    {
        id: "8",
        src: "/img/Placeholder Image8.png",
        alt: "placeholder8"
    },
    {
        id: "9",
        src: "/img/Placeholder Image9.png",
        alt: "placeholder9"
    },
    {
        id: "10",
        src: "/img/Placeholder Image10.png",
        alt: "placeholder10"
    },
]