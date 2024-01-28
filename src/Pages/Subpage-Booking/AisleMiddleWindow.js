import React, {useState} from 'react';

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

  const [selectedIcon, setSelectedIcon] = useState(null);
  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="bg-black p-20 text-white rounded-md text-center">
      

      <svg xmlns="http://www.w3.org/2000/svg" onClick={handleIconClick("aisle")} viewBox="0 0 50 50">
          <path d="M 2 8 L 2 10 L 12 17 L 12 15 L 2 8 z M 19 8 C 17.346 8 16 9.346 16 11 L 16 22 L 18 22 C 19.654 22 21 23.346 21 25 L 21 28 L 29 28 L 29 25 C 29 23.346 30.346 22 32 22 L 34 22 L 34 11 C 34 9.346 32.654 8 31 8 L 19 8 z M 43 8 C 41.35503 8 40 9.3550302 40 11 L 40 24 L 39 24 A 1.0001 1.0001 0 0 0 38.90625 24 A 1.0001 1.0001 0 0 0 38 25 L 38 30 L 38 34 C 38 35.093063 38.906937 36 40 36 L 48 36 L 48 34 L 40 34 L 40 30 L 40 26 L 41 26 L 41 30 A 1.0001 1.0001 0 0 0 42 31 L 48 31 L 48 29 L 43 29 L 43 25 A 1.0001 1.0001 0 0 0 42 24 L 42 11 C 42 10.43497 42.43497 10 43 10 L 48 10 L 48 8 L 43 8 z M 15 24 C 14.448 24 14 24.448 14 25 L 14 34 C 14 35.103 14.897 36 16 36 L 34 36 C 35.103 36 36 35.103 36 34 L 36 25 C 36 24.448 35.553 24 35 24 L 32 24 C 31.447 24 31 24.448 31 25 L 31 30 L 19 30 L 19 25 C 19 24.448 18.552 24 18 24 L 15 24 z M 12 34 L 2 40 L 2 42 L 12 36 L 12 34 z M 17 37 C 17 37.583 16.4555 39.5095 16.0625 40.6875 C 15.9605 40.9935 15.9995 41.33375 16.1875 41.59375 C 16.3745 41.85575 16.678 42 17 42 L 33 42 C 33.321 42 33.6245 41.85575 33.8125 41.59375 C 34.0005 41.33275 34.0395 40.9915 33.9375 40.6875 C 33.5435 39.5105 33 37.585 33 37 L 17 37 z M 41 37 C 41 37.17414 40.774252 38.244338 40.53125 39.09375 C 40.288248 39.943162 40.0625 40.6875 40.0625 40.6875 A 1.0001 1.0001 0 0 0 41 42 L 48 42 L 48 40 L 42.34375 40 C 42.3953 39.828841 42.41475 39.845023 42.46875 39.65625 C 42.725748 38.757912 43 37.83486 43 37 L 41 37 z"/>
      </svg>

      <img
        src={MiddleIcon}
        alt="Middle Icon"
        className="w-8 h-8 cursor-pointer mx-2"
        onClick={() => handleIconClick("middle")}
      />
      <img
        src={WindowIcon}
        alt="Window Icon"
        className="w-8 h-8 cursor-pointer mx-2"
        onClick={() => handleIconClick("window")}
      />

      <ToastContainer />
    </div>
  );
};

export default AisleMiddleWindow;
