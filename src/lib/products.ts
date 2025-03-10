
// Sample product data for demonstration

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  imageUrl: string;
  socialScore: number; // Social media relevance score
}

export const sampleProducts: Product[] = [
  {
    id: "p1",
    name: "Premium Wireless Headphones",
    description: "Immersive sound quality with noise cancellation technology for the ultimate audio experience.",
    price: 299.99,
    category: "Electronics",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
    socialScore: 92
  },
  {
    id: "p2",
    name: "Smart Fitness Watch",
    description: "Track your health metrics and stay connected with this sleek, feature-packed smartwatch.",
    price: 149.99,
    category: "Wearables",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000",
    socialScore: 87
  },
  {
    id: "p3",
    name: "Ultra-thin Laptop",
    description: "Powerful performance in an incredibly thin and light design. Perfect for professionals on the go.",
    price: 1299.99,
    category: "Electronics",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000",
    socialScore: 95
  },
  {
    id: "p4",
    name: "Sustainable Water Bottle",
    description: "Eco-friendly insulated water bottle that keeps your drinks at the perfect temperature.",
    price: 34.99,
    category: "Lifestyle",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=1000",
    socialScore: 78
  },
  {
    id: "p5",
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with premium sound and intuitive AI assistant.",
    price: 199.99,
    category: "Smart Home",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=1000",
    socialScore: 89
  },
  {
    id: "p6",
    name: "Modular Desk Organizer",
    description: "Customizable desk organization system to keep your workspace clean and efficient.",
    price: 49.99,
    category: "Home Office",
    rating: 4.3,
    imageUrl: "https://images.unsplash.com/photo-1507472740417-003d743a3ba4?auto=format&fit=crop&q=80&w=1000",
    socialScore: 72
  }
];

// Function to get recommendations based on social relevance
export const getRecommendations = (count: number = 3): Product[] => {
  return [...sampleProducts]
    .sort((a, b) => b.socialScore - a.socialScore)
    .slice(0, count);
};

// Function to get trending products (random selection for demo)
export const getTrendingProducts = (count: number = 4): Product[] => {
  const shuffled = [...sampleProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Categories for filtering
export const productCategories = [
  "All",
  "Electronics",
  "Wearables",
  "Smart Home",
  "Lifestyle",
  "Home Office"
];
