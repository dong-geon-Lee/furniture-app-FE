import styled from "styled-components";

interface IProps {
  $image: string;
}

export const Container = styled.div`
  width: inherit;
  height: inherit;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  position: relative;
`;

export const Div = styled.div`
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
`;

export const H1 = styled.h1`
  &.title {
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

export const Box = styled.div`
  margin-left: 3rem;
  margin-right: 12.9rem;
  margin-top: 3rem;
  width: 21.6rem;
  height: 9.3rem;
`;

export const Image = styled.div<IProps>`
  background: url(${(props) => props.$image});
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  width: 44.9rem;
  height: 45.5rem;
  margin: 0 5rem;
  border-bottom-left-radius: 6rem;
  display: block;
`;

export const Img = styled.img`
  /* position: absolute; */
  &.product1 {
    position: absolute;
    top: 4.5%;
    left: 8.2%;
    margin-top: 2rem;
    width: 4.2rem;
    height: 4.2rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.6rem;
    box-shadow: 0 0.4rem 4rem 0 rgba(138, 149, 158, 0.2);

    &:hover {
      cursor: pointer;
    }
  }
`;
