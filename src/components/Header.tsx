import { navItems } from '@/constants/navitems';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredDropdown, setHoveredDropdown] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const allSections = [
        'presentation',
        'parcours',
        'programmes',
        'debouches',
        'partenaires',
        'projets',
        'rejoindre',
      ];
      const sections = allSections.map((id) => document.getElementById(id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(allSections[index]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction corrigée
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Ferme le menu mobile avant de scroller
      setIsOpen(false);
      setHoveredDropdown('');

      // Petit délai pour laisser l'animation fermer le menu
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isItemActive = (item: any) => {
    if (item.hasDropdown) {
      return item.dropdownItems.some(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (dropItem: any) => dropItem.id === activeSection,
      );
    }
    return item.id === activeSection;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-red-100"
    >
      <div className="container mx-auto md:px-6 px-2">
        <div className="flex items-center justify-between h-20">
          <motion.div className="flex items-center gap-4" whileHover={{ scale: 1.02 }}>
            <div className="p-3 bg-gradient-to-r from-university-red to-university-red-light">
              <img src="/logo.png" className="w-10 h-10"></img>
            </div>
            <div>
              <h1 className="font-sans font-bold text-2xl text-university-red hidden md:block">
                Mention Informatique et Technologie
              </h1>

              <h1 className=" font-bold text-2xl text-university-red block md:hidden">MIT</h1>
              <p className="text-sm text-gray-600 font-montserrat hidden md:block">
                Faculté des sciences Antananarivo
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onClick={() => setHoveredDropdown(item.id)} // ouvre au hover
              >
                <motion.button
                  className={`flex items-center gap-2 md:px-6 px-2 py-3 font-montserrat font-semibold transition-all duration-300 ${
                    isItemActive(item)
                      ? 'bg-university-red text-white shadow-lg'
                      : 'text-gray-700 hover:bg-red-50 hover:text-university-red'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <motion.div
                      animate={{
                        rotate: hoveredDropdown === item.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  )}
                </motion.button>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{
                      opacity: hoveredDropdown === item.id ? 1 : 0,
                      y: hoveredDropdown === item.id ? 0 : 10,
                      scale: hoveredDropdown === item.id ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-0 mt-2 bg-white shadow-xl border border-red-100 overflow-hidden min-w-48 ${
                      hoveredDropdown === item.id ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                    onMouseLeave={() => setHoveredDropdown('')}
                  >
                    {item.dropdownItems.map((dropItem, index) => (
                      <motion.button
                        key={dropItem.id}
                        onClick={() => scrollToSection(dropItem.id)}
                        className={`w-full text-left md:px-6 px-2 py-4 font-montserrat font-medium transition-all duration-200 border-b border-red-50 last:border-b-0 ${
                          activeSection === dropItem.id
                            ? 'bg-university-red text-white'
                            : 'text-gray-700 hover:bg-red-50 hover:text-university-red'
                        }`}
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: hoveredDropdown === item.id ? 1 : 0,
                          x: hoveredDropdown === item.id ? 0 : -10,
                        }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        {dropItem.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-university-red transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="lg:hidden overflow-hidden bg-white border-t border-red-100"
        >
          <div className="py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="px-4 py-2 font-montserrat font-semibold text-university-red text-sm uppercase tracking-wide">
                  {item.label}
                </div>
                {item.dropdownItems.map((dropItem) => (
                  <button
                    key={dropItem.id}
                    onClick={() => scrollToSection(dropItem.id)}
                    className={`block w-full text-left px-8 py-3 font-montserrat font-medium transition-all duration-200 mx-4 ${
                      activeSection === dropItem.id
                        ? 'bg-university-red text-white'
                        : 'text-gray-700 hover:bg-red-50 hover:text-university-red'
                    }`}
                  >
                    {dropItem.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
