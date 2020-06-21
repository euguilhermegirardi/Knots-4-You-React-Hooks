import React from "react";
import { NavLink } from "react-router-dom";

import { Menu } from './styles';

export default ({ close }) => (
  <Menu>
    <ul>
      <li>
        <NavLink onClick={close} activeClassName="current" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="shop">
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="contact">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName="current" to="cart">
          Cart
        </NavLink>
      </li>
    </ul>
  </Menu>
);
