import styled from 'styled-components';

export const Menu = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  padding: 0px;

   ul {
    position: relative;
    top: 0px;
    font-size: 24px;
    padding: 0px;
  }

   li {
    list-style: outside none none;
    margin: 10px 0px;
    padding: 0;
    cursor: pointer;
  }

  li:hover {
    color: #ff0000;
  }
`;
