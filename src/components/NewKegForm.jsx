import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  let _name = null;
  let _type = null;
  let _abv = null;
  let _price = null;
  let _description = null;

  function handleNewKegSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    props.onNewKegCreation({name: _name.value, type: _type.value, abv: _abv.value, price: _price.value, pints: 124, description: _description.value});
    _name.value = null;
    _type.value = null;
    _abv.value = null;
    _price.value = null;
    _description.value = null;
  }

  return (
    <div>
      <style jsx>
        {`
          div {
            background-color: salmon;
            width: 40%;
            border: 4px solid black;
            margin: 2%;
            padding: 2%;
            border-radius: 25px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
        `}
      </style>
      <form onSubmit={handleNewKegSubmission}>
        <h3>Add a new keg:</h3>
        <input
          type='text'
          id='name'
          placeholder='Keg Name'
          ref={(input) => {_name=input;}}
        /><br/>
        <input
          type='text'
          id='type'
          placeholder='Drink Type'
          ref={(input) => {_type=input;}}
        /><br/>
        <input
          type='number'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv=input;}}
        /><br/>
        <input
          type='number'
          id='price'
          placeholder='Price per pint'
          ref={(input) => {_price=input;}}
        /><br/>
        <textarea
          id='description'
          placeholder='Description'
          ref={(input) => {_description=input;}}
        /><br/>
        <button type='submit'>Add Keg!</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  pints: PropTypes.number,
  description: PropTypes.string
};

export default NewKegForm;