import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1020px;
  margin: 0 auto;
  padding: 1rem;
`;

export const MacrameHistory = styled.div`
  background-color: #fce4ec;
  color: inherit;
  padding: 2rem;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      letter-spacing: 2px;
      line-height: 1.5rem;
    }

    p:nth-child(2) {
      margin-bottom: 2.2rem;
    }

    img {
      margin: 2rem;
      border-radius: 2px;

      @media (max-width: 414px) {
        margin: 2rem 0;
        width: 100%;
      }
    }

    small {
      margin-top: 1.8rem;
    }
  }
`;
