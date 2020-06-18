import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import api from '../../services/api';
import logo from '../../assets/logo.png';
import { Container, Cart, Links, LinksContainer, Routes } from './styles';

export default function Header() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state => state.cart.reduce((sumAmount, product) => {
    (sumAmount[product.id] = product.amount);

    return sumAmount;
  }, []));

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product
      }));

      setProducts(data);
    }

    loadProducts();
  },[]);

  return (
    <Container>
      <LinksContainer>
        <NavLink to="/">
          <img src={logo} alt="knots-4-you" />
        </NavLink>
        <Links>
          <Routes to="/shop">Shop</Routes>
          <Routes to="/about" >About</Routes>
          <Routes to="/contact" >Contact</Routes>
        </Links>
      </LinksContainer>

      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>items</span>
        </div>

        <div className="cart">
          <MdShoppingBasket size={36} color="#474547" />
          <p>{amount[products.id] || 0 }</p>
        </div>

      </Cart>
    </Container>
  )
};
