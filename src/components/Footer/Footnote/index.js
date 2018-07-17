import styled from "styled-components";

export default styled.div`
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
