import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  height: inherit;
  background-color: #fff;
  border: 1px solid #e0e0e0;
`;

export const Div = styled.div`
  &.contents__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 1rem 0rem;
  }

  & .contents__label {
    grid-column: 1 / 2;
  }

  & .contents__input {
    grid-column: 2 / 6;

    & .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
      padding: 0.6rem;
    }
  }

  & .contents__label-price {
    grid-column: 1 / 3;
  }

  & .contents__text {
    font-size: 1.4rem;
    grid-column: 3 / 6;
    text-align: right;
  }

  & .contents__price {
    grid-column: 3 / 6;
    text-align: right;
  }
`;

export const Label = styled.label`
  color: #999;
  font-family: Nunito Sans;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: normal;
`;

export const Input = styled(TextField)`
  width: 100%;
  height: 100%;
  display: block;
`;

export const P = styled.p`
  text-align: right;
  font-family: inherit;
  font-weight: 400;
  letter-spacing: 0.2rem;
  font-size: 1.4rem;
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 1.4rem;
  margin-top: 2rem;
  line-height: 1.5;
  font-weight: 400;
  color: #252525;
`;
