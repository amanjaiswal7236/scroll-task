import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollProgress from '../components/ScrollProgress';

const Page2 = () => {
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
    const mainTextStyle = {
        opacity: 1 - scrollProgress / 100, // Example fading out based on scroll progress
        y: scrollProgress * 2, // Example vertical movement based on scroll progress
    };

    const viewCaseStudyStyle = {
        opacity: Math.min(1, 1.5 - scrollProgress * 0.015), // Example fading out based on scroll progress
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen w-full">
            {/* Left Section */}
            <div className="relative bg-blue-800 text-white flex flex-col justify-center items-center p-8 h-full w-full lg:w-[45%]">
                <div className="relative flex flex-col justify-center items-center mt-16 md:mt-32 w-full">
                    {/* Scroll Indicator */}
                    <div className="absolute top-1/4 left-96 transform -translate-x-10 -translate-y-1/3 bg-blue-800 rounded-full h-72 w-72 md:h-80 md:w-80">
                        <ScrollProgress totalPages='7' />
                    </div>
                    {/* Main Text */}
                    <motion.div 
                        style={mainTextStyle}
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-10 z-10 text-left w-full px-8 lg:px-0 lg:text-right"
                    >
                        <p className="text-xl md:text-xl mt-2">The Future of</p>
                        <motion.h1 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-6xl md:text-7xl font-bold"
                        >
                            Finance
                        </motion.h1>
                        <p className="text-xl md:text-xl mt-2">is here</p>
                    </motion.div>
                </div>
                {/* Company Info */}
                <div className="text-left z-10 mt-32">
                    <p className="text-4xl md:text-5xl font-bold">ABC 234</p>
                    <p className="text-lg md:text-xl mt-2">We are the best web development</p>
                    <p className="text-lg md:text-xl mt-2">in the world</p>
                </div>
                {/* Links */}
                <div className="relative w-full mt-auto mb-8 lg:pl-8">
                    <a href="/case-study" className="absolute left-0 text-lg md:text-xl font-extralight" style={viewCaseStudyStyle}>Coming Soon</a>
                    <button className="absolute right-0 text-lg md:text-xl">Skip</button>
                </div>
            </div>
            {/* Right Section */}
            <div className="bg-indigo-950 flex justify-center items-center p-8 h-full w-full lg:w-[55%]">
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

export default Page2;
