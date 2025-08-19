import React, { useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Clock, DollarSign, Trash2, Calendar, Star } from 'lucide-react';
import { activityCategories } from '@/data/activities';
import type { FavoritesScreenProps, ActivityCategoryInfo, ActivityCategory } from '@/types';

interface CategoryStats {
  [categoryLabel: string]: number;
}

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({ 
  favorites, 
  onRemoveFavorite 
}) => {
  // Calcul des statistiques des catégories préférées
  const categoryStats = useMemo((): CategoryStats => {
    return favorites.reduce((acc: CategoryStats, activity) => {
      const category: ActivityCategoryInfo = activityCategories[activity.category];
      acc[category.label] = (acc[category.label] || 0) + 1;
      return acc;
    }, {});
  }, [favorites]);

  const topCategories = useMemo(() => {
    return Object.entries(categoryStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);
  }, [categoryStats]);

  const handleRemoveFavorite = useCallback((activityId: number): void => {
    onRemoveFavorite(activityId);
  }, [onRemoveFavorite]);

  const handleReserveActivity = useCallback((activityId: number): void => {
    // Simulation de réservation
    console.log(`Réservation de l'activité ${activityId}`);
    // Ici on pourrait ouvrir un modal de réservation ou rediriger vers un système externe
  }, []);

  // Écran vide si aucun favori
  if (favorites.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-sm"
        >
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-white/50" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Aucune activité favorite
          </h2>
          <p className="text-white/80 text-center">
            Commencez à swiper pour découvrir des activités qui vous passionnent !
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-screen pt-16 pb-32 px-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Mes Favoris</h1>
        <p className="text-white/80">
          {favorites.length} activité{favorites.length !== 1 ? 's' : ''} qui vous {favorites.length !== 1 ? 'intéressent' : 'intéresse'}
        </p>
      </div>

      {/* Favorites list */}
      <div className="max-w-md mx-auto space-y-4 overflow-y-auto max-h-[calc(100vh-250px)] pb-4">
        <AnimatePresence>
          {favorites.map((activity, index: number) => {
            const category: ActivityCategoryInfo = activityCategories[activity.category];

            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                layout
                className="activity-card p-4 group"
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-20 flex-shrink-0">
                    <img
                      src={activity.image}
                      alt={`${activity.title}`}
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        {activity.title}
                      </h3>
                      <button
                        onClick={() => handleRemoveFavorite(activity.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-50 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
                        aria-label={`Supprimer ${activity.title} des favoris`}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>

                    {/* Category badge */}
                    <div 
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs mb-2"
                      style={{ 
                        backgroundColor: `${category.color}20`,
                        color: category.color 
                      }}
                    >
                      <span className="mr-1" role="img" aria-label={category.label}>
                        {category.icon}
                      </span>
                      <span>{category.label}</span>
                    </div>

                    {/* Info */}
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-gray-600">
                        <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                        <span className="truncate">{activity.location}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span>{activity.duration}</span>
                        </div>

                        <div className="flex items-center text-gray-800 font-semibold">
                          <DollarSign className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span>{activity.price}</span>
                        </div>
                      </div>

                      <div className="flex items-center text-xs text-gray-600">
                        <Star className="w-3 h-3 mr-1 flex-shrink-0" />
                        <span>{activity.level}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <button 
                    onClick={() => handleReserveActivity(activity.id)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    aria-label={`Réserver l'activité ${activity.title}`}
                  >
                    <Calendar className="w-4 h-4" />
                    Réserver cette activité
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Stats */}
      {favorites.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-md mx-auto"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <h3 className="text-white font-medium mb-3 text-center">
              Vos préférences
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {topCategories.map(([categoryLabel, count], index: number) => (
                <div key={`stat-${categoryLabel}-${index}`} className="text-center">
                  <div className="text-white font-semibold text-lg">
                    {count}
                  </div>
                  <div className="text-white/80 text-xs">
                    {categoryLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FavoritesScreen;
