export const menuCategories = ['All', 'Starters', 'Main Course', 'Beverages', 'Desserts'];

export const menuItems = [
  // Starters
  {
    id: 1,
    name: 'Paneer Tikka',
    category: 'Starters',
    price: 220,
    description: 'Marinated cottage cheese cubes grilled to perfection with spices',
    image: '/images/paneer-tikka.jpg',
    badge: 'Chef\'s Special',
  },
  {
    id: 2,
    name: 'Veg Spring Rolls',
    category: 'Starters',
    price: 160,
    description: 'Crispy rolls filled with seasoned vegetables, served with sweet chili sauce',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
  },
  {
    id: 3,
    name: 'Samosa Chaat',
    category: 'Starters',
    price: 120,
    description: 'Crispy samosas topped with tangy chutneys, yogurt & crunchy sev',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
    badge: 'Popular',
  },
  {
    id: 4,
    name: 'Aloo Tikki',
    category: 'Starters',
    price: 100,
    description: 'Golden potato patties spiced with herbs, served with mint chutney',
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=400&q=80',
  },

  // Main Course
  {
    id: 5,
    name: 'Dal Makhani',
    category: 'Main Course',
    price: 200,
    description: 'Slow-cooked black lentils in rich tomato-butter gravy, creamy & aromatic',
    image: '/images/dal-makhani.jpg',
    badge: 'Best Seller',
  },
  {
    id: 6,
    name: 'Veg Biryani',
    category: 'Main Course',
    price: 260,
    description: 'Fragrant basmati rice cooked with seasonal vegetables & whole spices',
    image: '/images/biryani.jpg',
    badge: 'Chef\'s Special',
  },
  {
    id: 7,
    name: 'Paneer Butter Masala',
    category: 'Main Course',
    price: 240,
    description: 'Cottage cheese in rich, velvety tomato-cream sauce with aromatic spices',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80',
  },
  {
    id: 8,
    name: 'Kadai Mushroom',
    category: 'Main Course',
    price: 200,
    description: 'Fresh mushrooms cooked with bell peppers in spiced tomato gravy',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80',
  },
  {
    id: 9,
    name: 'Butter Naan',
    category: 'Main Course',
    price: 40,
    description: 'Soft leavened bread cooked in tandoor, brushed with butter',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
  },

  // Beverages
  {
    id: 10,
    name: 'Mango Lassi',
    category: 'Beverages',
    price: 100,
    description: 'Thick, creamy yogurt drink blended with sweet Alphonso mangoes',
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80',
    badge: 'Popular',
  },
  {
    id: 11,
    name: 'Masala Chai',
    category: 'Beverages',
    price: 60,
    description: 'Traditional Indian spiced tea with ginger, cardamom, and cinnamon',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80',
  },
  {
    id: 12,
    name: 'Fresh Lime Soda',
    category: 'Beverages',
    price: 70,
    description: 'Refreshing sparkling water with fresh lime and a hint of mint',
    image: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=400&q=80',
  },

  // Desserts
  {
    id: 13,
    name: 'Gulab Jamun',
    category: 'Desserts',
    price: 120,
    description: 'Soft milk-solid dumplings soaked in rose-flavored sugar syrup',
    image: 'https://images.unsplash.com/photo-1601303516534-bf5dc62cef0a?w=400&q=80',
    badge: 'Popular',
  },
  {
    id: 14,
    name: 'Kheer',
    category: 'Desserts',
    price: 100,
    description: 'Creamy rice pudding slow-cooked with milk, sugar, cardamom & nuts',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80',
  },
  {
    id: 15,
    name: 'Kulfi Falooda',
    category: 'Desserts',
    price: 150,
    description: 'Traditional Indian ice cream with rose syrup, basil seeds & vermicelli',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80',
  },
];

export const galleryImages = [
  { id: 1, src: '/images/hero-bg.jpg', alt: 'Restaurant Interior', category: 'Interior' },
  { id: 2, src: '/images/about.jpg', alt: 'Dining Area', category: 'Interior' },
  { id: 3, src: '/images/paneer-tikka.jpg', alt: 'Paneer Tikka', category: 'Food' },
  { id: 4, src: '/images/dal-makhani.jpg', alt: 'Dal Makhani', category: 'Food' },
  { id: 5, src: '/images/biryani.jpg', alt: 'Veg Biryani', category: 'Food' },
  { id: 6, src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80', alt: 'Dessert Spread', category: 'Food' },
  { id: 7, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Restaurant Ambiance', category: 'Ambiance' },
  { id: 8, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', alt: 'Restaurant Decor', category: 'Interior' },
];

export const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    text: 'Absolutely divine food! The Dal Makhani is out of this world. The ambiance is perfect for family gatherings. We\'ll definitely be coming back!',
    date: 'February 2026',
  },
  {
    id: 2,
    name: 'Rohan Mehta',
    rating: 5,
    text: 'Best paneer tikka I\'ve ever had! The service was warm and welcoming, just like a family. ZAIKA truly lives up to its name.',
    date: 'January 2026',
  },
  {
    id: 3,
    name: 'Anjali Verma',
    rating: 5,
    text: 'Wonderful dining experience. The biryani was aromatic and flavorful. Great value for money and the staff is incredibly friendly.',
    date: 'January 2026',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    rating: 4,
    text: 'A hidden gem in Uttarakhand! The food is authentic, the portions are generous, and the atmosphere is cozy. Perfect for family outings.',
    date: 'December 2025',
  },
  {
    id: 5,
    name: 'Sunita Gupta',
    rating: 5,
    text: 'The masala chai here feels like home. Every dish is made with love. ZAIKA is my family\'s go-to restaurant now!',
    date: 'December 2025',
  },
];
