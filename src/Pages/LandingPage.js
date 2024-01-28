// LandingPage.js

import React from 'react';
import backgroundImage from '../LANDING.png';
import { AdminNav } from '../Components/AdminNav';
const LandingPage = () => {
  return (
    <div>
          <AdminNav/>

    <div
      className="h-screen bg-cover bg-center flex flex-col items-start justify-center p-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="font-Inter-Black text-black text-8xl tracking-[-2.88px] leading-normal mb-4 font-bold">
        SeatWise
      </h1>
      <p className="text-black text-xl mb-6 font-Inter-Black">
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
