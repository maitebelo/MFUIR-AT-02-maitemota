import React, { useState } from 'react';
import Header from './Header';
import Feed from './Feed';
import Sugestoes from './Sugestoes';
import Footer from './Footer';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="App">
        <Header toggleDrawer={toggleDrawer} />
        <div className="grid-container">
          <Feed />
  
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
