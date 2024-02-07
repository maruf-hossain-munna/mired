import LetsTalk from '@/components/common/LetsTalk';
import React from 'react';
import ContactForm from './ContactForm';
import Faqs from '@/components/common/Faqs';
import ContactHero from './ContactHero';

const Contact = () => {
    return (
        <div>
            <ContactHero />
            <ContactForm />
            <Faqs />
            <LetsTalk />
        </div>
    );
};

export default Contact;