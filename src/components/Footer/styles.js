import styled from 'styled-components';
import LinkWrapper from '../../utils/LinkWrapper';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1020px;
  margin: 0 auto;
`;

export const SocialMedia = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  padding: 2rem;

  .icons {
    cursor: pointer;
    transition: ease .5s;
  }

  .icons:hover {
    opacity: .4;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    min-width: 180px;

    @media (max-width: 414px) {
      min-width: 0;
    }
  }

  h4 {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: normal;
  }

  p {
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 5px 0;
  }

  button {
    font-size: 1rem;
    background: #f8bbd0;
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
      background: #c9b2ba;
      color: inherit;
    }
  }
`;

export const Routes = styled(LinkWrapper)`
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  margin: 8px 8px 8px 0;
  transition: ease-in .3s;

  &:hover {
    text-decoration: underline;
    opacity: 0.7;
  }
`;
