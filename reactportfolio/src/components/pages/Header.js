// header

import React from 'react';
import '../styles.css';
import banner_pic from "../images/banner.jpg";


function Header() {
    return (
        <header className="banner">
            <img className='banner_pic' src={banner_pic} alt="Jerrod Linderman" />
        </header>
    );
}

export default Header;