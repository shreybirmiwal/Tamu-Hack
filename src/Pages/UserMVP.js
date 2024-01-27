import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserMVP = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Replace the placeholder seat data with your actual seat data
    const generateSeats = (row) => [
      { row, seatNumber: `${row}A`, isTaken: false, type: 'window', seat: row * 6 + 1 },
      { row, seatNumber: `${row}B`, isTaken: false, type: 'middle', seat: row * 6 + 2 },
      { row, seatNumber: `${row}C`, isTaken: false, type: 'aisle', seat: row * 6 + 3 },
      { row, seatNumber: `${row}D`, isTaken: false, type: 'aisle', seat: row * 6 + 4 },
      { row, seatNumber: `${row}E`, isTaken: false, type: 'middle', seat: row * 6 + 5 },
      { row, seatNumber: `${row}F`, isTaken: false, type: 'window', seat: row * 6 + 6 },
    ];
  
    const handleSeatClick = (seat) => {
      if (selectedSeats.includes(seat)) {
        toast.error(`Seat ${seat} is already taken!`);
      } else {
        setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seat]);
      }
    };

  return (
    <div>
      <ul className="space-y-4">
        {/* Generate seat rows dynamically */}
        {[1, 2, 3, 4, 5, 6].map((row) => (
          <li key={row} className={`row row--${row}`}>
            <ol className="seats" type="A">
              {generateSeats(row).map((seat) => (
                <li key={seat.seatNumber} className={`seat ${seat.isTaken ? 'taken' : ''}`}>
                  <input
                    type="checkbox"
                    id={seat.seatNumber}
                    disabled={seat.isTaken}
                    onChange={() => handleSeatClick(seat.seatNumber)}
                  />
                  <label htmlFor={seat.seatNumber}>{seat.seatNumber}</label>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>

      <ToastContainer />
    </div>
  );
};

export default UserMVP;
