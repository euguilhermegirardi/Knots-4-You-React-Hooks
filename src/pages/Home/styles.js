import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  max-height: 550px;
  margin: 0 auto;
`;

export const ProfileContainer = styled.section`
  display: flex;
`;

export const ImgContainer = styled.div`
  max-width: 500px;

  img {
      width: 100%;
      height: 100%;
    }
`;

export const TxtContainer = styled.div`
  background-color: #fce4ec;
  max-width: 900px;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 7rem;

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.3rem;
      margin: 1rem 0 2.2rem 0;
      letter-spacing: .8px;
      line-height: 2.3rem;
    }
`;

export const BtnContainer = styled.div`
  display: flex;

  button {
    font-size: 1rem;
    background: #c9b2ba;
    letter-spacing: 0.02em;
    text-align: center;
    border: 0;
    color: #fff;
    padding: 1rem;
    transition: ease .5s;

    &:nth-child(2) {
      margin-left: 2rem;
    }

    &:hover {
      background: #f8bbd0;
      color: inherit;
    }
  }
`;

export const LearnMacrame = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 420px;
  margin: 6rem;
`;

export const LearnTxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 2rem 0;

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 100;

    &:nth-child(2) {
      margin: 1.5rem 0;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-child(2) {
      margin: 0 10rem;
    }

    button {
    font-size: 1rem;
    background: #f8bbd0;
    letter-spacing: 0.02em;
    text-align: center;
    border: 0;
    color: inherit;
    padding: 1rem;
    transition: ease .5s;
    margin-bottom: 1.2rem;

    &:nth-child(2) {
      margin-left: 2rem;
    }

    &:hover {
      background: #c9b2ba;
      color: #fff;
    }
  }
  }
`;

export const GetStartedTxtContainer = styled.div`
  background-color: #fce4ec;
  text-align: center;
  padding: 1rem 1rem 0 1rem;

  h2 {
    font-size: 2.2rem;
    letter-spacing: 2px;
  }

  h3 {
    font-size: 1.6rem;
    letter-spacing: 1px;
    font-weight: normal;
    margin: 5px 0 8px 0;
  }
`;

export const Border = styled.section`
  border: 2px solid #ccc;
`;

export const GetStarted = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr) );
  justify-items: center;
  background-color: #fce4ec;
  padding: 1rem 3rem 3rem 3rem;
`;

export const SmallTips = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 380px;
  padding: 1rem;

  h3 {
    text-align: center;
    margin-bottom: 8px;
    font-size: 1.3rem;
    cursor: pointer;
  }

  img {
    height: 300px;
    width: 210px;
    cursor: pointer;
  }

  p {
    cursor: pointer;
    font-size: 1rem;
    margin-top: 8px;
    line-height: 1.3rem;
    letter-spacing: 1px;
  }

  button {
    font-size: 1rem;
    background: #c9b2ba;
    letter-spacing: 0.09em;
    text-align: center;
    border: 0;
    color: #fff;
    padding: 1rem 2.3rem;
    transition: ease .5s;
    margin: 1.2rem 0;

    &:nth-child(2) {
      margin-left: 2rem;
    }

    &:hover {
      background: #f8bbd0;
      color: inherit;
    }
  }
`;
