import React from 'react';
import Welcome from './Welcome';
import UpcomingEvents from './UpcomingEvents';

function MainPage(){
  return (
    <div>
      <h3>The Starving Mule has a strict no orcs policy, and we are currently at capacity for bards, try the Rusty Anvil. All weapons and anything reeking of miasma must remain outside at your own risk. We claim no responsibility for anything stolen by kea, langurs, vultures or kobold.</h3>
      <Welcome />
      <UpcomingEvents />
    </div>
  );
}

export default MainPage;