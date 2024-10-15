type processCardProps = {
    id:string;
    heading: string;
    description:string
}


const ProcessCard = ({id,heading,description}:processCardProps) => {
    return (
        <div className="w-[30.9375rem] h-[20.0625rem] p-[1.5rem] bg-[#0E0E0E] rounded border border-[#dac5a71a] flex flex-col justify-center space-y-[0.5rem] relative" >
            <div className="bg-[#DAC5A7] w-[3.875rem] h-[3.875rem] p-[0.625rem] flex rounded-full justify-center items-center absolute -top-7 -right-7">
                <p className="text-[#000] text-[1.5rem] font-[500] leading-[1.5rem]">{id}</p>
            </div>
            <h4 className="text-[1.5rem] font-[700] leading-[2rem]">{heading}</h4>
            <p className="text-[1rem] font-[100] leading-[1.5rem] opacity-[0.8]">{description}</p>
        </div>
    )
}

export default ProcessCard;