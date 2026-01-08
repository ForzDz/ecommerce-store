import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { getProductById, formatPrice } from '@/data/products';

const TARGET_IDS = ['order-form', 'checkout-form'];

const scrollToTarget = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return false;
  const headerOffset = 100; // offset to avoid header overlap
  const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  return true;
};

const detectPrice = (): string => {
  try {
    const nodes = Array.from(document.querySelectorAll('span,div,p,strong')) as HTMLElement[];
    const priceRegex = /\d[\d\s.,]*\s*(دج|DZD|DA|د\.ج)/i;
    for (const n of nodes) {
      const txt = (n.textContent || '').trim();
      if (priceRegex.test(txt)) {
        const match = txt.match(priceRegex);
        if (match) {
          return `اشتري الآن - ${match[0]}`;
        }
      }
    }
  } catch (e) {
    // ignore
  }
  return 'Acheter maintenant';
};

const BuyNowFloatingButton: React.FC = () => {
  const [showBar, setShowBar] = useState(true);
  const [animatePulse, setAnimatePulse] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show the button when the user is within the top portion of the page,
    // hide it once they scroll past a threshold (here 50% of viewport height).
    const checkVisibility = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop || 0;
      const threshold = window.innerHeight * 0.5;
      setShowBar(y < threshold);
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  // When the bar becomes visible, animate subtly for a short time then stop
  useEffect(() => {
    let t: number | undefined;
    if (showBar) {
      setAnimatePulse(true);
      t = window.setTimeout(() => setAnimatePulse(false), 6000);
    } else {
      setAnimatePulse(false);
    }
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [showBar]);

  const getButtonLabel = (): string => {
    // If on a product detail page, extract product id from path and use exact price
    try {
      const m = location.pathname.match(/\/product\/(.+)$/);
      if (m) {
        const id = m[1];
        const p = getProductById(id);
        if (p) return `اشتري الآن - ${formatPrice(p.price)}`;
      }
    } catch (e) {
      // ignore and fallback
    }
    return detectPrice();
  };

  const productOnPage = (() => {
    try {
      const m = location.pathname.match(/\/product\/(.+)$/);
      if (m) return getProductById(m[1]);
    } catch (e) {
      // ignore
    }
    return undefined;
  })();

  const handleBuyNowScroll = () => {
    for (const id of TARGET_IDS) {
      if (document.getElementById(id)) {
          const scrolled = scrollToTarget(id);
          // Apply a short highlight to the form to draw attention (respect reduced motion)
          try {
            const el = document.getElementById(id);
            const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (el && !prefersReduce && scrolled) {
              el.classList.add('order-highlight');
              window.setTimeout(() => el.classList.remove('order-highlight'), 1400);
            }
          } catch (e) {
            // ignore
          }
          setShowBar(false);
        return;
      }
    }
    // fallback to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBuyClick = () => {
    for (const id of TARGET_IDS) {
      if (document.getElementById(id)) {
        const scrolled = scrollToTarget(id);
        try {
          const el = document.getElementById(id);
          const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (el && !prefersReduce && scrolled) {
            el.classList.add('order-highlight');
            window.setTimeout(() => el.classList.remove('order-highlight'), 1400);
          }
        } catch (e) {}
        setShowBar(false);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const phoneNumber = '+213555123456';
    const message = 'Bonjour, je suis intéressé par ce produit.';
    const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Only render the "Ajouter au panier" floating button on product detail pages
  if (!productOnPage) return null;

  return (
    <>
      {showBar && (
        <div className="fixed bottom-6 left-4 right-4 z-50 max-w-3xl mx-auto flex items-center justify-center p-3">
          <button
            onClick={handleBuyNowScroll}
            aria-label="Acheter maintenant"
            className={`w-full max-w-3xl mx-auto rounded-2xl h-12 flex items-center justify-center gap-3 px-4 shadow-sm ${animatePulse ? 'animate-subtle-bounce' : ''} bg-black text-white dark:bg-white dark:text-black border border-black/5 dark:border-white/10`}
          >
            <ShoppingBag className="w-5 h-5 text-current" />
            <span className="font-medium">Acheter maintenant</span>
          </button>
        </div>
      )}
    </>
  );
};

export default BuyNowFloatingButton;
