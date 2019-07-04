import React from 'react';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <style global jsx>{`
        h2 {
          text-align: center;
        }
        span {
          text-align: center;
        }
      `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;