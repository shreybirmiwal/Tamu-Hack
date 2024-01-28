// LandingPage.js

import React, { useEffect, useState } from 'react';
import backgroundImage from '../LANDING.png';
import { AdminNav } from '../Components/AdminNav';

const LandingPage = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['text-purple-500', 'text-blue-500', 'text-green-500', 'text-orange-500'];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every second (1000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AdminNav />

      <div
        className="h-screen bg-cover bg-center flex flex-col items-start justify-center p-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="font-Inter-Black text-8xl tracking-[-2.88px] leading-normal mb-4 font-bold">
          Seat<span className={`inline-block transition-all duration-1000 ${colors[colorIndex]}`}>Wise</span>
        </h1>
        <p className="text-xl mb-6 font-Inter-Black">
          The secret to better airplane seating
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
