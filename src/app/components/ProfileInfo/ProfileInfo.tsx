import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type infoProps = {
    id: number,
    text: string,
    subText: string
}

const ProfileInfo = () => {
    return (

        <div className="flex flex-col items-center justify-center">
            <div className="w-[77.5rem] h-[31.25rem] my-[5.06rem]" id="story" style={{ backgroundImage: `url("/img/Frame 2147224112.png")`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundBlendMode: "luminosity" }}>

            </div>
            <div className="text-center py-[2.56rem] w-[52rem]" >
                <h4 className="text-[1.5rem] font-[200] leading-[2.25rem]">Cooking since 2021</h4>
                <p className="text-[3rem] leading-[3.375rem] font-[200] opacity-[0.8]">Based in the United Kingdom. I am an innovative Designer
                </p>
                <p className="text-[3rem] leading-[3.375rem] font-[200] opacity-[0.8]">My Design Philosophy is all about balancing creativity together with user needs and business goals Intuitive design is evident in my work</p>
                <div className="flex justify-center items-center py-8">
                    <a href="mailto:odeniyichristopher7@gmail.com" className="w-[13.375rem] h-[3.0625rem] px-[0.75rem] py-[0.5rem] flex justify-between items-center rounded bg-[#EDD6B6] text-[#000] text-[1.21875rem] leading-[1.5rem] font-[500] tracking-[0.01831rem] hover:bg-transparent hover:text-[#EDD6B6] hover:border-[#EDD6B6] hover:border ">View My Resume <FontAwesomeIcon icon={faEye} className="w-[1.5rem] h-[1.5rem]" /></a>
                </div>
            </div>
            <div className="w-full flex justify-between py-[4.44rem] ">
                {information.map((info) => {
                    const { id, text, subText } = info
                    return (
                        <div key={id} className="space-y-5 justify-start">
                            <h1 className="text-[5rem] font-[200] leading-[6rem] ">
                                {text}
                            </h1>
                            <p className="capitalize text-[1.125rem] leading-[1.68rem] font-[500] opacity-[0.8] ">
                                {subText}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default ProfileInfo;

const information: infoProps[] = [
    {
        id: 1,
        text: "3+",
        subText: "Years of experience"
    },
    {
        id: 2,
        text: "30+",
        subText: "designs done"
    },
    {
        id: 3,
        text: "99%",
        subText: "customer satisfaction"
    },
    {
        id: 4,
        text: "200+",
        subText: "cup of coffee"
    }

]