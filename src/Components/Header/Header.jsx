import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src='image-removebg-preview (15).png' />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about-us">О нас</Link></li>
          <li><Link to="/news">Члены Ассоциации</Link></li>
          <li><Link to="/projects">Проекты</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
