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
  }

  &.cart__btns {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    align-items: flex-end;
    justify-content: space-between;
    height: 100%;
  }

  &.cart__info {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
  }

  &.icon__box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  &.cart__menu {
    width: 11.3rem;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  &.cart__results {
    position: fixed;
    bottom: 5rem;
    height: 11rem;
  }

  &.cart__total {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    padding-top: 0;
  }
`;

export const Main = styled.main`
  &.grid__box {
    display: grid;
    grid-template-columns: 1fr 2fr 0.4fr;
    height: 10rem;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
  }
`;

export const Hr = styled.hr`
  border: 1px solid #e0e0e0;
  height: 1px;
  width: 100%;
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
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    display: block;
  }

  &.grid__img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.xIcon {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    display: block;
  }

  &.shopping {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    display: block;
  }

  &.navIcon {
    width: 2.4rem;
    height: 2.4rem;
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

  &.cart__qty {
    color: #242424;
    font-family: Nunito Sans;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.9px;
    margin-top: 2rem;
  }

  &.cart__price {
    color: #303030;
    text-align: right;
    font-family: Nunito Sans;
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Label = styled.label`
  color: #999;
  font-family: Nunito Sans;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.5rem;
`;

export const Span = styled.span`
  color: #303030;
  font-family: Nunito Sans;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: normal;
`;

export const Section = styled.section`
  padding: 0 2rem;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;

  &.xIcon__btn {
    background-color: transparent;
    margin-right: 0.3rem;
  }

  &.cart__checkout {
    width: 33.5rem;
    height: 6rem;
    border-radius: 0.8rem;
    color: #fff;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: normal;
    background: #242424;
    box-shadow: 0 1rem 2rem 0 rgba(48, 48, 48, 0.25);
  }

  &.cart__btn {
    border-radius: 0.4rem;
    margin-top: 2rem;
  }
`;

export const Nav = styled.nav`
  position: fixed;
  bottom: 2.4rem;
  width: 37.3rem;
  height: 5.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  box-shadow: 0 -0.2rem 5rem 0 rgba(0, 0, 0, 0.05);
`;

export const ImgLogo = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: cover;
  display: block;
`;

export const H2 = styled.h2`
  color: #808080;
  font-family: Nunito Sans;
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
`;
