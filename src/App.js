import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState, useEffect } from 'react';

function App() {

  const save = ()=>{
    localStorage.setItem("name", name);
    localStorage.setItem("age", toString(age));
  }

  let [person, setPerson] = useState(0)
  let [isGay, setGay] = useState(true)
  let [height, setHeight] = useState(0)
  let [age, setAge] = useState(0)
  let [name, setName] = useState("")

  useEffect(()=>{
    const name = localStorage.getItem('name');
    if (name) {
    setName(name);

    const age = localStorage.getItem('age');
    if (age) {
    setName(Number(age));
  }
  },[])

  if(person > 100) {
    setPerson(90);
  }
  const gay = () => {
   if(!isGay) {
     setGay(true)
     
   }
  }
  if(age<0){
    setAge(0)
  }
  setTimeout(gay,
    1000)
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <p className='h3 border border-primary p-2 rounded text-primary mt-5 mt-lg-0'>CREATE YOUR OWN NPC</p>
            </div>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
     
        <div className='container'>
          <div className='row'>
            <div className='col-xs-5'>
              <input type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} className="form-control bg-dark my-5" style={{color: "white"}}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-lg-3 mb-5'>
            <span className='border border-primary p-3 rounded text-primary h1'>NPC'S IQ: {person}</span>
            </div>
            <div className='col-xs-12 col-lg-3 mb-5'>
            <span className='border border-primary p-3 rounded text-primary h1'>GAY? : {(isGay ? "YES" : "NO")}</span>
            </div>
            <div className='col-xs-12 col-lg-3 mb-5'>
            <span className='border border-primary p-3 rounded text-primary h1'>HEIGHT: {height}</span>
            </div>
            <div className='col-xs-12 col-lg-3 mb-5'>
            <span className='border border-primary p-3 rounded text-primary h1'>AGE: {age}</span>
            </div>
          </div>
        </div>
        
        <div className='container-fluid m-5'>
            <div className='row'>
              <div className='col-xs-12 col-lg-4'>
                <button onClick={()=> setPerson(person-1)} className="btn btn-outline-primary btn-lg m-2">SUBTRACT IQ</button>
              </div>
              <div className='col-xs-12 col-lg-4'>
                <button onClick={()=> setPerson(person+1)} className="btn btn-outline-primary btn-lg m-2">ADD IQ</button>
              </div>
              <div className='col-xs-12 col-lg-4'>
                <button onClick={()=> setGay(!isGay)} className="btn btn-outline-danger btn-lg m-2">CHANGE ORIENTATION</button>
              </div>
              </div>

              <div className='row'>
              <div className='col-xs-12 col-lg-6'>
                <button onClick={()=> setHeight(height-1)} className="btn btn-outline-primary btn-lg m-2">SUBTRACT HEIGHT</button>
              </div>
              <div className='col-xs-12 col-lg-6'>
                <button onClick={()=> setHeight(height+1)} className="btn btn-outline-primary btn-lg m-2">ADD HEIGHT</button>
              </div>
            </div>

              <div className='row'>
              <div className='col-xs-12 col-lg-4'>
                <button onClick={()=> setAge(age-1)} className="btn btn-outline-danger btn-lg m-2">SUBTRACT AGE</button>
              </div>
              <div className='col-xs-12 col-lg-4'>
                <button onClick={()=> setAge(age+1)} className="btn btn-outline-danger btn-lg m-2">ADD AGE</button>
              </div>
              <div className='col-xs-12 col-lg-4'>
                <button onClick={()=> save()} className="btn btn-outline-primary btn-lg m-2">SAVE</button>
              </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
