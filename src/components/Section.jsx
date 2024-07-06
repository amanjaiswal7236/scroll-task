// Section.jsx
import React from 'react';

const Section = ({ id, title, description, imgSrc }) => {
  return (
    <div id={id} className="min-h-screen flex items-center justify-center bg-darkBlue text-white p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-8">{description}</p>
          <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full">View Case Study</button>
          <button className="ml-4 px-6 py-3 bg-transparent border border-white text-white font-bold rounded-full">Skip</button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img src={imgSrc} alt="Phone Screenshot" className="w-1/3" />
          <img src={imgSrc} alt="Phone Screenshot" className="w-1/3 ml-4" />
        </div>
      </div>
    </div>
  );
};

export default Section;
