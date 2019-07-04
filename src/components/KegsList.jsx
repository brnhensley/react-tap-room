import React from 'react';
import Keg from './Keg';
import KegHeadline from './KegHeadline';
import UpcomingEventsHeader from './UpcomingEventsHeader';

const allKegs = [
  {
    name: 'Rotgut',
    type: 'Swill',
    abv: 11,
    price: 1,
    description: 'Great for getting drunk, bad for everything else.'
  },
  {
    name: 'Parsnip Wine',
    type: 'Wine',
    abv: 8,
    price: 6,
    description: 'A classy wine from our elven "friends".'
  },
  {
    name: 'Swamp Whiskey',
    type: 'Swill',
    abv: 20,
    price: 5,
    description: 'Moonshine made by kobolds, not recommended but who are we to judge?'
  },
  {
    name: 'Unicorn Blood',
    type: 'Magical',
    abv: 0,
    price: 100,
    description: 'If you are drinking Unicorn Blood you already know what it will do to you.'
  },
  {
    name: 'Teff Lager',
    type: 'Beer',
    abv: 4,
    price: 3,
    description: 'A classic human beverage.'
  },
  {
    name: 'Honey Wine',
    type: 'Mead',
    abv: 9,
    price: 8,
    description: 'Hangover juice from our favorite vampiric beekeepers at Stetárgugash.'
  },
  {
    name: 'Pear Nectar',
    type: 'Cider',
    abv: 3.5,
    price: 1,
    description: 'A light summer cider.'
  },
  {
    name: 'Elven Goodberry Juice',
    type: 'Cider',
    abv: 4,
    price: 15,
    description: 'Whatever the elves are doing in their treetop breweries is working. They will not tell us but there is something magical in this.'
  },
  {
    name: 'Longland Ale',
    type: 'Beer',
    abv: 4.5,
    price: 4,
    description: 'A human favorite from across the plains.'
  },
  {
    name: 'Sewer Brew',
    type: 'Jenkem',
    abv: 2.5,
    price: 1,
    description: 'We have a lot of Grimelings visit, not recommended for any other races.'
  },
  {
    name: 'Goblin Sweat',
    type: 'Swill',
    abv: 1.5,
    price: 1,
    description: 'We got ripped off and now have kegs and kegs of Goblin Sweat. Someone out there must want this right?'
  },
  {
    name: 'Ogre Grog',
    type: 'Swill',
    abv: 13,
    price: 6,
    description: 'Potent, aromatic ogre milk kefir, an acquired taste.'
  }
];

function KegsList(){
  return (
    <div>
      <KegHeadline />
      <UpcomingEventsHeader />
      {allKegs.map((keg, index) =>
        <Keg name={keg.name}
          type={keg.type}
          abv={keg.abv}
          price={keg.price}
          description={keg.description}
          key={index} />
      )}
    </div>
  );
}

export default KegsList;

// Add pints remaining