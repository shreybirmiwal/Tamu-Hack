// SeatCard.js
import React from 'react';
import PropTypes from 'prop-types';

const SeatCard = ({ seatNumber, isTaken, onMouseOver, onClick }) => {
  const seatStyle = {
    width: '50px',
    height: '50px',
    margin: '5px',
    backgroundColor: isTaken ? 'red' : 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: isTaken ? 'not-allowed' : 'pointer',
  };

  return (
    <div
      style={seatStyle}
      onMouseOver={onMouseOver}
      onClick={isTaken ? null : onClick}
    >
      {isTaken ? (
        <span style={{ color: 'white' }}>{seatNumber}</span>
      ) : (
        <span>{seatNumber}</span>
      )}
    </div>
  );
};

SeatCard.propTypes = {
  seatNumber: PropTypes.string.isRequired,
  isTaken: PropTypes.bool.isRequired,
  onMouseOver: PropTypes.func,
  onClick: PropTypes.func,
};

export default SeatCard;
