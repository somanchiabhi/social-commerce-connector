
import { useState } from "react";
import { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
  highlighted?: boolean;
}

const ProductCard = ({ product, index = 0, highlighted = false }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const animationDelay = index * 100;

  return (
    <div 
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl transition-all duration-300 animate-on-scroll",
        highlighted ? "transform hover:scale-[1.02]" : "transform hover:scale-[1.03]",
        highlighted ? "shadow-lg hover:shadow-xl" : "shadow-md hover:shadow-lg",
        highlighted ? "glass-card" : "bg-white dark:bg-gray-800"
      )}
      style={{ 
        transitionDelay: `${animationDelay}ms`,
        animationDelay: `${animationDelay}ms`,
        transform: 'translateY(20px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Social Relevance Indicator */}
      {highlighted && (
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center gap-1 bg-blue-600/90 text-white text-xs font-bold px-2 py-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"/>
              <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"/>
              <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"/>
              <path d="M8.59 13.51L15.42 17.49"/>
              <path d="M15.41 6.51L8.59 10.49"/>
            </svg>
            <span>{product.socialScore}%</span>
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className={cn(
            "object-cover w-full h-full transform transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        
        {/* Overlay Gradient */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : ""
        )}></div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-4 flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            {product.category}
          </div>
          
          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={cn(
                    "w-4 h-4",
                    i < Math.floor(product.rating) 
                      ? "text-yellow-400" 
                      : i < product.rating 
                        ? "text-yellow-400" 
                        : "text-gray-300 dark:text-gray-600"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {i < Math.floor(product.rating) ? (
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  ) : i < product.rating ? (
                    // Half star for decimal ratings
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  ) : (
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  )}
                </svg>
              ))}
            </div>
            <span className="text-xs ml-1 text-gray-600 dark:text-gray-400">
              ({product.rating.toFixed(1)})
            </span>
          </div>
        </div>
      </div>
      
      {/* Action Button */}
      <div 
        className={cn(
          "absolute bottom-0 inset-x-0 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-medium transform transition-transform duration-300",
          isHovered ? "translate-y-0" : "translate-y-full"
        )}
      >
        <span>View Details</span>
      </div>
    </div>
  );
};

export default ProductCard;
