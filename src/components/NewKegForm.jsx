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
    props.onNewKegCreation({name: _name.value, type: _type.value, abv: _abv.value, price: _price.value, pints: 124, description: _description.value});
    _name.value = null;
    _type.value = null;
    _abv.value = null;
    _price.value = null;
    _description.value = null;
  }

  return (
    <div>
      <form onSubmit={handleNewKegSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Keg Name'
          ref={(input) => {_name=input;}}
        />
        <input
          type='text'
          id='type'
          placeholder='Drink Type'
          ref={(input) => {_type=input;}}
        />
        <input
          type='number'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv=input;}}
        />
        <input
          type='number'
          id='price'
          placeholder='Price per pint'
          ref={(input) => {_price=input;}}
        />
        <textarea
          id='description'
          placeholder='Description'
          ref={(input) => {_description=input;}}
        />
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