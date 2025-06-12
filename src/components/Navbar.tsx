'use client';
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/pharmly-logo.png';
import Image from "next/image";


const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-30 transition-all mx-auto   duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('top')} 
              className={`text-2xl font-bold ${isScrolled ? 'text-emerald-600' : 'text-white'}`}
            >
                            <Image src={logo} alt="Pharmly Logo" width={100} height={100} className="w-auto mb-4" />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('top')}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-500 transition-colors`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-500 transition-colors`}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('for-pharmacies')}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-500 transition-colors`}
            >
              For Pharmacies
            </button>
            <button 
              onClick={() => scrollToSection('for-riders')}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-500 transition-colors`}
            >
              For Riders
            </button>
            <button 
              onClick={() => scrollToSection('data-mission')}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-500 transition-colors`}
            >
              Data Mission
            </button>
            <div className="relative group">
              <button className={`flex items-center ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-500 transition-colors`}>
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                >
                  Contact
                </button>
              </div>
            </div>
            <button className="px-4 py-2 rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors">
              Log In / Sign Up
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('top')}
                className="text-gray-700 hover:text-emerald-500 transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-emerald-500 transition-colors text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('for-pharmacies')}
                className="text-gray-700 hover:text-emerald-500 transition-colors text-left"
              >
                For Pharmacies
              </button>
              <button 
                onClick={() => scrollToSection('for-riders')}
                className="text-gray-700 hover:text-emerald-500 transition-colors text-left"
              >
                For Riders
              </button>
              <button 
                onClick={() => scrollToSection('data-mission')}
                className="text-gray-700 hover:text-emerald-500 transition-colors text-left"
              >
                Data Mission
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-emerald-500 transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-emerald-500 transition-colors text-left"
              >
                Contact
              </button>
              <button className="px-4 py-2 rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors text-center">
                Log In / Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar
