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
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
`;

export const Routes = styled(LinkWrapper)`
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  margin: 0 1rem;
`;

export const Cart = styled(LinkWrapper)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  color: #474547;

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
