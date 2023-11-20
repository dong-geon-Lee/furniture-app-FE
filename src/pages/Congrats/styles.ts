import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  height: inherit;
  background-color: #fff;
  border: 1px solid #e0e0e0;
`;

export const H1 = styled.h1`
  color: #303030;
  text-align: center;
  font-family: Merriweather;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.5rem; /* 97.222% */
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  margin-top: 8rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &.congrats__logo {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
`;

export const Img = styled.img`
  &.groups {
    width: 21rem;
    height: 18rem;
    display: block;
    object-fit: cover;
    z-index: 2;
    transform: translateY(15%);
    padding: 0rem 0.6rem;
  }

  &.circle {
    width: 27rem;
    height: 23rem;
    position: absolute;
    z-index: 1;
  }

  &.success {
    width: 5rem;
    height: 5rem;
    z-index: 2;
    transform: translateY(50%);
  }
`;

export const P = styled.p`
  color: #606060;
  text-align: center;
  font-family: Nunito Sans;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.7rem;
  padding: 0 4.8rem;
  margin-bottom: 4rem;
`;

export const Button = styled.button`
  &.order--btn {
    width: 31.5rem;
    height: 6rem;
    border-radius: 0.8rem;
    background: #242424;
    box-shadow: 0 1rem 2rem 0 rgba(48, 48, 48, 0.25);
    color: #fff;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 1.8rem;
    font-weight: 600;
    font-style: normal;
    line-height: normal;
  }

  &.back--btn {
    width: 31.5rem;
    height: 6rem;
    border-radius: 0.8rem;
    border: 1px solid #303030;
    color: #303030;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 1.8rem;
    font-weight: 600;
    font-style: normal;
    line-height: normal;
    background-color: #fff;
    margin-top: 2.5rem;
    text-transform: uppercase;
  }
`;
