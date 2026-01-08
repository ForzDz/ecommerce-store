export interface OrderData {
  orderId: string;
  date: string;
  customerName: string;
  phone: string;
  wilaya: string;
  commune: string;
  address: string;
  productName: string;
  productPrice: number;
  shippingCost: number;
  totalPrice: number;
  quantity: number;
  size?: string;
  color?: string;
  deliveryType: string;
}

// ⚠️ IMPORTANT : Vous devez remplacer cette URL par votre propre URL de déploiement Google Apps Script
// Regardez le fichier GOOGLE_SHEETS_GUIDE.md pour savoir comment obtenir cette URL.
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyh7fTGoYKT9rlC9_1r_5oPvVy_7_vui47xAgmFmN8YXMTs_3YIoBv60DRqcBh9MegTSw/exec';

export const submitOrderToGoogleSheets = async (order: OrderData): Promise<boolean> => {


  try {
    // On utilise 'no-cors' pour éviter les problèmes de CORS avec Google Apps Script
    // Cela signifie qu'on ne peut pas lire la réponse, mais la requête est envoyée.
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    return true; // On assume que c'est bon car on ne peut pas lire le statut en no-cors
  } catch (error) {
    console.error('Erreur lors de l\'envoi à Google Sheets:', error);
    return false;
  }
};
