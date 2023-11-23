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
    /* width: 100%; */
    height: 6rem;
    gap: 1.5rem;
    position: fixed;
    bottom: 18.5rem;
    width: 32.3rem;
  }
`;

export const H1 = styled.h1`
  &.product__title {
    color: #303030;
    font-family: "Gelasio";
    font-size: 2.4rem;
    font-weight: 500;
    line-height: normal;
  }

  &.product__price {
    color: #303030;
    font-family: "Nunito Sans";
    font-size: 3rem;
    font-weight: 700;
    line-height: normal;
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

export const Box = styled.div`
  margin-left: 3rem;
  margin-right: 12.9rem;
  margin-top: 3rem;
  width: 21.6rem;
  height: 9.3rem;
`;

export const ProductImage = styled.div<IProps>`
  background: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 45.5rem;
  margin-left: 5rem;
  border-bottom-left-radius: 6rem;
  display: block;
  background-position: left;
`;

export const Img = styled.img`
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

  &.star2 {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    display: block;
  }

  &.markers {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Button = styled.button`
  &.product__count {
    width: 3rem;
    height: 3rem;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(224, 224, 224, 1);
    border: none;
    border-radius: 0.6rem;
    cursor: pointer;
  }

  &.product__cart {
    border-radius: 0.8rem;
    background: ${(props) => (props.disabled ? "#efefef" : " #242424")};
    box-shadow: 0 1rem 2rem 0 rgba(48, 48, 48, 0.25);
    width: 100%;
    height: 6rem;
    color: ${(props) => (props.disabled ? "#242424" : " #fff")};
    text-align: center;
    font-family: Nunito Sans;
    font-size: 2rem;
    font-weight: 600;
    line-height: normal;
    border: none;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }

  &.product__markers {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem;
    border: none;
    padding: 0.4rem;
    width: 6rem;
    height: 6rem;
    cursor: pointer;
  }
`;

export const H2 = styled.h2`
  &.product__text {
    color: #242424;
    font-family: "Nunito Sans";
    font-size: 1.8rem;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1px;
  }
`;

export const H3 = styled.h3`
  color: #303030;
  font-family: "Nunito Sans";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 1rem;
`;
