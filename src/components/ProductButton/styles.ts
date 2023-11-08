import styled from "styled-components";

export const Container = styled.div``;

export const Box = styled.div`
  border-radius: 1.2rem;
  width: 4.4rem;
  height: 4.4rem;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &.active {
    background: #303030;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.03);

    & p {
      color: #242424;
    }
  }
`;

export const Logo = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  display: block;
`;

export const Text = styled.p`
  color: #999;
  font-family: "Nunito Sans";
  font-size: 1.4rem;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  bottom: -40%;
  transform: translateY(40%);
`;
