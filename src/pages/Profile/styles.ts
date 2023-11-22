import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  height: inherit;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  position: relative;
`;

export const Section = styled.section`
  margin-bottom: 2rem;

  &.profile__header {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
    padding: 0 2rem;
  }

  &.profile__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8rem;
    background: #fff;
    box-shadow: 0px 7px 40px 0px rgba(138, 149, 158, 0.2);
    padding: 1.8rem 2rem;
  }
`;

export const Img = styled.img`
  width: 8rem;
  height: 8rem;
  display: block;
  object-fit: cover;

  &.right-logo {
    display: flex;
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.6rem 0;
    justify-content: center;
    align-items: center;
  }
`;

export const Div = styled.div``;

export const H1 = styled.h1`
  color: #242424;
  font-family: Nunito Sans;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.5rem;
`;

export const P = styled.p`
  color: #808080;
  text-align: justify;
  font-family: Nunito Sans;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
`;
