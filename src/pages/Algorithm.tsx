
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Algorithm = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'svd' | 'cold-start' | 'implementation'>('overview');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 mb-4 subtle-border">
              Technical Insight
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Recommendation Algorithm</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn how we connect social media interactions to e-commerce recommendations using SVD and microblogging information.
            </p>
          </div>
          
          {/* Tabs */}
          <div className="mb-8 border-b">
            <div className="flex flex-wrap -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={cn(
                  "inline-flex items-center px-4 py-2 font-medium text-sm border-b-2 transition-colors",
                  activeTab === 'overview'
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('svd')}
                className={cn(
                  "inline-flex items-center px-4 py-2 font-medium text-sm border-b-2 transition-colors",
                  activeTab === 'svd'
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
              >
                SVD Framework
              </button>
              <button
                onClick={() => setActiveTab('cold-start')}
                className={cn(
                  "inline-flex items-center px-4 py-2 font-medium text-sm border-b-2 transition-colors",
                  activeTab === 'cold-start'
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
              >
                Cold-Start Problem
              </button>
              <button
                onClick={() => setActiveTab('implementation')}
                className={cn(
                  "inline-flex items-center px-4 py-2 font-medium text-sm border-b-2 transition-colors",
                  activeTab === 'implementation'
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
              >
                Implementation
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="glass-card p-6 md:p-8">
            {activeTab === 'overview' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">Cross-Site Recommendation System</h2>
                <p className="mb-4">
                  Our cross-site cold-start product recommendation system aims to solve a critical problem in e-commerce: 
                  how to recommend products to users when there is limited historical interaction data.
                </p>
                <p className="mb-4">
                  We leverage social media microblogging information to make meaningful product recommendations, 
                  creating a bridge between social networking activity and e-commerce product discovery.
                </p>
                <img 
                  src="https://miro.medium.com/max/1400/1*D8-SB5IXr-nxJBbIGXmfxg.png" 
                  alt="Recommendation System Overview" 
                  className="w-full max-w-3xl mx-auto my-8 rounded-lg shadow-md"
                />
                <p className="mb-4">
                  The system uses a combination of feature mapping, matrix factorization via Singular Value Decomposition (SVD), 
                  and cold-start strategies to make relevant recommendations even for new users or products.
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mt-6">
                  <h3 className="font-medium mb-2">Key Benefits:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Enhanced discovery of new products</li>
                    <li>Improved marketing for cold-start products</li>
                    <li>Cross-platform user experience integration</li>
                    <li>Higher conversion rates from social browsing to purchases</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'svd' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">Singular Value Decomposition (SVD) Framework</h2>
                <p className="mb-4">
                  Singular Value Decomposition (SVD) is a matrix factorization technique widely used in recommendation systems. 
                  Our implementation uses SVD to decompose the user-product interaction matrix into three components.
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="flex-1 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h3 className="font-bold mb-3">Mathematical Foundation</h3>
                    <p className="mb-3">
                      For a matrix A, SVD decomposes it as:
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded text-center font-mono">
                      A = U·Σ·V<sup>T</sup>
                    </div>
                    <p className="mt-3">
                      Where U contains left singular vectors, Σ contains singular values, and V contains right singular vectors.
                    </p>
                  </div>
                  
                  <div className="flex-1 bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                    <h3 className="font-bold mb-3">Application to Recommendations</h3>
                    <p>
                      In our context:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>User-item interaction matrix is decomposed</li>
                      <li>Latent factors are identified</li>
                      <li>Reduced dimensionality improves efficiency</li>
                      <li>Captures underlying patterns in user behavior</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">SVD Implementation Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="text-primary font-bold text-xl mb-2">01</div>
                    <h4 className="font-medium mb-2">Data Collection</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Gather user-product interactions from e-commerce data and extract microblogging features.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="text-primary font-bold text-xl mb-2">02</div>
                    <h4 className="font-medium mb-2">Matrix Construction</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Build the user-item matrix and social feature matrices for processing.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="text-primary font-bold text-xl mb-2">03</div>
                    <h4 className="font-medium mb-2">Dimensionality Reduction</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Apply SVD to reduce dimensions and identify latent factors.
                    </p>
                  </div>
                </div>
                
                <p className="mb-4">
                  Our SVD framework enables us to detect patterns in user behavior across different platforms, 
                  allowing for more accurate recommendations even with limited data.
                </p>
              </div>
            )}
            
            {activeTab === 'cold-start' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">Addressing the Cold-Start Problem</h2>
                <p className="mb-4">
                  The cold-start problem is one of the most significant challenges in recommendation systems. 
                  It occurs when the system has insufficient information about new users or items to make accurate recommendations.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">Types of Cold-Start Problems</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-lg mb-2">User Cold-Start</h4>
                      <p className="mb-3">
                        When a new user joins the platform with no previous interaction history.
                      </p>
                      <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                        <h5 className="font-medium mb-1">Challenge:</h5>
                        <p className="text-sm">
                          No purchase history or explicit preferences to base recommendations on.
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mt-3">
                        <h5 className="font-medium mb-1">Our Solution:</h5>
                        <p className="text-sm">
                          Leverage social media data to infer interests and preferences from posts, follows, and interactions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-lg mb-2">Item Cold-Start</h4>
                      <p className="mb-3">
                        When new products are added to the catalog with no interaction data.
                      </p>
                      <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                        <h5 className="font-medium mb-1">Challenge:</h5>
                        <p className="text-sm">
                          No feedback or ratings to determine which users might be interested.
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mt-3">
                        <h5 className="font-medium mb-1">Our Solution:</h5>
                        <p className="text-sm">
                          Extract product features and match them to social media content topics and trending discussions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Our Cross-Platform Approach</h3>
                <p className="mb-6">
                  We address the cold-start problem through a novel cross-platform approach that bridges social media data with e-commerce recommendations:
                </p>
                
                <div className="relative overflow-hidden">
                  <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gray-200 dark:bg-gray-700 ml-3"></div>
                  <div className="space-y-6">
                    <div className="relative flex items-start">
                      <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white mr-4 z-10">1</div>
                      <div>
                        <h4 className="font-bold mb-1">Social Media Feature Extraction</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Extract user interests, preferences, and behavior patterns from social media activities
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start">
                      <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white mr-4 z-10">2</div>
                      <div>
                        <h4 className="font-bold mb-1">Feature Mapping</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Create a mapping between social media features and product attributes
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start">
                      <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white mr-4 z-10">3</div>
                      <div>
                        <h4 className="font-bold mb-1">Matrix Factorization with SVD</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Apply SVD to the mapped feature space to identify latent relationships
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start">
                      <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white mr-4 z-10">4</div>
                      <div>
                        <h4 className="font-bold mb-1">Cold-Start Prediction</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Generate recommendations for new users or for new products using the established model
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'implementation' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">Technical Implementation</h2>
                <p className="mb-6">
                  Our recommendation system is implemented using a modern tech stack that enables efficient data processing, 
                  real-time recommendations, and seamless integration between social media platforms and e-commerce sites.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Backend Architecture</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-medium mb-3">Core Technologies:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="currentColor"/>
                              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                              <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="currentColor"/>
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">Java & Spring Framework</span>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Core application logic and API endpoints</p>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="currentColor"/>
                              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                              <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="currentColor"/>
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">Spring MVC</span>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Web layer for handling HTTP requests</p>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="currentColor"/>
                              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                              <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="currentColor"/>
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">MySQL</span>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Relational database for storing product and user data</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Frontend Implementation</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-medium mb-3">Technologies:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="currentColor"/>
                              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                              <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="currentColor"/>
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">HTML & CSS</span>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Structure and styling of the web interface</p>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="currentColor"/>
                              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                              <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="currentColor"/>
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">JavaScript</span>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Client-side interactivity and API communication</p>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="currentColor"/>
                              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                              <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="currentColor"/>
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium">Bootstrap 4</span>
                            <p className="text-sm text-gray-600 dark:text-gray-300">UI components and responsive layout</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">SVD Implementation Details</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
{`// SVD implementation for recommendation
public class SVDRecommender {
    private Matrix userFeatureMatrix;
    private Matrix productFeatureMatrix;
    private double[] singularValues;
    
    public SVDRecommender(double[][] userItemMatrix) {
        // Initialize with user-item interaction matrix
        performSVD(userItemMatrix);
    }
    
    private void performSVD(double[][] matrix) {
        // Perform Singular Value Decomposition
        SingularValueDecomposition svd = 
            new SingularValueDecomposition(new Matrix(matrix));
        
        // Extract components
        userFeatureMatrix = svd.getU();
        singularValues = svd.getSingularValues();
        productFeatureMatrix = svd.getV();
    }
    
    public double[] recommend(int userId) {
        // Generate recommendations for user
        // ... implementation details
    }
}`}
                  </pre>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  The implementation follows a modular architecture with clear separation of concerns between data processing, 
                  SVD computation, and recommendation generation, facilitating maintenance and future enhancements.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Algorithm;
