import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import {
  Container,
  EmptyCart,
  Items
} from './styles';
import * as CartActions from '../../store/modules/cart/actions';
import Footer from '../../components/Footer';

export default function Cart() {
  const total = useSelector(state =>
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0),
  );

  const cart = useSelector(state => state.cart.map(product => ({
    ...product,
    subtotal: (product.price * product.amount),
  })));

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <>
      <Container>
        {cart.length <= 0 &&
          <EmptyCart>
            <p>It appears that your cart is empty!</p>
            <button className="btn" type="button">
              <NavLink to="/shop">Continue Shopping</NavLink>
            </button>
          </EmptyCart>
        }

        {cart.map(product => (
          <Fragment key={product.id}>
            <Items>
              <div className="first-column">
                <h2>Product</h2>
                <img src={product.image} alt={product.title} />
                <button type="button">Finish your order</button>
              </div>

              <div className="second-column">
                <h2>Qty</h2>
                <div>
                  <strong>{product.title}</strong>
                  <span>€ {product.price}</span>
                </div>
              </div>

              <div className="third-column">
                <button type="button" onClick={() => decrement(product)} >
                  <MdRemoveCircleOutline size={20} color="#474547" />
                </button>
                <input type="number" readOnly value={product.amount} />
                <button type="button" onClick={() => increment(product)} >
                  <MdAddCircleOutline size={20} color="#474547" />
                </button>
              </div>

              <div className="fourth-column">
                <h2>Subtotal</h2>
                <strong>€ {product.subtotal}</strong>
              </div>

              <div className="fifth-column">
                <button type="button" onClick={() => dispatch(CartActions.removeFromCart(product.id))} >
                  <MdDelete size={20} color="#474547" />
                </button>
                <strong>€ {total}</strong>
              </div>
            </Items>

          </Fragment>
        ))}







      </Container>
      <Footer />
    </>
  )
};
