"use client"

import Feedback from '@/app/components/Feedback/Feedback'
import React from 'react'
import { useParams } from 'next/navigation'
import { projects } from '@/app/components/Works/Projects';



const page = () => {

    const { id } = useParams();
    const project = projects.find((project) => project.id === Number(id))

    if (!project) {
        return <div>Project not found</div>
    }

    const { projectName, client, date, role, website } = project

    return (
        <div className="mt-[6rem]">
            <div className="h-[43.8125rem]"></div>
            <div className='md:flex py-[5rem] items-center justify-between'>
                <div className='space-y-[1.5rem] md:w-[28rem] '>
                    <button className={`border text-[0.875rem] border-[#DAC5A7] py-[0.25rem] px-[0.5rem] bg-[#DAC5A7] rounded text-[#000] hover:text-[#000] hidden md:block`}>Web 3</button>
                    <h1 className='md:text-[3.5rem] text-[2.5rem] md:text-start text-center md:leading-[4.2rem] leading-[3rem] font-[500] uppercase'>{projectName}</h1>
                    <p className='text-[1rem] leading-[1.5rem] font-[200] hidden md:block'>Web-design, Mobile App, Dashboard design</p>
                    <div className=' md:hidden space-y-[1.5rem] pb-[2rem]'>
                        <p className='text-[1rem] leading-[1.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                        <div className='flex gap-4'>
                            <button className={`border text-[0.875rem] border-[#DAC5A7] py-[0.25rem] px-[0.5rem] bg-[#DAC5A7] rounded text-[#000] hover:text-[#000]`}>Tag one</button>
                            <button className={`border text-[0.875rem] border-[#DAC5A7] py-[0.25rem] px-[0.5rem] bg-[#DAC5A7] rounded text-[#000] hover:text-[#000]`}>Tag two</button>
                            <button className={`border text-[0.875rem] border-[#DAC5A7] py-[0.25rem] px-[0.5rem] bg-[#DAC5A7] rounded text-[#000] hover:text-[#000]`}>Tag three</button>
                        </div>
                    </div>

                </div>
                <div className='space-y-[2rem]'>
                    <div className='flex justify-between'>
                        <div className='w-[13.5rem]'>
                            <h2 className='text-[1.25rem] leading-[1.75rem] font-[500]'>Client</h2>
                            <p className='text-[1rem] leading-[1.5rem] font-[200] '>{client}</p>
                        </div>
                        <div className='w-[13.5rem]'>
                            <h2 className='text-[1.25rem] leading-[1.75rem] font-[500]'>Date</h2>
                            <p className='text-[1rem] leading-[1.5rem] font-[200] '>{date}</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-[13.5rem]'>
                            <h2 className='text-[1.25rem] leading-[1.75rem] font-[500]'>Role</h2>
                            <p className='text-[1rem] leading-[1.5rem] font-[200] '>{role}</p>
                        </div>
                        <div className='w-[13.5rem]'>
                            <h2 className='text-[1.25rem] leading-[1.75rem] font-[500]'>Website</h2>
                            <p className='text-[1rem] leading-[1.5rem] font-[200] '><a href="#">{website}</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:py-[7rem] py-[3rem] md:flex md:gap-[5.25rem] gap-[3rem]'>
                <div className='space-y-5 md:w-[36.25rem]'>
                    <h2 className="md:text-[3rem] text-[2.25rem] md:leading-[3.6rem] leading-[2.7rem] font-[500] ">The Opportunity</h2>
                    <div className='space-y-4'>
                        <p className='text-[1rem] leading-[1.5rem] font-[200] '>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                        <p className='text-[1rem] leading-[1.5rem] font-[200] '>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                        <p className='text-[1rem] leading-[1.5rem] font-[200] '>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                    </div>

                </div>
                <div className='md:w-[36.25rem] h-[33.0625rem] linerred'>

                </div>
            </div>
            <div className='md:py-[7rem] py-[3rem] md:flex md:gap-[5.25rem] gap-[3rem]'>
                <div className='md:w-[36.25rem] h-[33.0625rem] linerred'>

                </div>
                <div className='space-y-5 md:w-[36.25rem]'>
                    <h2 className="md:text-[3rem] text-[2.25rem] md:leading-[3.6rem] leading-[2.7rem] font-[500]  ">What I did</h2>
                    <div className='space-y-4'>
                        <p className='text-[1rem] leading-[1.5rem] font-[200] '>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                        <p className='text-[1rem] leading-[1.5rem] font-[200] '>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                        <p className='text-[1rem] leading-[1.5rem] font-[200] '>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                        <p className='text-[1rem] leading-[1.5rem] font-[200] '>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                    </div>

                </div>

            </div>
            <div className='md:py-[7rem] py-[3rem] md:flex md:gap-[5.25rem] gap-[3rem]'>
                <div className='space-y-5 md:w-[36.25rem]'>
                    <h2 className="md:text-[3rem] text-[2.25rem] md:leading-[3.6rem] leading-[2.7rem] font-[500]  ">The Outcome</h2>
                    <div className='space-y-4'>
                        <p className='text-[1rem] leading-[1.5rem] font-[200] '>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                        <p className='text-[1rem] leading-[1.5rem] font-[200] '>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                        <p className='text-[1rem] leading-[1.5rem] font-[200] '>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                    </div>

                </div>
                <div className='md:w-[36.25rem] h-[33.0625rem] linerred'>

                </div>
            </div>
            <div className='flex flex-col gap-4 py-[8.25rem]' >
                <div className='md:w-full md:h-[40rem] h-[11rem] linerred'>

                </div>
                <div className='md:flex space-y-8 md:space-y-0 gap-4'>
                    <div className='md:w-[40rem] md:h-[40rem] h-[20rem] linerred'>

                    </div>
                    <div className='md:w-[40rem] md:h-[40rem] h-[20rem] linerred'>

                    </div>
                </div>
            </div>
            <Feedback />
            <div className='py-[7rem] space-y-[5rem]'>
                <div className='text-center space-y-4'>
                    <p className='text-[1rem] font-[600] leading-6'>Portfolio</p>
                    <h3 className='text-[3rem] font-[700] leading-[3.6rem]'>Next Project</h3>
                    <p className='text-[1.125rem] font-[400] leading-[1.6875rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div >
                    <div className='h-[40rem] linerred'></div>
                    <div className='flex justify-between py-[1.5rem]'>
                        <div className='w-[35rem]'>
                            <h3>Project name here</h3>
                        </div>
                        <div className='w-[36rem] text-justify'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        </div>

                    </div>

                </div>
                <div className='flex justify-center items-center'>
                    <button className={`border text-[0.875rem] border-[#DAC5A7] py-[0.25rem] px-[0.5rem] bg-[#DAC5A7] rounded text-[#000] hover:text-[#000]`}>View All</button>
                </div>
            </div>
        </div>
    )
}

export default page
