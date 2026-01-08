# Dossier Images

Placez vos images de produits ici.

## Comment utiliser les images

### Option 1: Import direct (recommandé)
```typescript
import nikeSweatpantsBlack from '@/assets/images/nike-sweatpants-black.jpg';
import nikeSweatpantsGrey from '@/assets/images/nike-sweatpants-grey.jpg';

// Dans products.ts
images: [
  nikeSweatpantsBlack,
  nikeSweatpantsGrey
]
```

### Option 2: Utiliser avec new URL (pour les images dynamiques)
```typescript
const imageUrl = new URL('@/assets/images/nike-sweatpants-black.jpg', import.meta.url).href;
```

## Organisation recommandée
- Nommez vos fichiers de manière descriptive: `nike-sweatpants-black.jpg`
- Utilisez des formats optimisés: `.jpg`, `.webp`, `.png`
- Gardez les noms en minuscules avec des tirets
