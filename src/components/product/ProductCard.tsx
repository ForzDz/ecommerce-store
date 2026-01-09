import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { Product, formatPrice } from '@/data/products';
import { useFavorites } from '@/context/FavoritesContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(product.id);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Auto-slide images every 3 seconds
  React.useEffect(() => {
    if (product.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % product.images.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div className="product-card group">
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isSale && <span className="badge-sale">SALE</span>}
          {product.isNew && <span className="badge-new">NEW</span>}
        </div>

        {/* Favorite Button */}


        {/* Quick View on Hover */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/product/${product.id}`}
            className="w-full btn-primary block text-center text-sm"
          >
            Aperçu rapide
          </Link>
        </div>

        {/* Image Indicators */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {product.images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-white w-4'
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {product.brand}
        </p>

        {/* Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm md:text-base mb-2 line-clamp-2 hover:underline">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-star text-star'
                    : 'text-star-empty'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">
            ({product.reviewsCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
