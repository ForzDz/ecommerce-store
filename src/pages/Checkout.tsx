import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ChevronLeft, ShoppingBag, Truck, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import WilayaSelector from '@/components/checkout/WilayaSelector';

interface FormData {
  nom: string;
  prenom: string;
  telephone: string;
  wilaya: string;
  commune: string;
  adresse: string;
  notes: string;
}

interface FormErrors {
  nom?: string;
  prenom?: string;
  telephone?: string;
  wilaya?: string;
  commune?: string;
  adresse?: string;
}

const Checkout: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    telephone: '',
    wilaya: '',
    commune: '',
    adresse: '',
    notes: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validatePhone = (phone: string) => {
    const cleanPhone = phone.replace(/\s/g, '');
    return /^(05|06|07)\d{8}$/.test(cleanPhone);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }
    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis';
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
    } else if (!validatePhone(formData.telephone)) {
      newErrors.telephone = 'Format invalide (ex: 05XX XX XX XX)';
    }
    if (!formData.wilaya) {
      newErrors.wilaya = 'La wilaya est requise';
    }
    if (!formData.commune) {
      newErrors.commune = 'La commune est requise';
    }
    if (!formData.adresse.trim()) {
      newErrors.adresse = "L'adresse est requise";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    // Generate order number
    const orderNum = `YS${Date.now().toString(36).toUpperCase()}`;
    setOrderNumber(orderNum);

    // Here you would normally send the order to your backend
    // For now, we just simulate success
    setIsSubmitted(true);
    clearCart();
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (items.length === 0 && !isSubmitted) {
    return (
      <div className="container-custom py-16 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
        <h1 className="text-2xl font-bold mb-4">Votre panier est vide</h1>
        <Link to="/products" className="btn-primary inline-block">
          Découvrir nos produits
        </Link>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="container-custom py-16">
        <div className="max-w-lg mx-auto text-center animate-fade-in">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Commande confirmée!</h1>
          <p className="text-muted-foreground mb-6">
            Merci pour votre commande. Vous recevrez un appel de confirmation sous peu.
          </p>
          <div className="bg-secondary p-6 rounded-lg mb-8">
            <p className="text-sm text-muted-foreground mb-1">Numéro de commande</p>
            <p className="text-2xl font-bold">{orderNumber}</p>
          </div>
          <Link to="/" className="btn-primary inline-block">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="container-custom py-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" aria-label="Retour">
            <ChevronLeft className="w-4 h-4" />
            Continuer mes achats
          </button>
        </div>
      </div>

      <div className="container-custom py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Finaliser ma commande</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form id="checkout-form" onSubmit={handleSubmit} className="bg-background rounded-lg p-6 space-y-6">
              <h2 className="text-xl font-semibold border-b border-border pb-4">
                Informations de livraison
              </h2>

              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Prénom <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.prenom}
                    onChange={(e) => handleInputChange('prenom', e.target.value)}
                    className={`input-field ${errors.prenom ? 'border-destructive' : ''}`}
                    placeholder="Votre prénom"
                  />
                  {errors.prenom && (
                    <p className="text-sm text-destructive mt-1">{errors.prenom}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nom <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => handleInputChange('nom', e.target.value)}
                    className={`input-field ${errors.nom ? 'border-destructive' : ''}`}
                    placeholder="Votre nom"
                  />
                  {errors.nom && (
                    <p className="text-sm text-destructive mt-1">{errors.nom}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Téléphone <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => handleInputChange('telephone', e.target.value)}
                  className={`input-field ${errors.telephone ? 'border-destructive' : ''}`}
                  placeholder="05XX XX XX XX"
                />
                {errors.telephone && (
                  <p className="text-sm text-destructive mt-1">{errors.telephone}</p>
                )}
              </div>

              {/* Wilaya & Commune */}
              <WilayaSelector
                selectedWilaya={formData.wilaya}
                selectedCommune={formData.commune}
                onWilayaChange={(val) => handleInputChange('wilaya', val)}
                onCommuneChange={(val) => handleInputChange('commune', val)}
                errors={{ wilaya: errors.wilaya, commune: errors.commune }}
              />

              {/* Address */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Adresse détaillée <span className="text-destructive">*</span>
                </label>
                <textarea
                  value={formData.adresse}
                  onChange={(e) => handleInputChange('adresse', e.target.value)}
                  className={`input-field min-h-[100px] ${errors.adresse ? 'border-destructive' : ''}`}
                  placeholder="Numéro, rue, quartier, repères..."
                />
                {errors.adresse && (
                  <p className="text-sm text-destructive mt-1">{errors.adresse}</p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Notes (optionnel)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="input-field min-h-[80px]"
                  placeholder="Instructions spéciales pour la livraison..."
                />
              </div>

              <button type="submit" className="btn-primary w-full text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <div className="flex items-center justify-center gap-3">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Confirmer la commande</span>
                </div>
              </button>

              <p className="text-sm text-center text-muted-foreground">
                Paiement à la livraison uniquement
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-background rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold border-b border-border pb-4 mb-4">
                Résumé de la commande
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-3">
                    <div className="w-16 h-16 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium line-clamp-1">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.selectedSize} • {item.selectedColor} • x{item.quantity}
                      </p>
                      <p className="text-sm font-bold mt-1">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <span className="text-muted-foreground">Sous-total</span>
                  </div>
                  <span className="font-medium">{formatPrice(totalPrice)}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                      <Truck className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground">Livraison</span>
                  </div>
                  <span className="text-success">Gratuite</span>
                </div>

                <div className="flex items-center justify-between text-lg font-bold pt-3 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <span>Total</span>
                  </div>
                  <span className="text-xl">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
