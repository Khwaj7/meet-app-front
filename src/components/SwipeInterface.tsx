import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Heart, X, RotateCcw, MapPin, Clock, DollarSign, Star } from 'lucide-react';
import { activities, activityCategories } from '@/data/activities';
import type { SwipeInterfaceProps, Activity, ActivityCategoryInfo } from '@/types';

type SwipeDirection = 'left' | 'right' | null;

interface SwipeState {
  currentIndex: number;
  dragDirection: SwipeDirection;
  isAnimating: boolean;
}

const SwipeInterface: React.FC<SwipeInterfaceProps> = ({ 
  onActivityLiked, 
  favoritesCount 
}) => {
  const [state, setState] = useState<SwipeState>({
    currentIndex: 0,
    dragDirection: null,
    isAnimating: false
  });

  const { currentIndex, dragDirection, isAnimating } = state;
  const currentActivity: Activity | undefined = activities[currentIndex];
  const hasMoreActivities: boolean = currentIndex < activities.length - 1;

  // Préchargement des images
  useEffect(() => {
    const preloadNextImage = (): void => {
      if (currentIndex + 2 < activities.length) {
        const img = new Image();
        img.src = activities[currentIndex + 1].image;
      }
    };

    preloadNextImage();
  }, [currentIndex]);

  const handleSwipe = useCallback((direction: 'left' | 'right'): void => {
    if (isAnimating || !currentActivity) return;

    setState(prev => ({
      ...prev,
      isAnimating: true,
      dragDirection: direction
    }));

    if (direction === 'right') {
      onActivityLiked(currentActivity);
    }

    setTimeout(() => {
      setState(prev => ({
        currentIndex: hasMoreActivities ? prev.currentIndex + 1 : 0,
        dragDirection: null,
        isAnimating: false
      }));
    }, 300);
  }, [currentActivity, isAnimating, hasMoreActivities, onActivityLiked]);

  const handleDragEnd = useCallback((_: Event, info: PanInfo): void => {
    const threshold = 150;
    const velocity = Math.abs(info.velocity.x);

    if (Math.abs(info.offset.x) > threshold || velocity > 500) {
      handleSwipe(info.offset.x > 0 ? 'right' : 'left');
    }
  }, [handleSwipe]);

  const handleUndo = useCallback((): void => {
    if (currentIndex === 0 || isAnimating) return;

    setState(prev => ({
      ...prev,
      currentIndex: Math.max(0, prev.currentIndex - 1)
    }));
  }, [currentIndex, isAnimating]);

  const handleRestart = useCallback((): void => {
    setState({
      currentIndex: 0,
      dragDirection: null,
      isAnimating: false
    });
  }, []);

  // Écran de fin
  if (!currentActivity) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center text-white max-w-sm mx-auto px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-6xl mb-6"
          >
            🎉
          </motion.div>
          <h2 className="text-2xl font-bold mb-4">
            Toutes les activités découvertes !
          </h2>
          <p className="opacity-80 mb-6">
            Vous avez parcouru toutes nos suggestions. Envie de recommencer ?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRestart}
            className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-50 transition-colors"
          >
            Recommencer l'exploration
          </motion.button>
        </div>
      </div>
    );
  }

  const category: ActivityCategoryInfo = activityCategories[currentActivity.category];

  return (
    <div className="h-screen pt-16 pb-32 px-4 flex flex-col">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Découvrez</h1>
        <div className="text-white/80">
          ❤️ {favoritesCount} activité{favoritesCount !== 1 ? 's' : ''} aimée{favoritesCount !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Cards Stack */}
      <div className="flex-1 relative max-w-sm mx-auto w-full">
        <AnimatePresence>
          {/* Next card (background) */}
          {activities[currentIndex + 1] && (
            <motion.div
              key={`next-${currentIndex + 1}`}
              className="absolute inset-0 activity-card p-6 transform scale-95 opacity-50"
              style={{ zIndex: 1 }}
            >
              <div className="h-full bg-gray-200 rounded-2xl" />
            </motion.div>
          )}

          {/* Current card */}
          <motion.div
            key={`current-${currentIndex}`}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            whileDrag={{ 
              scale: 1.02, 
              rotate: dragDirection === 'right' ? 5 : dragDirection === 'left' ? -5 : 0 
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              x: dragDirection === 'right' ? 1000 : dragDirection === 'left' ? -1000 : 0,
              rotate: dragDirection === 'right' ? 30 : dragDirection === 'left' ? -30 : 0
            }}
            transition={{ duration: dragDirection ? 0.3 : 0.5 }}
            className="absolute inset-0 activity-card cursor-grab active:cursor-grabbing select-none"
            style={{ zIndex: 2 }}
          >
            <div className="h-full flex flex-col">
              {/* Image */}
              <div className="h-1/2 relative overflow-hidden rounded-t-3xl">
                <img
                  src={currentActivity.image}
                  alt={`Image de l'activité: ${currentActivity.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <div 
                    className="category-badge"
                    style={{ borderLeft: `4px solid ${category.color}` }}
                  >
                    <span className="mr-2" role="img" aria-label={category.label}>
                      {category.icon}
                    </span>
                    <span>{category.label}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="category-badge">
                    <Star className="w-3 h-3 mr-1" />
                    <span>{currentActivity.level}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {currentActivity.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {currentActivity.description}
                </p>

                {/* Info grid */}
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                    <span className="truncate">{currentActivity.location}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-700 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      <span>{currentActivity.duration}</span>
                    </div>

                    <div className="flex items-center text-gray-700 text-sm">
                      <DollarSign className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" />
                      <span className="font-semibold">{currentActivity.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Action buttons */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe('left')}
          disabled={isAnimating}
          className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-red-300"
          aria-label="Rejeter cette activité"
        >
          <X className="w-8 h-8 text-red-500" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleUndo}
          disabled={currentIndex === 0 || isAnimating}
          className="w-12 h-12 bg-white/80 rounded-full shadow-lg flex items-center justify-center disabled:opacity-30 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Revenir à l'activité précédente"
        >
          <RotateCcw className="w-5 h-5 text-gray-600" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe('right')}
          disabled={isAnimating}
          className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-300"
          aria-label="Aimer cette activité"
        >
          <Heart className="w-8 h-8 text-green-500" />
        </motion.button>
      </div>

      {/* Progress indicator */}
      <div className="mt-6">
        <div className="flex justify-center gap-1">
          {Array.from({ length: Math.min(5, activities.length) }).map((_, index: number) => (
            <div
              key={`progress-${index}`}
              className={`w-2 h-2 rounded-full transition-all ${
                index <= currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwipeInterface;
