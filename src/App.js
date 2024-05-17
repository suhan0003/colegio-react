/*import logo from './logo.svg';
import MiComponenteFuncional from './MiComponenteFuncional';
import MiComponenteClase from './MiComponenteClase';
import MiComponente from './MiComponente';
import './App.css';
import Login from './login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MiComponenteFuncional />
      <MiComponenteClase />
      </header>
      <MiComponente/>
     
    </div>
  );
}*/


/*import './App.css';
import Login from './login';

function App() {
  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AcercaDe from './AcercaDe';
import Contacto from './Contacto';
import Login from './login';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ResetPassword from './login/ResetPassword';


function App() {

  const isLoggedIn = useSelector(state => state.token !== null);

    return (
        <Router>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/acerca-de" /> : <Login />} />
            <Route path="/acerca-de" element={isLoggedIn ? <AcercaDe /> : <Navigate to="/" />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/password_reset" element={<ResetPassword />} />
            
          </Routes>
      </Router>
    );
}

export default App;





