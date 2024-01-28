import React from 'react'
import backgroundImage from '../BG.png';
import { AdminNav } from '../Components/AdminNav';

function BookingTickets() {
  return (
    <div>
        <AdminNav/>
      <div
        className="h-screen bg-cover bg-center flex flex-col items-start justify-center p-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >


        </div>
      
    </div>
  )
}

export default BookingTickets
