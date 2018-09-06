import React from 'react';

const navStyle = {
  display: 'flex',
  backgroundColor: '#a34444',
  color: '#fff',
  height: '45px',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'cursive',
  fontSize: '1.2rem',
};

const TopBar = () => (
  <ul style={navStyle}>
    <span>Github Search Users App</span>
  </ul>
);

export default TopBar;
