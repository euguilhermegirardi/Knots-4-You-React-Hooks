import React from 'react';
import { IconContext } from "react-icons";
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaPinterestSquare } from 'react-icons/fa';

import {
  Container,
  SocialMedia,
  FooterLinks,
  Routes
} from './styles';

export default function Footer() {
  return (
      <Container>

        <SocialMedia>
          <IconContext.Provider value={{ color: "#474547", size: "3rem"  }}>
            <AiFillFacebook className="icons" />
            <AiFillInstagram className="icons" />
            <AiFillYoutube className="icons" />
            <FaPinterestSquare className="icons" />
          </IconContext.Provider>
        </SocialMedia>

        <FooterLinks>
          <div>
            <h4>Explore</h4>
            <Routes to="/shop">Shop</Routes>
            <Routes to="/about" >About</Routes>
            <Routes to="/contact" >Contact</Routes>
          </div>

          <div>
            <h4>Join the tribe</h4>
            <p>Sign up for email updates</p>
            <input className="input-footer" type="text"/>
            <button type="button">Join</button>
          </div>

        </FooterLinks>

      </Container>
  )
};
