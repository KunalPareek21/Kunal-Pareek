import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import '../../Assets/styles/global.css';
import logo from '../../Assets/images/1.png';

const Header = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'enabled');
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleHamburgerClick = () => {
    setIsHamburgerActive(prevState => !prevState);
  };

  useEffect(() => {
    const menuItems = document.querySelectorAll('.header_navbar_row .nav-item a');
    menuItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('href') === location.pathname);
    });
  }, [location.pathname]);

  return (
    <div id="header_main_row" className="header_navbar_row">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link>
          <button className="navbar_ham" data-bs-toggle="collapse"  data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" data-bs-toggle="collapse"  data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <div className={`hamburger ${isHamburgerActive ? 'is-active' : ''}`} id="hamburger-1" onClick={handleHamburgerClick}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`} to="/skills">My Skills</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
              </li>
              // <li className="nav-item">
              //   <Link className={`nav-link ${location.pathname === '/popup' ? 'active' : ''}`} to="/popup">Popup</Link>
              // </li>
              <li className="nav-item">
                <div className="dark_mode_toggle_div">
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                    checked={isDarkMode}
                    onChange={handleDarkModeToggle}
                  />
                  <label htmlFor="checkbox" className="checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <span className="ball"></span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
