import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebase';
import { useEffect } from 'react';
import { getDocs, collection, doc, updateDoc, arrayUnion, increment } from 'firebase/firestore';

function SeatingChart() {

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatPreference, setSeatPreference] = useState('');
  const [familySize, setFamilySize] = useState(2);
  const [seatsReserved, setSeatsReserved] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'default'));
        const seatsTaken = [];
        querySnapshot.forEach((doc) => {
          seatsTaken.push(...doc.data().seatsTaken);
        });
        console.log("TAKEN SEATS", seatsTaken);
        setSeatsReserved(seatsTaken);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const setNoPreference = () => {
    setSelectedSeats([])
    setSeatPreference('No Preference');
  };

  const setAisle = () => {
    setSelectedSeats([])
    setSeatPreference('Aisle');
  };

  const setMiddle = () => {
    setSelectedSeats([])
    setSeatPreference('Middle');
  };

  const setWindow = () => {
    setSelectedSeats([])
    setSeatPreference('Window');
  };

  const setSpecificSeat = () => {
    setSeatPreference('Specific Seat');
  };

  const setWithFamily = () => {
    setSelectedSeats([])
    setSeatPreference('With Family');
  };

  const handleSeatClick = (seat) => {
    // Toggle selected seats on click
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
        setSelectedSeats([seat]);
    }
  };

  const handleSubmit = async () => {
    console.log(seatPreference);
    console.log(selectedSeats);
    console.log("FAM " + familySize);
  
    try {
      const documentRef = doc(db, 'default', 'default');
      let updatedSeatsTaken;
  
      if (seatPreference === 'Specific Seat' && selectedSeats.length > 0) {
        var seatNu = selectedSeats[0].charAt(selectedSeats[0].length - 1)
        if(seatNu == 'A' || seatNu == 'F') {
            updatedSeatsTaken = await updateDoc(documentRef, {
                seatsTaken: arrayUnion(...selectedSeats),
                Window: increment(-1),
              });    
        }
        if(seatNu == 'B' || seatNu == 'E') {
            updatedSeatsTaken = await updateDoc(documentRef, {
                seatsTaken: arrayUnion(...selectedSeats),
                Middle: increment(-1),
              });    
        }
        if(seatNu == 'C' || seatNu == 'D') {
            updatedSeatsTaken = await updateDoc(documentRef, {
                seatsTaken: arrayUnion(...selectedSeats),
                Aisle: increment(-1),
              });    
        }
        

      } else if (seatPreference === 'With Family' && familySize >= 2) {
        // You might handle family size logic here and update the seatsTaken array accordingly
        // For simplicity, let's assume it's just one seat
        //updatedSeatsTaken = await updateDoc(documentRef, {
        //  seatsTaken: arrayUnion('3A'), // Replace '3A' with the logic for determining the seat
        //});
      }
  
      console.log('Seats taken updated:', updatedSeatsTaken);
      toast.success('Seats reserved successfully!');
    } catch (error) {
      console.error('Error updating seats taken:', error);
      toast.error('Error updating seats taken');
    }
  };

  const renderSeat = (row, col) => {
    const seat = `${row}${col}`;
    const isReserved = seatsReserved.includes(seat);
  
    return (
      <td
        key={seat}
        className={`text-center ${
          isReserved ? 'bg-red-500 cursor-not-allowed' : 'hover:bg-blue-200'
        } bg-gray-300 ${selectedSeats.includes(seat) ? 'bg-green-500' : ''}`}
        onClick={() => (!isReserved ? handleSeatClick(seat) : null)}
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

      <div className='p-4 text-center'>
  <button
    onClick={setNoPreference}
    className={`bg-gray-300 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-md m-1 ${
      seatPreference === 'No Preference' ? 'bg-blue-200' : ''
    }`}
  >
    No Preference
  </button>
  <br />
  <button
    onClick={setAisle}
    className={`bg-gray-300 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-md m-1 ${
      seatPreference === 'Aisle' ? 'bg-blue-200' : ''
    }`}
  >
    Aisle
  </button>
  <br />
  <button
    onClick={setMiddle}
    className={`bg-gray-300 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-md m-1 ${
      seatPreference === 'Middle' ? 'bg-blue-200' : ''
    }`}
  >
    Middle
  </button>
  <br />
  <button
    onClick={setWindow}
    className={`bg-gray-300 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-md m-1 ${
      seatPreference === 'Window' ? 'bg-blue-200' : ''
    }`}
  >
    Window
  </button>
  <br />
  <div className='mt-3'>
            <button
            onClick={setSpecificSeat}
            className={`bg-gray-300 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-md ${
                seatPreference === 'Specific Seat' ? 'bg-blue-200' : ''
            }`}
            >
            Specific Seat {selectedSeats[0]}
            </button>
            <input
            type='text'
            placeholder='Click on Seats'
            value={selectedSeats.join(', ')}
            readOnly
            className='ml-2 p-2 border rounded-md'
            />
        </div>
        <div className='mt-3'>
            <button
            onClick={setWithFamily}
            className={`bg-gray-300 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-md ${
                seatPreference === 'With Family' ? 'bg-blue-200' : ''
            }`}
            >
            With Family
            </button>
            <div className='ml-2'>
            <input
                type='number'
                placeholder='Family Size'
                value={familySize}
                onChange={(e) => setFamilySize(e.target.value)}
                className='p-2 border rounded-md'
            />
            </div>
        </div>
        <div className='mt-3'>
            <button
            onClick={handleSubmit}
            className='bg-blue-200 hover:bg-blue-400 text-white px-4 py-2 rounded-md'
            >
            Submit
            </button>
        </div>
        <ToastContainer/>

    </div>
    
    </div>
  );
}

export default SeatingChart;
