import styled from "styled-components";

export const Div = styled.div`
  &.header__normal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem 1.45rem 1.2rem 1.99rem;
    margin-bottom: 2.187rem;
  }

  &.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.187rem;
    position: absolute;
    top: 0;
    padding-top: 1.4rem;
    right: 1.45rem;
    left: 1.99rem;
  }

  &.product__info {
    margin-top: 2.5rem;
    padding: 0 2.5rem;
  }

  &.product__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.1rem 0;
  }

  &.product__qty {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  &.review {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  &.product__click {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    height: 6rem;
    gap: 1.5rem;
    position: fixed;
    bottom: 18.5rem;
    width: 32.3rem;
  }
`;

export const P = styled.p`
  &.time {
    color: #000;
    text-align: center;
    font-family: "Nunito Sans", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.8rem;
    letter-spacing: -0.16px;
  }

  &.product__review {
    color: #808080;
    font-family: "Nunito Sans";
    font-size: 1.4rem;
    font-weight: 600;
    line-height: normal;
  }

  &.description {
    color: #606060;
    text-align: justify;
    font-family: "Nunito Sans";
    font-size: 1.4rem;
    font-weight: 300;
    line-height: normal;
  }
`;

export const Img = styled.img``;
