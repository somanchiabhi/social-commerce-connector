
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createScrollObserver } from "@/lib/motion";

const Hero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = createScrollObserver();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden px-4 py-20 flex flex-col items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[60%] w-[140%] h-[140%] rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 dark:from-blue-950/30 dark:via-blue-900/20 dark:to-indigo-950/30 opacity-60 blur-3xl"></div>
        <div className="absolute -bottom-[40%] -left-[60%] w-[140%] h-[140%] rounded-full bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 opacity-60 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium animate-fade-in animate-delay-100 bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 mb-4 subtle-border">
              A New Era of Product Discovery
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-up">
              <span className="block">Connecting</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Social Media & E-Commerce
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-fade-in animate-delay-300 max-w-2xl mx-auto lg:mx-0">
              Our intelligent recommendation system solves the cold-start problem by analyzing social networking data to suggest products users will love, even with no purchase history.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animate-delay-500">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Discover Products
              </Link>
              <Link 
                to="/algorithm" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white dark:bg-gray-800 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0 subtle-border"
              >
                How It Works
              </Link>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="w-full lg:w-1/2 animate-blur-in">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Connection visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Social Media Node */}
                  <div className="absolute top-[25%] left-[25%] w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl shadow-blue-500/20 flex items-center justify-center floating animate-delay-300">
                    <span className="text-white font-bold text-lg">Social</span>
                  </div>
                  
                  {/* E-commerce Node */}
                  <div className="absolute bottom-[25%] right-[25%] w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-xl shadow-indigo-500/20 flex items-center justify-center floating animate-delay-600">
                    <span className="text-white font-bold text-lg">E-Commerce</span>
                  </div>
                  
                  {/* SVD Algorithm Node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl flex items-center justify-center z-10 subtle-border">
                    <span className="text-gray-800 dark:text-white font-bold text-lg">SVD</span>
                  </div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {/* Line from Social to SVD */}
                    <line 
                      x1="30" y1="30" 
                      x2="50" y2="50" 
                      stroke="url(#blue-gradient)" 
                      strokeWidth="1.5"
                      strokeDasharray="1,3"
                    />
                    
                    {/* Line from SVD to E-commerce */}
                    <line 
                      x1="50" y1="50" 
                      x2="70" y2="70" 
                      stroke="url(#purple-gradient)" 
                      strokeWidth="1.5"
                      strokeDasharray="1,3"
                    />
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#6366F1" />
                      </linearGradient>
                      <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#A855F7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
