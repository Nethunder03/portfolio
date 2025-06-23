import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "../../assets/logo.jpg";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', text: t('navbar.home') },
    { id: 'about', text: t('navbar.about') },
    { id: 'skills', text: t('navbar.skills') },
    { id: 'projects', text: t('navbar.projects') },
    { id: 'blog', text: t('navbar.blog') },
    { id: 'contact', text: t('navbar.contact') }
  ];

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-12 rounded-lg border-2 border-blue-100 p-1"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t('navbar.portfolio')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => smoothScroll(link.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {link.text}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => smoothScroll(link.id)}
                  className={`w-full px-4 py-2 text-left rounded-lg text-base font-medium ${
                    activeSection === link.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {link.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
