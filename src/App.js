import React from 'react';
import {Route} from 'react-router-dom';

// components
import Nav from './components/Nav';
import Home from './pages/Home';
import Promo from './components/Promo';
import Footer from './components/Footer';

import axios from 'axios';
import GlobalStyles from './components/GlobalStyles';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Promo />
      <Route path={['/game/:id', '/']} >
        <Home />
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
