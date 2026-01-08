# Guide de Déploiement (GitHub & Netlify)

Votre projet est prêt. J'ai déjà initialisé le dépôt Git localement. Suivez ces étapes pour le mettre en ligne.

## Étape 1 : Mettre sur GitHub

1. Connectez-vous à votre compte [GitHub](https://github.com).
2. Cliquez sur le **+** en haut à droite et choisissez **New repository** (Nouveau dépôt).
3. Nommez-le (par exemple `yacine-store`).
4. **Ne cochez rien** (pas de README, pas de .gitignore).
5. Cliquez sur **Create repository**.
6. Vous verrez une page avec des commandes. Copiez les commandes de la section **"…or push an existing repository from the command line"**. Elles ressemblent à ça :
   ```bash
   git remote add origin https://github.com/VOTRE_NOM/yacine-store.git
   git branch -M main
   git push -u origin main
   ```
7. Collez ces commandes dans votre terminal (ou donnez-les moi pour que je les exécute si vous êtes connecté).

## Étape 2 : Mettre sur Netlify

1. Connectez-vous à [Netlify](https://www.netlify.com/).
2. Cliquez sur **Add new site** > **Import from an existing project**.
3. Choisissez **GitHub**.
4. Autorisez Netlify à accéder à votre compte GitHub si demandé.
5. Sélectionnez le dépôt `yacine-store` que vous venez de créer.
6. Dans les paramètres de déploiement :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
7. Cliquez sur **Deploy site**.

Votre site sera en ligne en quelques secondes ! 🚀
