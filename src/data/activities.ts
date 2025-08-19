import type { Activity, ActivityCategories, ActivityCategory } from '@/types';

export const activityCategories: ActivityCategories = {
  art_creativity: {
    icon: "🎨",
    label: "Art & Créativité", 
    color: "#FF6B6B"
  },
  sport_fitness: {
    icon: "🏃‍♂️",
    label: "Sport & Fitness",
    color: "#4ECDC4"
  },
  wellness: {
    icon: "🧘‍♀️", 
    label: "Bien-être",
    color: "#95A5A6"
  },
  culture: {
    icon: "🎭",
    label: "Culture",
    color: "#9B59B6"
  },
  learning: {
    icon: "🔬",
    label: "Apprentissage",
    color: "#3498DB"
  },
  gastronomy: {
    icon: "🍳",
    label: "Gastronomie", 
    color: "#F39C12"
  }
} as const;

export const activities: Activity[] = [
  {
    id: 1,
    title: "Cours de Poterie Créative",
    category: "art_creativity" as ActivityCategory,
    description: "Apprenez les techniques de base du tournage et créez vos propres œuvres uniques. Découvrez l'art ancestral de la céramique dans un atelier convivial.",
    location: "Centre Culturel, Morges",
    price: "CHF 45",
    duration: "2h",
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Escalade en Salle",
    category: "sport_fitness" as ActivityCategory, 
    description: "Défiez vos limites sur nos murs d'escalade avec accompagnement professionnel. Équipement fourni, tous niveaux bienvenus.",
    location: "Vertical World, Lausanne",
    price: "CHF 25",
    duration: "1h30", 
    level: "Tous niveaux",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Méditation Pleine Conscience",
    category: "wellness" as ActivityCategory,
    description: "Séance de méditation guidée pour réduire le stress et retrouver la sérénité. Dans un cadre naturel apaisant face au lac.",
    location: "Parc de l'Aubonne, Allaman", 
    price: "CHF 20",
    duration: "1h",
    level: "Tous niveaux",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Atelier Peinture Aquarelle",
    category: "art_creativity" as ActivityCategory,
    description: "Explorez les techniques de l'aquarelle en peignant des paysages lacustres. Matériel fourni, ambiance détendue garantie.",
    location: "Atelier d'Art, St-Prex",
    price: "CHF 55", 
    duration: "2h30",
    level: "Intermédiaire",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Cours de Cuisine Italienne",
    category: "gastronomy" as ActivityCategory,
    description: "Maîtrisez l'art des pâtes fraîches et des sauces traditionnelles. Dégustation incluse avec un verre de vin italien.",
    location: "École Culinaire, Nyon",
    price: "CHF 85",
    duration: "3h",
    level: "Débutant", 
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Yoga Matinal au Lac",
    category: "wellness" as ActivityCategory,
    description: "Réveillez votre corps en douceur face au magnifique Lac Léman. Séance adaptée à tous les niveaux, tapis fournis.",
    location: "Plage de St-Prex", 
    price: "CHF 25",
    duration: "1h",
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 7,
    title: "Initiation à l'Astronomie",
    category: "learning" as ActivityCategory,
    description: "Découvrez les mystères du ciel nocturne avec télescopes professionnels. Observation des planètes et constellations.",
    location: "Observatoire, Signal de Bougy",
    price: "CHF 35",
    duration: "2h",
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1446776876053-832298503137?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 8,
    title: "Danse Salsa Débutants", 
    category: "culture" as ActivityCategory,
    description: "Apprenez les pas de base de la salsa dans une ambiance conviviale. Venez seul(e) ou en couple, bonne humeur garantie !",
    location: "Salle Communale, Rolle", 
    price: "CHF 30",
    duration: "1h15",
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 9,
    title: "Dégustation de Vins Locaux",
    category: "gastronomy" as ActivityCategory,
    description: "Découverte des cépages vaudois avec un sommelier expérimenté. Dégustation de 5 vins accompagnés de mets locaux.",
    location: "Cave Viticole, Féchy",
    price: "CHF 45", 
    duration: "2h",
    level: "Tous niveaux", 
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 10,
    title: "Randonnée Urbaine Lausanne",
    category: "sport_fitness" as ActivityCategory,
    description: "Explorez les quartiers cachés de Lausanne avec un guide local. Histoire, architecture et points de vue secrets.",
    location: "Gare CFF, Lausanne",
    price: "CHF 15", 
    duration: "2h30",
    level: "Facile",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 11,
    title: "Atelier Photographie Portrait", 
    category: "art_creativity" as ActivityCategory,
    description: "Maîtrisez l'art du portrait avec éclairage professionnel. Modèles fournis, équipement haut de gamme disponible.",
    location: "Studio Photo, Morges",
    price: "CHF 75",
    duration: "3h", 
    level: "Intermédiaire",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 12,
    title: "Jardinage Urbain Bio", 
    category: "learning" as ActivityCategory,
    description: "Créez votre potager urbain et cultivez vos légumes bio. Techniques de permaculture et compostage incluses.",
    location: "Jardin Communautaire, Allaman",
    price: "CHF 40",
    duration: "2h",
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 13,
    title: "Atelier Chocolat Artisanal",
    category: "gastronomy" as ActivityCategory, 
    description: "Fabriquez vos propres chocolats fins avec un maître chocolatier. Dégustation et repartez avec vos créations !",
    location: "Chocolaterie, Vevey",
    price: "CHF 65",
    duration: "2h30",
    level: "Tous niveaux",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 14,
    title: "Calligraphie Moderne", 
    category: "art_creativity" as ActivityCategory,
    description: "Apprenez l'art de la belle écriture moderne et décorative. Idéal pour créer des invitations et cartes personnalisées.",
    location: "Maison des Associations, Nyon",
    price: "CHF 50",
    duration: "2h",
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop&q=80"
  },
  {
    id: 15,
    title: "Théâtre d'Improvisation",
    category: "culture" as ActivityCategory,
    description: "Libérez votre créativité avec des exercices d'impro ludiques. Développez votre confiance en vous dans la bonne humeur !",
    location: "Théâtre de Poche, Gland", 
    price: "CHF 35",
    duration: "2h",
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&q=80"
  }
];

// Fonction utilitaire typée pour obtenir une catégorie
export const getCategoryInfo = (categoryId: ActivityCategory) => {
  return activityCategories[categoryId];
};

// Fonction pour filtrer les activités par catégorie
export const getActivitiesByCategory = (category: ActivityCategory): Activity[] => {
  return activities.filter(activity => activity.category === category);
};

// Fonction pour obtenir une activité par ID
export const getActivityById = (id: number): Activity | undefined => {
  return activities.find(activity => activity.id === id);
};
