
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { staggeredDelay } from "@/lib/motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About The Project</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn about our mission to bridge social media and e-commerce through innovative recommendation technology.
            </p>
          </div>
          
          {/* Project Overview */}
          <div className="glass-card p-8 mb-12 animate-on-scroll" style={{ transform: 'translateY(20px)' }}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="mb-4">
                  The "Connecting Social-Media to E-Commerce" project addresses the cold-start product recommendation problem by 
                  leveraging microblogging information to create a bridge between social networking sites and e-commerce platforms.
                </p>
                <p className="mb-4">
                  Traditional recommendation systems struggle when there's limited interaction data available, especially for new 
                  products or users. Our solution taps into the rich information available on social media to make meaningful 
                  recommendations even in these "cold-start" scenarios.
                </p>
                <p>
                  By analyzing social media behavior, content preferences, and interaction patterns, we create a comprehensive 
                  user profile that can be mapped to product characteristics, enabling highly relevant recommendations.
                </p>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Social media and e-commerce connection" 
                  className="rounded-lg shadow-lg max-h-80 object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Key Features */}
          <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Cross-Platform Integration",
                description: "Seamlessly connects social media platforms with e-commerce websites to create a unified recommendation ecosystem.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                )
              },
              {
                title: "Cold-Start Problem Solver",
                description: "Addresses the challenge of recommending new products or serving new users with limited interaction history.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                )
              },
              {
                title: "SVD Framework",
                description: "Utilizes Singular Value Decomposition for efficient matrix factorization and latent factor identification.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="3" y1="15" x2="21" y2="15"></line>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                    <line x1="15" y1="3" x2="15" y2="21"></line>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-6 animate-on-scroll" 
                style={{ ...staggeredDelay(index, 100).style, transform: 'translateY(20px)' }}
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Technology Stack */}
          <h2 className="text-2xl font-bold mb-6 text-center">Technology Stack</h2>
          <div className="glass-card p-8 mb-16 animate-on-scroll" style={{ transform: 'translateY(20px)' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
              ].map((tech, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-4"
                  style={staggeredDelay(index, 80).style}
                >
                  <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-3" />
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Team */}
          <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                name: "Alex Johnson",
                role: "Lead Researcher",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                description: "Specializes in recommendation algorithms and machine learning techniques."
              },
              {
                name: "Sarah Chen",
                role: "Full Stack Developer",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                description: "Expert in Java, Spring Framework, and cross-platform integration."
              },
              {
                name: "Michael Rodriguez",
                role: "Data Scientist",
                image: "https://randomuser.me/api/portraits/men/67.jpg",
                description: "Focuses on SVD implementation and matrix factorization techniques."
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="glass-card p-6 text-center animate-on-scroll" 
                style={{ ...staggeredDelay(index, 100).style, transform: 'translateY(20px)' }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
          
          {/* Contact */}
          <div className="glass-card p-8 text-center animate-on-scroll" style={{ transform: 'translateY(20px)' }}>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Interested in learning more about our project or exploring potential collaborations? 
              Get in touch with our team for inquiries, feedback, or partnership opportunities.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
