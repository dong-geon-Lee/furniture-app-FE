import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  height: inherit;
  background-color: #fff;
  border: 1px solid #e0e0e0;
`;

export const Div = styled.div`
  &.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem 1.45rem 1.2rem 1.99rem;
    margin-bottom: 2.187rem;
  }

  &.box {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    margin-bottom: 3rem;
    width: 100%;
  }
`;

export const P = styled.p`
  color: #000;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.8rem;
  letter-spacing: -0.16px;
`;

export const Img = styled.img`
  &.logo {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    display: block;
  }
`;

export const H1 = styled.h1`
  &.title {
    color: #303030;
    text-align: center;
    font-family: Merriweather;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: normal;
  }
`;
