import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], ['0%', '30%']);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" ref={ref}>
      <motion.div className="hero-bg" style={{ y: bgY }} />
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Since 2010 · Baseri, Uttarakhand
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            ZAIKA
            <span>The Family Restaurant</span>
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            Where Taste Meets Family Moments. Authentic Indian flavors crafted with love and tradition.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
          >
            <button className="btn btn-gold" onClick={() => scrollToSection('#menu')}>
              Explore Menu
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('#reservation')}>
              Book a Table
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
