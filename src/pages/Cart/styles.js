import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1020px;
  margin: 0 auto;
  background-color: #fce4ec;
  border-radius: 4px;
  padding: 3rem;
  margin-bottom: 12rem;

  @media (max-width: 414px) {
    padding: 1rem;
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      font-size: 1rem;
      background: #c9b2ba;
      letter-spacing: 0.02em;
      text-align: center;
      border: 0;
      color: #fff;
      padding: 1rem;
      transition: ease .5s;
      cursor: no-drop;

      &:hover {
        background: #f8bbd0;
        color: inherit;
      }
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    letter-spacing: 1.5px;
  }

  .btn {
    align-self: flex-end;
    width: 11rem;
    font-size: 1rem;
    background: #c9b2ba;
    letter-spacing: 0.02em;
    text-align: center;
    border: 0;
    color: #fff;
    padding: 1rem;
    transition: ease .5s;

    &:hover {
      background: #f8bbd0;
      color: inherit;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-around;
  height: 20rem;

  .first-column {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
      text-align: center;

      @media (max-width: 414px) {
        display: none;
      }
    }

    img {
      width: 150px;
    }

    button {
      align-self: flex-end;
      width: 11rem;
      font-size: 1rem;
      background: #c9b2ba;
      letter-spacing: 0.02em;
      text-align: center;
      border: 0;
      color: #fff;
      padding: 1rem;
      transition: ease .5s;

      &:hover {
        background: #f8bbd0;
        color: inherit;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  .second-column {
    display: flex;
    flex-direction: column;

    @media (max-width: 414px) {
      position: absolute;
      right: 2.8rem;
    }

    h2 {
      text-align: center;

      @media (max-width: 414px) {
        display: none;
      }
    }

    & > div {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;

      strong {
        margin-bottom: 2rem;
        text-align: center;
      }

      span {
        font-size: 1.1rem;
        text-align: center;
      }
    }
  }

  .third-column {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 414px) {
      width: 3rem;
      margin-left: 10px;
    }

    input {
      width: 2rem;
      margin: 0 3px;
    }
  }

  .fourth-column {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    @media (max-width: 414px) {
        display: none;
      }

    h2 {
      text-align: center;
    }

    strong {
      font-size: 1.1rem;
      margin-top: 7rem;
    }
  }

  .fifth-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    button {
      margin-top: 6rem;

      @media (max-width: 414px) {
        margin-top: 6.8rem;
      }
    }

    strong {
      font-size: 2rem;
    }
  }

  button {
      background: none;
      border: 0;
      padding: 6px;
    }
`;
