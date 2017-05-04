import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
  sessionStorage.removeItem('petToken');
  return (
    <div className="container">
      <div>
        <h1>Bye !!</h1>
        <h4>Log back <Link to="/login">in?</Link></h4>
      </div>
    </div>
  )
}

export default Logout;
