import React from 'react';
import { Link } from 'react-router-dom';


function Welcome(){
  return (
    <div>
      <h1><Link to="/kegs">Click here to see what's in rotation on {today}.</Link></h1>
    </div>
  );
}

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let today = (months[date.getMonth()] + ' ' + date.getDay() + ', ' + date.getFullYear());

export default Welcome;