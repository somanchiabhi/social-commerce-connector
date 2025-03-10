
/**
 * Animation utility functions
 */

// Observer for scroll animations
export const createScrollObserver = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      } else {
        // Optional: remove the class if you want the animation to trigger again
        // entry.target.classList.remove('animate-in');
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -100px 0px' // Negative margin to trigger earlier
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  return observer;
};

// Add delay to staggered animations
export const staggeredDelay = (index: number, baseDelay: number = 100) => {
  return { 
    animationDelay: `${baseDelay * index}ms`,
    style: { animationDelay: `${baseDelay * index}ms` } 
  };
};

// Page transition functions
export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
