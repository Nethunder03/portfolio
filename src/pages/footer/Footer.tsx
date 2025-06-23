const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <span className="text-xl font-bold">Rock Ferrand MALELA NKHE</span>
                    <p className="text-gray-400 mt-2">Data Science & Cyber Security Débutant</p>
                </div>
                
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <i className="fab fa-medium"></i>
                    </a>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                    &copy; 2025 Rock Ferrand MALELA NKHE. All rights reserved.
                </p>
                
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>
    );
  };
  
  export default Footer;
  