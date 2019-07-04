import React from 'react';

function UpcomingEvents(){
  return (
    <div>
    <style jsx>{`
    div {
        background-color: skyblue;
        width: 80%;
        border: 4px solid black;
        margin: 2%;
        padding: 2%;
        border-radius: 25px;
        margin-left: auto;
        margin-right: auto;
      }
        span {
          background-color: red;
        }
        h2 {
            border-bottom: 2px solid grey:
        }
      `}</style>
      <h2>Upcoming Events</h2>
      <h3><em>8-4-19</em>: 31st annual Gnome toss - B.Y.O.G.</h3>
      <h3><em>8-16-19</em>: Come laugh at the elven traders and their stupid wooden weapons.</h3>
      <h3><em>9-1-19</em>: <span>Stay Away - The goblins show up the beginning of every September.</span></h3>
      <h3><em>10-1-19</em>: Goblins <em>should</em> be gone by now... show up at your own risk, doors open if it's safe.</h3>
    </div>
  );
}

export default UpcomingEvents;