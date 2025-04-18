
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-conference-800">
              ICCISA 2026
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-conference-600 hover:text-conference-800 font-medium">
              Home
            </Link>
            <a href="#about" className="text-conference-600 hover:text-conference-800 font-medium">
              About
            </a>
            <a href="#committee" className="text-conference-600 hover:text-conference-800 font-medium">
              Committee
            </a>
            <a href="#call-for-papers" className="text-conference-600 hover:text-conference-800 font-medium">
              Call for Papers
            </a>
            <a href="#submission" className="text-conference-600 hover:text-conference-800 font-medium">
              Submission
            </a>
            <a href="#registration" className="text-conference-600 hover:text-conference-800 font-medium">
              Registration
            </a>
            <Button className="bg-conference-600 hover:bg-conference-700" asChild>
              <a href="#registration">Register Now</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-conference-600 hover:text-conference-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-conference-600 hover:text-conference-800 font-medium px-2 py-1"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <a 
                href="#about" 
                className="text-conference-600 hover:text-conference-800 font-medium px-2 py-1"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#committee" 
                className="text-conference-600 hover:text-conference-800 font-medium px-2 py-1"
                onClick={toggleMenu}
              >
                Committee
              </a>
              <a 
                href="#call-for-papers" 
                className="text-conference-600 hover:text-conference-800 font-medium px-2 py-1"
                onClick={toggleMenu}
              >
                Call for Papers
              </a>
              <a 
                href="#submission" 
                className="text-conference-600 hover:text-conference-800 font-medium px-2 py-1"
                onClick={toggleMenu}
              >
                Submission
              </a>
              <a 
                href="#registration" 
                className="text-conference-600 hover:text-conference-800 font-medium px-2 py-1"
                onClick={toggleMenu}
              >
                Registration
              </a>
              <Button 
                className="bg-conference-600 hover:bg-conference-700 w-full"
                onClick={toggleMenu}
                asChild
              >
                <a href="#registration">Register Now</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
