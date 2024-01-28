import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../firebase';
import { getDocs, collection, doc, updateDoc, arrayUnion, increment } from 'firebase/firestore';

const SpecificSeat = ({ onBack }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatsReserved, setSeatsReserved] = useState([]);
  const [totalSeats, setTotalSeats] = useState();
  const [totalAisle, setTotalAisle] = useState();
  const [totalWindow, setTotalWindow] = useState();
  const [totalMiddle, setTotalMiddle] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'default'));
        const seatsTaken = [];
        querySnapshot.forEach((doc) => {
          seatsTaken.push(...doc.data().seatsTaken);
          setTotalSeats(doc.data().Total);
          setTotalAisle(doc.data().Aisle);
          setTotalWindow(doc.data().Window);
          setTotalMiddle(doc.data().Middle);
        });
        console.log("TAKEN SEATS", seatsTaken);
        setSeatsReserved(seatsTaken);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const success = () => {
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
  };

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([seat]);
    }
  };

  const confirm = async () => {
    const documentRef = doc(db, 'default', 'default');
    let updatedSeatsTaken;

    var seatNu = selectedSeats[0].charAt(selectedSeats[0].length - 1);
    if (seatNu === 'A' || seatNu === 'F') {
      updatedSeatsTaken = await updateDoc(documentRef, {
        seatsTaken: arrayUnion(...selectedSeats),
        Window: increment(-1),
        Total: increment(-1)
      });
    }
    if (seatNu === 'B' || seatNu === 'E') {
      updatedSeatsTaken = await updateDoc(documentRef, {
        seatsTaken: arrayUnion(...selectedSeats),
        Middle: increment(-1),
        Total: increment(-1)
      });
    }
    if (seatNu === 'C' || seatNu === 'D') {
      updatedSeatsTaken = await updateDoc(documentRef, {
        seatsTaken: arrayUnion(...selectedSeats),
        Aisle: increment(-1),
        Total: increment(-1)
      });
    }

    success();

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const renderSeat = (row, col) => {
    const seat = `${row}${col}`;
    const isReserved = seatsReserved.includes(seat);

    let seatClass = 'text-center rounded-md';
    seatClass += ' ml-2 mt-2';

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

    const isAisleSeat = (seat) => {
      var seatNu = seat.charAt(seat.length - 1);
      if (seatNu === 'C' || seatNu === 'D') return true;
      return false;
    };

    const isWindowSeat = (seat) => {
      var seatNu = seat.charAt(seat.length - 1);
      if (seatNu === 'A' || seatNu === 'F') return true;
      return false;
    };

    const isMiddleSeat = (seat) => {
      var seatNu = seat.charAt(seat.length - 1);
      if (seatNu === 'B' || seatNu === 'E') return true;
      return false;
    };

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
  return (
    <div className="">  
      <div className='bg-blue-400 flex items-center justify-center h-screen'> {/* Adjusted height to be full screen */}
        <div className='h-full flex flex-col'> {/* Adjusted width to be 3/4 of the screen */}
          <div className='bg-gray-200 flex-grow p-4 h-full'> {/* Adjusted height to be full */}
            <h1 className='text-center'>Economy Class</h1>
            <table className='w-full mt-5'>
              <tbody>
                <tr>
                  {renderSeat(1, 'A')}
                  {renderSeat(1, 'B')}
                  {renderSeat(1, 'C')}
                  {renderSeat(1, 'D')}
                  {renderSeat(1, 'E')}
                  {renderSeat(1, 'F')}
                </tr>
                <tr>
                  <td className='text-center' style={{ height: '20px' }}></td>
                </tr>
                <tr>
                  {renderSeat(2, 'A')}
                  {renderSeat(2, 'B')}
                  {renderSeat(2, 'C')}
                  {renderSeat(2, 'D')}
                  {renderSeat(2, 'E')}
                  {renderSeat(2, 'F')}
                </tr>
                <tr>
                  {renderSeat(3, 'A')}
                  {renderSeat(3, 'B')}
                  {renderSeat(3, 'C')}
                  {renderSeat(3, 'D')}
                  {renderSeat(3, 'E')}
                  {renderSeat(3, 'F')}
                </tr>
                <tr>
                  {renderSeat(4, 'A')}
                  {renderSeat(4, 'B')}
                  {renderSeat(4, 'C')}
                  {renderSeat(4, 'D')}
                  {renderSeat(4, 'E')}
                  {renderSeat(4, 'F')}
                </tr>
                <tr>
                  {renderSeat(5, 'A')}
                  {renderSeat(5, 'B')}
                  {renderSeat(5, 'C')}
                  {renderSeat(5, 'D')}
                  {renderSeat(5, 'E')}
                  {renderSeat(5, 'F')}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );

};

export default SpecificSeat;