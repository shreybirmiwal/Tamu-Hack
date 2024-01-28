import React from 'react';

const NoSeatPreference = ({ onBack }) => {
  return (
    <div>

      <div className="flex justify-between items-center">
        <div className='mr-10'>
          <h2>No Seat Preference</h2>
        </div>
        <div>
          <button onClick={onBack}>Back</button>
        </div>
      </div>




    </div>
  );
};

export default NoSeatPreference;
