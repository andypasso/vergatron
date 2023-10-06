import React, { useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  useEffect(() => {
    console.log(cart);
  },[cart]);
  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
            <ul>
            {cart.map((product) => (
                <li key={product.item.id}>
                  <p>{product.quantity}</p>
                {product.item.name} - {product.item.price ? `$${product.item.price}` : 'Precio no disponible'}{' '}
                <button onClick={() => removeFromCart(product.item.name)}>Eliminar</button>
                </li>
            ))}
            </ul>
          <button onClick = {()=>clearCart()}>Limpiar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;