import Link from "next/link";

const SelectedWorks = () => {
    return (
        <div className="py-[11.94rem]" id="work">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-[4rem] font-[300] leading-[4rem] tracking-[-0.08rem] uppercase ">Selected Works</h1>
                </div>
                <div>
                    <ul className="list-none text-[#DAC5A7] text-[1rem] leading-[1.5rem] font-[200] flex gap-[1.75rem]">
                        <li className=" px-[0.75rem] py-[0.5rem]"><button>Web Design</button></li>
                        <li className=" px-[0.75rem] py-[0.5rem]"><button>Mobile App Design</button></li>
                        <li className=" px-[0.75rem] py-[0.5rem]"><button>Case Studies</button></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SelectedWorks;