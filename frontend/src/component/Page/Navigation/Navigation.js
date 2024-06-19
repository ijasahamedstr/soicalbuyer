import { Link } from "react-router-dom";
import './Navbar.css';
import { useState } from "react";

function Navbar() {
    const[ismobile,setmobile] = useState(false);
    return (
        <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        <ul  className={ismobile ? 'nav-link-mob' : 'nav-links'}>
            <Link to="/" className="Home">
            <li>Home</li>
            </Link>
            <Link to="/Social Medias" className="Social">
            <li>Social Medias</li>
            </Link>
            <Link to="/Games" className="Games">
            <li>Games</li>
            </Link>
            <Link to="/Services" className="Services">
            <li>Services</li>
            </Link>
            <Link to="/Users" className="Users">
            <li>Users</li>
            </Link>
            <Link to="/Market History" className="Market">
            <li>Market History</li>
            </Link>
            <Link to="/Leaderboard" className="Leaderboard">
            <li>Leaderboard</li>
            </Link>
            <Link to="/USRGG Store" className="USRGG">
            <li>USRGG Store</li>
            </Link>
            <Link to="/Signup" className="Signup">
            <li>Signup</li>
            </Link>
        </ul>
        <button className='mob-menu-icon' onClick={()=>setmobile(!ismobile)}>
            {ismobile ? <h1>x</h1> : <h1>=</h1>}
        </button>
        </nav>
    );
  }
  
  export default Navbar;