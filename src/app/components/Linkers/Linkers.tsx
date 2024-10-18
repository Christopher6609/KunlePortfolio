"use client"

import Link from "next/link";
import { IconDefinition, faBehance, faDribbble, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type linkProps = {
    id: number,
    icon: IconDefinition,
    desc: string,
    link: string,

}

const Linkers = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex items-center justify-between">
            <div className="lg:w-[58.3125rem] ">
                <p className="text-[1.5rem] font-[100] leading-8">Have a Project in Mind?</p>
                <h1 className="uppercase text-[6rem] font-[300] leading-[6rem] tracking-tight">Let's create things together</h1>
                <div className="py-[3.25rem] flex gap-8 ">
                    {links.map((link) => {
                        return (
                            <Link href={link.link} target="_blank" key={link.id}><div className=" flex items-center gap-[0.5rem]">
                                <div className="w-[2.5rem] h-[2.5rem] rounded-full border-[0.613px] border-[#DAC5A7] p-[0.6125rem] flex items-center">
                                    <FontAwesomeIcon icon={link.icon} className="w-[1.8375rem]" />
                                </div>
                                <p className="text-[1rem] leading-8 font-[200]">{link.desc}</p>
                            </div></Link>
                        )
                    })}


                </div>
            </div>
            <div>
                <Link href="mailto:odeniyichristopher7@gmail.com"><div className="w-[10.875rem] h-[10.875rem] rounded-full border border-[#DAC5A7] flex items-center justify-center transition-all duration-300 ease-in-out" onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} style={{ backgroundColor: isHovered ? "#DAC5A7" : "transparent", transition: "background-color 0.3s ease-in-out" }}>
                    {
                        isHovered ? (

                            <h4 className="text-[2rem] text-[#000] rotate-12 transition-opacity duration-300 ease-in-out" style={{
                                opacity: isHovered ? 1 : 0,
                                transform: isHovered ? "rotate(12deg)" : "rotate(0deg)"
                            }}>Hire Me</h4>

                        ) : (<>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 238 238"
                                fill="none"
                            >
                                <path
                                    d="M147.53 121.592C147.901 121.256 147.93 120.683 147.595 120.312L142.12 114.265C141.784 113.894 141.212 113.866 140.84 114.202C140.469 114.537 140.441 115.11 140.776 115.481L145.641 120.857L140.267 125.721C139.895 126.057 139.868 126.631 140.203 127.001C140.54 127.372 141.112 127.402 141.484 127.066L147.53 121.592ZM91.2849 119.058L146.877 121.826L146.968 120.015L91.3754 117.248L91.2849 119.058Z"
                                    fill="#DAC5A7"
                                />
                            </svg>
                        </>)
                    }
                </div>
                </Link>

            </div>
           
        </div>
    )
}

export default Linkers;

const links:linkProps[] = [
    {
        id: 1,
        icon: faBehance,
        desc: "Behance",
        link: "https://www.behance.net/kunleoladosu"
    },
    {
        id: 2,
        icon: faDribbble,
        desc: "Dribble",
        link: "https://dribbble.com/"
    },
    {
        id: 3,
        icon: faLinkedin,
        desc: "LinkedIn",
        link: "https://www.linkedin.com/in/odeniyi-christopher-b1a37a1bb/"
    },
    {
        id: 4,
        icon: faTwitter,
        desc: "Twitter",
        link: "https://x.com/home?lang=en"
    },
    {
        id: 5,
        icon: faInstagram,
        desc: "Instagram",
        link: "https://www.instagram.com/"
    },
]