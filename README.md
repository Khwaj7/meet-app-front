# 🎨 ActivitySwipe

Une application React moderne avec TypeScript pour découvrir des activités créatives et hobbies près de chez vous !

![ActivitySwipe Demo](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue) ![Vite](https://img.shields.io/badge/Vite-5.3-green) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-blue)

## ✨ Nouveautés TypeScript

- **🛡️ Type Safety Complète** : Tous les composants strictement typés
- **📝 Interfaces Définies** : Types pour activités, props et états
- **🎯 IntelliSense Avancé** : Auto-complétion et détection d'erreurs
- **🔧 Path Mapping** : Imports simplifiés avec @/ aliases
- **⚡ Vérification Compilation** : Erreurs détectées avant build

## 🚀 Installation Rapide TypeScript

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Support TypeScript dans votre éditeur

### Étapes

1. **Clonez ou téléchargez le projet**
```bash
mkdir activity-swipe-ts
cd activity-swipe-ts
```

2. **Installez les dépendances TypeScript**
```bash
npm install
```

3. **Vérifiez les types**
```bash
npm run typecheck
```

4. **Lancez en développement**
```bash
npm run dev
```

5. **Construisez pour production**
```bash
npm run build
```

## 🛠️ Technologies TypeScript

### Frontend Typé
- **React 18.3** + **TypeScript 5.2** - Framework UI strictement typé
- **Vite 5.3** - Build tool avec support TS natif
- **Framer Motion 11** - Animations avec types
- **Tailwind CSS 3.4** - Styles avec IntelliSense
- **Lucide React** - Icônes typées

### Fonctionnalités TypeScript
- **Interfaces Complètes** - Types pour toutes les données
- **Props Validation** - Vérification automatique des props
- **State Management Typé** - useState avec types stricts
- **Event Handlers Typés** - Gestion d'événements sécurisée
- **Path Mapping** - Imports propres avec @/ aliases

## 📁 Structure TypeScript

```
activity-swipe-ts/
├── src/
│   ├── types/
│   │   └── index.ts              # Types et interfaces globaux
│   ├── components/
│   │   ├── WelcomeScreen.tsx     # Écran d'accueil typé
│   │   ├── SwipeInterface.tsx    # Interface de swipe typée
│   │   ├── FavoritesScreen.tsx   # Liste des favoris typée
│   │   └── Navigation.tsx        # Navigation typée
│   ├── data/
│   │   └── activities.ts         # Données typées
│   ├── App.tsx                   # App principal typé
│   ├── main.tsx                  # Point d'entrée TS
│   ├── vite-env.d.ts            # Types Vite
│   └── index.css                 # Styles globaux
├── tsconfig.json                 # Config TypeScript
├── tsconfig.node.json            # Config TS pour build
├── vite.config.ts                # Config Vite typée
├── .eslintrc.json                # ESLint + TypeScript
└── package.json                  # Dépendances TS
```

## 🎯 Types Définis

### Interfaces Principales
```typescript
interface Activity {
  id: number;
  title: string;
  category: ActivityCategory;
  description: string;
  location: string;
  price: string;
  duration: string;
  level: ActivityLevel;
  image: string;
}

type ActivityCategory = 
  | 'art_creativity'
  | 'sport_fitness' 
  | 'wellness'
  | 'culture'
  | 'learning'
  | 'gastronomy';
```

### Props des Composants
```typescript
interface SwipeInterfaceProps {
  onActivityLiked: (activity: Activity) => void;
  favoritesCount: number;
}

interface FavoritesScreenProps {
  favorites: FavoriteActivity[];
  onRemoveFavorite: (activityId: number) => void;
}
```

## 🔧 Scripts TypeScript

- `npm run dev` - Lance le serveur de développement avec TS
- `npm run build` - Build avec vérification TypeScript
- `npm run preview` - Prévisualise la version de production
- `npm run typecheck` - Vérifie les types sans build
- `npm run lint` - ESLint avec règles TypeScript

## 🎨 Avantages TypeScript

### Développement
- ✅ **Auto-complétion intelligente** dans l'éditeur
- ✅ **Détection d'erreurs en temps réel**
- ✅ **Refactoring sûr** avec renommage automatique
- ✅ **Documentation intégrée** via les types

### Production  
- ✅ **Moins de bugs runtime** grâce au type checking
- ✅ **Maintenance simplifiée** avec contrats clairs
- ✅ **Performance optimisée** par le compilateur
- ✅ **Scalabilité améliorée** pour grandes équipes

## 🔄 Migration JavaScript → TypeScript

Si vous venez de la version JavaScript :

1. **Extensions changées** : `.jsx` → `.tsx`, `.js` → `.ts`
2. **Types ajoutés** : Props, state et fonctions typées
3. **Imports mis à jour** : Path mapping avec @/ aliases
4. **Configuration étendue** : tsconfig.json et ESLint TS

## 📝 Personnalisation TypeScript

### Ajouter une nouvelle activité typée
```typescript
const newActivity: Activity = {
  id: 16,
  title: "Votre Activité",
  category: "art_creativity", // Type vérifié
  description: "Description...",
  location: "Votre Ville",
  price: "CHF XX",
  duration: "Xh", 
  level: "Débutant", // Type vérifié
  image: "https://..."
};
```

### Créer un nouveau composant
```typescript
import type { FC } from 'react';

interface MyComponentProps {
  title: string;
  onClick: () => void;
}

const MyComponent: FC<MyComponentProps> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};
```

## 🌟 Fonctionnalités TypeScript Avancées

- **Union Types** pour les catégories et niveaux
- **Utility Types** pour la manipulation des types
- **Generic Functions** pour les utilitaires
- **Conditional Types** pour la logique complexe
- **Path Mapping** pour les imports propres

## 🤝 Contribution TypeScript

Pour contribuer avec TypeScript :
1. Respectez les interfaces existantes
2. Utilisez les types stricts (pas de `any`)
3. Documentez vos types complexes
4. Testez avec `npm run typecheck`

## 📚 Resources TypeScript

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React + TypeScript Best Practices](https://react-typescript-cheatsheet.netlify.app/)
- [Vite TypeScript Guide](https://vitejs.dev/guide/features.html#typescript)

---

**Développé avec ❤️ et TypeScript pour une expérience de développement optimale !**
