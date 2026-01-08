# Exemple: Ajouter des images de produits

## Étapes pour ajouter vos images

1. **Copiez vos images** dans le dossier `src/assets/images/`
   - Par exemple: `nike-sweatpants-black.jpg` et `nike-sweatpants-grey.jpg`

2. **Importez les images** dans `src/data/products.ts`:
```typescript
// En haut du fichier products.ts
import nikeSweatpantsBlack from '@/assets/images/nike-sweatpants-black.jpg';
import nikeSweatpantsGrey from '@/assets/images/nike-sweatpants-grey.jpg';
```

3. **Utilisez-les dans votre produit**:
```typescript
{
  id: "9",
  name: "Nike Sweatpants",
  brand: "Nike",
  price: 15000,
  images: [
    nikeSweatpantsBlack,
    nikeSweatpantsGrey
  ],
  // ... autres propriétés
}
```

## Alternative: Utiliser le dossier public/

Si vous préférez mettre les images dans `public/images/`:
1. Créez le dossier `public/images/`
2. Copiez vos images dedans
3. Utilisez le chemin: `"/images/nike-sweatpants-black.jpg"`

**Note:** Les images dans `public/` ne sont pas optimisées par Vite, mais sont plus faciles à référencer.


