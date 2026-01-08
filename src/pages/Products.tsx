import React, { useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { ArrowLeft } from 'lucide-react';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const isNew = searchParams.get('new') === 'true';
  const isSale = searchParams.get('sale') === 'true';
  const category = searchParams.get('category');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (isNew) {
      result = result.filter(p => p.isNew);
    }
    if (isSale) {
      result = result.filter(p => p.isSale);
    }
    if (category) {
      const catLower = category.toLowerCase();
      result = result.filter(p => 
        p.category.toLowerCase() === catLower || 
        p.subcategory?.toLowerCase() === catLower
      );
    }
    
    // Default sort by popularity or newness if needed, or just keep order
    result.sort((a, b) => b.reviewsCount - a.reviewsCount);

    return result;
  }, [isNew, isSale, category]);

  const getPageTitle = () => {
    if (isNew) return 'Nouveautés';
    if (isSale) return 'Soldes';
    if (category) return category.charAt(0).toUpperCase() + category.slice(1);
    return 'Tous les produits';
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-secondary py-8">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-2">
            <button 
              onClick={() => navigate(-1)} 
              className="text-gray-500 hover:text-foreground transition-colors"
              aria-label="Retour"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-3xl md:text-4xl font-bold">{getPageTitle()}</h1>
          </div>
          <p className="text-muted-foreground ml-10">{filteredProducts.length} produits</p>
        </div>
      </div>

      <div className="container-custom py-4 sm:py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">Aucun produit trouvé</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
