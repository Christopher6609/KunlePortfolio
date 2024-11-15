import Image from "next/image";
import Service from "./Service";


export interface serviceData {
    id: string,
    head: string,
    body: string
}

const Services = () => {
    return (
        <div className="py-[6.56rem] md:space-y-[3.31rem] space-y-4" id="services">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="md:text-[4rem] text-[2rem] font-[300] md:leading-[4rem] tracking-[-0.08rem] uppercase ">my services</h1>
                </div>
                <div className="md:flex px-[2rem] hidden">
                    <div className="pt-[1rem]">
                        <Image src="/img/Hand-drawn arrow.png" width={3125} height={125} alt="arrowDown" className="md:w-[3.5rem] w-[1.5rem] md:h-[2.25rem] h-[1rem] -rotate-30 " />
                    </div>
                    <div>
                        <p className="text-[0.875rem] md:leading-[1.25rem] font-[600] ">Available to work</p>
                    </div>
                </div>
            </div>
            <div className="md:flex  gap-[1.25rem] space-y-8 md:space-y-0">
                {
                    services.map((service) => <Service key={service.id} service={service} />)
                }

            </div>
            <div className="flex justify-center items-center">
                <a href="mailto:odeniyichristopher7@gmail.com" className="md:w-[7.5625rem] w-[5rem] md:h-[3.0625rem] h-[2rem] md:px-[0.75rem] md:py-[0.5rem] flex justify-center items-center rounded bg-[#EDD6B6] text-[#000] md:text-[1.21875rem] text-[0.875rem]leading-[1.5rem] md:font-[500] tracking-[0.01831rem] hover:bg-transparent hover:text-[#EDD6B6] hover:border-[#EDD6B6] hover:border ">Hire Me </a>
            </div>
        </div>
    )
}

export default Services;

const services: serviceData[] = [
    {
        id: "01",
        head: "Product Design",
        body: "Harness the power of real-time data to make smarter, faster decisions. Monitor stock performance, track market trends, and react instantly with up-to-the-second analytics"
    },
    {
        id: "02",
        head: "UIUX Design",
        body: "Harness the power of real-time data to make smarter, faster decisions. Monitor stock performance, track market trends, and react instantly with up-to-the-second analytics"
    },
    {
        id: "03",
        head: "Web Design",
        body: "Harness the power of real-time data to make smarter, faster decisions. Monitor stock performance, track market trends, and react instantly with up-to-the-second analytics"
    },
]