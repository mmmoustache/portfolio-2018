import styled from "styled-components";

const Link = styled.a`
  display: block;
  height: 40px;
  margin-left: 20px;
  opacity: 0;
  position: relative;
  text-decoration: none;
  transform: translateY(10px);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  width: 40px;

  &:hover {
    opacity: 0.7;
  }
  
  ${
    props => props.loaded && `
      opacity: 1;
      transform: translateY(0);
    `
  }

  &::before {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    content: '';
    display: block;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Github = Link.extend`
  transition-delay: ${1*0.125}s;

  &::before {
    background-image: url('./github.svg');
  }
`;

export const LinkedIn = Link.extend`
  transition-delay: ${2*0.125}s;

  &::before {
    background-image: url('./linkedin.svg');
  }
`;
