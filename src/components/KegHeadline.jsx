import React from 'react';


function KegHeadline(){
  return (
    <div>
      <h1>All of our kegs available today ( {today} ).</h1>
    </div>
  );
}

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let today = (months[date.getMonth()] + ' ' + date.getDay() + ', ' + date.getFullYear());

export default KegHeadline;