import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr) );
  grid-gap: 3rem;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  cursor: pointer;
  transition: ease 0.5s;

  img {
    width: 450px;
    height: 480px;
  }

  p {
    font-weight: bold;
    letter-spacing: 1px;
  }

  small {
    letter-spacing: 2px;
  }

  &:hover {
    opacity: .7;
  }
`;
