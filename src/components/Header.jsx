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
             font-family: Arial, Helvetica, sans-serif;
          text-align: center;
          text-transform: uppercase;
          background-image: url(${banner});
          background-size: 80% 400px;
          height: 400px;
        }
        h1 {
            margin: auto;
        text-align: center;
        }
        `}</style>
      <h1>The Starving Mule - A Dwarven Tap Room</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Header;