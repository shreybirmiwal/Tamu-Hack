import React from 'react'
import SeatCard from '../Components/SeatCard';

const seatList = [
    { seatNumber: '1A', isTaken: true },
    { seatNumber: '1B', isTaken: false },
    // Add more seat data as needed
  ];


function UserMVP() {
  return (
    <div>
        {seatList.map((seat, index) => (
            <SeatCard key={index} seatNumber={seat.seatNumber} isTaken={seat.isTaken} />
        ))}
    </div>
  )
}

export default UserMVP
