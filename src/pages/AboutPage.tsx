import React from 'react';
import './AboutPage.css';
import kafekosImage from '../assets/kafekos.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>Welcome to Kafekos</h1>
      <p>Kafekos is a unique cafe that brings people together through great food and drinks.</p>
      <img src={kafekosImage} alt="Kafekos Cafe" />
      <h2>Our Story</h2>
      <p>Kafekos was founded by a group of friends who wanted to create a warm and inviting space where people could connect and share experiences.</p>
      <h2>Our Values</h2>
      <ul>
        <li>Community: We believe in building strong relationships with our customers and the local community.</li>
        <li>Sustainability: We strive to reduce our environmental impact and promote sustainable practices.</li>
        <li>Quality: We are committed to serving high-quality food and drinks that exceed our customers' expectations.</li>
      </ul>
    </div>
  );
};

export default AboutPage;