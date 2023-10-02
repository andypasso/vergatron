import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
            <ul>
            {cart.map((item) => (
                <li key={item.id}>
                {item.name} - {item.price ? `$${item.price.tofixed(2)}` : 'Precio no disponible'}{' '}
                <button onClick={() => removeFromCart(item)}>Eliminar</button>
                </li>
            ))}
            </ul>
          <button onClick={clearCart}>Limpiar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;