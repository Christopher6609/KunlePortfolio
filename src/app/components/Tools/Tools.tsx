import Image from "next/image";
import Marquee from "react-fast-marquee";

const Tools = () => {
    return (
        <div className="py-[8rem] flex flex-col justify-center items-center gap-[2rem]">
            <div>
                <h4 className="uppercase text-[1rem] font-[200] leading-[1.5rem] text-center ">my favorite tools</h4>
            </div>

            <div className="w-[55.625rem]">
                <Marquee gradient={false} speed={50} pauseOnHover={true}>
                    <div className="flex gap-[5rem] overflow-hidden pl-[5rem]">{tools.map((tool) => {
                        return (
                            <div key={tool.id} className="w-[2.5rem] h-[2.5rem]">
                                <Image
                                    src={tool.src}
                                    width={50}
                                    height={25}
                                    alt={tool.alt}
                                    style={{ objectFit: 'contain' }} // Use the style prop for objectFit
                                />
                            </div>
                        );
                    })}</div>

                </Marquee>
            </div>

        </div>
    )
}

export default Tools;

const tools = [
    {
        id: 1,
        src: "/img/photoshop.png",
        alt: "photoshop"
    },
    {
        id: 2,
        src: "/img/figma.png",
        alt: "figma"

    },
    {
        id: 3,
        src: "/img/slack.png",
        alt: "slack"
    },
    {
        id: 4,
        src: "/img/north.png",
        alt: "north"
    },
    {
        id: 5,
        src: "/img/illustrator.png",
        alt: "illustrator"
    },
    {
        id: 6,
        src: "/img/blueF.png",
        alt: "blue"
    },
    {
        id: 7,
        src: "/img/pyram.png",
        alt: "pyram"
    },
    {
        id: 8,
        src: "/img/mons.png",
        alt: "mons"
    },

]