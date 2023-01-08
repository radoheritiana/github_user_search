import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Accueil from './components/Accueil';
import Search from './components/Search';
import Default from './components/Default';
import Token from './components/Token';

function App() {
  return (
    <React.Fragment>
      <div className="text-white">
        <Routes>
          <Route exact path='/' element={<Accueil/>}/>
          <Route path='/token' element={<Token/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route element={<Default/>}/>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
