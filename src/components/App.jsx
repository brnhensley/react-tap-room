import React from 'react';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import KegsList from './KegsList';
import UpcomingEvents from './UpcomingEvents';
import Error404 from './Error404';


function App() {
  return (
    <div className='flex-wrapper'>
      <style global jsx>{`
        body {
          font-family: Arial, Helvetica, sans-serif;
          margin: 0;
        }
        h1, h2, h3, h4, h5 {
          text-align: center;
          color: black;
        }
        .flex-wrapper {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          justify-content: space-between;
        }
      `}
      </style>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/kegs' component={KegsList} />
        <Route path='/events' component={UpcomingEvents} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;