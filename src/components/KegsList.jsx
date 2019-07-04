import React from 'react';
import Keg from './Keg';

const allKegs = [
  {
    name: 'Sewer Brew',
    type: 'Jenkem',
    abv: 2.5,
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
];

function KegsList(){
  return (
    <div>
      <h1>I an a kegs list</h1>
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