import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import {
  Container,
  ProductTable,
  Total,
  EmptyCart
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
          <>
            <ProductTable>
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>QTD</th>
                  <th></th>
                  <th>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>

                <tr key={product.id}>
                  <td className="image">
                    <img
                      src={product.image}
                      alt={product.title}
                    />
                  </td>
                  <td className="name-price">
                    <strong>{product.title}</strong>
                    <span>€ {product.price}</span>
                  </td>
                  <td className="add-remove">
                    <div>
                      <button type="button" onClick={() => decrement(product)} >
                        <MdRemoveCircleOutline size={20} color="#474547" />
                      </button>
                      <input type="number" readOnly value={product.amount} />
                      <button type="button" onClick={() => increment(product)} >
                        <MdAddCircleOutline size={20} color="#474547" />
                      </button>
                    </div>
                  </td>
                  <td className="subtotal">
                    <strong>€ {product.subtotal}</strong>
                  </td>
                  <td className="remove-from-cart">
                    <button type="button" onClick={() => dispatch(CartActions.removeFromCart(product.id))} >
                      <MdDelete size={20} color="#474547" />
                    </button>
                  </td>
                </tr>

              </tbody>
            </ProductTable>

            <footer>
              <button type="button">Finish your order</button>
              <Total>
                <span>TOTAL</span>
                <strong>€ {total}</strong>
              </Total>
            </footer>
          </>
        ))}

      </Container>
      <Footer />
    </>
  )
};
