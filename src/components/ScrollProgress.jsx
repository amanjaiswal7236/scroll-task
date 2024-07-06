import React, { useEffect, useState } from 'react';

const ScrollProgress = ({ totalPages }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(progress);

        const pageHeight = scrollHeight / (totalPages - 1);
        const pageIndex = Math.floor(scrollTop / pageHeight);
        setCurrentPage(pageIndex);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const progressCircumference = circumference * 0.75;
    const calculatePointPosition = (index) => {
        const angle = (index / (totalPages - 1)) * 270 - 135;
        const angleInRadians = (angle * Math.PI) / 180;
        const x = 100 + radius * Math.cos(angleInRadians);
        const y = 100 + radius * Math.sin(angleInRadians);
        return { x, y };
    };

    const points = Array.from({ length: totalPages }, (_, i) => calculatePointPosition(i));

    return (
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <circle
                cx="100"
                cy="100"
                r={radius}
                stroke="white"
                strokeWidth="0.1"
                fill="none"
                strokeDasharray={`${progressCircumference}, ${circumference}`}
                transform="rotate(-135 100 100)"
            />
            <circle
                cx="100"
                cy="100"
                r={radius}
                stroke="white"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray={`${progressCircumference}, ${circumference}`}
                strokeDashoffset={circumference * (1 - scrollProgress / 100) * 0.75}
                transform="rotate(-135 100 100)"
            />
            {points.map((point, index) => (
                <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r="3"
                    fill={index <= currentPage ? 'white' : 'gray'}
                />
            ))}
        </svg>
    );
};

export default ScrollProgress;
