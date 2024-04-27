import React from 'react';
import { useLocation } from 'react-router-dom';

function Menu() {
  const location = useLocation(); 

  
  const isActive = (path) => {
    return location.pathname === path ? "menu__item menu__item-active" : "menu__item";
  };

  return (
    <nav className="menu">
      <a className={isActive("/")} href="/">Главная</a>
      <a className={isActive("/drift")} href="/drift">Дрифт-такси</a>
      <a className={isActive("/timeattack")} href="/timeattack">Time Attack</a>
      <a className={isActive("/forza")} href="/forza">Forza Karting</a>
    </nav>
  );
}

export default Menu;