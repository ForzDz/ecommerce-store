# Guide d'Intégration Google Sheets (Format ZR Express)

Voici la version mise à jour pour correspondre exactement au format de ZR Express.

## Étape 1 : Mettre à jour les En-têtes du Google Sheet
Modifiez la première ligne (A1:O1) pour avoir exactement cet ordre :

   - A1: Type de livraison
   - B1: Type de commande
   - C1: Nom du client
   - D1: Téléphone
   - E1: Téléphone 2
   - F1: Wilaya
   - G1: Commune / Bureau
   - H1: Adresse
   - I1: Description
   - J1: Produit
   - K1: Quantité
   - L1: Prix total
   - M1: Poids (kg)
   - N1: Numéro de suivi
   - O1: Prix à collecter

## Étape 2 : Mettre à jour le Script
1. Dans votre Google Sheet, cliquez sur **Extensions** > **Apps Script**.
2. Remplacez **tout** le code existant par celui-ci :

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Préparation des données pour ZR Express
    var typeLivraison = data.deliveryType === 'desk' ? 'Stopdesk' : 'Domicile';
    var description = "Taille: " + (data.size || "-") + " | Couleur: " + (data.color || "-");
    var formattedDate = Utilities.formatDate(new Date(), "GMT+1", "dd/MM/yyyy HH:mm");

    // Ajout de la ligne dans l'ordre exact demandé
    sheet.appendRow([
      typeLivraison,                  // A: Type de livraison
      "Commande simple",              // B: Type de commande
      data.customerName,              // C: Nom du client
      "'" + data.phone,               // D: Téléphone (avec ' pour forcer le texte)
      "",                             // E: Téléphone 2 (vide)
      data.wilaya,                    // F: Wilaya
      data.commune,                   // G: Commune / Bureau
      data.address,                   // H: Adresse
      description,                    // I: Description (Détails produit)
      data.productName,               // J: Produit
      1,                              // K: Quantité
      data.totalPrice,                // L: Prix total
      1,                              // M: Poids (kg) - Valeur par défaut
      data.orderId,                   // N: Numéro de suivi
      data.totalPrice                 // O: Prix à collecter
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

3. Cliquez sur la disquette 💾 pour **Enregistrer**.

## Étape 3 : Redéployer (TRÈS IMPORTANT)
⚠️ À chaque modification du script, vous devez créer une **nouvelle version**.

1. Cliquez sur **Déployer** > **Gérer les déploiements**.
2. Cliquez sur l'icône de crayon ✏️ (Modifier) à côté de votre déploiement existant.
3. Dans la liste déroulante "Version", choisissez **Nouvelle version**.
4. Cliquez sur **Déployer**.
5. L'URL ne change généralement pas, mais vérifiez qu'elle est toujours la même.

## Étape 4 : Vérification
Si vous avez déjà copié l'URL dans `src/services/googleSheets.ts`, vous n'avez rien à changer dans le code du site. Le script s'occupera du nouveau format !
