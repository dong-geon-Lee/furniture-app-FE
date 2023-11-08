import styled from "styled-components";

export const Container = styled.div`
  height: 5.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  box-shadow: 0 -0.2rem 5rem 0 rgba(0, 0, 0, 0.05);
`;

export const NavBar = styled.nav`
  height: 5.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  box-shadow: 0 -0.2rem 5rem 0 rgba(0, 0, 0, 0.05);
`;

export const NavBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ImgLogo = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: cover;
  display: block;
`;
