import React from 'react'
import SeatCard from '../Components/SeatCard';

const seatList = [];

for (let row = 1; row <= 20; row++) {
    seatList.push(
      { row: row, seatNumber: `${row}A`, isTaken: false, type: 'window', seat: row*6+1 },
      { row: row, seatNumber: `${row}B`, isTaken: false, type: 'middle', seat: row*6+2  },
      { row: row, seatNumber: `${row}C`, isTaken: false, type: 'aisle', seat: row*6+3  },
      { row: row, seatNumber: `${row}D`, isTaken: false, type: 'aisle', seat: row*6+4 },
      { row: row, seatNumber: `${row}E`, isTaken: false, type: 'middle', seat: row*6+5  },
      { row: row, seatNumber: `${row}F`, isTaken: false, type: 'window',seat: row*6+6  }
    );
  }

function UserMVP() {
  return (

    <div>
        {seatList.map((seat, index) => (
            ((index+1) % 3 === 0 && (index+1) % 6 !== 0) ? (
            <>
                <SeatCard key={index} seatNumber={seat.seatNumber} isTaken={seat.isTaken} />
                EWMPTY SEAT
            </>
            ) : (
                ((index+1) % 3 === 0 && (index+1) % 6 == 0) ? (
                    <>
                <SeatCard key={index} seatNumber={seat.seatNumber} isTaken={seat.isTaken} />
                NEXT ROW
                </>
            ) : (
                <SeatCard key={index} seatNumber={seat.seatNumber} isTaken={seat.isTaken} />
            )
            )
        ))}
    </div>

  )
}

export default UserMVP
