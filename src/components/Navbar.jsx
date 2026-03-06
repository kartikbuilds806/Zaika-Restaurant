import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiX, FiMenu } from 'react-icons/fi';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reservation', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ cartCount, onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container">
          <div className="nav-inner">
            <a className="nav-logo" href="#hero" onClick={e => { e.preventDefault(); handleNav('#hero'); }}>
              ZAIKA <span>The Family Restaurant</span>
            </a>
            <ul className="nav-links">
              {links.map(link => (
                <li key={link.label}>
                  <a href={link.href} onClick={e => { e.preventDefault(); handleNav(link.href); }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <button className="nav-cart-btn" onClick={onCartClick} aria-label="Open cart">
                <FiShoppingCart size={16} />
                Cart
                {cartCount > 0 && <span className="nav-cart-badge">{cartCount}</span>}
              </button>
              <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <FiX />
            </button>
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              className="btn btn-gold"
              onClick={() => { onCartClick(); setMobileOpen(false); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 }}
            >
              <FiShoppingCart /> Cart {cartCount > 0 && `(${cartCount})`}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
