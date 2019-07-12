import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  let display = `Alcohol by Volume: ${props.abv}%`;
  if (props.abv == 0) {
    display = 'You\'re not drinking this for the alcohol';
  }

  return (
    <div>
      <style jsx>
        {`
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
        `}
      </style>
      <h2>{props.name}</h2>
      <h3>Type: {props.type} </h3>
      <h3>{display}</h3>
      <h3>Price per Pint: ${props.price}</h3>
      <h3>Index - {props.key}</h3>
      <h3>{props.pints} Pints remaining <button onClick={() => props.onSellPint(props.key)}>Sell A Pint!</button></h3>
      <h4>{props.description}</h4>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  pints: PropTypes.number,
  description: PropTypes.any,
  key: PropTypes.number,
  onSellPint: PropTypes.func,
  keg: PropTypes.object
};

export default Keg;
