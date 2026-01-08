import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, Sun, Moon, ChevronLeft } from 'lucide-react';
import logo from '@/assets/images/logo.png';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Ensembles', href: '/products?category=Ensembles' },
  { name: 'Sweats', href: '/products?category=Sweats' },
  { name: 'Pantalons', href: '/products?category=Pantalons' },
  { name: 'Baggy Jeans', href: '/products?category=Baggy Jeans' },
  { name: 'Grandes Remises', href: '/#big-sales', isHighlighted: true },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // back button is handled by TopBackButton component; don't render inside navbar

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-background border-b border-border" dir="rtl">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 w-full max-w-full">
          <div className="flex items-center gap-3">
            {/* Back button intentionally omitted from navbar (TopBackButton handles this) */}

            <button className="lg:hidden p-2 -mr-1 sm:-mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link to="/" className="flex items-center flex-shrink-0">
              <img src={logo} alt="Yacine Store" className="h-14 md:h-16 w-auto object-contain dark:invert" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className={`nav-link ${link.isHighlighted ? 'text-red-600 font-black uppercase tracking-wide hover:scale-105 transition-transform' : ''}`}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-1 md:space-x-4 space-x-reverse flex-shrink-0">
            <button onClick={() => navigate('/cart')} className="p-2 hover:bg-secondary rounded-full transition-colors relative" aria-label="Panier">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">{totalItems}</span>
              )}
            </button>

            <button onClick={toggleTheme} className="p-2 hover:bg-secondary rounded-full transition-colors" aria-label="Changer le thème">
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-black border-b border-border shadow-lg animate-fade-in z-40">
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className={`text-xl font-medium py-2 text-center transition-all ${link.isHighlighted ? 'text-red-600 font-black uppercase tracking-wide mt-2' : 'text-foreground hover:text-primary'}`}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;