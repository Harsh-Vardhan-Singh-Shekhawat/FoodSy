import react from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
// import Modal from './components/UI/Modal';
function App() {
  return (
    <CartProvider >
    
    <Header />
    <main>
      <Meals />
    </main>
    
    </CartProvider>
  );
}

export default App;
