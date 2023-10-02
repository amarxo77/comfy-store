import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartItemsList = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.cartId} cartItem={item} />
      ))}
    </>
  );
};

export default CartItemsList;
