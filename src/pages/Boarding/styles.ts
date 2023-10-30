import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  height: 812px;
  position: relative;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -1;
`;

export const Div = styled.div`
  margin-left: 3rem;
  margin-right: 4.1rem;
  margin-top: 23.1rem;
  margin-bottom: 49.8rem;
  width: 30.4rem;
`;

export const H1 = styled.h1`
  width: 100%;
  font-size: 2.4rem;
  font-weight: 600;
  color: #606060;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;

  &.h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #303030;
    margin-top: 1.5rem;
    letter-spacing: 0px;
  }
`;

export const P = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 3.5rem;
  color: #808080;
  margin-top: 3.5rem;
  text-align: left;
  margin-bottom: 15.4rem;
`;

export const Button = styled.button`
  background-color: #242424;
  border-radius: 0.4rem;
  width: 15.9rem;
  height: 5.4rem;
  color: #fff;
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 600;
  border: none;
  padding: 1.6rem 2.9rem;
  display: block;
  width: 100%;
  box-shadow: 0 0.8rem 3rem 0 rgba(48, 48, 48, 0.3);
  cursor: pointer;
`;
