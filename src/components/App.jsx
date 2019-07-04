import React from 'react';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import KegsList from './KegsList';


function App() {
  return (
    <div>
      <style global jsx>{`
        body {
          font-family: Arial, Helvetica, sans-serif;
        }
        h1, h2, h3 {
          text-align: center;
          color: black;
        }
        span {
          text-align: center;
        }
      `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/kegs' component={KegsList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;