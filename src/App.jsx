import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';

const pages = [
    { id: 'page1', component: <Page1 /> },
    { id: 'page2', component: <Page2 /> },
    { id: 'page3', component: <Page3 /> },
    { id: 'page4', component: <Page4 /> },
    { id: 'page5', component: <Page5 /> },
    { id: 'page6', component: <Page6 /> },
    { id: 'page7', component: <Page7 /> }
];

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleScroll = () => {
        const pageHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const newPage = Math.round(scrollY / pageHeight);
        setCurrentPage(newPage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ height: `${pages.length * 100}vh` }}>
            <AnimatePresence>
                {pages.map(({ id, component }, index) => (
                    index === currentPage && (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                            className="page"
                            style={{
                                position: 'fixed',
                                width: '100%',
                                height: '100vh',
                                top: 0,
                                left: 0,
                                zIndex: index
                            }}
                        >
                            {component}
                        </motion.div>
                    )
                ))}
            </AnimatePresence>
        </div>
    );
};

export default App;
