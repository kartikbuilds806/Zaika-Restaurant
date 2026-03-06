import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi';

export default function CartPanel({ cart, onClose, onRemove, onUpdateQty, total, onCheckout }) {
  const [name, setName] = useState('');
  const [checkoutMode, setCheckoutMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout(name);
  };

  return (
    <>
      <motion.div
        className="cart-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="cart-panel"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        <div className="cart-header">
          <h2 className="cart-title">Your Cart</h2>
          <button className="cart-close" onClick={onClose} aria-label="Close cart"><FiX size={18} /></button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <FiShoppingBag className="cart-empty-icon" />
              <p>Your cart is empty</p>
              <p style={{ fontSize: '0.85rem' }}>Add items from the menu</p>
            </div>
          ) : (
            cart.map(item => (
              <motion.div
                key={item.id}
                className="cart-item"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                layout
              >
                <div className="cart-item-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₹{item.price} × {item.qty} = <strong>₹{item.price * item.qty}</strong></div>
                </div>
                <div className="cart-item-controls">
                  <div className="qty-control" style={{ gap: 6 }}>
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, -1)}><FiMinus size={11} /></button>
                    <span className="qty-num">{item.qty}</span>
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, 1)}><FiPlus size={11} /></button>
                  </div>
                  <button className="cart-remove" onClick={() => onRemove(item.id)} aria-label="Remove item"><FiTrash2 size={15} /></button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total Amount</span>
            <strong>₹{total}</strong>
          </div>
          {!checkoutMode ? (
            <button
              className="btn btn-primary checkout-btn"
              onClick={() => setCheckoutMode(true)}
              disabled={cart.length === 0}
              style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1rem', opacity: cart.length === 0 ? 0.5 : 1 }}
            >
              Proceed to Checkout
            </button>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your name (for order)"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: 8,
                  border: '1.5px solid rgba(107,58,42,0.25)', marginBottom: 12,
                  fontFamily: 'var(--font-sans)', fontSize: '0.95rem', outline: 'none',
                  background: 'white', color: 'var(--text-dark)'
                }}
              />
              <button
                type="submit"
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.95rem' }}
              >
                📲 Send Order on WhatsApp
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </>
  );
}
