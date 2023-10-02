import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartTotals, CheckoutForm, SectionTitle } from '../components';

export const loader = (store) => () => {
  const { user } = store.getState().user;
  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const { cartTotal } = useSelector((state) => state.cart);
  if (!cartTotal) return <SectionTitle text='Your cart is empty' />;

  return (
    <>
      <SectionTitle text='place your order' />
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
