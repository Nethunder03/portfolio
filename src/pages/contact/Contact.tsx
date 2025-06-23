// pages/Home.tsx
import React from "react";
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{t('contact.title1')} <span className="text-blue-600">{t('contact.title2')}</span></h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                {t('contact.subtitle')}
            </p>
            
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                    <form className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                {t('contact.form.name')}
                            </label>
                            <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                {t('contact.form.email')}
                            </label>
                            <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                {t('contact.form.subject')}
                            </label>
                            <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                {t('contact.form.message')}
                            </label>
                            <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                            {t('contact.form.submit')}
                        </button>
                    </form>
                </div>
                
                <div className="lg:w-1/2">
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 h-full">
                        <h3 className="text-xl font-semibold mb-6">{t('contact.info.title')}</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="text-blue-600 text-xl mr-4 mt-1">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('contact.info.location')}</h4>
                                    <p className="text-gray-600">Dakar, Senegal</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="text-blue-600 text-xl mr-4 mt-1">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('contact.info.email')}</h4>
                                    <p className="text-gray-600">guyrockmalela@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="text-blue-600 text-xl mr-4 mt-1">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('contact.info.phone')}</h4>
                                    <p className="text-gray-600">+221 77 860 50 36</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="text-blue-600 text-xl mr-4 mt-1">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('contact.info.hours')}</h4>
                                    <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-12">
                            <h4 className="font-medium mb-4">{t('contact.social.title')}</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/rock-ferrand-malela-nkhe" className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-green-100 text-blue-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition duration-300">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-800 hover:text-white transition duration-300">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition duration-300">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition duration-300">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  );
};

export default Contact;
