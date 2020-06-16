import styled from 'styled-components';
import LinkWrapper from '../../utils/LinkWrapper';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const LinksContainer = styled.div`
  display: flex;

  img {
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
`;

export const Routes = styled(LinkWrapper)`
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  margin: 0 8px;

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

  @media (max-width: 530px) {
    flex-direction: column;
  }

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
  }

  strong {
    display: block;
  }

  span {
    font-size: 12px;
  }
`;
