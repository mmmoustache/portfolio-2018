import React from 'react';
import styled from "styled-components";
import H3 from "../H3";
import { Breakpoints } from '../../utils/breakpoints';

const Wrapper = styled.a`
  background: #fff;
  border: 3px solid black;
  color: black;
  display: block;
  overflow: hidden;
  padding: 30px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;

  @media ${Breakpoints.small} {
    width: 200px;
  }

  &::after,
  &::before {
    background: #F25F5C;
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
    background: #FCA311;
    transition-delay: 0.1s;
  }

  &:focus,
  &:hover {
    background: black;
    color: white;

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
  <Wrapper href={href}><Inner><H3 noMargin>{children}</H3></Inner></Wrapper>
;

export default Button;
