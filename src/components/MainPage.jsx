import React from 'react';
import Welcome from './Welcome';
import KegsList from './KegsList';

function MainPage(){
  return (
    <div>
      <h3>The Starving Mule has a strict no orcs policy. All weapons and anything reeking of miasma must remain outside at your own risk. We claim no responsibility for anything stolen by kea, langurs, vultures or kobold.</h3>
      <Welcome />
    </div>
  );
}

export default MainPage;