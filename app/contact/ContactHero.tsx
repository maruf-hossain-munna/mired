import Container from '@/components/common/Container';
import Heading from '@/components/common/heading/Heading';
import Link from 'next/link';
import React from 'react';

const ContactHero = () => {
    return (
        <div className="relative bg-[#F4F2F6] lg:bg-[url('/images/home-bg.png')] min-h-screen overflow-hidden flex items-center bg-cover">
            <Container>
                <div>
                    <div className='max-w-[1030px] mx-auto text-center'>
                        <Heading
                            title="contact"
                            center
                            custom='uppercase text-[35px] md:text-[55px] lg:text-[68px] font-bold leading-tight'
                        />
                        <p className='mt-3 mb-6 text-sm md:text-[15px] lg:text-[16px] px-0 lg:px-20 leading-7'>
                            We optimize your online presence, turning it into a revenue powerhouse that effectively markets and sells your digital offerings. With our all-in-one solutions your website does more than exist—it excels.
                        </p>
                        <div className='flex gap-6 justify-center items-center'>
                            <Link href='/'>
                                <button className='uppercase text-white font-semibold border border-[#420FB0] bg-[#420FB0] px-7 py-3'> Home</button>
                            </Link>
                            <Link href='/services'>
                                <button className='uppercase text-black font-semibold bg-white border border-[#420FB0] px-7 py-3'> Contact</button>
                            </Link>
                        </div>
                    </div>

                    <div className=" z-10 absolute  bottom-[-60%] left-[-30%] w-[350px] h-[150px] lg:w-[600px] lg:h-[600px] rounded-full  bg-pink-500 blur-[300px] opacity-100" />
                    <div className=" z-10 absolute  top-[-40%] right-[-30%] w-[350px] h-[150px] lg:w-[600px] lg:h-[600px] rounded-full  bg-pink-500 blur-[300px] opacity-100" />

                </div>
            </Container>

        </div>
    );
};

export default ContactHero;