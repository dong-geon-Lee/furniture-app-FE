import { Alert as MuiAlert, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { Button as MuiButton, Box as MuiBox } from "@mui/material";

export const Container = styled.div`
  margin-bottom: 3.6rem;
`;

export const H1 = styled(Typography)``;

export const Alert = styled(MuiAlert)``;

export const Form = styled(MuiBox)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-content: center;
  justify-items: left;
  gap: 1.6rem;
`;

export const Input = styled(TextField)`
  width: 100%;
  padding: 2rem;
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

export const Button = styled(MuiButton)`
  width: 100%;

  &.css-sghohy-MuiButtonBase-root-MuiButton-root {
    font-family: inherit;
    font-size: 1.2rem;
  }
`;
