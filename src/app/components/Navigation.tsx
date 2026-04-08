import { Menu, X, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl tracking-wider text-white"
          >
            Peyton Kocher
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm tracking-wide transition-colors hover:text-gray-300 text-white"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="text-sm tracking-wide transition-colors hover:text-gray-300 text-white"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm tracking-wide transition-colors hover:text-gray-300 text-white"
            >
              Contact
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-300 text-white"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-300 text-white"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-sm tracking-wide transition-colors text-left hover:text-gray-300 text-white"
            >
              Work
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="text-sm tracking-wide transition-colors text-left hover:text-gray-300 text-white"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-sm tracking-wide transition-colors text-left hover:text-gray-300 text-white"
            >
              Contact
            </Link>
            <div className="flex gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-300 text-white"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-300 text-white"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}