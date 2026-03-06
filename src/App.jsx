import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import CartPanel from './components/CartPanel';
import Reservation from './components/Reservation';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LoadingScreen from './components/LoadingScreen';

const PHONE = '919012253406';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  const addToCart = useCallback((item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQty = useCallback((id, delta) => {
    setCart(prev => {
      const updated = prev.map(i => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i);
      return updated.filter(i => i.qty > 0);
    });
  }, []);

  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const handleCheckout = useCallback((name) => {
    if (!cart.length) return;
    const itemsList = cart.map(i => `• ${i.name} x${i.qty} = ₹${i.price * i.qty}`).join('%0A');
    const msg = `🍽️ *New Order from ZAIKA*%0A%0A*Customer:* ${name || 'Guest'}%0A%0A*Items:*%0A${itemsList}%0A%0A*Total: ₹${cartTotal}*%0A%0AThank you!`;
    window.open(`https://wa.me/${PHONE}?text=${msg}`, '_blank');
  }, [cart, cartTotal]);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      {!isLoading && (
        <>
          <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
          <main>
            <Hero />
            <About />
            <MenuSection addToCart={addToCart} cart={cart} updateQty={updateQty} />
            <Reservation phone={PHONE} />
            <Gallery />
            <Reviews />
            <Contact phone={PHONE} />
          </main>
          <Footer />
          <FloatingWhatsApp phone={PHONE} />
          <AnimatePresence>
            {cartOpen && (
              <CartPanel
                cart={cart}
                onClose={() => setCartOpen(false)}
                onRemove={removeFromCart}
                onUpdateQty={updateQty}
                total={cartTotal}
                onCheckout={handleCheckout}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
