import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaYoutube, url: '#', label: 'YouTube' },
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="footer-section" variants={itemVariants}>
            <h3 className="footer-logo">The Zaika</h3>
            <p>Crafting authentic Indian culinary experiences since 2010. We bring traditional flavors and modern elegance to your table.</p>
            <div className="footer-social">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#menu">Our Menu</a></li>
              <li><a href="#reservation">Reservations</a></li>
              <li><a href="#gallery">Photo Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Dining Options</h4>
            <ul>
              <li><a href="#menu">Dine In</a></li>
              <li><a href="#menu">Takeout</a></li>
              <li><a href="#menu">Catering</a></li>
              <li><a href="#menu">Private Events</a></li>
            </ul>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Operating Hours</h4>
            <ul className="hours-list">
              <li><span>Monday - Thursday</span> <strong>11 AM - 11 PM</strong></li>
              <li><span>Friday - Saturday</span> <strong>11 AM - 12 AM</strong></li>
              <li><span>Sunday</span> <strong>12 PM - 11 PM</strong></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; {currentYear} The Zaika Restaurant. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
