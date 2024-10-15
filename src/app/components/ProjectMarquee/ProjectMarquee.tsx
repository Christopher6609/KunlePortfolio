import Image from "next/image";
import Marquee from "react-fast-marquee";

const ProjectMarquee = () => {
    return (
        <div className="py-[5.75rem]">
            <Marquee gradient={false} speed={100} pauseOnHover={true}>
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
    }
]