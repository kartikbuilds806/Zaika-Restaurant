import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact({ phone }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const msgText = `*New Message from The Zaika*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${phone}?text=${msgText}`, '_blank');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+91 ' + phone],
      action: { text: 'Call Now', href: `tel:+91${phone}` }
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@zaika.com'],
      action: { text: 'Email Us', href: 'mailto:info@zaika.com' }
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      details: ['Q28F+C9V, Baseri', 'Uttarakhand 247663'],
    },
    {
      icon: FaClock,
      title: 'Hours',
      details: ['Mon-Thu: 11 AM - 11 PM', 'Fri-Sat: 11 AM - 12 AM', 'Sun: 12 PM - 11 PM'],
    }
  ];

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

  return (
    <section id="contact" className="contact">
      <div className="contact-bg"></div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">We'd Love to Hear From You</h2>
        </motion.div>

        <div className="contact-main-grid">
          {/* Contact Info Cards */}
          <motion.div
            className="contact-cards-wrapper"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                className="contact-card-premium"
                variants={itemVariants}
                whileHover={{ translateY: -12, boxShadow: '0 20px 40px rgba(107,58,42,0.2)' }}
              >
                <div className="contact-icon-box">
                  <div className="contact-icon-bg"></div>
                  <item.icon className="contact-icon-premium" />
                </div>
                
                <div className="contact-card-content">
                  <h3>{item.title}</h3>
                  <div className="contact-details-premium">
                    {item.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                  {item.action && (
                    <motion.a
                      href={item.action.href}
                      className="contact-action-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.action.text} →
                    </motion.a>
                  )}
                  {item.title === 'Location' && (
                    <motion.button
                      onClick={() => window.open('https://www.google.com/maps/search/Q28F+C9V+Baseri+Uttarakhand+247663', '_blank')}
                      className="contact-action-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Directions →
                    </motion.button>
                  )}
                </div>

                <div className="contact-card-border"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map Section */}
          <motion.div
            className="contact-map-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.7621814471657!2d78.74920!3d30.11819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sQ28F%2BC9V%2C%20Baseri%2C%20Uttarakhand%20247663!2s30.11819,78.74920!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <motion.div
              className="map-info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4>Find Us Here</h4>
              <p>Q28F+C9V, Baseri, Uttarakhand 247663. Easy access and ample parking available.</p>
              <motion.button
                onClick={() => window.open('https://www.google.com/maps/search/Q28F+C9V+Baseri+Uttarakhand+247663', '_blank')}
                className="btn btn-outline btn-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <motion.div
          className="contact-form-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Send us a Message</h3>
          <form className="contact-form-premium" onSubmit={handleFormSubmit}>
            <div className="form-row-premium">
              <div className="form-group-premium">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
                <div className="form-input-border"></div>
              </div>
              <div className="form-group-premium">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
                <div className="form-input-border"></div>
              </div>
            </div>

            <div className="form-row-premium">
              <div className="form-group-premium">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
                <div className="form-input-border"></div>
              </div>
              <div className="form-group-premium">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  required
                />
                <div className="form-input-border"></div>
              </div>
            </div>

            <div className="form-group-premium full-width">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleFormChange}
                required
              ></textarea>
              <div className="form-input-border"></div>
            </div>

            <motion.button
              type="submit"
              className="btn btn-gold btn-large"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send via WhatsApp
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
