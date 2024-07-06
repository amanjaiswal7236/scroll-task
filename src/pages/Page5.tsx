import React from 'react';
import { motion } from 'framer-motion';
import ScrollProgress from '../components/ScrollProgress';

const Page5 = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen w-full">
            {/* Left Section */}
            <div className="relative bg-blue-900 text-white flex flex-col justify-center items-center p-8 h-full w-full lg:w-[45%]">
                <div className="relative flex flex-col justify-center items-center mt-16 md:mt-32">
                    {/* Scroll Indicator */}
                    <div className="absolute top-1/4 left-96 transform -translate-x-10 -translate-y-1/3 bg-blue-900 rounded-full h-72 w-72 md:h-80 md:w-80">
                        <ScrollProgress totalPages='7' />
                    </div>
                    {/* Main Text */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 z-10"
                    >
                        <p className="text-xl md:text-xl mt-2 text-left">Developing ERP Solution for</p>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-6xl md:text-7xl font-bold"
                        >
                            Text Headline
                        </motion.h1>
                        <p className="text-xl md:text-xl mt-2 text-right">in furniture industry</p>
                    </motion.div>
                </div>
                {/* Company Info */}
                <div className="text-center lg:text-left z-10 mt-8">
                    <p className="text-4xl md:text-4xl font-bold">ABC 678</p>
                    <p className="text-lg md:text-xl mt-2">Best since 2017</p>
                    <p className="text-lg md:text-xl mt-2">We offer wide range of </p>
                    <p className="text-lg md:text-xl mt-2">web development and app development</p>
                </div>
                {/* Links */}
                <div className="relative w-full mt-auto mb-8">
                    <a href="/case-study" className="absolute left-0 text-lg md:text-xl underline">View Case Study</a>
                    <button className="absolute right-0 text-lg md:text-xl">Skip</button>
                </div>
            </div>
            {/* Right Section */}
            <div className="bg-yellow-500 flex justify-center items-center p-8 h-full w-full lg:w-[55%]">
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

export default Page5;
