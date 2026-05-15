import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Kafekos</h1>
      <p>Click on the link below to learn more about us.</p>
      <a href="/about">About Us</a>
    </div>
  );
};

export default HomePage;