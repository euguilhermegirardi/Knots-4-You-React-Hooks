import React from 'react';

import { Container, ImgContainer, TxtContainer, BtnContainer } from './styles';
import perfil from '../../assets/japa.jpg';

export default function Home() {
  return (
    <>
      <Container>
        <ImgContainer>
        <img src={perfil} alt="Perfil"/>
        </ImgContainer>

        <TxtContainer>
          <h2>Hi, I'm Raisa</h2>
          <p>
            Through a range of online tutorials and learning resources I teach crafty folk how to make quality macrame as well as advise inspired creatives on how to transform their handmade hobby, into a profitable side hustle or business.
          </p>
          <BtnContainer>
            <button type="button">Learn Macrame</button>
            <button type="button">Uplevel Your Hobby</button>
          </BtnContainer>
        </TxtContainer>
      </Container>
    </>
  )
};
