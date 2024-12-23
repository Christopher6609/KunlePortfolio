import Image from "next/image";
import ProcessCard from "./ProcessCard";

const Process = () => {
    return (
        <div className="md:py-[3.75rem] py-[1.5rem]">
            <div className="md:w-[24.4375rem] md:space-y-[1.31rem] text-start">
                <h1 className="md:text-[4rem] text-[2rem] font-[300] leading-[4rem] tracking-[-0.08rem] uppercase ">My process</h1>
                <p className="text-[1rem] font-[100] leading-[1.5rem]">Our process ensures that we create a User- Centric design tailored to your business goals.</p>
            </div>
            <div className=" w-full space-y-8 p-8">
                <div className="flex justify-end items-center md:gap-[6.43rem] ">
                    <div className="pt-[1rem] md:w-[15.50669rem] w-[10rem] h-[20.53806rem]">
                        <Image src="/img/thin-hand-drawn arrow.png" width={3125} height={180} alt="arrowDown" className="w-full h-full object-contain -rotate-30 " />
                    </div>
                    <ProcessCard id="01" heading="Research" description="Harness the power of real-time data to make smarter, faster decisions. Monitor stock performance, track market trends, and react instantly with up-to-the-second analytics" />
                </div>
                <div className="flex justify-start items-center">
                    <ProcessCard id="02" heading="Problem Identification" description="Harness the power of real-time data to make smarter, faster decisions. Monitor stock performance, track market trends, and react instantly with up-to-the-second analytics" />
                    <div className="pt-[1rem] w-[15.50669rem] h-[20.53806rem] ">
                        <Image src="/img/thin-hand-drawn arrow.png" width={3125} height={180} alt="arrowDown" className="w-full h-full object-contain transform scale-x-[-1]" />
                    </div>

                </div>
                <div className="flex justify-end items-center md:gap-[6.43rem] ">
                    <div className="pt-[1rem] md:w-[15.50669rem] w-[10rem] h-[20.53806rem]">
                        <Image src="/img/thin-hand-drawn arrow.png" width={3125} height={180} alt="arrowDown" className="w-full h-full object-contain -rotate-30 " />
                    </div>
                    <ProcessCard id="03" heading="Concept" description="Harness the power of real-time data to make smarter, faster decisions. Monitor stock performance, track market trends, and react instantly with up-to-the-second analytics" />
                </div>
                <div className="flex justify-start items-center">
                    <ProcessCard id="04" heading="Design" description="Harness the power of real-time data to make smarter, faster decisions. Monitor stock performance, track market trends, and react instantly with up-to-the-second analytics" />
                    <div className="pt-[1rem] w-[15.50669rem] h-[20.53806rem] ">
                        <Image src="/img/thin-hand-drawn arrow.png" width={3125} height={180} alt="arrowDown" className="w-full h-full object-contain transform scale-x-[-1]" />
                    </div>
                </div>
                <div className="flex justify-end items-center md:gap-[6.43rem] ">
                    <div className="pt-[1rem] md:w-[15.50669rem] w-[10rem] h-[20.53806rem]">
                        
                    </div>
                    <ProcessCard id="05" heading="Handoff" description="Harness the power of real-time data to make smarter, faster decisions. Monitor stock performance, track market trends, and react instantly with up-to-the-second analytics" />
                </div>

            </div>
        </div>
    )
}
export default Process;