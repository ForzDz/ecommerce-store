import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container-custom py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Votre panier</h1>
          {items.length > 0 && (
            <button onClick={() => clearCart()} className="text-sm text-destructive">Vider le panier</button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="w-14 h-14 mx-auto text-muted-foreground/40 mb-4" />
            <p className="text-muted-foreground mb-6">Votre panier est vide</p>
            <Link to="/products" className="btn-primary">Voir les produits</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map(item => (
              <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 p-4 bg-card rounded-lg">
                <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase">{item.product.brand}</p>
                  <p className="font-semibold">{item.product.name}</p>
                  <p className="text-xs text-muted-foreground">Taille: {item.selectedSize} • Couleur: {item.selectedColor}</p>
                  <p className="font-bold mt-2">{formatPrice(item.product.price)}</p>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)} className="w-8 h-8 rounded-full border flex items-center justify-center"> <Minus className="w-4 h-4" /> </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)} className="w-8 h-8 rounded-full border flex items-center justify-center"> <Plus className="w-4 h-4" /> </button>
                    </div>
                    <button onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)} className="p-2 text-destructive"> <Trash2 className="w-4 h-4" /> </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-4 bg-secondary rounded-lg flex flex-col sm:flex-row items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-xl font-bold">{formatPrice(totalPrice)}</p>
              </div>
              <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
                <button onClick={() => navigate('/checkout')} className="btn-primary w-full sm:w-auto px-6 py-3">Acheter maintenant</button>
                <Link to="/products" className="btn-outline w-full sm:w-auto text-center px-6 py-3">Continuer vos achats</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
