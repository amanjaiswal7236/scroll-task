import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollProgress from '../components/ScrollProgress';

const Page1 = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Adjust styles based on scroll progress
    const viewCaseStudyStyle = {
        fontSize: `${Math.max(1, 1.5 - scrollProgress * 0.015)}rem`, // Example scaling based on scroll progress
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen w-full">
            {/* Left Section */}
            <div className="relative bg-purple-800 text-white flex flex-col justify-center items-center p-8 h-full w-full lg:w-[45%]">
                <div className="relative flex flex-col justify-center items-center mt-16 md:mt-32 ">
                    {/* Background Circle */}
                    {/* Scroll Indicator */}
                    <div className="absolute top-1/4 left-96 transform -translate-x-10 -translate-y-1/3 bg-purple-800 rounded-full h-72 w-72 md:h-80 md:w-80">
                        <ScrollProgress totalPages='7' />
                    </div>
                    {/* Main Text */}
                    <div className="mt-12 z-10 text-right">
                        <h1 className="text-6xl md:text-6xl font-bold">25M+ Downloads</h1>
                        <p className="text-xl md:text-xl mt-2">on appstore & google playstore</p>
                    </div>
                </div>
                {/* Award Section */}
                <div className="mt-8 lg:items-start z-10 bg-slate-400 rounded-2xl p-2 max-w-xs">
                    <a href="#" className="flex flex-col items-center rounded-lg md:flex-row md:max-w-sm">
                        <img className="object-cover w-16 h-16 rounded-full md:w-24 md:h-24 md:rounded-none md:rounded-s-lg" src="https://www.svgrepo.com/show/37070/award-symbol.svg" alt="Award Image" />
                        <div className="flex flex-col justify-between p-2 leading-normal">
                            <p className="mb-1 text-sm font-normal text-gray-700">Best Digital Experience</p>
                            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900">World Communication Awards</h5>
                        </div>
                    </a>
                </div>
                {/* Company Info */}
                <div className="text-center lg:text-left z-10 mt-8">
                    <p className="text-4xl md:text-5xl font-bold">ABC 123</p>
                    <p className="text-lg md:text-xl mt-2">We are the best web development company in the world</p>
                </div>
                {/* Links */}
                <div className="relative w-full mt-auto mb-8">
                    <a href="/case-study" className="absolute left-0 text-lg md:text-xl underline" style={viewCaseStudyStyle}>View Case Study</a>
                    <button className="absolute right-0 text-lg md:text-xl">Skip</button>
                </div>
            </div>
            {/* Right Section */}
            <div className="bg-gray-400 flex justify-center items-center p-8 h-full w-full lg:w-[55%]">
                <motion.img
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    src="https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww"
                    alt="Mobile Screen 1"
                    className="w-48 md:w-64 mx-4"
                />
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww"
                    alt="Mobile Screen 2"
                    className="w-48 md:w-64 mx-4"
                />
            </div>
        </div>
    );
};

export default Page1;
