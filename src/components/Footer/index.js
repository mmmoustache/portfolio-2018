import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background: #222;
  color: white;
`;

const Footnote = styled.div`
  padding: 20px;
  text-align: center;

  a {
    color: #fff;
    display: inline-block;
    font-weight: bold;
    position: relative;
    text-decoration: none;

    &:hover {
      &::before {
        background: black;
        content: '';
        display: block;
        height: 6px;
        width: 100%;
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
      }
    }

    &:last-child {
      margin-left: 40px;
    }
  }
`;

const Links = styled.div`
  display: flex;
`;

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

const Github = Link.extend`
  &::before {
    background-image: url('./github.svg');
  }

  &:hover {
    background: #28a745;
  }
`;

const LinkedIn = Link.extend`

  &:hover {
    background: #0077B5;

  }

  &::before {
    background-image: url('./linkedin.svg');
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Links>
        <LinkedIn href="/" />
        <Github href="/" />
      </Links>
      <Footnote>
        <a href="/" title="View source code on GitHub" target="_blank">Made by me</a>
        <a href="#" title="Back to top">Back to top</a>
      </Footnote>
    </Wrapper>
  )
};

export default Footer;
