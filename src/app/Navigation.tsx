import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";
import Link from "next/link";


const Navigation = () => {
    return (
        <nav className="h-[5.125rem] flex items-center justify-between">
            <div className="flex gap-[0.75rem] h-full">
                <button><FontAwesomeIcon icon={faMoon} className="w-[1.5rem] h-[1.5rem] text-[#DAC5A7]" /></button>
                <button><FontAwesomeIcon icon={faSun} className="w-[1.5rem] h-[1.5rem] text-[#DAC5A7]"/> </button>
            </div>
            <div className="bg-[#0E0E0E] h-full flex items-center px-[1rem] gap-[3.37rem]">
                <div className="w-[4rem] h-[3.125rem] flex items-center justify-center">
                    <Image src="/img/KO..png" width={400} height={300} alt="KO" className="object-contain" />
                </div>
                <div>
                    <ul className="list-none text-[#DAC5A7] text-[1rem] leading-[1.5rem] font-[400] flex gap-[1.75rem]">
                        <li className=" px-[0.75rem] py-[0.5rem]"><Link href="#">Work</Link></li>
                        <li className=" px-[0.75rem] py-[0.5rem]"><Link href="#">Services</Link></li>
                        <li className=" px-[0.75rem] py-[0.5rem]"><Link href="#">About Me</Link></li>
                        <li className=" px-[0.75rem] py-[0.5rem]"><Link href="#">Contact Me</Link></li>
                    </ul>
                </div>
            </div>
            <div className="w-[8.125rem] h-full flex items-center justify-center">
                <h4 className="text-[#D9D9D9] text-[1rem] font-[500] leading-[1.2rem] tracking-[-0.01rem]">Currently based in the United Kingdom</h4>
            </div>
        </nav>
    )
}

export default Navigation;