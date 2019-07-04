import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>Type: {props.type} </h3>
      <h3>Alcohol by Volume: {props.abv}% </h3>
      <h3>Price per Pint: ${props.price} </h3>
      <hr/>
    </div>
  );

}

Keg.PropTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Keg;