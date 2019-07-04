import React from 'react';
import PropTypes from 'prop-types';

function Event(props){
  return (
    <div>
      <h3><em>{props.date}</em>: {props.description}</h3>
    </div>
  );
}

Event.PropTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Event;