import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, RotateCcw } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, brands } from '@/data/products';
import modernHeroImage from '@/assets/images/principale.jpg';

const Index: React.FC = () => {
  const newProducts = products.filter(p => p.isNew);
  const saleProducts = products.filter(p => p.isSale);
  const popularProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full Width Image with Text Overlay */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={modernHeroImage} 
            alt="Spring Collection 2025" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Overlay - Centered/Left aligned as requested */}
        <div className="relative h-full container-custom flex flex-col justify-end pb-20 md:pb-32">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.95] mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: '-0.02em' }}>
              Spring <br />
              Collection <br />
              <span style={{ fontWeight: 900 }}>2025</span>
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-lg font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.01em' }}>
              Discover our unisex clothing designed for comfort, quality, and modern style. With Yacine'Store, simplicity meets elegance.
            </p>
            <Link 
              to="/products" 
              className="inline-block bg-white text-black px-10 py-4 font-semibold uppercase tracking-[0.2em] text-xs hover:bg-white/90 hover:scale-105 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="bg-black text-white py-4 overflow-hidden border-y border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-8 font-bold uppercase tracking-widest text-sm md:text-base">TISSU DE HAUTE QUALITÉ</span>
              <span className="mx-4 text-white/50">•</span>
              <span className="mx-8 font-bold uppercase tracking-widest text-sm md:text-base">24/7 SUPPORT</span>
              <span className="mx-4 text-white/50">•</span>
              <span className="mx-8 font-bold uppercase tracking-widest text-sm md:text-base">LIVRAISON RAPIDE</span>
              <span className="mx-4 text-white/50">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* BIG SALES Section */}
      <section id="big-sales" className="py-20 md:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Big Sales</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {saleProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          

        </div>
      </section>

      {/* New Arrivals Preview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">New Arrivals</h2>
              <p className="text-muted-foreground max-w-md">Check out the latest additions to our collection. Fresh styles added weekly.</p>
            </div>
            <Link to="/products?new=true" className="btn-outline bg-transparent border-black text-black hover:bg-black hover:text-white">
              View Collection
            </Link>
            
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands Ticker */}
      <section className="py-16 border-t border-border overflow-hidden">
        <div className="container-custom mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Trusted by top brands</p>
        </div>
        <div className="flex justify-center gap-12 md:gap-20 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map(brand => (
            <img key={brand.id} src={brand.logo} alt={brand.name} className="h-8 md:h-12 object-contain dark:invert" />
          ))}
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;