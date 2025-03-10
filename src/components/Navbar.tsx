
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-8",
        scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="relative w-10 h-10 mr-2 bg-primary rounded-full overflow-hidden flex items-center justify-center transition-all group-hover:scale-105 duration-300">
            <span className="text-white font-bold text-lg">SC</span>
          </div>
          <span className={cn(
            "font-medium text-lg transition-all duration-300",
            scrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"
          )}>
            SocialCommerce
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Products", "Algorithm", "About"].map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={cn(
                "relative font-medium transition-colors duration-300 hover:text-primary",
                scrolled ? "text-gray-700 dark:text-gray-200" : "text-gray-800 dark:text-gray-100"
              )}
            >
              <span>{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center p-2 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ease-in-out",
                menuOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
              )}
            ></span>
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ease-in-out translate-y-2",
                menuOpen ? "opacity-0" : "opacity-100"
              )}
            ></span>
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ease-in-out",
                menuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4"
              )}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-20 px-6 transform transition-transform duration-300 ease-in-out md:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 py-8">
          {["Home", "Products", "Algorithm", "About"].map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-2xl font-medium text-gray-900 dark:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
