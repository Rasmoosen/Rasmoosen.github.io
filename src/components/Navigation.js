import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-blue-500 text-white">
      <ul className="flex justify-center py-4">
        <li className="mx-4"><Link to="/" className="hover:text-blue-200">About</Link></li>
        <li className="mx-4"><Link to="/portfolio" className="hover:text-blue-200">Portfolio</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;