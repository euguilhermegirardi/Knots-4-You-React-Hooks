import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  padding: 2rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & > div {
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
 width: 250px;
 border-radius: 2px;
`;

export const AddToCart = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

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
