import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-secondary py-8">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <Heart className="w-8 h-8" />
            Mes Favoris
          </h1>
          <p className="text-muted-foreground mt-2">{favoriteProducts.length} articles</p>
        </div>
      </div>

      <div className="container-custom py-8">
        {favoriteProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {favoriteProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Aucun favori</h2>
            <p className="text-muted-foreground mb-6">
              Ajoutez des produits à vos favoris en cliquant sur le cœur
            </p>
            <Link to="/products" className="btn-primary inline-block">
              Découvrir nos produits
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
