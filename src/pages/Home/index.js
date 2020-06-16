import React from 'react';
import { IconContext } from "react-icons";
import { GiBleedingEye } from 'react-icons/gi';
import { BsFillBagFill } from 'react-icons/bs';
import { AiOutlineRead } from 'react-icons/ai';

import {
  Container,
  ProfileContainer,
  ImgContainer,
  TxtContainer,
  BtnContainer,
  LearnMacrame,
  LearnTxtContainer,
  IconsContainer,
  GetStartedTxtContainer,
  Border,
  GetStarted,
  SmallTips
} from './styles';
import perfil from '../../assets/japa.jpg';
import beginner from '../../assets/macrame-beginner.jpeg';
import wall from '../../assets/macrame-wall.jpeg';
import hanger from '../../assets/macrame-hanger.jpeg';
import cords from '../../assets/macrame-cords.jpeg';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Container>
        <ProfileContainer>
          <ImgContainer>
            <img src={perfil} alt="Perfil" />
          </ImgContainer>

          <TxtContainer>
            <h2>Hi, I'm Raisa</h2>
            <p>
              Through a range of online tutorials and learning resources I teach crafty folk how to make quality macrame as well as advise inspired creatives on how to transform their handmade hobby, into a profitable side hustle or business.
          </p>
            <BtnContainer>
              <button type="button">Macrame Tips</button>
              <button type="button">Uplevel Your Hobby</button>
            </BtnContainer>
          </TxtContainer>
        </ProfileContainer>

        <LearnMacrame>
          <LearnTxtContainer>
            <h2>Do you want to learn how to master macramé patterns?</h2>
            <h3>Or are you simply looking for a place to source the best quality cotton cord?</h3>
            <h3>Either way, United Knots is here to teach you how to macramé your way to making and designing your own beautiful pieces.</h3>
          </LearnTxtContainer>
          <IconContext.Provider value={{ color: "#474547", size: "5.5rem" }}>
            <IconsContainer>
              <div>
                <button type="button">Watch Video Tutorials</button>
                <GiBleedingEye />
              </div>
              <div>
                <button type="button">Shop Supplies</button>
                <BsFillBagFill />
              </div>
              <div>
                <button type="button">Read The Blog</button>
                <AiOutlineRead />
              </div>
            </IconsContainer>
          </IconContext.Provider>
        </LearnMacrame>

        <GetStartedTxtContainer>
          <h2>Let’s get started...</h2>
          <h3>Small tips for you!</h3>
        </GetStartedTxtContainer>
        <Border />
        <GetStarted>
          <SmallTips>
            <h3>Beginners Macrame Knots - 6. Double Half Hitch Knots</h3>
            <img src={beginner} alt="Beginner"/>
            <p>
              If you've chosen to take the first steps to learning a new craft, fantastic!
              Welcome aboard, here is what you need to know in Basic steps Knot 6- How To Tie Double Half Hitch Knots
            </p>
            <button type="button">Read More</button>
          </SmallTips>

          <SmallTips>
            <h3>Beginners Macrame Knots - 6. Double Half Hitch Knots</h3>
            <img src={wall} alt="Beginner"/>
            <p>
              If you've chosen to take the first steps to learning a new craft, fantastic!
              Welcome aboard, here is what you need to know in Basic steps Knot 6- How To Tie Double Half Hitch Knots
            </p>
            <button type="button">Read More</button>
          </SmallTips>

          <SmallTips>
            <h3>Beginners Macrame Knots - 6. Double Half Hitch Knots</h3>
            <img src={hanger} alt="Beginner"/>
            <p>
              If you've chosen to take the first steps to learning a new craft, fantastic!
              Welcome aboard, here is what you need to know in Basic steps Knot 6- How To Tie Double Half Hitch Knots
            </p>
            <button type="button">Read More</button>
          </SmallTips>

          <SmallTips>
            <h3>Beginners Macrame Knots - 6. Double Half Hitch Knots</h3>
            <img src={cords} alt="Beginner"/>
            <p>
              If you've chosen to take the first steps to learning a new craft, fantastic!
              Welcome aboard, here is what you need to know in Basic steps Knot 6- How To Tie Double Half Hitch Knots
            </p>
            <button type="button">Read More</button>
          </SmallTips>

        </GetStarted>

        <Footer />
      </Container>
    </>
  )
};
