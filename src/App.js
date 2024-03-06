import './App.css';
import React ,{useState} from 'react';
import logo from './logo.jpg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./Components/Login";
import Register from "./Components/Register";
import { NavLink } from 'react-router-dom';
import ProductSection from './Components/ProductSection';
import Favourites from './Components/Favourites';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



function App() {
  const [userName, setUserName] = useState(""); 
  const [favorites, setFavorites] = useState([]); 
/*     const [count , setCount] = useState(0)
 */
  
  
  return (
    <>
      <BrowserRouter>

        <header className="App-header">
          <img className='logo' src={logo} alt='logo' />

          <h3 className='userName'>Welcome {userName}</h3>

          <nav className='nav'>
            <NavLink style={{ textDecoration: 'none', color: 'white', fontSize: '22px' }}  to="/Login">Login</NavLink>
            <NavLink style={{ textDecoration: 'none', color: 'white', fontSize: '22px' }}  to="/Register">Register</NavLink>
{/*             <NavLink style={{ textDecoration : 'none' , color : 'White' , fontSize : '22px'}} to="/Favourites">Favourites</NavLink>
 */}            <FontAwesomeIcon icon={faShoppingCart} style={{color : 'white', fontSize : '25px'}} />
{/*             <div className='counter'>{count}</div>
 */}          </nav>
        </header>


        <Routes>
          <Route path='/login' element={<Login setUserName={setUserName} />} /> 
          <Route path='/register' element={<Register  />} />
          <Route path='/' element={<ProductSection setFavorites={setFavorites} favorites={favorites}/>}></Route>
          <Route path='/favourites' element={<Favourites favorites={favorites}/>}  />
         
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
