import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Adiciona background ao header quando rolar a página
      setIsScrolled(window.scrollY > 50);

      // Detecta qual seção está visível
      const sections = ['home', 'sobre', 'servicos', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura do header
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sobre', label: 'Sobre Mim' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
              ACI
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-lg leading-tight">Ana Cristina Ielo</p>
              <p className="text-amber-400 text-xs font-medium">Psicóloga do Esporte</p>
            </div>
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-base font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-amber-400'
                    : 'text-white hover:text-amber-400'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contato');
            }}
            className="hidden md:block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Agende uma Sessão
          </a>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-slate-900/98 backdrop-blur-lg border-t border-white/10 px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-400/30'
                  : 'text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contato');
            }}
            className="block w-full text-center bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg mt-4"
          >
            Agende uma Sessão
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;