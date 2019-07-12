import React from 'react';

function KegHeadline(){
  return (
    <div>
      <h1>All of the kegs available today ( {new Date().toLocaleString().split(',')[0]} ).</h1>
    </div>
  );
}

export default KegHeadline;