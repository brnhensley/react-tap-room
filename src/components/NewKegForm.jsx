import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  let _name = null;
  let _type = null;
  let _abv = null;
  let _price = null;
  let _pints = 124;
  let _description = null;

  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation;
  }

  return (
    <div>
      <form onSubmit={handleNewKegSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Keg Name'
          ref={(input) => {_names=input;}}
        />
        <input
          type='text'
          id='type'
          placeholder='Drink Type'
        />
        <input
          type='number'
          id='abv'
          placeholder='ABV'
        />
        <input
          type='number'
          id='price'
          placeholder='Price per pint'
        />
        <textarea
          id='description'
          placeholder='Description'
        />
        <button type='submit'>Add Keg!</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default NewKegForm;