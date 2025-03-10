
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-12 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[60%] -right-[60%] w-[140%] h-[140%] rounded-full bg-gradient-to-br from-blue-50/50 via-blue-100/30 to-indigo-50/50 dark:from-blue-950/10 dark:via-blue-900/5 dark:to-indigo-950/10 opacity-60 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <div className="relative w-8 h-8 mr-2 bg-primary rounded-full overflow-hidden flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="font-medium text-lg">SocialCommerce</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Connecting social media insights with e-commerce recommendations to solve the cold-start problem.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-colors hover:bg-primary hover:text-white"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              {['Features', 'Pricing', 'Case Studies', 'Resources', 'Documentation'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Careers', 'Press', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {['Terms', 'Privacy', 'Cookies', 'Settings', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} SocialCommerce. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="hover:text-primary transition-colors">Terms</Link>
              <Link to="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
