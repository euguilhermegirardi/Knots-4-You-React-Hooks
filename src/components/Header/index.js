import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';
import Popup from "reactjs-popup";

import logo from '../../assets/logo.png';
import { Container, Cart, Links, LinksContainer, Routes } from './styles';
import BurgerIcon from '../../components/BurgerIcon';
import MobileMenu from '../../components/MobileMenu';

export default function Header() {
  const cartQty = useSelector(state => state.cart.length);
  // console.log(cartQty);

  const contentStyle = {
    background: "rgba(255,255,255,0)",
    width: "80%",
    border: "none"
  };

  const PopUpContainer = forwardRef((props, ref) => {
    return (
    <Popup
      modal
      overlayStyle={{ background: "#fce4ec" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <MobileMenu close={close} />}
    </Popup>
    )
  });

  return (
    <Container>
      <PopUpContainer />

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
          <p>{cartQty}</p>
        </div>
      </Cart>
    </Container>
  )
};
