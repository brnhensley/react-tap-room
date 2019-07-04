import React from 'react';
import banner from './../assets/img/header.jpg';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <Link to="/">
      <div>
        <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          vertical-align: middle;
          justify-content: center;
          text-align: center;
          text-transform: uppercase;
          background-color: white;
          background-image: url(${banner});
          background-size: 80% 400px;
          height: 400px;
          background-repeat: no-repeat;
          background-position: center;
          border: 4px solid black;
          margin: 2%;
          padding: 2%;
          border-radius: 25px;
        }
        span {
          background-color: white;
        }
      `}</style>
        <h1><span>The Starving Mule</span></h1>
        <h2><span>A Dwarven Tap Room</span></h2>
      </div>
    </Link>
  );
}

export default Header;