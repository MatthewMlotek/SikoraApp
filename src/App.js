import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';

function App() {

  let [sikora, setSikora] = useState(0)
  let [isGay, setGay] = useState(true)

  if(sikora > 80) {
    setSikora(75);
  }
  const gay = () => {
   if(!isGay) {
     setGay(true)
     
   }
  }
  setTimeout(gay,
    1000)
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <p className='h3 border border-primary p-2 rounded text-primary'>SIKORA'S PERSONAL INFORMATION</p>
            </div>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
     
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-lg-6 mb-5'>
            <span className='border border-primary p-3 rounded text-primary h1'>IQ SIKORY: {sikora}</span>
            </div>
            <div className='col-xs-12 col-lg-6'>
            <span className='border border-primary p-3 rounded text-primary h1'>GEJ? : {(isGay ? "TAK" : "NIE")}</span>
            </div>
          </div>
        </div>
        
        <div className='container-fluid m-5'>
            <div className='row'>
              <div className='col-xs-12 col-lg-4'>
                <button onClick={()=> setSikora(sikora-1)} className="btn btn-outline-danger btn-lg m-2">Odejmij sikorze IQ</button>
              </div>
              <div className='col-xs-12 col-lg-4'>
                <button onClick={()=> setGay(!isGay)} className="btn btn-outline-danger btn-lg m-2">Zmień Sikorze orientację</button>
              </div>
              <div className='col-xs-12 col-lg-4'>
                <button onClick={()=> setSikora(sikora+1)} className="btn btn-outline-danger btn-lg m-2">Dodaj sikorze IQ</button>
              </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
