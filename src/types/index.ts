// Types généraux pour ActivitySwipe

export type ActivityCategory = 
  | 'art_creativity'
  | 'sport_fitness'
  | 'wellness'
  | 'culture'
  | 'learning'
  | 'gastronomy';

export type ActivityLevel = 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Tous niveaux' | 'Facile';

export interface Activity {
  id: number;
  title: string;
  category: ActivityCategory;
  description: string;
  location: string;
  price: string;
  duration: string;
  level: ActivityLevel;
  image: string;
  liked?: boolean;
  likedAt?: Date;
}

export interface ActivityCategoryInfo {
  icon: string;
  label: string;
  color: string;
}

export type ActivityCategories = Record<ActivityCategory, ActivityCategoryInfo>;

export interface FavoriteActivity extends Activity {
  likedAt: Date;
}

// Types pour les props des composants
export interface WelcomeScreenProps {
  onStart: () => void;
}

export interface SwipeInterfaceProps {
  onActivityLiked: (activity: Activity) => void;
  favoritesCount: number;
}

export interface FavoritesScreenProps {
  favorites: FavoriteActivity[];
  onRemoveFavorite: (activityId: number) => void;
}

export interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  favoritesCount: number;
}

export type Screen = 'welcome' | 'swipe' | 'favorites';

// Types pour les événements
export interface SwipeEvent {
  direction: 'left' | 'right';
  activity: Activity;
}

// Types utilitaires
export interface Position {
  x: number;
  y: number;
}

export interface DragInfo {
  offset: Position;
  velocity: Position;
}
