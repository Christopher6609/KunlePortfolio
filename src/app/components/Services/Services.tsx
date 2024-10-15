import Image from "next/image";
import Service from "./Service";


export interface serviceData {
    id: string,
    head: string,
    body: string
}

const Services = () => {
    return (
        <div className="py-[6.56rem] space-y-[3.31rem]" id="services">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-[4rem] font-[300] leading-[4rem] tracking-[-0.08rem] uppercase ">my services</h1>
                </div>
                <div className="flex px-[2rem]">
                    <div className="pt-[1rem]">
                        <Image src="/img/Hand-drawn arrow.png" width={3125} height={125} alt="arrowDown" className="w-[3.5rem] h-[2.25rem] -rotate-30 " />
                    </div>
                    <div>
                        <p className="text-[0.875rem] leading-[1.25rem] font-[600] ">Available to work</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-[1.25rem]">
                {
                    services.map((service) => <Service key={service.id} service={service} />)
                }

            </div>
            <div className="flex justify-center items-center">
                <a href="mailto:odeniyichristopher7@gmail.com" className="w-[7.5625rem] h-[3.0625rem] px-[0.75rem] py-[0.5rem] flex justify-center items-center rounded bg-[#EDD6B6] text-[#000] text-[1.21875rem] leading-[1.5rem] font-[500] tracking-[0.01831rem] hover:bg-transparent hover:text-[#EDD6B6] hover:border-[#EDD6B6] hover:border ">Hire Me </a>
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