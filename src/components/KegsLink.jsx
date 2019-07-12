import React from 'react';
import { Link } from 'react-router-dom';


function KegsLink(){
  return (
    <div>
      <h1><Link to="/kegs">Click here to see what drinks are in rotation on {new Date().toLocaleString().split(',')[0]}.</Link></h1>
    </div>
  );
}

export default KegsLink;
