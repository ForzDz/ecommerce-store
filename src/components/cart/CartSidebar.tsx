import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';

const CartSidebar: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl z-50 animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <button
                onClick={() => { setIsCartOpen(false); navigate(-1); }}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
                aria-label="Retour"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" />
                Panier ({items.length})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground mb-4">Votre panier est vide</p>
                <Link
                  to="/products"
                  onClick={() => setIsCartOpen(false)}
                  className="btn-primary"
                >
                  Découvrir nos produits
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 p-4 bg-secondary/50 rounded-lg">
                  {/* Image */}
                  <Link 
                    to={`/product/${item.product.id}`} 
                    onClick={() => setIsCartOpen(false)}
                    className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase">{item.product.brand}</p>
                    <Link 
                      to={`/product/${item.product.id}`}
                      onClick={() => setIsCartOpen(false)}
                      className="font-semibold text-sm line-clamp-2 hover:underline"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">
                      Taille: {item.selectedSize} • Couleur: {item.selectedColor}
                    </p>
                    <p className="font-bold mt-2">{formatPrice(item.product.price)}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                        className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors"
                        aria-label="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 border-t border-border space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-medium">Total</span>
                <span className="font-bold">{formatPrice(totalPrice)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary w-full block text-center"
              >
                Passer la commande
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
