import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import style from './Header.module.css';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.containerLeft}>
          <Link to="/" aria-label="Página de inicio de Digital Booking">
            <img src={logo} alt="logo" className={style.logoDC}/>
          </Link>
          <span className={style.motto}>Tu viaje, tu auto, tu libertad</span>
        </div>
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
