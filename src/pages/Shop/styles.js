import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1020px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr) );
  grid-gap: 3rem;

  @media (max-width: 414px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr) );
  }
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
    width: 350px;
    height: 350px;
    border: 2px solid #ccc;

    @media (max-width: 414px) {
      width: 300px;
      height: 300px;
    }
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
