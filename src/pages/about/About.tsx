// pages/Home.tsx
import React from "react";
import { useTranslation } from 'react-i18next';
import aboutpc from "../../assets/about.jpeg"

const About: React.FC = () => {
    const { t } = useTranslation();
  return (
    <>
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{t('about.title_1')} <span className="text-blue-600">{t('about.title_2')}</span></h2>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3 flex justify-center">
                    <div className="relative w-64 h-64">
                        <div className="absolute -inset-2 bg-blue-100 rounded-lg transform rotate-3"></div>
                        <img src={aboutpc}
                             alt="Professional Photo" 
                             className="relative w-full h-full rounded-lg object-cover border-4 border-white shadow-lg"/>
                    </div>
                </div>
                
                <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-4">{t('about.subtitle')}</h3>
                    <p className="text-gray-600 mb-6">
                        {t('about.description')}
                        </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-blue-600 mb-2"><i className="fas fa-graduation-cap mr-2"></i>{t('about.listtitle1')}</h4>
                            <ul className="space-y-2">
                                <li>{t('about.list11')} <a href="https://www.groupeisi.com/">ISI Dakar</a> (2025)</li>
                                <li>{t('about.list12')} <a href="https://www.groupeisi.com/">ISI Dakar</a> (2023)</li>
                                <li>{t('about.list13')} <a href="https://www.groupeisi.com/">ISI Dakar</a> (2022)</li>
                                <li>{t('about.list14')}</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-blue-600 mb-2"><i className="fas fa-briefcase mr-2"></i>Experience</h4>
                            <ul className="space-y-2">
                                <li>Senior Data Scientist - Google (2020-Present)</li>
                                <li>Cybersecurity Consultant - Deloitte (2016-2020)</li>
                                <li>Network Engineer - Cisco (2014-2016)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                        <a href="https://www.linkedin.com/in/rock-ferrand-malela-nkhe" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
                            <i className="fab fa-linkedin-in mr-2"></i> LinkedIn
                        </a>
                        <a href="https://github.com/Nethunder03/" className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center">
                            <i className="fab fa-github mr-2"></i> GitHub
                        </a>
                        <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
                            <i className="fab fa-twitter mr-2"></i> Twitter
                        </a>
                        <a href="#" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center">
                            <i className="fas fa-file-pdf mr-2"></i> Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default About;
