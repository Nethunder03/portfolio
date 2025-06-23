import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Vérifier la préférence système et le localStorage
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <>
    {/* Floating Language Toggle */}
    <button 
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
      className="floating-contact fixed bottom-24 right-6 z-50 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
    >
      {i18n.language === 'en' ? 'FR' : 'EN'}
    </button>

    {/* Dark Mode Toggle */}
    <button 
      id="darkToggle" 
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 dark:bg-blue-400 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
    >
      <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
    </button>

    {/* Floating Contact Button 
    <a href="#contact" className="floating-contact fixed bottom-24 right-6 z-50 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
        <i className="fas fa-envelope text-xl"></i>
    </a> */}

      <section id="home" className="gradient-bg text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {t('header.title')} <span className="text-blue-200">Rock .F MALELA</span>
                </h1>
                <div className="typewriter text-2xl md:text-3xl font-semibold mb-6">
                    {t('header.subtitle')}
                </div>
                <p className="text-lg mb-8 max-w-lg">
                    {t('header.description')}
                </p>
                <div className="flex space-x-4">
                    <a href="#about" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-300">
                        {t('header.exploreWork')}
                    </a>
                    <a href="#contact" className="border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition duration-300">
                        {t('header.contactMe')}
                    </a>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-4 bg-blue-300 rounded-full opacity-20 animate-pulse delay-100"></div>
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQG2mQ2mMtC7Ow/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713472163321?e=2147483647&v=beta&t=3rZKbpk_8UOuVmvaBH3D2yJqHQhyXfMs_Y6k9Rzywao" 
                         alt="Professional Photo" 
                         className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-xl animate-float"/>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Header;
