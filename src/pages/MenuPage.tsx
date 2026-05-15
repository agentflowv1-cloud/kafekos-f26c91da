import React from 'react';
import { Link } from 'react-router-dom';
import menuItems from '../data/menuItems';

const MenuPage = () => {
  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}><Link to={`/menu-item/${menuItem.id}`}>{menuItem.name}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;