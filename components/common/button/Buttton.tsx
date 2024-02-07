import React from 'react';

interface ButtonProps {
    label: string,
    outline?: boolean,
    small?: boolean,
    custom?: string,

}

const Button: React.FC<ButtonProps> = ({
    label,
    outline,
    small,
    custom
}) => {
    return (
        <button
            className={`rounded-10 uppercase outline-none focus:outline-none sm:text-sm text-base font-bold font-manrope relative py-2 px-10 h-14 inline-flex items-center justify-center before:absolute before:w-full before:h-full before:bg-skin-pink-300 before:-z-20 before:-top-2 before:rounded-10 before:-left-2 after:absolute  after:w-full after:h-full  after:bg-skin-yellow-600 after:-z-20 after:top-2 after:rounded-10 after:left-2
            ${outline ? 'bg-white hover:bg-white/90 text-black' : 'bg-skin-blue-800 hover:bg-skin-blue-800/90 text-white'}
            ${custom ? custom : ''}
            `}>
            {label}

        </button>

    );
};

export default Button;