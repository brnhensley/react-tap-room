import React from 'react';

function Footer(){
  return (
    <footer>
      <style jsx>{`
        footer {
        background-color: lightgrey;
        width: 100%;
        border-top: 4px solid black;
        margin-top: 2%;
        padding-top: 2%;
        position: relative;
        left: 0;
        bottom: 0;
      }
      h5 {
        margin: 2%;
        padding: 2%;
      }
      `}</style>

      <h5> Stay away from the mule, it is starving because of a werecurse. The mule is crazed for blood and flesh so we will not come to your rescue if the mule gets ahold of you.  That mule is dead to us even if it lives forever.</h5>
    </footer>
  );
}

export default Footer;

// Find out why the footer won't stretch side all 3 edges