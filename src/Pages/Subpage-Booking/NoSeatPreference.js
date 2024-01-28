import React from 'react';

import { db } from '../../firebase';
import { getDocs, collection, doc, updateDoc, arrayUnion, increment } from 'firebase/firestore';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NoSeatPreference = ({ onBack }) => {
  
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
  }

  const comfirmNoPref = async () => {

    const documentRef = doc(db, 'default', 'default');
    let updatedSeatsTaken;
    updatedSeatsTaken = await updateDoc(documentRef, {
      Total: increment(-1)
    });

    success()

    setTimeout(() => {
      window.location.reload();
    }, 1000);

  }

  return (
    <div className="bg-black p-20 text-white rounded-md text-center">

      <div className="flex justify-between items-center">
        <div className='mr-10'>
          <h2 className='text-3xl font-bold'>No Seat Preference</h2>
        </div>
        <div>
          <button onClick={onBack} className='text-xl font-bold bg-gray-200 p-5 hover:bg-gray-400 rounded-md text-black'>Back</button>
        </div>
      </div>

      <button onClick={comfirmNoPref} className='text-xl font-bold hover:bg-gray-400 bg-gray-200 p-3 mt-10 rounded-md text-black'>Comfirm book of no seating preference </button>
      <p className='mt-5 text-green-500'> And reward 5$ | 500 mileage points </p>


      <ToastContainer/>

    </div>
  );
};

export default NoSeatPreference;
