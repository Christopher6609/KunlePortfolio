"use client"

import { useEffect, useState, useRef } from "react";

type counterProps = {
    target: number;
    duration: number;
    subText: string;
    countVariable: string;
}

const Counter = ({ target, duration, subText, countVariable }: counterProps) => {

    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true); // Start the counter when the element is in view
                    observer.unobserve(entry.target); // Stop observing once triggered
                }
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) observer.unobserve(counterRef.current);
        };
    }, []);


    useEffect(() => {
         if (!hasStarted) return;

        let start = 0;
        const increment = target / (duration / 100)

        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target)
                clearInterval(interval)
            } else {
                setCount(Math.round(start));
            }
        }, 100);
        return () => clearInterval(interval);
    }, [hasStarted, target, duration])

    return (
        <div className="space-y-5 justify-start" ref={counterRef} > 
            <h1 className="text-[5rem] font-[200] leading-[6rem] ">
                {count}{countVariable}
            </h1>
            <p className="capitalize text-[1.125rem] leading-[1.68rem] font-[500] opacity-[0.8] ">
                {subText}
            </p>
        </div>
    )
}

export default Counter;