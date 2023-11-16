import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  height: inherit;
  background-color: #fff;
  border: 1px solid #e0e0e0;
`;

export const Section = styled.section`
  &.payment__address {
    padding: 0 2rem;
    margin-top: 1.9rem;
  }
`;

export const H1 = styled.h1`
  &.payment__title {
    color: #909090;
    font-family: Nunito Sans;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const Img = styled.img`
  &.edit__logo {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    display: block;
    cursor: pointer;
  }

  &.kakao__btn {
    width: 100%;
    height: 2.4rem;
    display: block;
    object-fit: cover;
  }
`;

export const Div = styled.div`
  &.payment__userInfo {
    width: 33.5rem;
    height: 11rem;
    border-radius: 0.8rem;
    background-color: #fff;
    margin-top: 1rem;
    padding: 1.5rem 2rem;
    box-shadow: 0px 8px 40px 0px rgba(138, 149, 158, 0.2);
  }

  &.payment__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.payment__contents {
    width: 33.5rem;
    height: 24rem;
    border-radius: 0.8rem;
    background-color: #fff;
    margin-top: 1rem;
    padding: 1.5rem 2rem;
    box-shadow: 0px 8px 40px 0px rgba(138, 149, 158, 0.2);
  }

  &.payment__select {
    margin-top: 1.6rem;
  }

  &.payment__results {
    width: 33.5rem;
    height: 12rem;
    border-radius: 0.8rem;
    background-color: #fff;
    margin-top: 1rem;
    padding: 1.5rem 2rem;
    box-shadow: 0px 8px 40px 0px rgba(138, 149, 158, 0.2);
  }

  &.payment__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.payment__box.last {
    margin-top: 1rem;
  }
`;

export const H2 = styled.h2`
  &.payment__name {
    color: #303030;
    font-family: Nunito Sans;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 2.2rem;
  }

  &.payment__memo {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }
`;

export const P = styled.p`
  color: #808080;
  font-family: Nunito Sans;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;
`;

export const Select = styled.select`
  padding: 1rem;
  border: 1px solid #e0e0e0;
  width: 100%;
`;

export const Button = styled.button`
  padding: 1.6rem 9.6rem;
  border-radius: 1.2rem;
  border: none;
  background-color: #fee502;
  display: block;
  width: 100%;
  margin-top: 1.4rem;
  cursor: pointer;
`;
