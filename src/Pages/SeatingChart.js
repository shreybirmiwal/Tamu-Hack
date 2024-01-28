import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebase';
import { useEffect } from 'react';
import { getDocs, collection, doc, updateDoc, arrayUnion, increment } from 'firebase/firestore';

function SeatingChart() {

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatPreference, setSeatPreference] = useState('');
  const [seatsReserved, setSeatsReserved] = useState([]);


  const OGTOTAL = 10
  const [totalSeats, setTotalSeats] = useState()
  const [totalAisle, setTotalAisle] = useState()
  const [totalWindow, setTotalWindow] = useState()
  const [totalMiddle, setTotalMiddle] = useState()


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

    if(seatPreference === ""){
        toast.error('Please select a type of seat', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        return
    }

    console.log(seatPreference);
    console.log(selectedSeats);
  
    try {
      const documentRef = doc(db, 'default', 'default');
      let updatedSeatsTaken;
  
      if (seatPreference === 'Specific Seat' && selectedSeats.length > 0) {
        var seatNu = selectedSeats[0].charAt(selectedSeats[0].length - 1)
        if(seatNu === 'A' || seatNu === 'F') {
            updatedSeatsTaken = await updateDoc(documentRef, {
                seatsTaken: arrayUnion(...selectedSeats),
                Window: increment(-1),
                Total: increment(-1)
              });    
        }
        if(seatNu === 'B' || seatNu === 'E') {
            updatedSeatsTaken = await updateDoc(documentRef, {
                seatsTaken: arrayUnion(...selectedSeats),
                Middle: increment(-1),
                Total: increment(-1)
              });    
        }
        if(seatNu === 'C' || seatNu === 'D') {
            updatedSeatsTaken = await updateDoc(documentRef, {
                seatsTaken: arrayUnion(...selectedSeats),
                Aisle: increment(-1),
                Total: increment(-1)
              });    
        }
        

      } else if (seatPreference === 'With Family') {

        const documentRef = doc(db, 'default', 'default');
        let updatedSeatsTaken;
    
        var arT = areSeatsNextToEachOther(OGTOTAL)
        if(arT.length !== 0){
            updatedSeatsTaken = await updateDoc(documentRef, {
                seatsTaken: arrayUnion(...arT),
                Aisle: increment(-1),
                Window: increment(-1),
                Middle: increment(-1),

                Total: increment(-3)
              });  
            console.log("TRUE")
        } else {
            toast.error('No seats for family seating available', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            console.log("FALSE")
        }


      } else if(seatPreference == "Window"){
            updatedSeatsTaken = await updateDoc(documentRef, {
                Window: increment(-1),
                Total: increment(-1)
            });    
      }
      else if(seatPreference == "Middle"){
        updatedSeatsTaken = await updateDoc(documentRef, {
            Middle: increment(-1),
            Total: increment(-1)
        });    
    }
    else if(seatPreference == "Aisle"){
        updatedSeatsTaken = await updateDoc(documentRef, {
            Aisle: increment(-1),
            Total: increment(-1)
        });    
    }
    else if(seatPreference == "No Preference"){
        updatedSeatsTaken = await updateDoc(documentRef, {
            Total: increment(-1)
        });    
    }
  
      console.log('Seats taken updated:', updatedSeatsTaken);

      toast.success('Seats updated successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } catch (error) {
      console.error('Error updating seats taken:', error);
      toast.error('Error updating seats', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }

    setTimeout(() => {
        window.location.reload();
      }, 1000);
  };
  function areSeatsNextToEachOther(totalSeats) {
    const result = [];
    console.log("SEATS RESERVED" + seatsReserved)
    if(!(totalMiddle >= 1 && totalAisle >= 1 && totalWindow >= 1)) return result;

    for (let i = 1; i <= totalSeats / 6; i++) {
      if (!seatsReserved.includes(i + "A") && !seatsReserved.includes(i + "B") && !seatsReserved.includes(i + "C")) {
        result.push(i + "A", i + "B", i + "C");
      }
      if (!seatsReserved.includes(i + "D") && !seatsReserved.includes(i + "E") && !seatsReserved.includes(i + "F")) {
        result.push(i + "D", i + "E", i + "F");
      }
    }
  
    return result;
  }

  const renderSeat = (row, col) => {
    const seat = `${row}${col}`;
    const isReserved = seatsReserved.includes(seat);
  
    let seatClass = 'text-center rounded-md'; // Added rounded-md for rounded seats
    seatClass += ' ml-2 mt-2'; // Added margin classes for distance between seats
  
    if (totalSeats <= 0) {
      seatClass += ' bg-red-500 cursor-not-allowed';
    } else {
      if (totalAisle <= 0 && isAisleSeat(seat)) {
        seatClass += ' bg-red-500 cursor-not-allowed';
      } else if (totalWindow <= 0 && isWindowSeat(seat)) {
        seatClass += ' bg-red-500 cursor-not-allowed';
      } else if (totalMiddle <= 0 && isMiddleSeat(seat)) {
        seatClass += ' bg-red-500 cursor-not-allowed';
      } else {
        seatClass += isReserved ? ' bg-red-500 cursor-not-allowed' : ' hover:bg-blue-200';
        seatClass += selectedSeats.includes(seat) ? ' bg-green-500' : '';
      }
    }
  
    return (
      <td
        key={seat}
        className={seatClass}
        onClick={() => (!isReserved ? handleSeatClick(seat) : null)}
        style={{ width: '50px', height: '50px' }}
      >
        {seat}
      </td>
    );
  };
  
  

  const isAisleSeat = (seat) => {
    var seatNu = seat.charAt(seat.length - 1)
    if(seatNu == 'C' || seatNu == 'D') return true;
    return false;
  };
  
  const isWindowSeat = (seat) => {
    var seatNu = seat.charAt(seat.length - 1)
    if(seatNu == 'A' || seatNu == 'F') return true;
    return false;
  };
  
  const isMiddleSeat = (seat) => {
    var seatNu = seat.charAt(seat.length - 1)
    if(seatNu == 'B' || seatNu == 'E') return true;
    return false;
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
  <tr>
    <td className='text-center' style={{ height: '20px' }}></td> {/* Adjust the height as needed for spacing */}
  </tr>
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
  className={`${
    totalAisle <= 0 || totalSeats <= 0
      ? 'bg-red-500 cursor-not-allowed'
      : 'bg-gray-300 hover:bg-blue-200'
  } text-blue-700 px-4 py-2 rounded-md m-1 ${
    seatPreference === 'Aisle' ? 'bg-blue-200' : ''
  }`}
  disabled={totalAisle <= 0 || totalSeats <= 0}
>
  Aisle
</button>
  <br />
  <button
  onClick={setMiddle}
  className={`${
    totalMiddle <= 0 || totalSeats <= 0
      ? 'bg-red-500 cursor-not-allowed'
      : 'bg-gray-300 hover:bg-blue-200'
  } text-blue-700 px-4 py-2 rounded-md m-1 ${
    seatPreference === 'Middle' ? 'bg-blue-200' : ''
  }`}
  disabled={totalMiddle <= 0 || totalSeats <= 0}
>
  Middle
</button>
  <br />
  <button
  onClick={setWindow}
  className={`${
    totalWindow <= 0 || totalSeats <= 0
      ? 'bg-red-500 cursor-not-allowed'
      : 'bg-gray-300 hover:bg-blue-200'
  } text-blue-700 px-4 py-2 rounded-md m-1 ${
    seatPreference === 'Window' ? 'bg-blue-200' : ''
  }`}
  disabled={totalWindow <= 0 || totalSeats <= 0}
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
            className={`${
                areSeatsNextToEachOther(OGTOTAL).length === 0
                ? 'bg-red-500 cursor-not-allowed'
                : 'bg-gray-300 hover:bg-blue-200'
            } text-blue-700 px-4 py-2 rounded-md ${
                seatPreference === 'With Family' ? 'bg-blue-200' : ''
            }`}
            disabled={areSeatsNextToEachOther(OGTOTAL).length === 0}
            >
            With Family
            </button>
            <div className='ml-2'>

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

        
        <button
            onClick={handleReset}
            className='bg-blue-200 hover:bg-blue-400 text-white px-4 py-2 rounded-md'
            >
            reset
            </button>

          <p> total available {totalSeats} </p>  
          <p> total aisle {totalAisle} </p>  
          <p> total middle {totalMiddle} </p>  
          <p> total window {totalWindow} </p>  

        <ToastContainer/>

    </div>
    
    </div>
  );
}

export default SeatingChart;
