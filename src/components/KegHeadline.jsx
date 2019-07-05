import React from 'react';


function KegHeadline(){
  return (
    <div>
      <h1>All of the kegs available today ( {today} ).</h1>
    </div>
  );
}

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let date = new Date();
let today = (months[date.getMonth()] + ' ' + date.getDay() + ', ' + date.getFullYear());

// Need to make this variable global and pass with props

export default KegHeadline;