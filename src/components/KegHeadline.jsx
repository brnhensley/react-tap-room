import React from 'react';
import { Link } from 'react-router-dom';

function KegHeadline(){
  return (
    <div>
      <h1>All of the kegs available today ( {new Date().toLocaleString().split(',')[0]} ).</h1>
      <h3><Link to='/newkeg'>Add a new keg</Link></h3>
    </div>
  );
}

export default KegHeadline;