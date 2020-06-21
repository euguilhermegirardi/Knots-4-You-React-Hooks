import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 414.1px) {
    display: none;
  }

  .burger-menu,
  .burger-menu.open {
    display: inline-block;
    cursor: pointer;
    position: fixed;
    left: 20px;
    top: 60px;
    z-index: 9999;
    background: #fff;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 4px 0;
    transition: 0.4s;
  }

  .burger-menu.open .bar1 {
    -webkit-transform: rotate(-45deg) translate(-4px, 4px);
    transform: rotate(-45deg) translate(-4px, 4px);
  }

  .burger-menu.open .bar2 {
    opacity: 0;
  }

  .burger-menu.open .bar3 {
    -webkit-transform: rotate(45deg) translate(-6px, -6px);
    transform: rotate(45deg) translate(-6px, -6px);
  }
`;
