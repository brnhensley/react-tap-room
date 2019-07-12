import React from 'react';
import Event from './Event';
import KegsLink from './KegsLink';

const allEvents =
[
  {
    date: '8-4-19',
    description: '31st annual Gnome toss - B.Y.O.G.'
  },
  {
    date: '8-16-19',
    description: 'Come laugh at the elven traders and their stupid wooden weapons.'
  },
  {
    date: '9-1-19',
    description: 'Stay Away - The goblins show up the beginning of every September.'
  },
  {
    date: '10-15-19',
    description: 'Goblins should be gone by now... show up at your own risk, doors open if it is safe.'
  },
  {
    date: '2-1-20',
    description: 'Plump Helmet harvest festival!  Mushroom costumes get a free pint of Plump Helmet Wine.'
  }
];

function UpcomingEvents(){
  return (
    <div>
      <KegsLink />
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
            back ground-color: red;
          }
          h2 {
            border-bottom: 2px solid grey:
          }
        `}
        </style>
        <h2>Upcoming Events</h2>
        {allEvents.map((event, index) =>
          <Event date={event.date}
            description={event.description}
            key={index}
          />
        )}
      </div>
    </div>
  );
}

// how to pass HTML into props...
// const siege = {<span>Stay Away - The goblins show up the beginning of every September.</span>};
// const gobs = {Goblins <em>should</em> be gone by now... show up at your own risk, doors open if it is safe.}

export default UpcomingEvents;