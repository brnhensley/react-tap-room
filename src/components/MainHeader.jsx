import React from 'react';

function MainHeader(){
  return (
    <div>
      <h1>Click here to see what's in rotation on {today}.</h1>
    </div>
  );
}

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();
let today = (months[date.getMonth()] + ' ' + date.getDay() + ', ' + date.getFullYear());

export default MainHeader;