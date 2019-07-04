import React from 'react';
import Keg from './Keg';
import KegHeadline from './KegHeadline';

const allKegs = [
  {
    name: 'Rotgut',
    type: 'Swill',
    abv: 11,
    price: 1
  },
  {
    name: 'Parsnip Wine',
    type: 'Wine',
    abv: 8,
    price: 6
  },
  {
    name: 'Swamp Whiskey',
    type: 'Swill',
    abv: 20,
    price: 5
  },
  {
    name: 'Unicorn Blood',
    type: 'Magical Blood',
    abv: 0,
    price: 100
  },
  {
    name: 'Teff Lager',
    type: 'Beer',
    abv: 4,
    price: 3
  },
  {
    name: 'Honey Wine',
    type: 'Mead',
    abv: 9,
    price: 8
  },
  {
    name: 'Pear Nectar',
    type: 'Cider',
    abv: 2.5,
    price: 1
  },
  {
    name: 'Elven Goodberry Juice',
    type: 'Cider',
    abv: 4,
    price: 10
  },
  {
    name: 'Longland Ale',
    type: 'Beer',
    abv: 4.5,
    price: 4
  },
  {
    name: 'Sewer Brew',
    type: 'Jenkem',
    abv: 2.5,
    price: 1
  },
  {
    name: 'Goblin Sweat',
    type: 'Swill',
    abv: 1.5,
    price: 1
  },
  {
    name: 'Ogre Grog',
    type: 'Swill',
    abv: 13,
    price: 6
  }
];

function KegsList(){
  return (
    <div>
      <KegHeadline />
      {allKegs.map((keg, index) =>
        <Keg name={keg.name}
          type={keg.type}
          abv={keg.abv}
          price={keg.price}
          key={index} />
      )}
    </div>
  );
}

export default KegsList;