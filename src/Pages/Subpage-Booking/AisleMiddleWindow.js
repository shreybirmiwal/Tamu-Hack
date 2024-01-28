import React from 'react';

import { db } from '../../firebase';
import { getDocs, collection, doc, updateDoc, arrayUnion, increment } from 'firebase/firestore';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AisleMiddleWindow = ({ onBack }) => {

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

  const comfirm = async () => {

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
    <div>
      <h2>AisleMiddleWindow Preference</h2>
      {/* Your component content */}
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default AisleMiddleWindow;