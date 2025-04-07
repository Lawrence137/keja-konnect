import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">KEJA KONNECT</Link>
        <div>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/search" className="hover:underline">Search</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;