import React from 'react';
import Container from '../common/Container';
import Heading from '../common/heading/Heading';
import Button from '../common/button/Buttton';
import Image from 'next/image';

const HeroArea = () => {
    return (
        <div className="bg-[url('/images/home-hero.png')] bg-cover pt-24 pb-40">
            <Container>
                <div className=' max-w-[1350px] mx-auto'>
                    <div className='hidden w-full lg:flex justify-end -mb-36'>
                        <Image
                            src='/images/circle-ball.png'
                            alt='Circle ball'
                            width={285}
                            height={285}
                        />
                    </div>
                    <div className=' text-center -mt-10'>
                        <div className='max-w-[1020px] mx-auto text-center '>
                            <Heading
                                title="Ready to Turn Your Website into a Revenue Powerhouse?"
                                center
                                custom='uppercase text-[35px] md:text-[55px] lg:text-[68px] font-semibold leading-tight'
                            />
                            <p className='mt-3 mb-6 text-sm md:text-[15px] lg:text-[16px] px-0 lg:px-20 leading-7'>
                                We do not just build websites. We turn your digital presence into a revenue magnet by incorporating profit-driven features such as courses, newsletters, and paid subscriptions and strategically market to maximize your reach.
                            </p>
                        </div>
                        <div className='hidden lg:flex justify-between -mt-12'>
                            <div className="w-16 md:w-20 h-16 md:h-20 p-4 md:p-4 border border-[#CFC9D4] rounded-full bg-white flex justify-center items-center">
                                <Image
                                    src='/images/design-icon.png'
                                    alt='design icon'
                                    width={40}
                                    height={40}

                                />
                            </div>
                            <div className="w-16 md:w-20 h-16 md:h-20 p-4 md:p-4 border border-[#CFC9D4] rounded-full bg-white flex justify-center items-center">
                                <Image
                                    src='/images/design-icon.png'
                                    alt='design icon'
                                    width={40}
                                    height={40}

                                />
                            </div>
                        </div>
                        <Button
                            label='Book Your Consultation Today'
                        />
                    </div>

                    <div className='hidden lg:flex justify-between max-w-[930px] mx-auto'>
                        <div className=" w-16 md:w-20 h-16 md:h-20 p-4 md:p-4 border border-[#CFC9D4] rounded-full bg-white flex justify-center items-center">
                            <Image
                                src='/images/design-icon.png'
                                alt='design icon'
                                width={40}
                                height={40}

                            />
                        </div>
                        <div className="w-16 md:w-20 h-16 md:h-20 p-4 md:p-4 border border-[#CFC9D4] rounded-full bg-white flex justify-center items-center">
                            <Image
                                src='/images/design-icon.png'
                                alt='design icon'
                                width={40}
                                height={40}

                            />
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default HeroArea;