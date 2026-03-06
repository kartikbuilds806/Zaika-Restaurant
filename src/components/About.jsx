import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar, FiHeart, FiUsers } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -40 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="about-image-wrap">
              <img src="/images/about.jpg" alt="ZAIKA Restaurant Interior" loading="lazy" />
              <div className="about-badge">
                <div className="about-badge-num">15+</div>
                <div className="about-badge-text">Years of<br />Excellence</div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.span className="section-label" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              Our Story
            </motion.span>
            <motion.h2
              className="section-title"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.1 }}
            >
              A Legacy of<br />Authentic Flavors
            </motion.h2>
            <div className="section-divider left" style={{ marginBottom: 24 }} />

            <motion.p
              className="about-text"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
            >
              Nestled in the heart of Baseri, Uttarakhand, ZAIKA – The Family Restaurant has been a cherished destination for food lovers since 2010. What began as a small family kitchen with a passion for authentic Indian cuisine has grown into a beloved dining institution.
            </motion.p>
            <motion.p
              className="about-text"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.3 }}
            >
              Every dish at ZAIKA tells a story — of hand-picked spices, time-honored recipes passed down through generations, and the warmth of a family that treats every guest like their own. We believe that great food brings people together.
            </motion.p>

            <motion.div
              className="about-features"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.4 }}
            >
              <div className="about-feature">
                <FiStar className="about-feature-icon" />
                <span>Premium Quality</span>
              </div>
              <div className="about-feature">
                <FiHeart className="about-feature-icon" />
                <span>Made with Love</span>
              </div>
              <div className="about-feature">
                <FiUsers className="about-feature-icon" />
                <span>Family Atmosphere</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
