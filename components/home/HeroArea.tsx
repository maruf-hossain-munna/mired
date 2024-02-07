import React from 'react';
import Container from '../common/Container';
import Heading from '../common/heading/Heading';
import Button from '../common/button/Buttton';
import Image from 'next/image';

const HeroArea = () => {
    return (
        <div className="relative bg-[#F4F2F6] lg:bg-[url('/images/home-bg.png')] min-h-screen overflow-hidden flex items-center bg-cover">
            <Container>
                <div className='  mx-auto'>
                    
                    <div className=' text-center -mt-10'>
                        <div className='max-w-[1020px] z-50 mx-auto text-center '>
                            <Heading
                                title="Ready to Turn Your Website into a Revenue Powerhouse?"
                                center
                                custom='uppercase text-[24px] md:text-[55px] lg:text-[68px] font-bold leading-tight'
                            />
                            <p className='mt-3 mb-6 text-xs md:text-[15px] lg:text-[16px] px-0 lg:px-20 leading-7'>
                                We don&apos;t just build websites. We turn your digital presence into a revenue magnet by incorporating profit-driven features such as courses, newsletters, and paid subscriptions and strategically market to maximize your reach.
                            </p>
                        </div>
                       
                        <Button
                            label='Book Your Consultation Today'
                        />

                        {/* <button className="uppercase rounded-10 outline-none focus:outline-none text-sm sm:text-base font-bold font-manrope relative py-2 px-10 h-14 inline-flex items-center  justify-center bg-skin-blue-800 hover:bg-skin-blue-800/90 text-white before:absolute before:w-full before:h-full before:bg-skin-pink-300 before:-z-10 before:-top-2 before:rounded-10 before:-left-2 after:absolute  after:w-full after:h-full  after:bg-skin-yellow-600 after:-z-10 after:top-2 after:rounded-10 after:left-2 ">
                            Book Your Consultation Today
                        </button> */}
                    </div>
                </div>
            </Container>

            <div className=" z-10 absolute  bottom-[-60%] left-[-30%] w-[350px] h-[150px] lg:w-[600px] lg:h-[600px] rounded-full  bg-pink-500 blur-[300px] opacity-100" />
            <div className=" z-10 absolute  top-[-40%] right-[-30%] w-[350px] h-[150px] lg:w-[600px] lg:h-[600px] rounded-full  bg-pink-500 blur-[300px] opacity-100" />

        </div>
    );
};

export default HeroArea;