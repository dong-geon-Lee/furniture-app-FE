import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";
import { FormControl, TextField, Typography, IconButton } from "@mui/material";

export const Container = styled.div`
  width: inherit;
  height: inherit;
  background-color: #fff;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 1.45rem 1.2rem 1.99rem;
  margin-bottom: 2.187rem;
`;

export const Box = styled.div`
  margin-left: 3rem;
  margin-right: 12.9rem;
  margin-top: 3rem;
  width: 21.6rem;
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

export const Hr = styled.hr`
  width: 10.5rem;
  height: 1px;
  flex-shrink: 0;
`;

export const H1 = styled.h1`
  color: #303030;
  font-family: Merriweather;
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: normal;
  text-transform: uppercase;
`;

export const Form = styled(FormControl)`
  width: 34.5rem;
  height: 55rem;
  flex-shrink: 0;
  background-color: #fff;
  box-shadow: 0px 7px 30px 0px rgba(138, 149, 158, 0.2);
  display: block;

  &.css-1nrlq1o-MuiFormControl-root {
    margin-top: 2.5rem;
    padding-left: 3rem;
  }
`;

export const Text = styled(Typography)`
  color: #909090;

  &.css-2ulfj5-MuiTypography-root {
    font-family: "Nunito Sans";
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 1.1rem;
    padding-top: 3.5rem;
  }
`;

export const Input = styled(TextField)`
  position: relative;

  .css-1x51dt5-MuiInputBase-input-MuiInput-input {
    position: relative;

    font-size: 1.6rem;
  }

  & .css-78trlr-MuiButtonBase-root-MuiIconButton-root {
    position: absolute;
    top: -20%;
    right: 0;
  }

  & .css-i4bv87-MuiSvgIcon-root {
    font-size: 2rem;
    margin-right: 0.6rem;
  }
`;

export const Icons = styled(IconButton)``;

export const Link = styled(LinkRoute)`
  color: #303030;
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
  margin-top: 3.5rem;
  text-decoration: none;
`;

export const Button = styled.button`
  display: block;
  margin-top: 4rem;
  width: 28.5rem;
  height: 5rem;
  border-radius: 0.8rem;
  background-color: #242424;
  box-shadow: 0 1rem 2rem 0 rgba(48, 48, 48, 0.25);
  border: none;
  color: #fff;
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 3rem;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    opacity: 0.95;
  }
`;

export const Footer = styled.div`
  height: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  white-space: nowrap;
  width: 100%;
  margin-right: 7.3rem;
  margin-left: 4.3rem;
`;

export const H3 = styled.h3`
  white-space: nowrap;
  width: 100%;
  color: #808080;
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 1.4rem;
  font-weight: 600;
  line-height: normal;
`;

export const LinkText = styled(LinkRoute)`
  white-space: nowrap;
  width: 100%;
  color: #303030;
  font-family: "Nunito Sans";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
