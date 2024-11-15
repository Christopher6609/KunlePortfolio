import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { serviceData } from "./Services";

type serviceProps = {
    service: serviceData
}


const Service = ({ service }:serviceProps) => {
    const { id, head, body } = service;
    return (
        <div className="md:w-[25rem] md:h-[20.0625rem] dark:bg-[#0E0E0E] bg-[#DAC5A7] rounded border-[#dac5a71a] border flex items-center px-[1.5rem] py-[1rem] hover:dark:bg-[#DAC5A7] hover:text-[#000]">
            <div className="space-y-[1rem]">
                <p className="text-[0.8125rem] font-[100] leading-[1.5rem] ">{id}</p>
                <h4 className="text-[1.5rem] font-[700] leading-[2rem] ">{head}</h4>
                <p className="text-[1rem] font-[100] leading-[1.5rem] opacity-[0.8]">{body}</p>
                <Link href="#" className="text-[1rem] leading-[1.5rem] font-[500] w-[7.9375rem] flex items-center">Learn More <span className="flex items-center"><FontAwesomeIcon icon={faArrowRight} className="w-[1.25rem] h-[1.25rem] pl-[0.5rem]" /></span> </Link>
            </div>

        </div>

    )
}

export default Service;