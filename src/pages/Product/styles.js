import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1020px;
  margin: 0 auto;
  padding: 1rem;
`;

export const ColumnContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 950px) {
    order: 1;
    margin: 0 5rem;
    display: flex;
  }

  & > div {

    @media (max-width: 950px) {
      text-align: center;
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.1rem;
      letter-spacing: 1px;
      margin-top: 8px;
      line-height: 1.4rem;
    }
  }

  & > div:nth-child(2) {
    margin: 2rem 0;

    @media (max-width: 950px) {
      display: none;
    }

    strong {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
      margin-top: -1px;
      margin-bottom: 6px;
    }
  }

  & > div:nth-child(3) {
    strong {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
      margin-top: -1px;
    }
  }
`;

export const Image = styled.img`
  display: flex;
  flex: 2;
  margin: 0 1rem;
  width: 400px;
  height: 600px;
  border: 2px solid #474547;
  border-radius: 2px;

  @media (max-width: 950px) {
    order: 2;
    align-self: center;
    margin: 1rem 0;
  }
`;

export const AddToCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 950px) {
    order: 3;
    width: 100%;
  }

  h2 {
    font-size: 2.2rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 13rem;
    font-size: 1rem;
    background: #f8bbd0;
    letter-spacing: 0.02em;
    text-align: center;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    padding: 1rem;
    transition: ease .5s;

    &:hover {
      background: #c9b2ba;
      color: inherit;
    }
  }
`;
