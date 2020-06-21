import styled from 'styled-components';
import LinkWrapper from '../../utils/LinkWrapper';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1020px;
  margin: 0 auto;
`;

export const LinksContainer = styled.div`
  display: flex;

  @media (max-width: 414px) {
    margin-left: 5.5rem;
  }

  img {
    transition: ease .5s;

    @media (max-width: 530px) {
      width: 160px;
    }

    &:hover {
    opacity: 0.7;
  }
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  margin-left: -1.3rem;
  font-size: 1.1rem;
  letter-spacing: 1.5px;

  @media (max-width: 414px) {
      display: none;
    }
`;

export const Routes = styled(LinkWrapper)`
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  margin: 0 9px;
  transition: ease .5s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Cart = styled(LinkWrapper)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  color: #474547;

  @media (max-width: 414px) {
    margin-right: 1rem;
  }

  @media (max-width: 530px) {
    flex-direction: column;
  }

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    @media (max-width: 414px) {
      display: none;
    }

    strong {
    display: block;
    font-size: 1.2rem;
    }

    span {
      font-size: 1rem;
    }
  }

  .cart {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin-left: 5px;
    }
  }


`;
