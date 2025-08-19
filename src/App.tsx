import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from '@/components/WelcomeScreen';
import SwipeInterface from '@/components/SwipeInterface';
import FavoritesScreen from '@/components/FavoritesScreen';
import Navigation from '@/components/Navigation';
import type { Screen, Activity, FavoriteActivity } from '@/types';

interface AppState {
  currentScreen: Screen;
  favorites: FavoriteActivity[];
  showStats: boolean;
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [favorites, setFavorites] = useState<FavoriteActivity[]>([]);
  const [showStats, setShowStats] = useState<boolean>(false);

  const addToFavorites = (activity: Activity): void => {
    const favoriteActivity: FavoriteActivity = { 
      ...activity, 
      likedAt: new Date() 
    };

    setFavorites(prev => [...prev, favoriteActivity]);
    setShowStats(true);

    // Auto-hide stats notification
    setTimeout(() => setShowStats(false), 2000);
  };

  const removeFromFavorites = (activityId: number): void => {
    setFavorites(prev => prev.filter(fav => fav.id !== activityId));
  };

  const handleNavigate = (screen: Screen): void => {
    setCurrentScreen(screen);
  };

  const screenVariants = {
    initial: { opacity: 0, x: 300 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -300 }
  };

  const renderScreen = (): JSX.Element => {
    switch(currentScreen) {
      case 'welcome':
        return <WelcomeScreen onStart={() => setCurrentScreen('swipe')} />;
      case 'swipe':
        return (
          <SwipeInterface
            onActivityLiked={addToFavorites}
            favoritesCount={favorites.length}
          />
        );
      case 'favorites':
        return (
          <FavoritesScreen
            favorites={favorites}
            onRemoveFavorite={removeFromFavorites}
          />
        );
      default:
        return <WelcomeScreen onStart={() => setCurrentScreen('swipe')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg\'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='m0 0h20v20h-20z'/%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      {/* Stats notification */}
      <AnimatePresence>
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg">
              <span className="font-medium">
                ❤️ {favorites.length} activité{favorites.length > 1 ? 's' : ''} aimée{favorites.length > 1 ? 's' : ''} !
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial="initial"
          animate="in"
          exit="out"
          variants={screenVariants}
          transition={{ duration: 0.3 }}
          className="h-screen"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation - masquée sur l'écran d'accueil */}
      {currentScreen !== 'welcome' && (
        <Navigation
          currentScreen={currentScreen}
          onNavigate={handleNavigate}
          favoritesCount={favorites.length}
        />
      )}
    </div>
  );
};

export default App;
