import React from 'react';
import Keg from './Keg';
import KegHeadline from './KegHeadline';
import UpcomingEventsLink from './UpcomingEventsLink';
import NewKegForm from './NewKegForm';

const masterKegsList = [
  {
    name: 'Rotgut',
    type: 'Swill',
    abv: 11,
    price: 1,
    pints: 124,
    description: 'Great for getting drunk, bad for everything else.'
  },
  {
    name: 'Parsnip Wine',
    type: 'Wine',
    abv: 8,
    price: 6,
    pints: 124,
    description: 'A classy wine from our elven "friends".'
  },
  {
    name: 'Swamp Whiskey',
    type: 'Swill',
    abv: 20,
    price: 5,
    pints: 124,
    description: 'Moonshine made by kobolds, not recommended but who are we to judge?'
  },
  {
    name: 'Unicorn Blood',
    type: 'Magical',
    abv: 0,
    price: 100,
    pints: 124,
    description: 'If you are drinking Unicorn Blood you already know what it will do to you.'
  },
  {
    name: 'Teff Lager',
    type: 'Beer',
    abv: 4,
    price: 3,
    pints: 124,
    description: 'A classic human beverage.'
  },
  {
    name: 'Honey Wine',
    type: 'Mead',
    abv: 9,
    price: 8,
    pints: 124,
    description: 'Hangover juice from our favorite vampiric beekeepers at Stetárgugash.'
  },
  {
    name: 'Pear Nectar',
    type: 'Cider',
    abv: 3.5,
    price: 1,
    pints: 124,
    description: 'A light summer cider.'
  },
  {
    name: 'Elven Goodberry Juice',
    type: 'Cider',
    abv: 4,
    price: 15,
    pints: 124,
    description: 'Whatever the elves are doing in their treetop breweries is working. They will not tell us but there is something magical in this.'
  },
  {
    name: 'Longland Ale',
    type: 'Beer',
    abv: 4.5,
    price: 4,
    pints: 124,
    description: 'A human favorite from across the plains.'
  },
  {
    name: 'Sewer Brew',
    type: 'Jenkem',
    abv: 2.5,
    price: 1,
    pints: 124,
    description: 'We have a lot of Grimelings visit, not recommended for any other races.'
  },
  {
    name: 'Goblin Sweat',
    type: 'Swill',
    abv: 0.5,
    price: -1,
    pints: 124,
    description: ['We got ripped off and now have kegs and kegs of Goblin Sweat. Someone out there must want this right?...', <br/>,  <span style={{color: 'red'}}>UPDATE 2011:</span>, ' Ok fine, nobody wants this, we will pay you to drink it on the condition that you puke outside. There is some kind of curse, whenever we dump the barrels they refill, someone has to drink it..']
  },
  {
    name: 'Ogre Grog',
    type: 'Swill',
    abv: 13,
    price: 6,
    pints: 124,
    description: 'Potent, aromatic ogre milk kefir, an acquired taste.'
  }
];

class KegsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allKegs: masterKegsList,
    };
    this.handleNewKegCreation = this.handleNewKegCreation.bind(this);
    this.handleSellPint = this.handleSellPint.bind(this);
  }

  handleNewKegCreation(newKeg) {
    let newMasterKegList = this.state.allKegs;
    newMasterKegList.push(newKeg);
    this.setState({ allKegs: newMasterKegList });
  }

  handleSellPint(index) {
    let newMasterKegList = this.state.allKegs;
    if (newMasterKegList[index].pints > 0){
      newMasterKegList[index].pints--;
    } else {
      return;
    }
    this.setState({ allKegs: newMasterKegList });
  }

  render() {
    return (
      <div>
        <KegHeadline />
        <UpcomingEventsLink />

        {this.state.allKegs.map((keg, index) =>
          <Keg
            keg={keg}
            name={keg.name}
            type={keg.type}
            abv={keg.abv}
            price={keg.price}
            pints={keg.pints}
            description={keg.description}
            key={index}
            onSellPint={this.handleSellPint}
            index={index}
          />
        )}

        <NewKegForm onNewKegCreation={this.handleNewKegCreation}/>

      </div >
    );
  }
}

export default KegsList;