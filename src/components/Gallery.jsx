import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop', alt: 'Biryani Delight', category: 'Main Course' },
    { id: 2, src: 'https://images.unsplash.com/photo-1645967845798-3bfc8328e7b4?w=600&h=600&fit=crop', alt: 'Tandoori Chicken', category: 'Tandoori' },
    { id: 3, src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=600&fit=crop', alt: 'Naan Bread', category: 'Breads' },
    { id: 4, src: 'https://images.unsplash.com/photo-1632504191238-20ff08b2e9ff?w=600&h=600&fit=crop', alt: 'Samosas', category: 'Appetizers' },
    { id: 5, src: 'https://images.unsplash.com/photo-1645967845798-3bfc8328e7b4?w=600&h=600&fit=crop', alt: 'Butter Chicken', category: 'Main Course' },
    { id: 6, src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop', alt: 'Rogan Josh', category: 'Main Course' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-bg"></div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Food Photography</span>
          <h2 className="section-title">Our Culinary Masterpieces</h2>
          <p className="gallery-subtitle">Explore our exquisite collection of authentic Indian dishes</p>
        </motion.div>

        <motion.div
          className="gallery-grid-premium"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              className="gallery-item-premium"
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              onClick={() => setSelectedImage(img)}
              layout
            >
              <div className="gallery-image-wrapper">
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay-premium">
                  <div className="overlay-content">
                    <motion.div
                      className="view-icon"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🔍
                    </motion.div>
                    <h4>{img.alt}</h4>
                    <span className="category-badge">{img.category}</span>
                  </div>
                </div>
              </div>
              <motion.div
                className="gallery-card-shine"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Stats */}
        <motion.div
          className="gallery-stats"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="stat-item">
            <h4>200+</h4>
            <p>Dishes Available</p>
          </div>
          <div className="stat-item">
            <h4>50+</h4>
            <p>Signature Recipes</p>
          </div>
          <div className="stat-item">
            <h4>100%</h4>
            <p>Fresh Ingredients</p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox-premium"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="lightbox-content-premium"
              initial={{ scale: 0.8, y: -50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -50 }}
              onClick={(e) => e.stopPropagation()}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <img src={selectedImage.src} alt={selectedImage.alt} />
              
              <motion.div
                className="lightbox-info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3>{selectedImage.alt}</h3>
                <p className="info-category">{selectedImage.category}</p>
              </motion.div>

              <motion.button
                className="lightbox-close-premium"
                onClick={() => setSelectedImage(null)}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
