import React, { useState } from 'react';

import NoSeatPreference from './Subpage-Booking/NoSeatPreference';
import SpecificSeat from './Subpage-Booking/SpecificSeat';
import AisleMiddleWindow from './Subpage-Booking/AisleMiddleWindow';
import SeatWithParty from './Subpage-Booking/SeatWithParty';

import { AdminNav } from '../Components/AdminNav';

function BookingTickets() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    setSelectedOption(null);
  };

  return (
    <div className='h-screen'>
      <AdminNav />
      <div className='bg-blue-400 flex items-center justify-center h-full'>
        <div>
          <div
            className="h-screen bg-cover bg-center flex items-center justify-center p-10"
          >
            <div className="bg-black p-20 text-white rounded-md text-center">
              {selectedOption ? (
                // Render the selected component
                renderSelectedComponent(selectedOption, handleBack)
              ) : (
                // Render the options when no option is selected
                renderOptionButtons(handleOptionSelect)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderSelectedComponent = (selectedOption, onBack) => {
  switch (selectedOption) {
    case 'NoSeatPreference':
      return <NoSeatPreference onBack={onBack} />;
    case 'SpecificSeat':
      return <SpecificSeat onBack={onBack} />;
    case 'AisleMiddleWindow':
      return <AisleMiddleWindow onBack={onBack} />;
    case 'SeatWithParty':
      return <SeatWithParty onBack={onBack} />;
    default:
      return null;
  }
};

const renderOptionButtons = (handleOptionSelect) => (
  <div>
    <h1 className="font-Inter-Black text-3xl leading-normal mb-7 font-bold">
      How would you like to fly today?
    </h1>
    <div className="grid grid-cols-2 gap-4">
      {/* Four rectangle buttons */}
      <button
        className="bg-white text-black py-2 px-4 rounded-md w-full hover:bg-gray-100 relative"
        onClick={() => handleOptionSelect('NoSeatPreference')}
      >
        No Seat Preference
      </button>
      <div>
        <p className='text-green-500'> Save 5$ | 500 miles </p>
      </div>
      <button
        className="bg-white text-black py-2 px-4 rounded-md w-full hover:bg-gray-100"
        onClick={() => handleOptionSelect('SpecificSeat')}
      >
        A specific seat (1A, 3C, etc)
      </button>
      <div>
        <p className='text-red-500'> Spend 6$ | 750 miles </p>
      </div>
      <button
        className="bg-white text-black py-2 px-4 rounded-md w-full hover:bg-gray-100"
        onClick={() => handleOptionSelect('AisleMiddleWindow')}
      >
        Aisle / Middle / Window seat
      </button>
      <div>
        <p className='text-red-500'> Spend 0-4$ | 0-400 miles </p>
      </div>
      <button
        className="bg-white text-black py-2 px-4 rounded-md w-full hover:bg-gray-100"
        onClick={() => handleOptionSelect('SeatWithParty')}
      >
        Seat with party
      </button>
      <div>
        <p className='text-red-500'> Spend 5$ | 500 miles </p>
      </div>
    </div>
  </div>
);

export default BookingTickets;
