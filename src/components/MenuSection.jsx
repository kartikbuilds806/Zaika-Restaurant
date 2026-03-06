import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { menuItems, menuCategories } from '../data/menuData';
import { FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi';

function MenuCard({ item, onAdd, onUpdate, cartItem }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      className="menu-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8 }}
    >
      <div className="menu-card-image">
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.badge && <span className="menu-badge">{item.badge}</span>}
      </div>
      <div className="menu-card-body">
        <div className="menu-card-name">{item.name}</div>
        <div className="menu-card-desc">{item.description}</div>
        <div className="menu-card-footer">
          <span className="menu-price">₹{item.price}</span>
          <AnimatePresence mode="wait">
            {cartItem ? (
              <motion.div
                key="qty"
                className="qty-control"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <button className="qty-btn" onClick={() => onUpdate(item.id, -1)}><FiMinus size={12} /></button>
                <span className="qty-num">{cartItem.qty}</span>
                <button className="qty-btn" onClick={() => onUpdate(item.id, 1)}><FiPlus size={12} /></button>
              </motion.div>
            ) : (
              <motion.button
                key="add"
                className="add-to-cart-btn"
                onClick={() => onAdd(item)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileTap={{ scale: 0.93 }}
              >
                Add
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuSection({ addToCart, cart, updateQty }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(i => i.category === activeCategory);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
          >
            Our Menu
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Crafted with Passion
          </motion.h2>
          <div className="section-divider" style={{ margin: '16px auto 0' }} />
        </div>

        <div className="menu-categories">
          {menuCategories.map(cat => (
            <button
              key={cat}
              className={`cat-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div className="menu-grid" layout>
          <AnimatePresence>
            {filtered.map(item => (
              <MenuCard
                key={item.id}
                item={item}
                onAdd={addToCart}
                onUpdate={updateQty}
                cartItem={cart.find(c => c.id === item.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
