import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1020px;
  margin: 0 auto;
  background-color: #fce4ec;
  border-radius: 4px;
  padding: 5rem;
  margin-bottom: 12rem;

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

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #474547;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #474547;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #474547;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #474547;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
