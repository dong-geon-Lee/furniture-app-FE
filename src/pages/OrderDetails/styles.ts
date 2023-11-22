import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  height: inherit;
  background-color: #fff;
  border: 1px solid #e0e0e0;
`;

export const Section = styled.section`
  &.order__header {
    padding: 0 2rem;
  }

  &.order__info {
    padding: 0 2rem;
    height: 67.16rem;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0.24rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #e0e0e0;
    }
  }
`;

export const Hr = styled.h1`
  width: 100%;
  height: 2px;
  background-color: #e7e7e7;
  margin-top: 3rem;

  &:last-child {
    margin-top: 0.4rem;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
`;

export const Div = styled.div`
  &.header__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.4rem;

    &:last-child {
      margin-bottom: 2rem;
    }
  }

  &.order__height {
    width: 100%;
    height: 37rem;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 1rem;

    &::-webkit-scrollbar {
      width: 0.24rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #e0e0e0;
    }
  }

  &.orders__box {
    display: grid;
    grid-template-columns: 1fr 2.4fr 1fr;
    justify-items: center;
    align-content: center;
    align-items: center;
    gap: 1.4rem;
    width: 100%;
    height: 10rem;
    padding: 1.6rem;
    border-radius: 0.8rem;
    background: #fff;
    box-shadow: 0 0.1rem 0.1rem 0 rgba(138, 149, 158, 0.2);
    border: 1px solid #e0e0e0;
    margin-top: 1.6rem;
  }

  &.orders__contents {
    width: 100%;
  }

  &.grid__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const H1 = styled.h1`
  color: #212121;
  font-family: Nunito Sans;
  font-style: normal;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  width: 100%;
  padding: 0 1rem;

  &.order__text {
    padding: 0;
  }

  &.margin {
    margin-bottom: 1.6rem;
  }
`;

export const H2 = styled.h2`
  color: #868686;
  text-align: left;
  font-family: Nunito Sans;
  font-style: normal;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.4rem;
  white-space: nowrap;
  padding: 0 1rem;

  &.header__text {
    padding: 0;

    &.bold {
      font-weight: 600;
      color: #000;
    }
  }

  &.ship__text {
    color: #196eff;
    font-weight: 500;
    padding: 0;
  }

  &.orders__left {
    padding: 0;
    text-align: left;
    margin-top: 0.6rem;
  }

  &.orders__right {
    padding: 0;
    text-align: right;
    margin-top: 0.6rem;

    &.bold {
      font-weight: 600;
      color: #000;
    }
  }
`;

export const Img = styled.img`
  cursor: pointer;
  width: 6rem;
  height: 6rem;
  object-fit: cover;
`;

export const H3 = styled.h3`
  color: #27ae60;
  text-align: right;
  font-family: Nunito Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Label = styled.label`
  color: #808080;
  font-family: Nunito Sans;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: block;
`;

export const Span = styled.span`
  color: #303030;
  font-family: Nunito Sans;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Button = styled.button`
  border-radius: 0 0.4rem 0.4rem 0;
  background: #242424;
  color: #fff;
  font-family: Nunito Sans;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 0.6rem 2.7rem;
  height: 3.6rem;
  cursor: pointer;
`;
