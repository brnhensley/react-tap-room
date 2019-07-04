import React from 'react';
import banner from './../assets/img/header.jpg';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          display: flex;
          vertical-align: middle;
          text-align: center;
          text-transform: uppercase;
          background-image: url(${banner});
          background-size: 80% 400px;
          height: 400px;
          background-repeat: no-repeat;
          background-position: center;
        }
      `}</style>
      <h1>The Starving Mule</h1><br></br>
      <h2>A Dwarven Tap Room</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Header;