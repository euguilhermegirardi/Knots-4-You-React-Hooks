import React from "react";
import { NavLink } from 'react-router-dom';

import { Menu } from './styles';

export default ({ close }) => (
  <Menu>
    <ul>
      <li>
        <NavLink
          onClick={close}
          activeClassName="current"
          style={{textDecoration: 'none', color:"#474547" }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={close}
          activeClassName="current"
          style={{textDecoration: 'none', color:"#474547" }}
          to="shop"
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={close}
          activeClassName="current"
          style={{textDecoration: 'none', color:"#474547" }}
          to="about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={close}
          activeClassName="current"
          style={{textDecoration: 'none', color:"#474547" }}
          to="contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={close}
          activeClassName="current"
          style={{textDecoration: 'none', color:"#474547" }}
          to="cart"
        >
          Cart
        </NavLink>
      </li>
    </ul>
  </Menu>
);
