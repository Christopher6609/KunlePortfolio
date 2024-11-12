import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="h-[24.6875rem] bg-[#D9BE97] flex md:justify-center md:items-center text-[#000] md:px-[5.81rem] px-[1rem] xl:px-0 mt-[2rem]">
            <div className="space-y-[0.75rem]">
                <h1 className="uppercase md:text-[7rem] font-[500] md:leading-[7rem] tracking-tight text-[#000]">
                    Adekunle &mdash; oladosu
                </h1>
                <div className="text-[1rem] leading-[1.5rem] font-[400] flex justify-between">
                    <p>&copy; 2024 Kunle's Portfolio</p>
                    <a href="#heading">Go back to Top <FontAwesomeIcon icon={faArrowUp} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;