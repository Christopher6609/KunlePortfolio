import Image from "next/image";
import Link from "next/link";

type headingProps = {
    headingLineOne: string;
    headingLineTwo: string;
    headingDescription: string;
    mouseText: string;
    scrollToLocation: string;
}

const Heading = ({ headingLineOne, headingLineTwo, headingDescription, mouseText, scrollToLocation }: headingProps) => {
    return (
        <div className="pt-[15.94rem]" id="heading">

            <div className="flex flex-col items-center justify-center gap-[1.5rem]">
                <div className="md:flex md:px-[2rem]  hidden  ">
                    <div className="pt-[1rem] w-[3.5rem] h-[2.25rem]">
                        <Image src="/img/Hand-drawn arrow.png" width={3125} height={125} alt="arrowDown" className="w-full h-full object-contain -rotate-30 " />
                    </div>
                    <div>
                        <p className="text-[0.875rem] leading-[1.25rem] font-[600]" >Available to work</p>
                    </div>
                </div>
                <div className="md:text-center" >

                    <h1 className={`text-[7.75rem] leading-[8.75rem] font-[100] uppercase `}>{headingLineOne} </h1>
                    <h1 className={`text-[7.75rem] leading-[8.75rem] font-[100] uppercase `}>{headingLineTwo}</h1>
                </div>

                <div className="flex w-[55.8125rem] justify-center ">
                    <p className="text-[1.5rem] font-[100] leading-[2.25rem] text-center">{headingDescription}</p>
                </div>
            </div>
            <div className="flex justify-center items-center mt-[5.69rem] mb-[2.87rem]">
                <a href={scrollToLocation} className="w-[10.575rem] h-[10.575rem] border-[1px] border-[#DAC5A7] rounded-full py-[1rem] flex  flex-col items-center justify-center gap-[1rem] group hover:rotate-180 duration-300 delay-200">
                    <p className="text-[1.25rem] font-[700] leading-[1.5rem] group-hover:scale-x-[-1] group-hover:-scale-y-[1] transform duration-300" >{mouseText}</p>
                    <div className="w-[2rem] h-[3.125rem]">
                        <Image src="/img/Frame 2147223898.png" width={200} height={3125} alt="mouse" className="w-full h-full object-contain" />
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Heading;