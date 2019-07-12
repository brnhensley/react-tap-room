import React from 'react';
import PropTypes from 'prop-types';

function Event(props){
  return (
    <div>
      <h3><em>{props.date}</em>: {props.description}</h3>
    </div>
  );
}

Event.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.any.isRequired,
};

export default Event;