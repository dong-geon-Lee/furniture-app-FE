import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  height: inherit;
  background-color: #fff;
  border: 1px solid #e0e0e0;
`;

export const Section = styled.section`
  margin-top: 5.3rem;
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
`;

export const Div = styled.div`
  &.orders__box {
    width: 33.5rem;
    height: 16.2rem;
    padding: 1.6rem;
    border-radius: 0.8rem;
    background: #fff;
    box-shadow: 0 0.1rem 0.1rem 0 rgba(138, 149, 158, 0.2);
    margin-bottom: 2rem;
    border: 1px solid #e0e0e0;
  }

  &.orders__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  &.orders__contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  &.orders__results {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
`;

export const H1 = styled.h1`
  color: #242424;
  font-family: Nunito Sans;
  font-style: normal;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
`;

export const H2 = styled.h2`
  color: #808080;
  text-align: left;
  font-family: Nunito Sans;
  font-style: normal;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.4rem;
`;

export const Img = styled.img`
  cursor: pointer;
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
