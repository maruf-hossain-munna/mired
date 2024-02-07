import Container from '@/components/common/Container';
import Button from '@/components/common/button/Buttton';
import Heading from '@/components/common/heading/Heading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MarketingHeroArea = () => {
    return (
        <div className="py-16 border-b-[3px] border-black relative bg-[#F4F2F6] lg:bg-[url('/images/home-bg.png')] min-h-screen overflow-hidden flex items-center bg-cover">
            <Container>
                <div className='max-w-[1000px] mx-auto text-center z-30'>
                    <div className='flex justify-center'>
                        <Link href='/services'>
                            <button className='uppercase rounded-xl text-black font-semibold bg-white border border-[#420FB0] px-7 py-3'>
                                Services
                            </button>
                        </Link>
                    </div>
                    <Heading
                        title="Brand Development & Digital Marketing"
                        center
                        custom='mb-12 mt-2 uppercase text-[28px] md:text-[55px] lg:text-[68px] font-semibold leading-tight'
                    />
                    <Button
                        label='contact us'

                    />

                    <Image
                        src="/images/step-of-dm.png"
                        alt='Step of digital marketing'
                        width={1000}
                        height={300}
                        className='mt-8'
                    />
                </div>
            </Container>

            <div className=" z-10 absolute  bottom-[-60%] left-[-30%] w-[350px] h-[150px] lg:w-[600px] lg:h-[600px] rounded-full  bg-pink-500 blur-[300px] opacity-100" />
            <div className=" z-10 absolute  top-[-40%] right-[-30%] w-[350px] h-[150px] lg:w-[600px] lg:h-[600px] rounded-full  bg-pink-500 blur-[300px] opacity-100" />


        </div>
    );
};

export default MarketingHeroArea;