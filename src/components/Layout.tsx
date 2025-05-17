
import React, { useState, useEffect, useRef } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import Footer from './Footer';
import { Menu, X } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Refs for section animation
  const sectionsRef = useRef<HTMLElement[]>([]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set up intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Get all sections to observe
    const sections = document.querySelectorAll('section');
    sectionsRef.current = Array.from(sections) as HTMLElement[];
    
    // Observe each section
    sectionsRef.current.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionsRef.current.length) {
        sectionsRef.current.forEach(section => {
          observer.unobserve(section);
        });
      }
    };
  }, [location]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `px-3 py-2 transition-colors duration-300 hover:text-bovi-blue ${
      isActive ? 'text-bovi-blue font-semibold' : 'text-gray-700'
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-white/95 shadow-md backdrop-blur-sm' : 'py-6 bg-transparent'
      }`}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-bovi-blue">BOVI<span className="text-bovi-accent">MEDIA</span></h1>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/team" className={navLinkClass}>Team</NavLink>
            <NavLink 
              to="/contact" 
              className="ml-4 px-5 py-2 bg-bovi-blue text-white rounded-md hover:bg-bovi-lightBlue transition-colors"
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-bovi-blue p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full w-full bg-white border-t shadow-lg py-4 animate-fade-in">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col space-y-4">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink to="/team" className={navLinkClass}>Team</NavLink>
              <NavLink 
                to="/contact" 
                className="px-5 py-2 bg-bovi-blue text-white rounded-md hover:bg-bovi-lightBlue transition-colors text-center"
              >
                Contact Us
              </NavLink>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
