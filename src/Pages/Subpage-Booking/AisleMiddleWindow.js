import React, {useState, useEffect} from 'react';

import { db } from '../../firebase';
import { getDocs, collection, doc, updateDoc, arrayUnion, increment } from 'firebase/firestore';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AisleMiddleWindow = ({ onBack }) => {

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
  }

  const comfirm = async () => {

    if(selectedIcon == null){
      toast.error('Select a seating type', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return;
    }

    const documentRef = doc(db, 'default', 'default');
    let updatedSeatsTaken;

    if(selectedIcon == "window"){
      updatedSeatsTaken = await updateDoc(documentRef, {
        Total: increment(-1),
        Window: increment(-1)
      });
    }
    if(selectedIcon == "middle"){
      updatedSeatsTaken = await updateDoc(documentRef, {
        Total: increment(-1),
        Middle: increment(-1)
      });
    }
    if(selectedIcon == "aisle"){
      updatedSeatsTaken = await updateDoc(documentRef, {
        Total: increment(-1),
        Aisle: increment(-1)
      });
    }

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
    <div className="">
      
      <h1 className='text-center mb-20 text-3xl font-bold'> Choose the seat you want </h1>

      <div className="flex items-center space-x-60">

        <div
        className={`w-[200px] h-[200px] p-5 rounded-md ${selectedIcon === 'aisle' && totalSeats > 0 && totalAisle > 0 ? 'bg-green-200' : totalSeats <= 0 || totalAisle <= 0 ? 'bg-red-500 cursor-not-allowed' : ''}`}
        onClick={() => totalSeats > 0 && totalAisle > 0 && handleIconClick("aisle")}
        >
          <p className='text-center'> Aisle Seat </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M 2 8 L 2 10 L 12 17 L 12 15 L 2 8 z M 19 8 C 17.346 8 16 9.346 16 11 L 16 22 L 18 22 C 19.654 22 21 23.346 21 25 L 21 28 L 29 28 L 29 25 C 29 23.346 30.346 22 32 22 L 34 22 L 34 11 C 34 9.346 32.654 8 31 8 L 19 8 z M 43 8 C 41.35503 8 40 9.3550302 40 11 L 40 24 L 39 24 A 1.0001 1.0001 0 0 0 38.90625 24 A 1.0001 1.0001 0 0 0 38 25 L 38 30 L 38 34 C 38 35.093063 38.906937 36 40 36 L 48 36 L 48 34 L 40 34 L 40 30 L 40 26 L 41 26 L 41 30 A 1.0001 1.0001 0 0 0 42 31 L 48 31 L 48 29 L 43 29 L 43 25 A 1.0001 1.0001 0 0 0 42 24 L 42 11 C 42 10.43497 42.43497 10 43 10 L 48 10 L 48 8 L 43 8 z M 15 24 C 14.448 24 14 24.448 14 25 L 14 34 C 14 35.103 14.897 36 16 36 L 34 36 C 35.103 36 36 35.103 36 34 L 36 25 C 36 24.448 35.553 24 35 24 L 32 24 C 31.447 24 31 24.448 31 25 L 31 30 L 19 30 L 19 25 C 19 24.448 18.552 24 18 24 L 15 24 z M 12 34 L 2 40 L 2 42 L 12 36 L 12 34 z M 17 37 C 17 37.583 16.4555 39.5095 16.0625 40.6875 C 15.9605 40.9935 15.9995 41.33375 16.1875 41.59375 C 16.3745 41.85575 16.678 42 17 42 L 33 42 C 33.321 42 33.6245 41.85575 33.8125 41.59375 C 34.0005 41.33275 34.0395 40.9915 33.9375 40.6875 C 33.5435 39.5105 33 37.585 33 37 L 17 37 z M 41 37 C 41 37.17414 40.774252 38.244338 40.53125 39.09375 C 40.288248 39.943162 40.0625 40.6875 40.0625 40.6875 A 1.0001 1.0001 0 0 0 41 42 L 48 42 L 48 40 L 42.34375 40 C 42.3953 39.828841 42.41475 39.845023 42.46875 39.65625 C 42.725748 38.757912 43 37.83486 43 37 L 41 37 z"/>
          </svg>
        </div>

        <div
        className={`w-[200px] h-[200px] p-5 rounded-md ${selectedIcon === 'middle' && totalSeats > 0 && totalMiddle > 0 ? 'bg-green-200' : totalSeats <= 0 || totalMiddle <= 0 ? 'bg-red-500 cursor-not-allowed' : ''}`}
        onClick={() => totalSeats > 0 && totalMiddle > 0 && handleIconClick("middle")}
        >
          <p className='text-center'> Middle Seat </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M 2 8 L 2 10 L 7 10 C 7.5650302 10 8 10.43497 8 11 L 8 24 A 1.0001 1.0001 0 0 0 7.90625 24 A 1.0001 1.0001 0 0 0 7 25 L 7 29 L 2 29 L 2 31 L 8 31 A 1.0001 1.0001 0 0 0 9 30 L 9 26 L 10 26 L 10 30 L 10 34 L 2 34 L 2 36 L 10 36 C 11.093063 36 12 35.093063 12 34 L 12 30 L 12 25 A 1.0001 1.0001 0 0 0 11 24 L 10 24 L 10 11 C 10 9.3550302 8.6449698 8 7 8 L 2 8 z M 19 8 C 17.346 8 16 9.346 16 11 L 16 22 L 18 22 C 19.654 22 21 23.346 21 25 L 21 28 L 29 28 L 29 25 C 29 23.346 30.346 22 32 22 L 34 22 L 34 11 C 34 9.346 32.654 8 31 8 L 19 8 z M 43 8 C 41.35503 8 40 9.3550302 40 11 L 40 24 L 39 24 A 1.0001 1.0001 0 0 0 38.90625 24 A 1.0001 1.0001 0 0 0 38 25 L 38 30 L 38 34 C 38 35.093063 38.906937 36 40 36 L 48 36 L 48 34 L 40 34 L 40 30 L 40 26 L 41 26 L 41 30 A 1.0001 1.0001 0 0 0 42 31 L 48 31 L 48 29 L 43 29 L 43 25 A 1.0001 1.0001 0 0 0 42 24 L 42 11 C 42 10.43497 42.43497 10 43 10 L 48 10 L 48 8 L 43 8 z M 15 24 C 14.448 24 14 24.448 14 25 L 14 34 C 14 35.103 14.897 36 16 36 L 34 36 C 35.103 36 36 35.103 36 34 L 36 25 C 36 24.448 35.553 24 35 24 L 32 24 C 31.447 24 31 24.448 31 25 L 31 30 L 19 30 L 19 25 C 19 24.448 18.552 24 18 24 L 15 24 z M 7 37 C 7 37.83486 7.2742517 38.757912 7.53125 39.65625 C 7.585254 39.845023 7.604697 39.828841 7.65625 40 L 2 40 L 2 42 L 9 42 A 1.0001 1.0001 0 0 0 9.9375 40.6875 C 9.9375 40.6875 9.7117517 39.943162 9.46875 39.09375 C 9.2257483 38.244338 9 37.17414 9 37 L 7 37 z M 17 37 C 17 37.583 16.4555 39.5095 16.0625 40.6875 C 15.9605 40.9935 15.9995 41.33375 16.1875 41.59375 C 16.3745 41.85575 16.678 42 17 42 L 33 42 C 33.321 42 33.6245 41.85575 33.8125 41.59375 C 34.0005 41.33275 34.0395 40.9915 33.9375 40.6875 C 33.5435 39.5105 33 37.585 33 37 L 17 37 z M 41 37 C 41 37.17414 40.774252 38.244338 40.53125 39.09375 C 40.288248 39.943162 40.0625 40.6875 40.0625 40.6875 A 1.0001 1.0001 0 0 0 41 42 L 48 42 L 48 40 L 42.34375 40 C 42.3953 39.828841 42.41475 39.845023 42.46875 39.65625 C 42.725748 38.757912 43 37.83486 43 37 L 41 37 z"/>
          </svg>
        </div>
        
        <div
        className={`w-[200px] h-[200px] p-5 rounded-md ${selectedIcon === 'window' && totalSeats > 0 && totalWindow > 0 ? 'bg-green-200' : totalSeats <= 0 || totalWindow <= 0 ? 'bg-red-500 cursor-not-allowed' : ''}`}
        onClick={() => totalSeats > 0 && totalWindow > 0 && handleIconClick("window")}>
          <p className='text-center'> Window Seat </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path  d="M 2 8 L 2 10 L 7 10 C 7.5650302 10 8 10.43497 8 11 L 8 24 A 1.0001 1.0001 0 0 0 7.90625 24 A 1.0001 1.0001 0 0 0 7 25 L 7 29 L 2 29 L 2 31 L 8 31 A 1.0001 1.0001 0 0 0 9 30 L 9 26 L 10 26 L 10 30 L 10 34 L 2 34 L 2 36 L 10 36 C 11.093063 36 12 35.093063 12 34 L 12 30 L 12 25 A 1.0001 1.0001 0 0 0 11 24 L 10 24 L 10 11 C 10 9.3550302 8.6449698 8 7 8 L 2 8 z M 19 8 C 17.346 8 16 9.346 16 11 L 16 22 L 18 22 C 19.654 22 21 23.346 21 25 L 21 28 L 29 28 L 29 25 C 29 23.346 30.346 22 32 22 L 34 22 L 34 11 C 34 9.346 32.654 8 31 8 L 19 8 z M 44.5 9 C 44.238183 9.0094766 43.983698 9.0493508 43.71875 9.125 L 41.4375 9.78125 C 40.000493 10.191621 39 11.505088 39 13 L 39 22 C 39 23.494912 40.000493 24.808379 41.4375 25.21875 L 43.71875 25.875 C 45.838337 26.480194 48 24.860394 48 22.65625 L 48 12.34375 C 48 10.690642 46.782941 9.3688343 45.28125 9.0625 C 45.030968 9.0114443 44.761817 8.9905234 44.5 9 z M 44.625 11 C 45.381013 10.958399 46 11.531876 46 12.34375 L 46 22.65625 C 46 23.584106 45.173663 24.192306 44.28125 23.9375 L 42 23.28125 C 41.413007 23.113621 41 22.611088 41 22 L 41 13 C 41 12.388912 41.413007 11.886379 42 11.71875 L 44.28125 11.0625 C 44.392802 11.030649 44.516998 11.005943 44.625 11 z M 15 24 C 14.448 24 14 24.448 14 25 L 14 34 C 14 35.103 14.897 36 16 36 L 34 36 C 35.103 36 36 35.103 36 34 L 36 25 C 36 24.448 35.553 24 35 24 L 32 24 C 31.447 24 31 24.448 31 25 L 31 30 L 19 30 L 19 25 C 19 24.448 18.552 24 18 24 L 15 24 z M 7 37 C 7 37.83486 7.2742517 38.757912 7.53125 39.65625 C 7.585254 39.845023 7.604697 39.828841 7.65625 40 L 2 40 L 2 42 L 9 42 A 1.0001 1.0001 0 0 0 9.9375 40.6875 C 9.9375 40.6875 9.7117517 39.943162 9.46875 39.09375 C 9.2257483 38.244338 9 37.17414 9 37 L 7 37 z M 17 37 C 17 37.583 16.4555 39.5095 16.0625 40.6875 C 15.9605 40.9935 15.9995 41.33375 16.1875 41.59375 C 16.3745 41.85575 16.678 42 17 42 L 33 42 C 33.321 42 33.6245 41.85575 33.8125 41.59375 C 34.0005 41.33275 34.0395 40.9915 33.9375 40.6875 C 33.5435 39.5105 33 37.585 33 37 L 17 37 z"/>
          </svg>
        </div>


      </div>

      <h1 className='text-center mt-20 text-3xl font-bold p-3 bg-green-100 hover:bg-green-300' onClick={comfirm}> Submit </h1>



      <ToastContainer />
    </div>
  );
};

export default AisleMiddleWindow;
