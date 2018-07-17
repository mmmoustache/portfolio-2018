import styled from "styled-components";

export const Navigation = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 2;
`;

export const NavigationItem = styled.a`
  color: #fff;
  display: inline-block;
  font-weight: bold;
  opacity: 0;
  padding: 10px 20px;
  position: relative;
  text-decoration: none;
  transform: translateY(-10px);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

  ${
    props => props.loaded && `
      opacity: 1;
      transform: translateY(0);
    `
  }

  ${
    props => props.index && `
      transition-delay: ${props.index*0.125}s;
    `
  }

  &:hover {
    &::before {
      background: red;
      content: '';
      display: block;
      height: 20%;
      width: 100%;
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }
  }
`;
