"use client"

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";


type feedbackProps = {
    id: number;
    message: string;
    image: string;
    name: string;
    title: string;
}


const Feedback = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? count - 1 : prevIndex - 1));
    }
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === count - 1 ? 0 : prevIndex + 1))
    }
    const count = feedbacks.length;
    const { id, message, image, title, name } = feedbacks[currentIndex];
    return (
        <div className="py-[5.44rem] space-y-[3.81rem]">
            <div className="text-center">
                <h1 className="text-[4rem] font-[300] leading-[4rem] tracking-[-0.08rem] uppercase ">Client's Feedback</h1>
            </div>

            <div className="flex flex-col justify-center items-center gap-[1rem]" key={id}>
                <p className="text-[1.25rem] font-[200] leading-[2.1875rem] text-center">{message}</p>
                <div className="w-[4rem] h-[4rem] flex justify-center items-center">
                    <Image src={image} width={400} height={400} alt="avatar" className="w-full h-full object-contain" />
                </div>
                <div className="text-center">
                    <p className="text-[1.125rem] font-[700] leading-[1.75rem]">{name}</p>
                    <p className="text-[1rem] leading-[1.5rem] font-[200]">{title}</p>
                </div>
            </div>
            <div className="relative">
                <div className="flex gap-8 justify-center items-center ">
                    <button onClick={handlePrevious} className="h-[3.5rem] w-[3.5rem] border border-[#667085] rounded-full flex justify-center items-center"><FontAwesomeIcon icon={faArrowLeft} className="w-[1.5rem] h-[1.5rem]" /></button>
                    <button onClick={handleNext} className="h-[3.5rem] w-[3.5rem] border border-[#667085] rounded-full flex justify-center items-center"><FontAwesomeIcon icon={faArrowRight} className="w-[1.5rem] h-[1.5rem]" /></button>
                </div>
                <div className="justify-end absolute top-0 right-0">
                    <p className="md:text-[2.25rem] tracking-[-0.045rem] leading-[2.75rem]">{currentIndex + 1}/{count}</p>
                </div>
            </div>


        </div>
    )
}

export default Feedback;

const feedbacks: feedbackProps[] = [
    {
        id: 1,
        message: "As a part-time investor, I needed a tool that could give me professional-level insights without requiring a finance degree to understand. This stock analytics dashboard has been a game-changer for me. The real-time data and intuitive charts have helped me make more informed decisions, and I've seen a 15%",
        image: "/img/Avatar.png",
        name: "Rey Idowu",
        title: "Ceo, BeGreatFinance"

    },
    {
        id: 2,
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  ",
        image: "/img/Avatar.png",
        name: "Adekunle Gold",
        title: "Ceo, Empire Records"

    }
]

