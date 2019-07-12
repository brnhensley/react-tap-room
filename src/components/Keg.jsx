import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <style jsx>{`
      div {
        background-color: skyblue;
        width: 80%;
        border: 4px solid black;
        margin: 2%;
        padding: 2%;
        border-radius: 25px;
        margin-left: auto;
        margin-right: auto;
      }
      `}</style>
      <h2>{props.name}</h2>
      <h3>Type: {props.type} </h3>
      <h3>Alcohol by Volume: {props.abv}% </h3>
      <h3>Price per Pint: ${props.price} </h3>
      <h4>{props.description}</h4>
    </div>
  );

}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string
  // add remaining pints
};

export default Keg;

// I'd like to get an if statement in the ABV (for the Unicorn Blood) above but it would only display as text.  Some clarification on where I can use JS would be appreciated.