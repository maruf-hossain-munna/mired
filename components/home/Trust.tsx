import React from 'react';
import Container from '../common/Container';
import Heading from '../common/heading/Heading';

const Trust = () => {
    return (
        <div className="bg-[url('/images/tech-bg.png')] min-h-screen bg-bottom flex justify-center items-center border-t-2 border-black">
            <Container>
                <div className='max-w-[960px] mx-auto'>
                    <Heading
                        title="We use the tech that you trust most."
                        center
                        custom='text-[35px] md:text-[55px] lg:text-[96px] font-bold leading-none'
                    />
                </div>
            </Container>
        </div>
    );
};

export default Trust;