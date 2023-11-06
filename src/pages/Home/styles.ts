import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  height: inherit;
  background-color: #fff;
  border: 1px solid #e0e0e0;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 1.45rem 1.2rem 1.99rem;
  margin-bottom: 2.187rem;
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

export const Img = styled.img``;

export const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  margin-bottom: 2rem;
`;

export const H1 = styled.h1`
  color: #909090;
  text-align: center;
  font-family: "Gelasio";
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.5rem;
`;

export const Title = styled.h1`
  color: #242424;
  font-family: "Gelasio";
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.5rem;
  text-transform: uppercase;
`;

export const TextBox = styled.div``;

export const LogoBox = styled.div`
  width: 37.5rem;
  height: 4.4rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  border-radius: 12px;

  .star {
    background: #303030;
  }
`;

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

  &:nth-child(1) {
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4.1rem;
  padding: 0 2rem;
  gap: 2.5rem;

  height: 53.1rem;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.24rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e0e0e0;
  }
`;

export const GridItem = styled.div`
  height: 25.3rem;
  width: 15.7rem;
  position: relative;
`;

export const GridLabel = styled.label`
  color: #606060;
  font-family: "Nunito Sans";
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const GridText = styled.h2`
  color: #303030;
  font-family: "Nunito Sans";
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
`;

export const GridImg = styled.img`
  width: 100%;
  height: 20rem;
  cursor: pointer;
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

export const GridLogo = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  display: block;
  position: absolute;
  bottom: 22%;
  right: 5%;
  transform: translate(-5%, -25%);
`;

export const ImgLogo = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: cover;
  display: block;
`;
