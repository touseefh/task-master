import React from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, Home, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl flex items-center gap-2">
          <CheckSquare className="h-6 w-6" />
          TaskMaster
        </div>
        <div className="flex gap-6">
          <Link to="/" className="text-white hover:text-purple-200 flex items-center gap-2">
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link to="/tasks" className="text-white hover:text-purple-200 flex items-center gap-2">
            <CheckSquare className="h-5 w-5" />
            Tasks
          </Link>
          <Link to="/contact" className="text-white hover:text-purple-200 flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;