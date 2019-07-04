import React from 'react';
import { Link } from 'react-router-dom';


function UpcomingEventsHeader(){
  return (
    <div>
      <h1><Link to="/events">Click here to see our upcoming events.</Link></h1>
    </div>
  );
}

export default UpcomingEventsHeader;