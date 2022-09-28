import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const links = [
    { id: 1, name: 'Rockets', path: '/' },
    { id: 2, name: 'Missions', path: '/missions' },
    { id: 3, name: 'My Profile', path: '/profile' },
  ];

  return (
    <nav>
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png"
          alt="logo"
          style={{ width: '100px', height: '100px' }}
        />
        <span>Space Travelers&apos; Hub</span>
      </div>
      <div className="hamburger">
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
