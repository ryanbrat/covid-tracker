import React from 'react';
import { Link } from 'react-router-dom';


  const Nav = () => (
    <nav>
       <ul>
       <Link to='/about'>
         <li>About</li>
         </Link>
         <Link to='/login'>
         <li>Login</li>
         </Link>
       </ul>
    </nav>
  );

export default Nav;
