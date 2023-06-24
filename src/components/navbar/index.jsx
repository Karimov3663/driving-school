import React from 'react';
import { Route,Link ,Routes} from 'react-router-dom';
import Asosiy from '../asosiy';
import Kantakt from '../kantakt';
import Toifalar from '../toifalar';
import Login from '../Login';
import './style.css'






function Navbar() {
  return (
    <div>

    <div className="Canteiner">
        <div className="Avtomaktab">
            <Link className='Navbar-text-avtomaktab' to={'/'}>Avtomaktab</Link>
        </div>
        <div className="card">
                 <Link className='Navbar-text' to={'/'}>Asosiy</Link>
                 <Link className='Navbar-text' to={'/toifalar'}>Toifalar</Link>
                 <Link className='Navbar-text' to={'/kantakt'}>Kantakt</Link>
          
         </div>
         <div className="card-left">
            <Link className='Navbar-text-left Navbar-text' to={'/login'}>Login</Link>
         </div>
    </div>
    <Routes>
                 <Route path='/' element={<Asosiy/>}/>
                <Route path='/toifalar' element={<Toifalar/>}/>
                <Route path='/kantakt' element={<Kantakt/>}/>
                <Route path='/login' element={<Login/>}/>

            </Routes>
    </div>
  );
}

export default Navbar;
