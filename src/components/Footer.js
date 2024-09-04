import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">&copy; 2024 Joseph Rasmussen. All rights reserved.</p>
        <div className="space-x-4">
        <a href="https://github.com/Rasmoosen" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/joseph-rasmussen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/rasmoosen/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.threads.net/@rasmoosen" target="_blank" rel="noopener noreferrer">Threads</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;