import React, { useState, useEffect } from 'react';
import { AdminNav } from '../Components/AdminNav';

import { db } from '../firebase';
import { getDocs, collection, doc, updateDoc, arrayUnion, increment } from 'firebase/firestore';

import NoSeatPreference from './Subpage-Booking/NoSeatPreference';
import SpecificSeat from './Subpage-Booking/SpecificSeat';
import AisleMiddleWindow from './Subpage-Booking/AisleMiddleWindow';
import SeatWithParty from './Subpage-Booking/SeatWithParty';

function BookingTickets() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    setSelectedOption(null);
  };


  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatsReserved, setSeatsReserved] = useState([]);
  const [totalSeats, setTotalSeats] = useState()
  const [totalAisle, setTotalAisle] = useState()
  const [totalWindow, setTotalWindow] = useState()
  const [totalMiddle, setTotalMiddle] = useState()
  const [seatPreference, setSeatPreference] = useState('');
  const [OGTOTAL, setOGTOTAL] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'default'));
        const seatsTaken = [];
        querySnapshot.forEach((doc) => {
          seatsTaken.push(...doc.data().seatsTaken);
          setTotalSeats(doc.data().Total)
          setTotalAisle(doc.data().Aisle)
          setTotalWindow(doc.data().Window)
          setTotalMiddle(doc.data().Middle)

        });
        console.log("TAKEN SEATS", seatsTaken);
        setSeatsReserved(seatsTaken);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  


  return (
    <div className='h-screen'>
      <AdminNav />
      
      <div className='bg-blue-400 flex items-center justify-center h-full'>
        <div>
          <div
            className="h-screen bg-cover bg-center flex items-center justify-center p-10"
          >
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
  );
}

const renderSelectedComponent = (selectedOption, onBack) => {
  switch (selectedOption) {
    case 'NoSeatPreference':
      return <NoSeatPreference onBack={onBack} />;
    case 'SpecificSeat':
      return <SpecificSeat onBack={onBack}/>;
    case 'AisleMiddleWindow':
      return <AisleMiddleWindow onBack={onBack} />;
    case 'SeatWithParty':
      return <SeatWithParty onBack={onBack} />;
    default:
      return null;
  }
};


const handleReset = async() => {
  const documentRef = doc(db, 'default', 'default');
  let updatedSeatsTaken;

  updatedSeatsTaken = await updateDoc(documentRef, {
      Total: 12,
      Aisle: 4,
      Window: 4,
      Middle: 4,
      seatsTaken: []
  });    
}

const renderOptionButtons = (handleOptionSelect) => (
  <div className="bg-black p-20 text-white rounded-md text-center">
  <h1 className="font-Inter-Black text-3xl leading-normal mb-7 font-bold">
      How would you like to fly today?
    </h1>
    <div className="grid grid-cols-2 gap-4">
      {/* Four rectangle buttons */}
      <button
        className="bg-white text-black py-2 px-4 rounded-md w-full hover:bg-gray-400 relative"
        onClick={() => handleOptionSelect('NoSeatPreference')}
      >
        No Seat Preference
      </button>
      <div>
        <p className='text-green-500'> Save 5$ | 500 miles </p>
      </div>
      <button
        className="bg-white text-black py-2 px-4 rounded-md w-full hover:bg-gray-400"
        onClick={() => handleOptionSelect('SpecificSeat')}
      >
        A specific seat (1A, 3C, etc)
      </button>
      <div>
        <p className='text-red-500'> Spend 6$ | 750 miles </p>
      </div>
      <button
        className="bg-white text-black py-2 px-4 rounded-md w-full hover:bg-gray-400"
        onClick={() => handleOptionSelect('AisleMiddleWindow')}
      >
        Aisle / Middle / Window seat
      </button>
      <div>
        <p className='text-red-500'> Spend 0-4$ | 0-400 miles </p>
      </div>
      <button
        className="bg-white text-black py-2 px-4 rounded-md w-full hover:bg-gray-400"
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



