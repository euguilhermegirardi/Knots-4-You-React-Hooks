import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/logo.png';
import { Container, Cart, Links, LinksContainer, Routes } from './styles';

export default function Header() {
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
        <MdShoppingBasket size={36} color="#474547" />
      </Cart>
    </Container>
  )
};
