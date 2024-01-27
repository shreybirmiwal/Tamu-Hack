import React, { useState } from 'react';
import SeatCard from '../Components/SeatCard';
import Aisle from '../Components/Aisle';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const seatList = [];

for (let row = 1; row <= 20; row++) {
  seatList.push(
    { row: row, seatNumber: `${row}A`, isTaken: false, type: 'window', seat: row * 6 + 1 },
    { row: row, seatNumber: `${row}B`, isTaken: false, type: 'middle', seat: row * 6 + 2 },
    { row: row, seatNumber: `${row}C`, isTaken: false, type: 'aisle', seat: row * 6 + 3 },
    { row: row, seatNumber: `${row}D`, isTaken: false, type: 'aisle', seat: row * 6 + 4 },
    { row: row, seatNumber: `${row}E`, isTaken: false, type: 'middle', seat: row * 6 + 5 },
    { row: row, seatNumber: `${row}F`, isTaken: false, type: 'window', seat: row * 6 + 6 }
  );
}

function UserMVP() {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelection = (seat) => {
    if (seat.isTaken) {
      toast.error('Seat is already booked!');
    } else {
      setSelectedSeat(seat);
      // You can perform additional actions based on the selected seat, such as updating state or making API calls.
    }
  };

  const handleSeatClick = (seat) => {
    if (seat.isTaken) {
      toast.error('Seat is already booked!');
    } else {
      // Mark the seat as taken
      seat.isTaken = true;
      // Additional logic for handling a clicked seat (if needed)
    }
  };

  const handleFamilySelection = () => {
    console.log("Selected 'With family of 3'");
  };

  return (
    <div className='grid grid-cols-2'>
      <div className="grid grid-cols-7">
        {seatList.map((seat, index) => (
          <React.Fragment key={index}>
            <SeatCard
              seatNumber={seat.seatNumber}
              isTaken={seat.isTaken}
              selected={selectedSeat === seat}
              onMouseOver={() => handleSeatSelection(seat)}
              onClick={() => handleSeatClick(seat)}
            />

            {(index + 1) % 3 === 0 && (index + 1) % 6 !== 0 && <Aisle />}
          </React.Fragment>
        ))}
      </div>

      <div className="p-4">
            <div className="mb-4">
                <button
                className={'mr-2 px-4 py-2 border rounded bg-blue-500 text-white'}
                onClick={() => handleSeatSelection('Any seat')}
                >
                Any seat
                </button>
                <button
                className={'mr-2 px-4 py-2 border rounded bg-blue-500 text-white'}
                onClick={() => handleSeatSelection('Aisle seat')}
                >
                Aisle seat
                </button>
                <button
                className={'mr-2 px-4 py-2 border rounded bg-blue-500 text-white'}
                onClick={() => handleSeatSelection('Middle seat')}
                >
                Middle seat
                </button>
                <button
                className={'mr-2 px-4 py-2 border rounded bg-blue-500 text-white'}
                onClick={() => handleSeatSelection('Window seat')}
                >
                Window seat
                </button>
                <button
                className={'mr-2 px-4 py-2 border rounded bg-blue-500 text-white'}
                onClick={() => handleSeatSelection('Specific seat')}
                >
                Specific seat
                </button>
                <button
                className={'px-4 py-2 border rounded bg-blue-500 text-white'}
                onClick={handleFamilySelection}
                >
                With family of 3
                </button>
            </div>
        </div>

      <ToastContainer />
    </div>
  );
}

export default UserMVP;
