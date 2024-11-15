import React, { useContext } from 'react';
import './Navbar.css';
import assets from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContex';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = React.useState("home");
    const{getTotal}= useContext(StoreContext);
    function btnHanlder() {
        setShowLogin(true);
    }
    return (
        <div className='navbar'>
            <img src={assets.logo} alt='Logo' className='logo' />

            <ul className='navbar-menu'>
                <li>
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                </li>
                <li>
                    <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                </li>
                <li>
                    <a href="#Appdownload" onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile App</a>
                </li>
                <li>
                    <a href="#footer" onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact Us</a>
                </li>
            </ul>

            <div className='navbar-right'>
                <img src={assets.search_icon} alt='Search' />
                <div className='navbar-search-icon'>
                    <Link to="/cart"><img src={assets.basket_icon} alt='Basket' /></Link>
                    <div className={getTotal() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={btnHanlder}>Sign in</button>
            </div>
        </div>
    );
}

export default Navbar;
