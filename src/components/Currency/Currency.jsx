import React from 'react';

const Currency = ({currency}) => {
  return (
    <div>
      <h4>Currency Name: {currency[1].name}</h4>
      <h4>Currency Symbol: {currency[1].symbol}</h4>
    </div>
  );
};

export default Currency;