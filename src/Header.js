import React from 'react';
import './App.css';

function Header() {
  return (
    <div className="box">
      <img src={require('./logo.jpg')} alt="" />
      <h1>Sensori Web UI</h1>
    </div>
  );
}

export default Header;
