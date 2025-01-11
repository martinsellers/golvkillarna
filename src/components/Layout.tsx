import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, LeafyGreen } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className={`${isHome ? 'absolute' : 'relative'} z-10 w-full bg-gray-900/80 backdrop-blur-sm`}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 animate-slide-in-right">
              <LeafyGreen className="w-8 h-8 text-amber-500 transition-transform hover:rotate-12" />
              <span className="text-2xl font-bold">Golvkillarna</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8 animate-fade-in-up">
              <NavLink to="/services">Tjänster</NavLink>
              <NavLink to="/contact">Kontakta</NavLink>
              <a 
                href="https://www.instagram.com/golvkillarna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-amber-500 hover:text-amber-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Följ Oss</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {children}

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <LeafyGreen className="w-6 h-6 text-amber-500" />
              <p className="text-gray-400">© 2024 Golvkillarna. Alla rättigheter förbehållna.</p>
            </div>
            <a 
              href="https://www.instagram.com/golvkillarna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-amber-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Följ oss på Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative group ${isActive ? 'text-amber-500' : ''}`}
    >
      <span className="hover:text-amber-500 transition-colors">{children}</span>
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </Link>
  );
}