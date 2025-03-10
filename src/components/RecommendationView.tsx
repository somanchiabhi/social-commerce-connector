
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const RecommendationView = () => {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 w-full animate-on-scroll" style={{ transform: 'translateY(20px)' }}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Algorithm Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our SVD-based recommendation system solves the cold-start problem by analyzing social media behavior to predict product preferences.
          </p>
        </div>
        
        <div className="relative">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ease-out"
              style={{ width: `${((activeStep + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
          
          {/* Step Indicators */}
          <div className="flex justify-between relative z-10 mb-12 pt-8">
            {[...Array(totalSteps)].map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                    activeStep === index 
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20" 
                      : index < activeStep 
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400" 
                        : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600"
                  )}
                >
                  {index < activeStep ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div className="text-sm font-medium mt-2 text-center max-w-[120px]">
                  {index === 0 ? "Data Collection" : index === 1 ? "SVD Analysis" : "Recommendation"}
                </div>
              </div>
            ))}
          </div>
          
          {/* Step Content */}
          <div className="relative overflow-hidden rounded-2xl glass-panel h-[400px] md:h-[500px]">
            {/* Step 1: Data Collection */}
            <div 
              className={cn(
                "absolute inset-0 p-8 flex flex-col md:flex-row items-center transition-all duration-700 ease-out",
                activeStep === 0 ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"
              )}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Social Data Collection</h3>
                <p className="text-lg mb-4">
                  Our algorithm gathers user behavior data from social networks through:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">1</span>
                    <span>Analyzing user interests and interactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">2</span>
                    <span>Monitoring engagement with similar products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">3</span>
                    <span>Collecting demographic information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mr-2 text-blue-600 dark:text-blue-400">4</span>
                    <span>Evaluating content preferences and trends</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-72 h-72 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <div className="absolute inset-4 rounded-full border-4 border-dashed border-blue-200 dark:border-blue-700 animate-spin" style={{ animationDuration: '15s' }}></div>
                  <div className="absolute w-48 h-48 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span className="text-center font-medium mt-2">Social Data</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2: SVD Analysis */}
            <div 
              className={cn(
                "absolute inset-0 p-8 flex flex-col md:flex-row items-center transition-all duration-700 ease-out",
                activeStep === 1 ? "translate-x-0 opacity-100" : activeStep < 1 ? "translate-x-[100%] opacity-0" : "translate-x-[-100%] opacity-0"
              )}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">SVD Matrix Factorization</h3>
                <p className="text-lg mb-4">
                  The Singular Value Decomposition (SVD) framework processes collected data to identify patterns:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center mr-2 text-indigo-600 dark:text-indigo-400">1</span>
                    <span>Decomposing user-item interaction matrices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center mr-2 text-indigo-600 dark:text-indigo-400">2</span>
                    <span>Identifying latent factors in user preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center mr-2 text-indigo-600 dark:text-indigo-400">3</span>
                    <span>Reducing dimensionality for efficient processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center mr-2 text-indigo-600 dark:text-indigo-400">4</span>
                    <span>Building preference models from social data</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 perspective-1000">
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 transform rotate-45 hover:rotate-0 transition-transform duration-1000">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-gradient-to-br from-indigo-500 to-purple-500 opacity-80 hover:opacity-100 transition-opacity duration-300"
                        style={{
                          transformStyle: 'preserve-3d',
                          transform: `translateZ(${Math.random() * 40}px)`,
                          opacity: 0.5 + Math.random() * 0.5
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg z-10">
                      <span className="font-mono text-xl font-bold">SVD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3: Recommendation */}
            <div 
              className={cn(
                "absolute inset-0 p-8 flex flex-col md:flex-row items-center transition-all duration-700 ease-out",
                activeStep === 2 ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"
              )}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Personalized Recommendations</h3>
                <p className="text-lg mb-4">
                  The final stage delivers tailored recommendations to users without purchase history:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mr-2 text-purple-600 dark:text-purple-400">1</span>
                    <span>Calculating similarity between social interests and products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mr-2 text-purple-600 dark:text-purple-400">2</span>
                    <span>Ranking products based on prediction scores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mr-2 text-purple-600 dark:text-purple-400">3</span>
                    <span>Delivering contextually relevant recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mr-2 text-purple-600 dark:text-purple-400">4</span>
                    <span>Continuously improving through feedback loops</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "w-32 h-32 rounded-xl overflow-hidden shadow-lg transition-transform duration-500",
                        `transform hover:scale-105 hover:shadow-xl`,
                        index % 2 ? "animate-delay-300" : "animate-delay-500"
                      )}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-3/4"></div>
                      <div className="bg-white dark:bg-gray-800 h-1/4 flex items-center justify-center">
                        <span className="text-xs font-medium">Product {index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationView;
