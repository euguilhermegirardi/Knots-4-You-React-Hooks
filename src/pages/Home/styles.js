import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1400px;
  max-height: 550px;
  margin: 0 auto;
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

