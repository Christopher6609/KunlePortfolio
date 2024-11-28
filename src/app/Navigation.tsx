"use client"

import { faBars, faClose, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const Navigation = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [navIcon, setNavIcon] = useState(faBars);
    const [navView, setNavView] = useState("top-[-50rem]");

    const navToggle = () => {
        const iconChange = navIcon === faBars ? faClose : faBars;
        const nav = navView === "top-[-50rem]" ? "top-[5rem]" : "top-[-50rem]";
        setNavIcon(iconChange);
        setNavView(nav)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        }
    }, [theme, mounted]);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }



    return (
        <nav className={`h-[5.125rem] text-[#DAC5A7] flex items-center justify-between fixed w-full top-0 left-0 z-10 md:px-[5.81rem]   ${isScrolled ? "bg-[#000]" : "bg-transparent"} `}>
            {/* <div className="flex gap-[0.5rem]  rounded-[1rem]   dark:border-[#FFF] border-[#000]">
                <button className="linerred bg-[#000] p-[0.1rem] rounded-[1rem]" onClick={toggleTheme}><FontAwesomeIcon icon={faMoon} className="w-[1.5rem] h-[1.5rem]  " /></button>
                <button onClick={toggleTheme}> <FontAwesomeIcon icon={faSun} className="w-[1.5rem] h-[1.5rem] " /></button>
            </div> */}
            <div className="hidden md:block">
                {theme === "dark" ? <div>
                    <button className=" p-2 rounded-full bg-[#FFF] " onClick={toggleTheme}><FontAwesomeIcon icon={faSun} className="w-[1.5rem] h-[1.5rem]  " /></button>
                </div> : <div><button className=" p-2 rounded-full bg-[#FFF] border border-[#DAC5A7]" onClick={toggleTheme}> <FontAwesomeIcon icon={faMoon} className="w-[1.5rem] h-[1.5rem] " /></button></div>}
            </div>
            <div className="bg-[#0E0E0E] h-full flex items-center px-[1rem] gap-[3.37rem] w-full justify-between md:w-fit">
            <div className="  md:hidden">
                {theme === "dark" ? <div>
                    <button className=" p-2 rounded-full bg-[#FFF] " onClick={toggleTheme}><FontAwesomeIcon icon={faSun} className="w-[1.5rem] h-[1.5rem]  " /></button>
                </div> : <div><button className=" p-2 rounded-full bg-[#FFF] border border-[#DAC5A7]" onClick={toggleTheme}> <FontAwesomeIcon icon={faMoon} className="w-[1.5rem] h-[1.5rem] " /></button></div>}
            </div>
                <Link href="/" >
                    <div className="w-[4rem] h-[3.125rem] flex items-center justify-center">
                        <Image src="/img/KO..png" width={400} height={300} alt="KO" className="object-contain" />
                    </div>
                </Link>
                <div className=" ">
                    <div className="flex items-center justify-center hover:cursor-pointer md:hidden">
                        <FontAwesomeIcon onClick={navToggle} icon={navIcon} className="w-[2.5rem] h-[2.5rem]"/>
                    </div>
                    <div className={`absolute md:static min-h-[30vh] md:min-h-fit w-full md:w-auto left-0 px-2 flex duration-500 text-center items-center  ${navView} ${theme === "dark" ? "bg-[#000] " :"bg-[#DAC5A7] md:bg-[#000] md:text-[#DAC5A7] text-[#000]" }`} >
                        <ul className="list-none  text-[1rem] leading-[1.5rem] font-[400] flex md:flex-row flex-col gap-[1.75rem]  w-full">
                            <li className=" px-[0.75rem] py-[0.5rem]"><Link href="#work">Work</Link></li>
                            <li className=" px-[0.75rem] py-[0.5rem]"><Link href="#services">Services</Link></li>
                            <li className=" px-[0.75rem] py-[0.5rem]"><Link href="/profile">About Me</Link></li>
                            <li className=" px-[0.75rem] py-[0.5rem]"><Link href="#contact">Contact Me</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="w-[8.125rem] h-full md:flex items-center justify-center hidden">
                <h4 className="text-[#D9D9D9] text-[1rem] font-[500] leading-[1.2rem] tracking-[-0.01rem]">Currently based in the United Kingdom</h4>
            </div>
        </nav>
    )
}

export default Navigation;