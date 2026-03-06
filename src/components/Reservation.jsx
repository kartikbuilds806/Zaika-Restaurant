import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaUsers } from 'react-icons/fa';

export default function Reservation({ phone }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `🍽️ *Reservation Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Guests:* ${formData.guests}`;
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="reservation" className="reservation">
      <div className="reservation-bg"></div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Book Your Table</span>
          <h2 className="section-title">Reserve Your Perfect Dining Experience</h2>
        </motion.div>
        
        <motion.form
          onSubmit={handleSubmit}
          className="reservation-form"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-grid">
            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label><FaCalendar /> Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label><FaClock /> Time *</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label><FaUsers /> Number of Guests *</label>
              <select name="guests" value={formData.guests} onChange={handleChange}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
              </select>
            </div>
          </div>

          <motion.button
            type="submit"
            className="btn btn-gold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={submitted}
          >
            {submitted ? '✓ Booking Sent!' : 'Reserve Table via WhatsApp'}
          </motion.button>
          
          {submitted && (
            <motion.p 
              className="success-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✓ Your reservation has been sent to our team!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
