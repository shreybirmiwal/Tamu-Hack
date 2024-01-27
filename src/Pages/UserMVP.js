import React from 'react'
import SeatCard from '../Components/SeatCard';
import Aisle from '../Components/Aisle';

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

    <div className='grid grid-cols-2'>
        <div className="grid grid-cols-7 gap-4">
            {seatList.map((seat, index) => (
                <React.Fragment key={index}>
                    <SeatCard seatNumber={seat.seatNumber} isTaken={seat.isTaken} />

                    {(index + 1) % 3 === 0 && (index + 1) % 6 !== 0 && (
                        <Aisle />
                    )}
                    
                </React.Fragment>
            ))}
        </div>
    </div>


  )
}

export default UserMVP
