import styled from "styled-components";

const Link = styled.a`
  background: #333;
  display: block;
  height: 80px;
  position: relative;
  width: 100%;

  &::before {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    content: '';
    display: block;
    height: 50px;
    width: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Github = Link.extend`
  &::before {
    background-image: url('./github.svg');
  }

  &:hover {
    background: #28a745;
  }
`;

export const LinkedIn = Link.extend`

  &:hover {
    background: #0077B5;

  }

  &::before {
    background-image: url('./linkedin.svg');
  }
`;

export const Links = styled.div`
  display: flex;
`;
