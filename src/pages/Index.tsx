
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import RecommendationView from "@/components/RecommendationView";
import Footer from "@/components/Footer";
import { getRecommendations, getTrendingProducts } from "@/lib/products";
import { createScrollObserver } from "@/lib/motion";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const recommendedProducts = getRecommendations(3);
  const trendingProducts = getTrendingProducts(4);

  useEffect(() => {
    // Initialize scroll animations
    observerRef.current = createScrollObserver();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Recommended Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium animate-fade-in animate-delay-100 bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 mb-4 subtle-border">
              Powered by SVD
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended For You</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Based on your social media activity, we've selected these products that match your interests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {recommendedProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index} 
                highlighted={true}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Algorithm Visualization */}
      <RecommendationView />
      
      {/* Trending Products */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium animate-fade-in animate-delay-100 bg-indigo-50 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200 mb-4 subtle-border">
              Trending Now
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Across Platforms</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover what's trending based on aggregated social media signals and e-commerce data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {trendingProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl">
          <div className="glass-card p-8 md:p-12 text-center animate-on-scroll" style={{ transform: 'translateY(20px)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Discovery Experience?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of users who have enhanced their shopping experience with our intelligent cross-site recommendation system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
                Get Started
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white dark:bg-gray-800 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0 subtle-border">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
