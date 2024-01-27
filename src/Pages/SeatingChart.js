import React, { useState } from 'react';

function SeatingChart() {
  const [selectedSeats, setSelectedSeats] = useState([]);


  const handleSeatClick = (seat) => {
    // Toggle selected seats on click
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const renderSeat = (row, col) => {
    const seat = `${row}${col}`;
    return (
      <td
        key={seat}
        className={`text-center hover:bg-blue-200 bg-gray-300`}
        onClick={() => handleSeatClick(seat)}
        style={{ width: '50px', height: '50px' }}
      >
        {seat}
      </td>
    );
  };

  return (
    <div className='grid grid-cols-2 h-screen'>
      <div className='bg-blue-400 flex items-center justify-center h-full'>
        <div className='h-full w-3/4 flex flex-col'>
          <div className='bg-gray-200 flex-grow p-4'>
            <h1 className='text-center'>Economy Class</h1>
            <table className='w-full mt-5'>
              <tbody>
                <tr>
                  {renderSeat(1, 'A')}
                  {renderSeat(1, 'B')}
                  {renderSeat(1, 'C')}
                  <td className='text-center'>&nbsp;</td>
                  {renderSeat(1, 'D')}
                  {renderSeat(1, 'E')}
                  {renderSeat(1, 'F')}
                </tr>
                <div className='mt-3'></div>
                <tr>
                  {renderSeat(2, 'A')}
                  {renderSeat(2, 'B')}
                  {renderSeat(2, 'C')}
                  <td className='text-center'>&nbsp;</td>
                  {renderSeat(2, 'D')}
                  {renderSeat(2, 'E')}
                  {renderSeat(2, 'F')}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>{/* Other content in the second column */}</div>
    </div>
  );
}

export default SeatingChart;
