import Image from "next/image";



const Heading = () => {
    return (
        <div className="pt-[15.94rem]">
            <div className="flex px-[2rem]">
                <div className="pt-[1rem]">
                    <Image src="/img/Hand-drawn arrow.png" width={3125} height={125} alt="arrowDown" className="w-[3.5rem] h-[2.25rem] -rotate-30 " />
                </div>
                <div>
                    <p className="text-[0.875rem] leading-[1.25rem] font-[600]" >Available to work</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[1.5rem]">
                <div className="text-center" >
                    <h1 className={`text-[7.75rem] leading-[8.75rem] font-[100] uppercase `}>PRODUCT DESIGNER & </h1>
                    <h1 className={`text-[7.75rem] leading-[8.75rem] font-[100] uppercase `}>Web designer</h1>
                </div>

                <div className="flex w-[55.8125rem] justify-center ">
                    <p className="text-[1.5rem] font-[100] leading-[2.25rem] text-center">Easily track, analyze, and optimize your investments in real-time. Our intuitive portfolio management tools provide personalized insights, helping you make data-driven decisions to grow your assets.</p>
                </div>
            </div>
            <div className="flex justify-center items-center mt-[5.69rem] mb-[2.87rem]">
                <button className="w-[9.375rem] h-[9.375rem] border-[1px] border-[#DAC5A7] rounded-full py-[1rem] flex  flex-col items-center justify-center gap-[1rem] hover:rotate-180">
                    <p className="text-[1.25rem] font-[700] leading-[1.5rem]">Scroll</p>
                    <div className="w-[2rem] h-[3.125rem] ">
                        <Image src="/img/Frame 2147223898.png" width={200} height={3125} alt="mouse" className="w-full h-full object-contain" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Heading;