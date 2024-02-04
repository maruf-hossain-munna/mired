'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Heading from './heading/Heading';

const RunningSlider = () => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prevPosition) => (prevPosition + 1) % 100);
        }, 300); // Adjust the interval as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative max-w-[1920px] mx-auto h-16 lg:h-56 bg-white  overflow-hidden my-10">
            <div
                className="absolute h-full w-full bg-white transition-transform duration-300 ease-in-out flex items-center"
                style={{ left: `${position}%` }}
            >
                <div className='flex gap-6 lg:gap-10 items-center'>
                    <Image
                        src='/images/pink-star.png'
                        alt='Star'
                        width={80}
                        height={80}
                    />
                    <Heading
                        title="Development"
                        // center
                        custom='uppercase text-[24px] md:text-[32px] lg:text-[64px] font-semibold leading-tight'
                    />
                    <Image
                        src='/images/yellow-star.png'
                        alt='Star'
                        width={80}
                        height={80}
                    />
                    <Heading
                        title="Social Media Marketing"
                        // center
                        custom='uppercase text-[24px] md:text-[53px] lg:text-[64px] font-semibold leading-tight'
                    />
                    {/* <Image
                        src='/images/pink-star.png'
                        alt='Star'
                        width={80}
                        height={80}
                    />
                    <Heading
                        title="Marketing"
                        // center
                        custom='uppercase text-[35px] md:text-[53px] lg:text-[64px] font-semibold leading-tight'
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default RunningSlider;
