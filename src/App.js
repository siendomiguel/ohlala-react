import React from 'react'
import './App.css';

import {Nav} from './components/Navbar/Nav'
import {Main} from './components/Main/Main'
import {Footer} from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
     <Nav />
     <Main />
     <Footer />
    </div>
  );
}

export default App;
