import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Courses from './Components/Courses';
import Objects from './Components/Objects';
import Inheritance from './Components/Inheritance';
import Abstraction from './Components/Abstraction';
import Polymorphism from './Components/Polymorphism';
import Encapsulation from './Components/Encapsulation';
import Register from './Components/Register';
import Editor from './Components/Editor';
import Login from './Components/Login';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div className="app">
        <div className='container'>
          <div className='row'>
            <NavBar />
            <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route path='/courses' element={<Courses/>}/>
              <Route path='/objects' element={<Objects/>}/>
              <Route path='/inheritance' element={<Inheritance/>}/>
              <Route path='/abstraction' element={<Abstraction/>}/>
              <Route path='/polymorphism' element={<Polymorphism/>}/>
              <Route path='/encapsulation' element={<Encapsulation/>}/>
              <Route path='/editor' element={<Editor/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
