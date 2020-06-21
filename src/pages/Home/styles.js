import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1020px;
  margin: 0 auto;
  padding: 1rem;
`;

export const ProfileContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 350px;
  width: 350px;

  @media (max-width: 414px) {
    height: 340px;
    width: 340px;
  }

  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;

export const TxtContainer = styled.div`
  min-width: 425px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fce4ec;
  padding: 0 1rem;

  @media (max-width: 414px) {
    min-width: 100%;
  }

  @media (max-width: 789px) {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.3rem;
    margin: 1rem 0;
    letter-spacing: .8px;
    line-height: 2.3rem;

    @media (max-width: 414px) {
      text-align: center;
    }
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

    @media (max-width: 414px) {
      min-width: 48%;
    }

    &:nth-child(2) {
      margin-left: 2rem;

      @media (max-width: 414px) {
        margin-left: 1rem;
      }
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
  margin: 1rem;
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
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 510px) {
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 200px;
    margin: 1rem;

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

  @media (max-width: 414px) {}
    padding: 0;
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
