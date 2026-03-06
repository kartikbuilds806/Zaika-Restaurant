import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp({ phone }) {
  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={32} />
    </motion.a>
  );
}
