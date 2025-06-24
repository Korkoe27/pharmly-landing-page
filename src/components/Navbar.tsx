'use client';
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/pharmly.svg';
import Image from "next/image";


const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
console.log("is scrolled");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {

    console.log("Id:" + id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }


  };

  return (
 <nav 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2 border-b border-gray-100' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between lg:py-5 items-center">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('top')} 
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-[#A83F3C]' : 'text-white'
              }`}
            >
              <Image src={logo} alt="Pharmly Logo" width={120}  className="" />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center lg:text-lg space-x-8">
            <button 
              onClick={() => scrollToSection('top')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#2D2D2D] hover:text-[#A83F3C]' : 'text-[#0D1821] hover:text-[#D4A574]'
              }`}
            >
              Home
            </button>
                        <div className="relative group">
              <button className={`flex items-center font-medium transition-colors ${
                isScrolled ? 'text-[#2D2D2D] hover:text-[#A83F3C]' : 'text-[#0D1821] hover:text-[#D4A574]'
              }`}>
                About <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <button 
                  onClick={() => scrollToSection('why-we-exist')}
                  className="block w-full text-left px-4 py-3 text-sm text-[#2D2D2D] hover:bg-[#F7F5F3] hover:text-[#A83F3C] font-medium"
                >
                  Why we exist
                </button>
                <button 
                  onClick={() => scrollToSection('who-its-for')}
                  className="block w-full text-left px-4 py-3 text-sm text-[#2D2D2D] hover:bg-[#F7F5F3] hover:text-[#A83F3C] font-medium"
                >
                  Who it's for
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="block w-full text-left px-4 py-3 text-sm text-[#2D2D2D] hover:bg-[#F7F5F3] hover:text-[#A83F3C] font-medium"
                >
                  How it works
                </button>
              </div>
            </div>
            {/* <button 
              onClick={() => scrollToSection('why-we-exist')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#2D2D2D] hover:text-[#A83F3C]' : 'text-[#4A4A4A] hover:text-[#D4A574]'
              }`}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('for-pharmacies')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#2D2D2D] hover:text-[#A83F3C]' : 'text-white hover:text-[#D4A574]'
              }`}
            >
              Who it's For
            </button> */}

            <button 
              onClick={() => scrollToSection('our-impact')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#2D2D2D] hover:text-[#A83F3C]' : 'text-[#0D1821] hover:text-[#D4A574]'
              }`}
            >
              Our Impact
            </button>


            
            <button 
              onClick={() => scrollToSection('beta-test')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-[#2D2D2D] hover:text-[#A83F3C]' : 'text-[#0D1821] hover:text-[#D4A574]'
              }`}
            >
              Beta Testing
            </button>


            {/* <div className="relative group">
              <button className={`flex items-center font-medium transition-colors ${
                isScrolled ? 'text-[#2D2D2D] hover:text-[#A83F3C]' : 'text-white hover:text-[#D4A574]'
              }`}>
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-3 text-sm text-[#2D2D2D] hover:bg-[#F7F5F3] hover:text-[#A83F3C] font-medium"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-3 text-sm text-[#2D2D2D] hover:bg-[#F7F5F3] hover:text-[#A83F3C] font-medium"
                >
                  Contact
                </button>
              </div>
            </div> 
            <button className="px-6 py-3 rounded-xl text-white bg-[#A83F3C] hover:bg-[#8B3530] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105">
              Log In / Sign Up
            </button>
            */}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                isScrolled ? 'text-[#2D2D2D]' : 'text-white'
              } focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-xl mt-4 p-6 shadow-xl border border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('top')}
                className="text-[#2D2D2D] hover:text-[#A83F3C] transition-colors text-left font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-[#2D2D2D] hover:text-[#A83F3C] transition-colors text-left font-medium py-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('for-pharmacies')}
                className="text-[#2D2D2D] hover:text-[#A83F3C] transition-colors text-left font-medium py-2"
              >
                For Pharmacies
              </button>
              <button 
                onClick={() => scrollToSection('for-riders')}
                className="text-[#2D2D2D] hover:text-[#A83F3C] transition-colors text-left font-medium py-2"
              >
                For Riders
              </button>
              <button 
                onClick={() => scrollToSection('data-mission')}
                className="text-[#2D2D2D] hover:text-[#A83F3C] transition-colors text-left font-medium py-2"
              >
                Data Mission
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[#2D2D2D] hover:text-[#A83F3C] transition-colors text-left font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[#2D2D2D] hover:text-[#A83F3C] transition-colors text-left font-medium py-2"
              >
                Contact
              </button>
              <button className="px-6 py-3 rounded-xl text-white bg-[#A83F3C] hover:bg-[#8B3530] transition-all duration-300 font-semibold text-center shadow-lg">
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
