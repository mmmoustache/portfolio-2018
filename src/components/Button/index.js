import React from 'react';
import styled from "styled-components";

const Wrapper = styled.a`
  background: #fff;
  border: 3px solid red;
  display: block;
  overflow: hidden;
  padding: 20px;
  position: relative;
  text-align: center;

  &::after,
  &::before {
    background: green;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    left: -120%;
    position: absolute;
    top: 0;
    transform: skew(-25deg);
    transition: 0.5s all ease-in-out;
  }

  &::before {
    background: blue;
    transition-delay: 0.1s;
  }

  &:focus,
  &:hover {
    background: red;

    &::after,
    &::before {
      left: 120%;
    }
    
  }
`;

const Inner = styled.span`
  position: relative;
  z-index: 1;
`;

const Button = ({ href, children }) => 
  <Wrapper href={href}><Inner>{children}</Inner></Wrapper>
;

export default Button;
