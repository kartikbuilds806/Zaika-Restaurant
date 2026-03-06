import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Reviews() {
  const reviews = [
    { id: 1, name: 'Amit Singh', rating: 5, text: 'Amazing food and great ambiance! The biryani was absolutely divine and the service was impeccable.', verified: true },
    { id: 2, name: 'Priya Sharma', rating: 5, text: 'Best biryani in town, highly recommended! Every visit is a culinary adventure with fresh ingredients.', verified: true },
    { id: 3, name: 'Rahul Patel', rating: 5, text: 'The tandoori chicken is perfectly cooked and the naan is soft and delicious. Definite must-visit!', verified: true },
    { id: 4, name: 'Neha Gupta', rating: 4, text: 'Wonderful dining experience with authentic flavors. Great value for money!', verified: false }
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
    <section id="reviews" className="reviews">
      <div className="reviews-bg"></div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What Our Guests Say</span>
          <h2 className="section-title">Customer Reviews & Testimonials</h2>
        </motion.div>

        <motion.div
          className="reviews-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="review-card"
              variants={itemVariants}
              whileHover={{ translateY: -8 }}
            >
              <div className="review-header">
                <FaQuoteLeft className="quote-icon" />
                {review.verified && <span className="verified-badge">✓ Verified</span>}
              </div>
              
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>

              <p className="review-text">"{review.text}"</p>
              <p className="review-author">— {review.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
