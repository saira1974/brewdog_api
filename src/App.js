import React from 'react';
import BrewdogContainer from './containers/BrewdogContainer';

function App() {
  return (
    <div className="App">
      <h1>Brewdog Punk API</h1>
     <BrewdogContainer />
     <h2>Get a Single Beer...</h2>
     <h2>Get Random Beer...</h2>
     <h2>My Favourite Beer...</h2>
     <h2>My Top 3 Beers...</h2>
    </div>
    
  );
}

export default App;

