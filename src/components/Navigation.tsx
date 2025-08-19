import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Home, Sparkles, Heart } from 'lucide-react';
import type { NavigationProps, Screen } from '@/types';

interface NavItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  screen: Screen;
  badge?: number;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentScreen, 
  onNavigate, 
  favoritesCount 
}) => {
  const navItems: NavItem[] = useMemo(() => [
    {
      id: 'home',
      icon: Home,
      label: 'Accueil',
      screen: 'welcome'
    },
    {
      id: 'discover',
      icon: Sparkles,
      label: 'Découvrir',
      screen: 'swipe'
    },
    {
      id: 'favorites',
      icon: Heart,
      label: 'Favoris',
      screen: 'favorites',
      badge: favoritesCount > 0 ? favoritesCount : undefined
    }
  ], [favoritesCount]);

  const handleNavigation = (screen: Screen): void => {
    if (currentScreen !== screen) {
      onNavigate(screen);
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40"
    >
      <div className="bg-white/90 backdrop-blur-lg border-t border-white/20 px-6 py-4">
        <div className="flex justify-around items-center max-w-sm mx-auto">
          {navItems.map((item: NavItem) => {
            const Icon = item.icon;
            const isActive: boolean = currentScreen === item.screen;

            return (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.screen)}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all relative focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  isActive 
                    ? 'text-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-label={`Naviguer vers ${item.label}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-blue-600 rounded-full"
                  />
                )}

                <div className="relative">
                  <Icon className={`w-6 h-6 ${isActive ? 'text-blue-600' : ''}`} />

                  {/* Badge for favorites */}
                  {item.badge && item.badge > 0 && (
                    <motion.div
                      key={`badge-${item.badge}`} // Key pour forcer la re-animation
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 min-w-[1.25rem] h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium px-1"
                    >
                      {item.badge > 99 ? '99+' : item.badge}
                    </motion.div>
                  )}
                </div>

                <span className={`text-xs font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;
