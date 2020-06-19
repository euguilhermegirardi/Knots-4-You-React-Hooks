import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1020px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .header {
    display: flex;

    .header__name {
      display: flex;
      flex: 1;
      flex-direction: column;
    }

    .header__name:nth-child(1) {
      margin-right: 3rem;
    }
  }

  input {
    height: 2rem;
    margin-bottom: 1.5rem;
  }

  textarea {
    resize: vertical;
    margin-bottom: 1.5rem;
  }

  span {
        color: red;
      }

  button {
    font-size: 1rem;
    background: #f8bbd0;
    letter-spacing: 0.02em;
    text-align: center;
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
