import React from 'react';
import { useParams } from 'react-router-dom';
import menuItems from '../data/menuItems';

const MenuItemDetailsPage = () => {
  const { id } = useParams();
  const menuItem = menuItems.find((menuItem) => menuItem.id === id);

  if (!menuItem) return <div>Item not found</div>;

  return (
    <div className="menu-item-details-page">
      <h1>{menuItem.name}</h1>
      <img src={menuItem.image} alt={menuItem.name} />
      <p>{menuItem.description}</p>
    </div>
  );
};

export default MenuItemDetailsPage;