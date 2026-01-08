import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '@/assets/images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
      <div className="container-custom py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Company Info - Centered */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block mb-3">
              <img 
                src={logo} 
                alt="Yacine Store" 
                className="h-16 w-auto object-contain invert dark:invert-0 mx-auto md:mx-0"
              />
            </Link>
            <p className="text-gray-400 dark:text-gray-600 text-xs mb-4">
              Votre destination mode en Algérie.
            </p>
            <div className="flex space-x-3 justify-center md:justify-start">
              <a href="#" className="text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-600 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-600 transition-colors" aria-label="Tiktok">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold mb-3">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-xs text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors">Nos Produits</Link></li>
              <li><Link to="/checkout" className="text-xs text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors">Commander</Link></li>
              <li><a href="#big-sales" className="text-xs text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors">Big Sales</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold mb-3">Besoin d'aide ?</h3>
            <div className="space-y-2">
              <a 
                href="tel:0556482798" 
                className="flex items-center justify-center md:justify-start text-xs text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors group"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">0556 48 27 98</span>
              </a>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Support disponible 24/7
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 dark:border-black/10 mt-6 pt-4 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            © 2026 Yacine Store. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
